import { Send } from 'lucide-react';
import type { ChatInputProps } from '../types';

const ChatInput = ({ value, onChange, onKeyDown, onSend, placeholder, disabled }: ChatInputProps) => (
    <div className="flex items-center gap-2 px-4 py-3 border-t border-gray-200 bg-gray-50">
        <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder={placeholder}
            disabled={disabled}
            className="flex-1 text-sm bg-white border border-gray-200 rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-primary transition disabled:opacity-50 text-ink placeholder:text-gray-500"
        />
        <button
            onClick={onSend}
            disabled={disabled || !value.trim()}
            className="p-2 rounded-xl bg-primary hover:bg-primary-dark disabled:opacity-40 disabled:cursor-not-allowed text-gray-100 transition-colors"
        >
            <Send className="w-4 h-4" />
        </button>
    </div>
);

export default ChatInput;
