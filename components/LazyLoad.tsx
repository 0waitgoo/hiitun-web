import React, { useState, useEffect, useRef } from 'react';
import { getLoadingStrategy, loadScriptLater, loadCSSLater } from '../utils/mobileOptimization';

interface LazyLoadProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  rootMargin?: string;
  threshold?: number;
  delay?: number;
  placeholder?: React.ReactNode;
}

/**
 * 智能懒加载组件
 * 根据网络状况和设备类型自动调整加载策略
 */
const LazyLoad: React.FC<LazyLoadProps> = ({
  children,
  fallback,
  rootMargin = '200px 0px', // 更大的预加载距离
  threshold = 0.01,
  delay = 0,
  placeholder
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const { shouldLoadNonCritical, lazyLoadDelay } = getLoadingStrategy();

  useEffect(() => {
    // 如果不需要懒加载，直接加载
    if (!shouldLoadNonCritical) {
      setIsVisible(true);
      setTimeout(() => setIsLoaded(true), delay);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            // 使用动态延迟时间
            setTimeout(() => setIsLoaded(true), delay || lazyLoadDelay);
            observer.disconnect();
          }
        });
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
  }, [rootMargin, threshold, delay, isVisible, shouldLoadNonCritical, lazyLoadDelay]);

  return (
    <div ref={elementRef} className="lazy-load-container">
      {isLoaded ? (
        <div className="lazy-loaded-content animate-fade-in">
          {children}
        </div>
      ) : (
        placeholder || fallback || (
          <div className="lazy-placeholder animate-pulse">
            <div className="h-40 bg-gray-200 rounded-lg"></div>
          </div>
        )
      )}
    </div>
  );
};

export default LazyLoad;