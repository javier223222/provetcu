import { MessageCircle, Loader2 } from 'lucide-react';
import { ChatBubble } from './ChatBubble';
import type { MessageListProps } from '../types';

const MessageList = ({ messages, isLoading, error, bottomRef }: MessageListProps) => (
    <div className="flex flex-col flex-1 p-4 overflow-y-auto">
        {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500 space-y-3">
                <MessageCircle className="w-12 h-12 text-gray-300" />
                <p className="text-sm">No hay mensajes todavía.</p>
            </div>
        ) : (
            messages.map((msg) => (
                <ChatBubble
                    key={msg.id}
                    message={msg.text}
                    isUser={msg.isUser}
                    timestamp={msg.timestamp}
                />
            ))
        )}

        {isLoading && (
            <div className="flex justify-start mb-4">
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 rounded-2xl rounded-bl-none">
                    <Loader2 className="w-4 h-4 animate-spin text-secondary" />
                    <span className="text-sm text-gray-500">Pensando...</span>
                </div>
            </div>
        )}

        {error && (
            <p className="text-xs text-error text-center mt-2">{error}</p>
        )}

        <div ref={bottomRef} />
    </div>
);

export default MessageList;
