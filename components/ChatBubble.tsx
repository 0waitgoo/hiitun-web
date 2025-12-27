import React from 'react';

interface ChatBubbleProps {
  type: 'sender' | 'receiver';
  content: React.ReactNode;
  avatar?: string;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ type, content, avatar }) => {
  const isSender = type === 'sender';
  
  return (
    <div className={`flex w-full mb-4 ${isSender ? 'justify-end' : 'justify-start'} items-start gap-2`}>
      {!isSender && (
        <div className="w-8 h-8 rounded-full bg-blue-200 flex-shrink-0 overflow-hidden border-2 border-white">
             {/* Placeholder Avatar */}
            <div className="w-full h-full bg-blue-400 flex items-center justify-center text-xs text-white">Hi</div>
        </div>
      )}
      
      <div className={`max-w-[80%] p-3 text-sm rounded-2xl shadow-sm ${
        isSender 
          ? 'bg-[#95EC69] text-black rounded-tr-none' 
          : 'bg-white text-gray-800 rounded-tl-none'
      }`}>
        {content}
      </div>

      {isSender && (
        <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden border-2 border-white">
             <img src="https://picsum.photos/40/40" alt="User" className="w-full h-full object-cover"/>
        </div>
      )}
    </div>
  );
};

export default ChatBubble;