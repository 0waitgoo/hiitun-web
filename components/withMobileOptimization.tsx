import React, { ComponentType, useEffect, useState, useRef } from 'react';
import { getLoadingStrategy } from '../utils/mobileOptimization';

interface MobileOptimizationOptions {
  lazy?: boolean;
  rootMargin?: string;
  threshold?: number;
  delay?: number;
  placeholder?: React.ReactNode;
  priority?: boolean; // 是否为优先加载组件
}

/**
 * 移动端优化高阶组件
 * 用于包装组件以添加移动端性能优化功能
 */
export function withMobileOptimization<P extends object>(
  Component: ComponentType<P>,
  options: MobileOptimizationOptions = {}
): ComponentType<P> {
  const {
    lazy = true,
    rootMargin = '100px 0px', // 增加预加载距离
    threshold = 0.01,
    delay = 0,
    placeholder,
    priority = false
  } = options;

  return function MobileOptimizedComponent(props: P) {
    const [isVisible, setIsVisible] = useState(!lazy || priority); // 优先级组件默认可见
    const [hasLoaded, setHasLoaded] = useState(priority);
    const elementRef = useRef<HTMLDivElement>(null);
    const { lazyLoadDelay } = getLoadingStrategy();

    useEffect(() => {
      if (!lazy || priority) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasLoaded) {
            // 使用动态延迟时间
            setTimeout(() => {
              setIsVisible(true);
              setHasLoaded(true);
            }, delay || lazyLoadDelay);
            observer.disconnect();
          }
        },
        {
          rootMargin,
          threshold,
        }
      );

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }

      return () => {
        if (elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      };
    }, [lazy, rootMargin, threshold, delay, hasLoaded, priority, lazyLoadDelay]);

    return (
      <div ref={elementRef}>
        {isVisible ? (
          <Component {...props} />
        ) : (
          placeholder || (
            <div className="animate-pulse">
              <div className="h-40 bg-gray-200 rounded-lg"></div>
            </div>
          )
        )}
      </div>
    );
  };
}

export default withMobileOptimization;