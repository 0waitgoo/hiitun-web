import React, { useState } from 'react';
import { MessageCircle, CheckCircle2 } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

const WithdrawalChannel: React.FC = () => {
  // 状态管理：默认选中微信
  const [selectedMethod, setSelectedMethod] = useState<'wechat' | 'alipay'>('wechat');

  const handleWechatClick = () => {
    setSelectedMethod('wechat');
  };

  const handleAlipayClick = () => {
    setSelectedMethod('alipay');
  };

  return (
    <div className="bg-white rounded-3xl p-4 shadow-md border border-gray-100">
      <h4 className="font-bold mb-3 flex items-center gap-2 text-gray-800 text-sm">
        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
        提现通道
      </h4>
      <div className="flex gap-3 mb-4">
        {/* 微信按钮 */}
        <button 
          className={`flex-1 py-2 rounded-xl font-bold text-sm shadow-lg transition-all flex flex-col items-center justify-center gap-1 ${
            selectedMethod === 'wechat' 
              ? 'border-transparent shadow-green-500/20 hover:shadow-green-500/40 hover:-translate-y-0.5' 
              : 'bg-gray-50 text-gray-400 border border-gray-200 hover:bg-gray-100'
          }`}
          style={selectedMethod === 'wechat' ? { backgroundColor: '#07C160', color: 'white' } : {}}
          onClick={handleWechatClick}
        >
          <span className="flex items-center gap-1">
            <MessageCircle size={14} fill="currentColor"/>
            微信提现
          </span>
        </button>
        {/* 支付宝按钮 */}
        <button 
          className={`flex-1 py-2 rounded-xl font-bold text-sm transition-colors flex flex-col items-center justify-center gap-1 ${
            selectedMethod === 'alipay' 
              ? 'bg-[#0CA5EB] text-white border-transparent shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5' 
              : 'bg-gray-50 text-gray-400 border border-gray-200 hover:bg-gray-100'
          }`}
          onClick={handleAlipayClick}
        >
          支付宝
        </button>
      </div>
      <div className="bg-gray-50 p-3 rounded-xl flex items-center justify-between border border-gray-100">
        <div className="flex items-center gap-2">
          <div className={`w-4 h-4 rounded-full flex items-center justify-center text-white shadow-sm ${selectedMethod === 'wechat' ? 'bg-[#07C160]' : 'bg-[#0CA5EB]'}`}>
            <OptimizedImage className="w-full h-full rounded-full border border-white" alt="avatar" src="https://picsum.photos/100"/>
          </div>
          <div>
            <div className="text-xs text-gray-400 mb-0.5">到账账户</div>
            <div className="text-sm font-bold text-gray-800">熊熊一狠</div>
          </div>
          <CheckCircle2 className={selectedMethod === 'wechat' ? 'text-[#07C160]' : 'text-[#0CA5EB]'} size={20} />
        </div>
      </div>
    </div>
  );
};

export default WithdrawalChannel;