// 浏览器性能测试脚本
// 在浏览器控制台中运行此脚本以测试实际性能

(function() {
  console.log('🚀 开始移动端性能测试...');
  
  // 测试指标
  const metrics = {
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    firstInputDelay: 0,
    cumulativeLayoutShift: 0,
    timeToInteractive: 0,
    domContentLoaded: 0,
    loadComplete: 0
  };
  
  // 检测设备类型
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  console.log(`📱 设备类型: ${isMobile ? '移动设备' : '桌面设备'}`);
  
  // 检测网络连接
  if (navigator.connection) {
    console.log(`🌐 网络类型: ${navigator.connection.effectiveType}`);
    console.log(`📶 下行速度: ${navigator.connection.downlink}Mbps`);
    console.log(`⏱️ RTT: ${navigator.connection.rtt}ms`);
  }
  
  // 监听FCP
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.name === 'first-contentful-paint') {
          metrics.firstContentfulPaint = entry.startTime;
          console.log(`🎨 首次内容绘制 (FCP): ${entry.startTime.toFixed(2)}ms`);
        }
      });
    });
    
    try {
      observer.observe({ entryTypes: ['paint'] });
    } catch (e) {
      console.log('当前浏览器不支持paint API');
    }
    
    // 监听LCP
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      metrics.largestContentfulPaint = lastEntry.startTime;
      console.log(`🖼️ 最大内容绘制 (LCP): ${lastEntry.startTime.toFixed(2)}ms`);
    });
    
    try {
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      console.log('当前浏览器不支持LCP API');
    }
    
    // 监听FID
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.processingStart) {
          metrics.firstInputDelay = entry.processingStart - entry.startTime;
          console.log(`⚡ 首次输入延迟 (FID): ${metrics.firstInputDelay.toFixed(2)}ms`);
        }
      });
    });
    
    try {
      fidObserver.observe({ entryTypes: ['first-input'] });
    } catch (e) {
      console.log('当前浏览器不支持FID API');
    }
    
    // 监听CLS
    let clsScore = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (!entry.hadRecentInput) {
          clsScore += entry.value;
          metrics.cumulativeLayoutShift = clsScore;
        }
      });
    });
    
    try {
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      console.log('当前浏览器不支持CLS API');
    }
  }
  
  // 测量DOM加载和页面加载时间
  window.addEventListener('DOMContentLoaded', () => {
    const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navEntry) {
      metrics.domContentLoaded = navEntry.domContentLoadedEventEnd - navEntry.navigationStart;
      console.log(`📄 DOM内容加载: ${metrics.domContentLoaded.toFixed(2)}ms`);
    }
  });
  
  window.addEventListener('load', () => {
    const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navEntry) {
      metrics.loadComplete = navEntry.loadEventEnd - navEntry.navigationStart;
      console.log(`✅ 页面完全加载: ${metrics.loadComplete.toFixed(2)}ms`);
    }
    
    // 测量TTI（简化版）
    setTimeout(() => {
      metrics.timeToInteractive = performance.now();
      console.log(`🎯 可交互时间 (TTI): ${metrics.timeToInteractive.toFixed(2)}ms`);
      
      // 输出完整报告
      setTimeout(() => {
        console.log('\n📊 === 移动端性能测试报告 ===');
        console.log(`🎨 首次内容绘制 (FCP): ${metrics.firstContentfulPaint.toFixed(2)}ms`);
        console.log(`🖼️ 最大内容绘制 (LCP): ${metrics.largestContentfulPaint.toFixed(2)}ms`);
        console.log(`⚡ 首次输入延迟 (FID): ${metrics.firstInputDelay.toFixed(2)}ms`);
        console.log(`📐 累积布局偏移 (CLS): ${metrics.cumulativeLayoutShift.toFixed(4)}`);
        console.log(`🎯 可交互时间 (TTI): ${metrics.timeToInteractive.toFixed(2)}ms`);
        console.log(`📄 DOM内容加载: ${metrics.domContentLoaded.toFixed(2)}ms`);
        console.log(`✅ 页面完全加载: ${metrics.loadComplete.toFixed(2)}ms`);
        
        // 评估性能等级
        let score = 0;
        let maxScore = 7;
        
        // FCP评分 (优秀 < 1.8s, 良好 < 3s)
        if (metrics.firstContentfulPaint < 1800) score += 2;
        else if (metrics.firstContentfulPaint < 3000) score += 1;
        
        // LCP评分 (优秀 < 2.5s, 良好 < 4s)
        if (metrics.largestContentfulPaint < 2500) score += 2;
        else if (metrics.largestContentfulPaint < 4000) score += 1;
        
        // FID评分 (优秀 < 100ms, 良好 < 300ms)
        if (metrics.firstInputDelay < 100) score += 2;
        else if (metrics.firstInputDelay < 300) score += 1;
        
        // CLS评分 (优秀 < 0.1, 良好 < 0.25)
        if (metrics.cumulativeLayoutShift < 0.1) score += 2;
        else if (metrics.cumulativeLayoutShift < 0.25) score += 1;
        
        console.log(`\n🏆 性能评分: ${score}/${maxScore * 2} (${Math.round(score/(maxScore * 2)*100)}%)`);
        
        // 提供优化建议
        if (score >= maxScore * 1.5) {
          console.log('🎉 性能评分优秀！移动端优化效果显著');
        } else if (score >= maxScore) {
          console.log('👍 性能评分良好，移动端体验流畅');
        } else {
          console.log('⚠️ 性能评分一般，建议进一步优化');
          
          if (metrics.firstContentfulPaint > 3000) {
            console.log('💡 建议: 优化首屏渲染，减少关键资源大小');
          }
          if (metrics.largestContentfulPaint > 4000) {
            console.log('💡 建议: 优化图片加载，使用懒加载和压缩');
          }
          if (metrics.firstInputDelay > 300) {
            console.log('💡 建议: 减少JavaScript执行时间，优化交互响应');
          }
          if (metrics.cumulativeLayoutShift > 0.25) {
            console.log('💡 建议: 为图片和广告设置尺寸，减少布局偏移');
          }
        }
        
        // 检查优化特性
        console.log('\n🔍 检查优化特性:');
        
        // 检查懒加载
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        console.log(`  ${lazyImages.length > 0 ? '✅' : '❌'} 图片懒加载 (${lazyImages.length}个)`);
        
        // 检查预加载
        const preloadLinks = document.querySelectorAll('link[rel="preload"]');
        console.log(`  ${preloadLinks.length > 0 ? '✅' : '❌'} 资源预加载 (${preloadLinks.length}个)`);
        
        // 检查关键CSS内联
        const inlineStyles = document.querySelectorAll('style:not([data-emotion])');
        console.log(`  ${inlineStyles.length > 0 ? '✅' : '❌'} 关键CSS内联 (${inlineStyles.length}个)`);
        
        // 检查Service Worker
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.getRegistrations().then(registrations => {
            console.log(`  ${registrations.length > 0 ? '✅' : '❌'} Service Worker (${registrations.length}个)`);
          });
        } else {
          console.log('  ❌ Service Worker (不支持)');
        }
        
        console.log('\n✨ 性能测试完成！');
      }, 1000);
    }, 500);
  });
  
  // 监控长任务
  if ('PerformanceObserver' in window) {
    try {
      const longTaskObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.duration > 50) {
            console.warn(`⚠️ 检测到长任务: ${entry.name} (${entry.duration.toFixed(2)}ms)`);
          }
        });
      });
      
      longTaskObserver.observe({ entryTypes: ['longtask'] });
    } catch (e) {
      console.log('当前浏览器不支持长任务监控');
    }
  }
})();