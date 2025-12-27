// 移动端性能测试脚本
// 在浏览器控制台中运行此脚本以测试性能

(function() {
  console.log('开始移动端性能测试...');
  
  // 测试指标
  const metrics = {
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    firstInputDelay: 0,
    cumulativeLayoutShift: 0,
    timeToInteractive: 0
  };
  
  // 监听FCP
  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry) => {
      if (entry.name === 'first-contentful-paint') {
        metrics.firstContentfulPaint = entry.startTime;
        console.log(`首次内容绘制 (FCP): ${entry.startTime.toFixed(2)}ms`);
      }
    });
  });
  
  observer.observe({ entryTypes: ['paint'] });
  
  // 监听LCP
  const lcpObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const lastEntry = entries[entries.length - 1];
    metrics.largestContentfulPaint = lastEntry.startTime;
    console.log(`最大内容绘制 (LCP): ${lastEntry.startTime.toFixed(2)}ms`);
  });
  
  lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
  
  // 监听FID
  const fidObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry) => {
      if (entry.processingStart) {
        metrics.firstInputDelay = entry.processingStart - entry.startTime;
        console.log(`首次输入延迟 (FID): ${metrics.firstInputDelay.toFixed(2)}ms`);
      }
    });
  });
  
  fidObserver.observe({ entryTypes: ['first-input'] });
  
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
  
  clsObserver.observe({ entryTypes: ['layout-shift'] });
  
  // 测量TTI（简化版）
  window.addEventListener('load', () => {
    setTimeout(() => {
      const tti = performance.now();
      metrics.timeToInteractive = tti;
      console.log(`可交互时间 (TTI): ${tti.toFixed(2)}ms`);
      
      // 输出完整报告
      setTimeout(() => {
        console.log('=== 移动端性能测试报告 ===');
        console.log(`首次内容绘制 (FCP): ${metrics.firstContentfulPaint.toFixed(2)}ms`);
        console.log(`最大内容绘制 (LCP): ${metrics.largestContentfulPaint.toFixed(2)}ms`);
        console.log(`首次输入延迟 (FID): ${metrics.firstInputDelay.toFixed(2)}ms`);
        console.log(`累积布局偏移 (CLS): ${metrics.cumulativeLayoutShift.toFixed(4)}`);
        console.log(`可交互时间 (TTI): ${metrics.timeToInteractive.toFixed(2)}ms`);
        
        // 评估性能等级
        let score = 0;
        let maxScore = 5;
        
        // FCP评分
        if (metrics.firstContentfulPaint < 1800) score++;
        // LCP评分
        if (metrics.largestContentfulPaint < 2500) score++;
        // FID评分
        if (metrics.firstInputDelay < 100) score++;
        // CLS评分
        if (metrics.cumulativeLayoutShift < 0.1) score++;
        // TTI评分
        if (metrics.timeToInteractive < 3800) score++;
        
        console.log(`性能评分: ${score}/${maxScore}`);
        
        // 提供优化建议
        if (score < 3) {
          console.log('性能评分较低，建议进一步优化');
        } else if (score < 5) {
          console.log('性能评分良好，仍有优化空间');
        } else {
          console.log('性能评分优秀，优化效果良好');
        }
      }, 1000);
    }, 500);
  });
  
  // 检测设备类型
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  console.log(`设备类型: ${isMobile ? '移动设备' : '桌面设备'}`);
  
  // 检测网络连接
  if (navigator.connection) {
    console.log(`网络类型: ${navigator.connection.effectiveType}`);
    console.log(`下行速度: ${navigator.connection.downlink}Mbps`);
  }
})();