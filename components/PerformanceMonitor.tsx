import React, { useEffect, useRef } from 'react';
import { isMobile, getLoadingStrategy } from '../utils/mobileOptimization';

interface PerformanceMonitorProps {
  children: React.ReactNode;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ children }) => {
  const startTimeRef = useRef<number>(Date.now());
  const renderStartTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    const renderEndTime = Date.now();
    const renderTime = renderEndTime - renderStartTimeRef.current;
    
    // 记录首屏渲染时间
    if (typeof window !== 'undefined' && window.performance) {
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
        
        console.log('性能指标:', {
          设备类型: isMobile() ? '移动设备' : '桌面设备',
          网络类型: getLoadingStrategy(),
          首屏渲染时间: `${renderTime}ms`,
          DOM加载时间: `${domContentLoaded}ms`,
          页面加载时间: `${loadTime}ms`
        });
      });
    }

    // 监控长任务
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.duration > 50) {
            console.warn('检测到长任务:', {
              名称: entry.name,
              持续时间: `${entry.duration}ms`,
              开始时间: entry.startTime
            });
          }
        });
      });
      
      try {
        observer.observe({ entryTypes: ['longtask'] });
      } catch (e) {
        // 某些浏览器可能不支持longtask
        console.log('当前浏览器不支持长任务监控');
      }
    }
  }, []);

  return <>{children}</>;
};

export default PerformanceMonitor;