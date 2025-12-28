// Vercel部署状态检查脚本
// 这个脚本可以帮助我们了解部署可能遇到的问题

import fs from 'fs';
import path from 'path';

console.log('=== Vercel部署状态检查 ===\n');

// 1. 检查package.json中的依赖
console.log('1. 检查package.json依赖...');
try {
  const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
  console.log('✓ package.json存在且可读');
  
  // 检查关键依赖
  const criticalDeps = ['react', 'vite', 'typescript'];
  criticalDeps.forEach(dep => {
    if (packageJson.dependencies && packageJson.dependencies[dep]) {
      console.log(`✓ ${dep}: ${packageJson.dependencies[dep]}`);
    } else if (packageJson.devDependencies && packageJson.devDependencies[dep]) {
      console.log(`✓ ${dep} (dev): ${packageJson.devDependencies[dep]}`);
    } else {
      console.log(`✗ ${dep}: 未找到`);
    }
  });
  
  // 检查vite-plugin-pwa版本
  if (packageJson.devDependencies && packageJson.devDependencies['vite-plugin-pwa']) {
    const pwaVersion = packageJson.devDependencies['vite-plugin-pwa'];
    console.log(`✓ vite-plugin-pwa: ${pwaVersion}`);
    
    // 检查版本兼容性
    const majorVersion = parseInt(pwaVersion.split('.')[0].replace('^', ''));
    if (majorVersion >= 0 && majorVersion < 1) {
      const minorVersion = parseInt(pwaVersion.split('.')[1]);
      if (minorVersion >= 19) {
        console.log('✓ vite-plugin-pwa版本与Vite 6.x兼容');
      } else {
        console.log('⚠ vite-plugin-pwa版本可能与Vite 6.x不兼容');
      }
    }
  }
} catch (error) {
  console.log('✗ 读取package.json失败:', error.message);
}

// 2. 检查vercel.json配置
console.log('\n2. 检查vercel.json配置...');
try {
  const vercelConfig = JSON.parse(fs.readFileSync('./vercel.json', 'utf8'));
  console.log('✓ vercel.json存在且可读');
  
  // 检查构建配置
  if (vercelConfig.builds && vercelConfig.builds.length > 0) {
    const buildConfig = vercelConfig.builds[0];
    if (buildConfig.config && buildConfig.config.installCommand) {
      console.log(`✓ 安装命令: ${buildConfig.config.installCommand}`);
      
      if (buildConfig.config.installCommand.includes('--legacy-peer-deps')) {
        console.log('✓ 包含--legacy-peer-deps标志，有助于解决依赖冲突');
      }
    }
    
    if (buildConfig.config && buildConfig.config.buildCommand) {
      console.log(`✓ 构建命令: ${buildConfig.config.buildCommand}`);
    }
  }
} catch (error) {
  console.log('✗ 读取vercel.json失败:', error.message);
}

// 3. 检查vite.config.ts
console.log('\n3. 检查vite.config.ts...');
try {
  const viteConfig = fs.readFileSync('./vite.config.ts', 'utf8');
  console.log('✓ vite.config.ts存在且可读');
  
  if (viteConfig.includes('vite-plugin-pwa')) {
    console.log('✓ 包含PWA配置');
  }
  
  if (viteConfig.includes('build:')) {
    console.log('✓ 包含构建配置');
  }
} catch (error) {
  console.log('✗ 读取vite.config.ts失败:', error.message);
}

// 4. 检查关键文件
console.log('\n4. 检查关键文件...');
const criticalFiles = [
  'index.html',
  'index.tsx',
  'App.tsx',
  'tsconfig.json'
];

criticalFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✓ ${file} 存在`);
  } else {
    console.log(`✗ ${file} 不存在`);
  }
});

// 5. 提供可能的解决方案
console.log('\n5. 可能的部署问题解决方案...');
console.log('如果部署失败，请尝试以下操作:');
console.log('- 检查Vercel控制台的构建日志');
console.log('- 确保所有依赖版本兼容');
console.log('- 检查TypeScript配置是否正确');
console.log('- 确认没有环境变量缺失');
console.log('- 尝试在本地运行npm run build确保构建成功');

console.log('\n=== 检查完成 ===');