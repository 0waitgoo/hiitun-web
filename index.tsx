import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// 创建一个包装组件来处理客户端渲染
const ClientOnlyApp = () => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  if (!isClient) {
    // 返回一个与背景色相同的加载占位符
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0CA5EB] via-[#0090d9] to-[#0077b6]"></div>
    );
  }
  
  return <App />;
};

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <ClientOnlyApp />
);