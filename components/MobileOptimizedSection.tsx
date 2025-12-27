import React, { useState, useRef, useEffect } from 'react';
import { getLoadingStrategy } from '../utils/mobileOptimization';

interface MobileOptimizedSectionProps {
  children: React.ReactNode;
  className?: string;
  placeholder?: React.ReactNode;
  rootMargin?: string;
  threshold?: number;
  delay?: number;
  priority?: boolean; // 是否为优先加载部分
}

const MobileOptimizedSection: React.FC<MobileOptimizedSectionProps> = ({
  children,
  className = '',
  placeholder,
  rootMargin = '100px 0px', // 增加预加载距离
  threshold = 0.01,
  delay = 0,
  priority = false
}) => {
  const [isVisible, setIsVisible] = useState(priority); // 优先级部分默认可见
  const [hasLoaded, setHasLoaded] = useState(priority);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { lazyLoadDelay } = getLoadingStrategy();

  useEffect(() => {
    if (priority) return;

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [rootMargin, threshold, delay, hasLoaded, priority, lazyLoadDelay]);

  return (
    <div ref={sectionRef} className={className}>
      {isVisible ? (
        <div className="animate-fade-in">
          {children}
        </div>
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

export default MobileOptimizedSection;