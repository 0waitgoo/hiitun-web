import React from 'react';

interface PhoneMockupProps {
  children: React.ReactNode;
  headerTitle?: string;
  dark?: boolean;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ children, headerTitle = "盒豚生活", dark = false }) => {
  return (
    <div className="relative mx-auto group">
      {/* Shadow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-[3rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
      
      {/* Bezel */}
      <div className="relative border-gray-900 dark:border-gray-900 bg-gray-900 border-[8px] rounded-[2.5rem] h-[440px] w-[290px] shadow-2xl overflow-hidden flex flex-col z-10 ring-1 ring-white/20">
        
        {/* Buttons */}
        <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[10px] top-[72px] rounded-l-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[10px] top-[124px] rounded-l-lg"></div>
        <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[10px] top-[142px] rounded-r-lg"></div>
        
        {/* Phone Header */}
        <div className="w-full h-14 bg-white text-black flex items-end justify-center pb-2 px-4 z-20 shrink-0 border-b border-gray-200 relative">
          {/* Dynamic Island / Notch area */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-xl z-30"></div>
          
          <div className="w-full flex justify-between items-center text-xs font-bold pt-2">
              <span>9:41</span>
              <span className="text-center flex-1"></span>
              <div className="flex items-center gap-1">
                {/* Battery Icon */}
                <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="16" height="9" rx="2" stroke="currentColor" strokeWidth="1"/>
                  <rect x="1.5" y="1.5" width="12" height="7" rx="1" fill="currentColor"/>
                  <rect x="17" y="3" width="2" height="4" rx="0.5" fill="currentColor"/>
                </svg>
              </div>
          </div>
        </div>
        
        {/* Header Title */}
        <div className="w-full bg-white text-black font-bold text-lg text-center py-2 border-b border-gray-200">
          {headerTitle}
        </div>
        
        {/* Screen Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden bg-white relative no-scrollbar">
          {children}
          
          {/* Screen Reflection/Glare - subtle */}
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/5 to-transparent pointer-events-none z-40"></div>
        </div>

        {/* Home Indicator */}
        <div className={`absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 ${dark ? 'bg-gray-600' : 'bg-gray-400'} rounded-full z-50`}></div>
      </div>
    </div>
  );
};

export default PhoneMockup;