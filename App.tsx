import React, { useState } from 'react';
import Navbar from './components/Navbar';
import PhoneMockup from './components/PhoneMockup';
import ChatBubble from './components/ChatBubble';
import QRCodeModal from './components/QRCodeModal';
import WithdrawalChannel from './components/WithdrawalChannel';
import OptimizedImage from './components/OptimizedImage';
import { PLATFORMS } from './constants';
import { ArrowRight, CheckCircle2, Search, Wallet, MessageCircle, Gift, ArrowDown, HelpCircle, ShieldCheck, Zap, Sparkles, Tag, TrendingUp, DollarSign } from 'lucide-react';

// --- Subcomponents for Cleanliness ---

const FloatingTag = ({ text, explanation, delay, x, y, rotate = "0deg" }: { text: string; explanation?: string; delay: string; x: string; y: string; rotate?: string }) => (
  <div 
    className={`absolute ${x} ${y} z-0 hidden lg:block group`} 
    style={{ transform: `rotate(${rotate})` }}
  >
    <div 
      className={`glass-card px-4 py-2 rounded-full text-white/90 text-sm font-bold shadow-lg flex items-center gap-2 animate-float cursor-pointer`} 
      style={{ animationDelay: delay }}
    >
      <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)] animate-pulse"></div>
      {text}
    </div>
    {explanation && (
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 p-3 bg-gray-900 text-white text-xs rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
        {explanation}
      </div>
    )}
  </div>
);

const FeatureCard = ({ icon: Icon, title, desc, color }: { icon: any, title: string, desc: string, color: string }) => (
  <div className="glass-card glass-card-hover p-6 rounded-2xl transition-all duration-300 cursor-default group">
    <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mb-4 text-white shadow-lg group-hover:scale-110 transition-transform`}>
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
      {title}
    </h3>
    <p className="text-blue-100/80 text-sm leading-relaxed">
      {desc}
    </p>
  </div>
);

// Updated MarqueeItem with colorful icon support
const MarqueeItem: React.FC<{ text: string; icon?: string; color?: string }> = ({ text, icon, color = "bg-blue-500" }) => (
  <div className="mx-4 flex items-center gap-2 bg-white/10 px-2 py-1.5 pr-4 rounded-full backdrop-blur-md border border-white/20 whitespace-nowrap shadow-sm hover:bg-white/20 transition-colors cursor-default">
    {icon && (
      <div className={`w-6 h-6 rounded-full ${color} flex items-center justify-center text-[10px] text-white shadow-inner font-bold`}>
        {icon}
      </div>
    )}
    <span className="font-bold text-sm text-white/90">{text}</span>
  </div>
);

const App: React.FC = () => {
  // 最简单的状态管理
  const [isQRCodeModalOpen, setIsQRCodeModalOpen] = useState(false);
  
  const handleOpenQRCode = () => {
    setIsQRCodeModalOpen(true);
  };

  const handleCloseQRCode = () => {
    setIsQRCodeModalOpen(false);
  };

  return (
    <div className="min-h-screen pb-20 relative font-sans">
      <Navbar onOpenQRCode={handleOpenQRCode} />

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 px-4 text-center relative overflow-hidden min-h-[90vh] flex flex-col justify-center">
        
        {/* Floating Tags for Atmosphere */}
        <FloatingTag text="隐形优惠券" explanation="商家隐藏的大额优惠券，自动查找并应用" delay="0s" x="left-[10%]" y="top-[20%]" rotate="-5deg" />
        <FloatingTag text="佣金秒到账" explanation="确认收货后佣金立即到账，无需等待" delay="1s" x="right-[10%]" y="top-[25%]" rotate="5deg" />
        <FloatingTag text="AI 自动比价" explanation="AI智能比价，找到全网最低价格" delay="2s" x="left-[15%]" y="bottom-[30%]" rotate="3deg" />
        <FloatingTag text="0手续费提现" explanation="提现无任何手续费，1元起提" delay="3s" x="right-[15%]" y="bottom-[25%]" rotate="-3deg" />

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:bg-white/20 transition-colors cursor-pointer group">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-bold tracking-wider uppercase text-blue-50 group-hover:text-white">2026 AI 全平台智能返利机器人</span>
          </div>
          
          {/* Main Typography */}
          <h1 className="text-7xl md:text-9xl font-black mb-4 tracking-tighter drop-shadow-sm select-none">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-blue-100 text-glow">
              HIITUN
            </span>
          </h1>
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight text-white flex flex-col md:flex-row items-center justify-center gap-3">
             <span>全网隐藏券</span>
             <span className="bg-white text-[#0CA5EB] px-2 rounded-lg transform -skew-x-12 shadow-lg text-4xl md:text-5xl py-1">查询神器</span>
          </h2>
          
          {/* Value Props with Icons */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm font-bold text-blue-100">
             <div className="flex items-center gap-1 bg-white/5 px-3 py-1 rounded-lg border border-white/10">
                <Search size={14} /> 自动查券
             </div>
             <div className="flex items-center gap-1 bg-white/5 px-3 py-1 rounded-lg border border-white/10">
                <TrendingUp size={14} /> 90%高佣
             </div>
             <div className="flex items-center gap-1 bg-white/5 px-3 py-1 rounded-lg border border-white/10">
                <Zap size={14} /> 极速提现
             </div>
          </div>

          <p className="text-lg md:text-xl font-medium text-blue-50/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            专为网购达人打造。支持<strong className="text-white border-b-2 border-white/30 mx-1">淘宝、京东、拼多多、抖音</strong>等全平台。
            <br className="hidden md:block"/>关注公众号，AI机器人自动比价，每单都有佣金，提现秒到账。
            <br className="hidden md:block"/><a href="#how-it-works" className="text-white underline hover:text-blue-200 transition-colors">查看查券教程</a>了解更多。
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-5">
            <button 
              onClick={(e) => {
                e.preventDefault();
                console.log('直接调用handleOpenQRCode');
                handleOpenQRCode();
              }}
              className="group relative bg-white text-[#0CA5EB] px-8 py-4 rounded-2xl font-black text-lg shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] hover:scale-105 hover:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.3)] transition-all flex items-center justify-center gap-2 overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
              <span className="text-xl">🚀</span> 开启省钱模式
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('how-it-works');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="glass-card px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2 group cursor-pointer"
            >
              <CheckCircle2 size={20} className="group-hover:text-green-400 transition-colors" /> 查看返利教程
            </button>
          </div>
        </div>
      </section>

      {/* --- MARQUEE SECTION --- */}
      {/* Lightened background for fresher look */}
      <div id="platforms" className="w-full bg-white/5 backdrop-blur-xl border-y border-white/10 overflow-hidden py-4 mb-20 shadow-lg">
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee whitespace-nowrap flex items-center">
            {PLATFORMS.map((p) => <MarqueeItem key={p.name} text={`${p.name}返利`} icon={p.icon} color={p.color} />)}
            <MarqueeItem text="隐藏大额券" icon="🎫" color="bg-purple-500" />
            <MarqueeItem text="AI比价" icon="🤖" color="bg-blue-600" />
            <MarqueeItem text="极速提现" icon="⚡" color="bg-yellow-500" />
            <MarqueeItem text="0手续费" icon="💸" color="bg-green-500" />
             {/* Duplicate for seamless loop */}
            {PLATFORMS.map((p) => <MarqueeItem key={`${p.name}-dup`} text={`${p.name}返利`} icon={p.icon} color={p.color} />)}
            <MarqueeItem text="隐藏大额券" icon="🎫" color="bg-purple-500" />
            <MarqueeItem text="AI比价" icon="🤖" color="bg-blue-600" />
            <MarqueeItem text="极速提现" icon="⚡" color="bg-yellow-500" />
            <MarqueeItem text="0手续费" icon="💸" color="bg-green-500" />
          </div>
        </div>
      </div>

      {/* --- HOW IT WORKS SECTION --- */}
      <section id="how-it-works" className="py-10 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          
          {/* Visual Side (Mockups) */}
          <div className="relative h-[650px] w-full flex justify-center items-center perspective-1000">
             
             {/* Phone 1: Chat Interface - Tilted */}
             <div className="absolute left-0 md:left-10 z-20 transform -rotate-3 hover:rotate-0 transition-all duration-500 hover:scale-105 hover:z-30 origin-bottom-left">
                <PhoneMockup headerTitle="盒豚生活">
                  <div className="p-4 flex flex-col gap-4">
                    <ChatBubble type="sender" content={
                      <div className="flex items-center gap-2 text-blue-600 underline text-xs break-all">
                        https://m.tb.cn/h.5...
                      </div>
                    } />
                    <ChatBubble type="receiver" content={
                      <div className="flex flex-col gap-2">
                        <p className="font-bold text-xs flex items-center gap-1 text-gray-500"><Sparkles size={12} className="text-yellow-500"/> AI智能查券结果：</p>
                        <div className="bg-white border border-gray-100 p-2 rounded-xl flex gap-3 shadow-sm">
                          <OptimizedImage src="https://picsum.photos/40/40" className="w-12 h-12 rounded-lg bg-gray-200 object-cover" alt="Product" />
                          <div className="flex-1 flex flex-col justify-between py-0.5">
                             <div className="h-2.5 w-20 bg-gray-200 rounded-full mb-1"></div>
                             <div className="text-[10px] text-gray-400">三只松鼠每日坚果...</div>
                          </div>
                        </div>
                        <div className="text-xs text-red-500 font-bold bg-gradient-to-r from-red-50 to-white p-2.5 rounded-xl border border-red-100 flex justify-between items-center shadow-sm">
                          <div>
                            <div className="text-[10px] text-red-400">隐藏优惠券</div>
                            <div className="text-lg">¥60</div>
                          </div>
                          <div className="text-right">
                             <div className="text-[10px] text-red-400">预计返利</div>
                             <div className="text-lg">¥22.75</div>
                          </div>
                        </div>
                      </div>
                    } />
                    <ChatBubble type="receiver" content={
                      <div className="flex items-center justify-center gap-2 bg-[#95EC69] p-3 rounded-xl text-black font-bold text-xs cursor-pointer shadow-sm hover:brightness-105 active:scale-95 transition-all">
                        <Gift size={14}/> 点此复制口令下单
                      </div>
                    } />
                  </div>
                </PhoneMockup>
             </div>

             {/* Phone 2: Product Page (Behind) */}
             <div className="absolute right-0 md:right-10 z-10 transform rotate-6 scale-90 md:scale-95 opacity-80 blur-[2px] hover:blur-0 hover:opacity-100 hover:rotate-3 transition-all duration-500 hover:z-30">
                <PhoneMockup>
                   <div className="bg-white h-full flex flex-col">
                      <div className="h-56 bg-gray-100 w-full relative shrink-0">
                        <OptimizedImage src="https://picsum.photos/300/300" className="w-full h-full object-cover" alt="Product Detail" />
                        <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-md">1/5</div>
                      </div>
                      <div className="p-5 space-y-4 flex-1">
                        <div className="flex justify-between items-baseline">
                           <div className="flex items-baseline gap-1 text-red-500">
                              <span className="text-xs">¥</span>
                              <span className="text-2xl font-black">129</span>
                           </div>
                           <div className="text-xs text-gray-400">月销 10w+</div>
                        </div>
                        <div className="space-y-2">
                           <div className="h-4 w-full bg-gray-100 rounded-full"></div>
                           <div className="h-4 w-2/3 bg-gray-100 rounded-full"></div>
                        </div>
                        
                        {/* Simulation of Copy Link Action */}
                        <div className="mt-auto pt-8">
                           <div className="bg-black text-white p-4 rounded-2xl flex items-center justify-center gap-2 shadow-2xl transform scale-105 active:scale-95 transition-transform cursor-pointer">
                              <span className="font-bold">🔗 拷贝链接</span>
                           </div>
                        </div>
                      </div>
                   </div>
                </PhoneMockup>
             </div>
          </div>

          {/* Text Side - Optimized for Keywords */}
          <div className="text-left space-y-8 relative z-30 md:pl-10">
            {[
               { id: 1, title: "复制商品链接", desc: "打开淘宝、京东、拼多多、抖音等电商APP，找到想买的商品，长按标题或点击分享按钮，选择“拷贝链接”。" },
               { id: 2, title: "发送给返利机器人", desc: "微信关注“盒豚生活”公众号或“盒豚查”，将链接直接发送。系统自动查询商家隐藏优惠券和返利金额。" },
               { id: 3, title: "领券下单赚佣金", desc: "点击回复的链接/口令下单，不仅省下优惠券的钱，确认收货后还能获得现金返利，支持微信极速提现。" }
            ].map((step, idx) => (
               <div key={step.id} className="group flex gap-6 p-4 rounded-3xl hover:bg-white/5 transition-colors cursor-default">
                  <div className="flex-shrink-0">
                     <div className="w-14 h-14 bg-gradient-to-br from-white to-blue-100 text-[#0CA5EB] rounded-2xl flex items-center justify-center font-black text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        {step.id}
                     </div>
                     {idx !== 2 && <div className="w-0.5 h-16 bg-white/20 mx-auto mt-4 rounded-full"></div>}
                  </div>
                  <div className="pt-2">
                     <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-100 transition-colors">{step.title}</h3>
                     <p className="text-blue-100/70 text-base leading-relaxed group-hover:text-white/90 transition-colors">
                        {step.desc}
                     </p>
                  </div>
               </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- EARNINGS SECTION --- */}
      <section id="earnings" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
             <div className="inline-block px-4 py-1 rounded-full bg-green-500/20 text-green-300 border border-green-500/30 text-xs font-bold mb-4">
                每月25日自动结算
             </div>
             <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
               收益看得见，提现<span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">秒到账</span>
             </h2>
             <p className="text-lg text-blue-100/80 max-w-2xl mx-auto">
               每一笔省下的钱都是赚到的。满1元即可申请提现，<strong>0手续费</strong>，实时到账微信零钱。
             </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Wallet UI Mockup */}
            <div className="order-2 md:order-1 flex justify-center perspective-1000">
               <PhoneMockup dark={true} headerTitle="个人中心">
                 <div className="p-4 space-y-3">
                    {/* Holographic Balance Card */}
                    <div className="bg-gray-200 p-5 rounded-3xl text-gray-800 shadow-lg border border-gray-300">
                       <div className="flex justify-between items-start mb-6">
                          <div>
                             <p className="text-xs opacity-60 mb-1 font-medium tracking-wide">账户可提现返利 (元)</p>
                             <h3 className="text-4xl font-[Inter] font-bold tracking-tight text-gray-800">20,883.65</h3>
                          </div>
                          <div className="p-2 bg-gray-300 rounded-full border border-gray-400">
                             <Wallet size={24} className="text-gray-800" />
                          </div>
                       </div>
                        
                       <button className="w-full py-3 rounded-xl bg-[#0CA5EB] text-white font-bold text-sm hover:bg-[#0a95d9] active:scale-[0.98] transition-all flex justify-between px-4 items-center">
                          <span>申请提现</span>
                          <ArrowRight size={16} />
                       </button>
                    </div>

                    {/* Withdrawal Action */}
                    <WithdrawalChannel />

                    {/* Transaction List */}
                    <div className="space-y-2 bg-white p-3 rounded-3xl shadow-md border border-gray-100">
                       <div className="flex justify-between items-center text-xs text-gray-400 px-2">
                          <span>最近收益</span>
                          <span>查看全部</span>
                       </div>
                       {[
                         { name: '淘宝', color: 'orange', bgColor: 'bg-orange-500/20', textColor: 'text-orange-500', product: '购买零食礼包', price: '+ 12.80' },
                         { name: '京东', color: 'red', bgColor: 'bg-red-500/20', textColor: 'text-red-500', product: '购买智能手表', price: '+ 268.88' },
                         { name: '抖音', color: 'black', bgColor: 'bg-black/20', textColor: 'text-black', product: '购买护肤套装', price: '+ 678.88' },
                         { name: '唯品', color: 'pink', bgColor: 'bg-pink-500/20', textColor: 'text-pink-500', product: '购买品牌香水', price: '+ 156.50' },
                         { name: '拼多', color: 'orange', bgColor: 'bg-orange-500/20', textColor: 'text-orange-500', product: '购买水果零食', price: '+ 8.90' }
                       ].map((platform, i) => (
                          <div key={i} className="bg-white p-2 rounded-xl flex justify-between items-center border border-gray-200 shadow-sm">
                             <div className="flex gap-2 items-center">
                                <div className={`w-6 h-6 rounded-lg ${platform.bgColor} flex items-center justify-center ${platform.textColor} text-xs`}>{platform.name}</div>
                                <div>
                                   <div className="text-xs text-gray-800 font-bold">{platform.product}</div>
                                   <div className="text-[10px] text-gray-500">刚刚</div>
                                </div>
                             </div>
                             <div className="text-[#07C160] font-bold text-sm">{platform.price}</div>
                          </div>
                       ))}
                    </div>
                 </div>
               </PhoneMockup>
            </div>

            {/* Feature Description */}
            <div className="order-1 md:order-2 space-y-6">
               <div className="glass-card p-8 rounded-3xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/20 rounded-bl-full -mr-10 -mt-10 group-hover:scale-110 transition-transform duration-500"></div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                     全网比价指令：<span className="text-yellow-300 bg-white/10 px-2 py-0.5 rounded-lg border border-white/10">找xxx</span>
                  </h3>
                  <a href="https://mp.weixin.qq.com/s/Ak0rWbeGi0LtmbyqngAzlQ" target="_blank" rel="noopener noreferrer" className="block">
                     <div className="bg-white p-4 rounded-2xl shadow-lg flex items-center gap-3 border border-blue-50 transform group-hover:scale-[1.02] transition-transform cursor-pointer">
                        <Search className="text-gray-400" />
                        <input type="text" placeholder="找三只松鼠大礼包" className="flex-1 outline-none text-gray-700 bg-transparent text-sm" disabled />
                        <button className="bg-[#0CA5EB] text-white px-5 py-2 rounded-xl text-sm font-bold shadow-md" onClick={() => window.open('https://mp.weixin.qq.com/s/Ak0rWbeGi0LtmbyqngAzlQ', '_blank', 'noopener noreferrer')}>搜索</button>
                     </div>
                  </a>
                  <p className="mt-6 text-blue-100 text-sm leading-relaxed">
                     不知道买什么？直接发“找+商品名”给公众号。AI大数据帮你全网比价，自动筛选<strong>销量高、评价好、返利多</strong>的优质商品。
                  </p>
               </div>

               <div className="grid grid-cols-2 gap-4">
                  <FeatureCard 
                    icon={DollarSign}
                    title="收益透明"
                    desc="每一笔订单佣金清晰可见，拒绝套路"
                    color="bg-orange-500"
                  />
                  <FeatureCard 
                    icon={ShieldCheck}
                    title="官方合作"
                    desc="京东/淘宝/拼多多官方接口，安全可靠"
                    color="bg-blue-600"
                  />
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      {/* Lightened background and updated card styles */}
      <section id="faq" className="py-20 px-4 bg-white/5 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-4xl mx-auto">
           <h2 className="text-3xl font-bold text-center mb-10 text-white flex items-center justify-center gap-3">
              <HelpCircle className="text-blue-300" /> 购物返利常见问题
           </h2>
           <div className="grid md:grid-cols-2 gap-6">
              {[
                { q: "什么是淘宝隐藏优惠券？", a: "淘宝隐藏优惠券是淘宝商家为了提升商品销量设置的非公开折扣。普通用户在淘宝APP里看不到，只有通过盒豚生活这样的专业查券工具才能找到并使用。", icon: Tag },
                { q: "京东购物返利是真的吗？", a: "千真万确！京东购物返利是商家给推广者的广告费，盒豚生活通过京东官方接口将这笔广告费的大部分（最高90%）以现金返利的形式回馈给您。", icon: ShieldCheck },
                { q: "拼多多查券机器人收费吗？", a: "完全免费！盒豚生活AI查券机器人不仅不收费，反而会帮您省钱赚钱。您只需要关注公众号即可永久免费使用查券、比价、返利服务。", icon: Zap },
                { q: "抖音直播返利怎么提现？", a: "在盒豚生活公众号个人中心即可申请提现。支持提现到微信零钱和支付宝，满1元即可提现，系统自动打款，通常秒到账，无任何手续费。<a href='#earnings' className='text-blue-200 underline'>查看提现演示</a>", icon: Wallet },
                { q: "盒豚生活能查哪些平台的隐藏优惠券？", a: "盒豚生活支持淘宝、京东、拼多多、抖音、唯品会等主流电商平台的隐藏优惠券查询和购物返利服务。", icon: Search },
                { q: "使用盒豚生活有什么风险吗？", a: "没有任何风险！盒豚生活与各大电商平台官方合作，所有交易都在原电商平台完成，我们只提供优惠券查询和返利服务。", icon: ShieldCheck }
              ].map((faq, i) => (
                 <div key={i} className="glass-card glass-card-hover p-6 rounded-2xl cursor-default group hover:bg-white/10">
                    <h3 className="flex items-center gap-3 font-bold text-lg mb-3 text-white group-hover:text-blue-200 transition-colors">
                       <div className="p-1.5 bg-white/10 rounded-lg group-hover:bg-blue-500 group-hover:text-white transition-colors">
                          <faq.icon size={18}/>
                       </div>
                       {faq.q}
                    </h3>
                    <p className="text-blue-100 text-sm leading-relaxed opacity-80 group-hover:opacity-100" dangerouslySetInnerHTML={{ __html: faq.a }}></p>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="cta" className="mt-10 pt-20 pb-20 text-center px-4 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-blue-400/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>

        <h2 className="text-3xl md:text-5xl font-black mb-10 tracking-tight relative z-10">
          立即体验 AI 查券返利
        </h2>
        
        <div className="inline-block relative group cursor-pointer z-10">
           <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>
           <a href="https://mp.weixin.qq.com/s/Ak0rWbeGi0LtmbyqngAzlQ" target="_blank" rel="noopener noreferrer">
             <button className="relative bg-white text-[#0CA5EB] px-12 py-5 rounded-full font-black text-2xl shadow-2xl hover:scale-105 transition-transform flex items-center gap-3 border-4 border-white/50 bg-clip-padding">
               微信搜索公众号: 盒豚查
               <ArrowRight className="group-hover:translate-x-1 transition-transform" />
             </button>
           </a>
        </div>
        
        {/* Tag Cloud Footer - Redesigned with dots */}
        <div className="mt-20 flex justify-center gap-3 flex-wrap max-w-2xl mx-auto opacity-70">
            {['淘宝返利', '京东查券', '拼多多佣金', '抖音返利', '唯品会折扣', '饿了么红包', '美团外卖券'].map((tag, i) => (
               <span key={i} className="px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-xs font-medium text-white/90 hover:bg-white/20 hover:scale-105 transition-all cursor-default flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_5px_rgba(74,222,128,0.8)]"></span>
                  {tag}
               </span>
            ))}
        </div>

        <p className="mt-10 text-white/40 text-sm relative z-10">
          © 2024 HIITUN 盒豚生活. 专注于电商导购返利的省钱助手.
        </p>
      </footer>
      <QRCodeModal 
        isOpen={isQRCodeModalOpen} 
        onClose={handleCloseQRCode} 
      />
    </div>
  );
};

export default App;