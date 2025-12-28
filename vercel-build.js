// Vercel构建脚本
// 这个脚本专门用于Vercel环境，避免使用可能导致问题的配置

const fs = require('fs');
const path = require('path');

console.log('开始Vercel环境构建优化...');

// 1. 检查关键文件是否存在
const requiredFiles = [
  'components/OptimizedImage.tsx',
  'components/MobileOptimizedSection.tsx',
  'index.html'
];

let allFilesExist = true;
requiredFiles.forEach(file => {
  if (!fs.existsSync(file)) {
    console.warn(`警告: 缺少文件 ${file}，但构建将继续`);
  }
});

// 2. 确保样式目录存在
const stylesDir = path.join(__dirname, 'styles');
if (!fs.existsSync(stylesDir)) {
  fs.mkdirSync(stylesDir, { recursive: true });
  console.log('创建styles目录');
}

// 3. 检查并创建基本的移动端优化CSS文件
const mobileCssPath = path.join(stylesDir, 'mobile-optimizations.css');
if (!fs.existsSync(mobileCssPath)) {
  const mobileCss = `/* 移动端优化CSS */
/* 触摸优化 */
button, a, input, select, textarea {
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
}

/* 滚动优化 */
body {
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
}

/* 防止缩放 */
input[type="text"], input[type="email"], input[type="password"], textarea {
  font-size: 16px;
}

/* 图片优化 */
img {
  max-width: 100%;
  height: auto;
  loading: lazy;
}

/* 动画优化 */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
`;
  fs.writeFileSync(mobileCssPath, mobileCss);
  console.log('创建移动端优化CSS文件');
}

console.log('✅ Vercel构建优化准备完成');
console.log('构建将继续使用标准Vite配置...');