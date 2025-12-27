// 移动端性能优化配置
// 用于优化移动设备上的加载性能

// 检测是否为移动设备
export const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// 检测网络状况
export const getNetworkType = () => {
  const connection = (navigator as any).connection || 
                    (navigator as any).mozConnection || 
                    (navigator as any).webkitConnection;
  return connection ? connection.effectiveType : '4g';
};

// 根据网络状况调整加载策略
export const getLoadingStrategy = () => {
  const networkType = getNetworkType();
  const isSlowNetwork = ['slow-2g', '2g', '3g'].includes(networkType);
  
  return {
    // 慢网络下禁用非关键资源加载
    shouldLoadNonCritical: !isSlowNetwork,
    // 慢网络下减少预加载
    shouldPreload: !isSlowNetwork,
    // 图片加载质量
    imageQuality: isSlowNetwork ? 'low' : 'high',
    // 动画是否启用
    enableAnimations: !isSlowNetwork && isMobile(),
    // 延迟加载时间
    lazyLoadDelay: isSlowNetwork ? 300 : 100,
  };
};

// 动态加载脚本
export const loadScript = (src: string, async = true, defer = false): Promise<void> => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = async;
    script.defer = defer;
    
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    
    document.head.appendChild(script);
  });
};

// 动态加载CSS
export const loadCSS = (href: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    
    link.onload = () => resolve();
    link.onerror = () => reject(new Error(`Failed to load CSS: ${href}`));
    
    document.head.appendChild(link);
  });
};

// 预加载关键资源
export const preloadResource = (href: string, as: string) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  
  if (as === 'font') {
    link.crossOrigin = 'anonymous';
  }
  
  document.head.appendChild(link);
};

// 延迟加载非关键CSS
export const loadCSSLater = (href: string, delay = 1000) => {
  setTimeout(() => {
    loadCSS(href).catch(console.error);
  }, delay);
};

// 延迟加载非关键JS
export const loadScriptLater = (src: string, delay = 2000) => {
  setTimeout(() => {
    loadScript(src).catch(console.error);
  }, delay);
};