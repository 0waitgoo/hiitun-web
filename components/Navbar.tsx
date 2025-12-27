import React from 'react';
import { MessageSquare } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

interface NavbarProps {
  onOpenQRCode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenQRCode }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="absolute inset-0 bg-blue-500/10 backdrop-blur-md border-b border-white/10 shadow-lg"></div>
      <div className="relative max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer">
          <OptimizedImage 
            src="/logo.png" 
            alt="HIITUN Logo" 
            className="w-8 h-8 rounded-xl shadow-lg transform group-hover:rotate-12 transition-transform duration-300 object-cover"
            style={{ width: '32px', height: '32px' }}
            lazy={false}
          />
          <span className="font-black text-xl tracking-tighter text-white drop-shadow-md group-hover:text-white/90 transition-colors">
              HIITUN <span className="font-black text-xl ml-1 text-white">盒豚生活</span>
            </span>
        </div>
        
        <div className="flex items-center gap-6">
           {/* Desktop Menu - Hidden on small screens for simplicity in this demo */}
           <div className="hidden md:flex gap-6 text-sm font-medium text-blue-100">
              <a href="#" className="hover:text-white transition-colors">首页</a>
              <a href="#how-it-works" className="hover:text-white transition-colors">查券教程</a>
              <a href="#earnings" className="hover:text-white transition-colors">收益提现</a>
              <a href="#platforms" className="hover:text-white transition-colors">支持平台</a>
              <a href="#faq" className="hover:text-white transition-colors">常见问题</a>
           </div>

           <button 
            onClick={() => onOpenQRCode()}
            className="bg-white text-[#0CA5EB] px-5 py-2 rounded-full font-bold text-sm shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
          >
            <MessageSquare size={16} />
            关注公众号
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;