import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 移动端性能优化的Vite配置
export default defineConfig({
  plugins: [react()],
  build: {
    // 代码分割优化
    rollupOptions: {
      output: {
        manualChunks: {
          // 将React相关库打包到单独的chunk
          'react-vendor': ['react', 'react-dom'],
          // 将UI库打包到单独的chunk
          'ui-vendor': ['lucide-react'],
        },
      },
    },
    // 启用CSS代码分割
    cssCodeSplit: true,
    // 压缩选项
    minify: 'terser',
    terserOptions: {
      compress: {
        // 移除console.log
        drop_console: true,
        // 移除debugger
        drop_debugger: true,
      },
    },
    // 设置chunk大小警告限制
    chunkSizeWarningLimit: 1000,
  },
  // 服务器配置
  server: {
    // 启用gzip压缩
    compress: true,
    // 设置更长的缓存时间
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
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
  // 资源内联阈值（小于此值的资源将内联为base64）
  assetsInlineLimit: 4096,
})