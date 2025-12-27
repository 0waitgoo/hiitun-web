import React, { useState, useRef, useEffect } from 'react';
import { isMobile, getLoadingStrategy, loadScriptLater, loadCSSLater } from '../utils/mobileOptimization';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  lazy?: boolean;
  onLoad?: () => void;
  onError?: () => void;
  priority?: boolean; // 是否为优先加载图片
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  placeholder = '/placeholder.svg',
  lazy = true,
  onLoad,
  onError,
  priority = false
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(!lazy || priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const { imageQuality } = getLoadingStrategy();

  useEffect(() => {
    if (!lazy || priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '100px 0px', // 增加预加载距离
        threshold: 0.01
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [lazy, priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  const handleError = () => {
    setHasError(true);
    if (onError) onError();
  };

  // 根据网络状况调整图片质量
  const getOptimizedSrc = (originalSrc: string) => {
    if (imageQuality === 'low' && originalSrc.includes('picsum.photos')) {
      // 对于示例图片，降低质量
      return originalSrc.replace(/(\d+)\/(\d+)/, (match, width, height) => {
        return `${Math.floor(parseInt(width) * 0.7)}/${Math.floor(parseInt(height) * 0.7)}`;
      });
    }
    return originalSrc;
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* 加载占位符 */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </div>
      )}
      
      {/* 错误占位符 */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <div className="text-gray-400 text-xs text-center">
            <svg className="w-8 h-8 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            加载失败
          </div>
        </div>
      )}
      
      {/* 实际图片 */}
      <img
        ref={imgRef}
        src={isInView ? (hasError ? placeholder : getOptimizedSrc(src)) : undefined}
        alt={alt}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        onLoad={handleLoad}
        onError={handleError}
        loading={lazy && !priority ? 'lazy' : 'eager'}
        // 添加解码提示，提前解码图片
        decoding="async"
        // 添加fetchpriority属性，优先加载重要图片
        fetchPriority={priority ? "high" : "auto"}
      />
    </div>
  );
};

export default OptimizedImage;