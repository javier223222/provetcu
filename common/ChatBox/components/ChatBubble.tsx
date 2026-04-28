
import type { ChatBubbleProps } from '../types';

export const ChatBubble = ({ message, isUser, timestamp }: ChatBubbleProps) => {
  return (
    <div className={`flex w-full ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`max-w-[75%] md:max-w-[60%] px-4 py-3 rounded-2xl shadow-sm transition-all duration-300 ${isUser
          ? 'bg-primary text-white rounded-br-none hover:bg-primary-dark'
          : 'bg-gray-100 text-gray-800 rounded-bl-none'
          }`}
      >
        <p className="text-sm md:text-base leading-relaxed whitespace-pre-wrap">{message}</p>
        {timestamp && (
          <span
            className={`text-xs block mt-1.5 ${isUser ? 'text-white/80' : 'text-gray-400'} text-right`}
          >
            {timestamp}
          </span>
        )}
      </div>
    </div>
  );
};

export default ChatBubble;
