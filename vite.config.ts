import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      base: './',
      server: {
        port: 3000,
        host: '0.0.0.0',
        // 启用gzip压缩
        compress: true,
        // 设置更长的缓存时间
        headers: {
          'Cache-Control': 'public, max-age=31536000',
        },
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      // 页面性能优化配置
      build: {
        // 代码分割
        rollupOptions: {
          output: {
            manualChunks: {
              'react-vendor': ['react', 'react-dom'],
              'ui-components': ['lucide-react'],
            },
          },
        },
        // 启用代码压缩
        minify: 'terser',
        terserOptions: {
          compress: {
            // 移除console.log
            drop_console: true,
            // 移除debugger
            drop_debugger: true,
          },
        },
        // 禁用sourcemap以减小文件体积
        sourcemap: false,
        // 优化静态资源
        assetsInlineLimit: 4096, // 小于4KB的资源内联
        cssCodeSplit: true, // 分离CSS
        brotliSize: true, // 生成brotli压缩文件
        // 设置chunk大小警告限制
        chunkSizeWarningLimit: 1000,
      },
      // 预览服务器配置
      preview: {
        compress: true,
        headers: {
          'Cache-Control': 'public, max-age=31536000',
        },
      },
      // 优化依赖
      optimizeDeps: {
        include: ['react', 'react-dom', 'lucide-react'],
      },
    };
});
