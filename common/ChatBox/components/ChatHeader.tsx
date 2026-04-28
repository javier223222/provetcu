import { MessageCircle, Trash2 } from 'lucide-react';
import type { ChatHeaderProps } from '../types';

const ChatHeader = ({ title, hasMessages, onClear }: ChatHeaderProps) => (
    <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center gap-2 text-gray-900 font-medium">
            <MessageCircle className="w-5 h-5 text-primary" />
            <span className="text-sm">{title}</span>
        </div>
        {hasMessages && (
            <button
                onClick={onClear}
                title="Limpiar conversación"
                className="p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
            >
                <Trash2 className="w-4 h-4" />
            </button>
        )}
    </div>
);

export default ChatHeader;
