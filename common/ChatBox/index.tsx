'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import ChatHeader from './components/ChatHeader';
import MessageList from './components/MessageList';
import ChatInput from './components/ChatInput';
import useChat from './hooks/useChat';
import useAutoScroll from './hooks/useAutoScroll';
import useChatInput from './hooks/useChatInput';
import type { ChatBoxProps } from './types';

const ChatBox = ({ apiRoute, placeholder = 'Escribe un mensaje...', title = 'Chat' }: ChatBoxProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const { messages, input, setInput, isLoading, error, sendMessage, clearMessages } = useChat(apiRoute);
    const { bottomRef } = useAutoScroll(messages, isLoading);
    const { handleKeyDown } = useChatInput(sendMessage);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="mb-4 w-[350px] sm:w-[400px] h-[550px] bg-white rounded-2xl border border-gray-200 shadow-2xl overflow-hidden flex flex-col"
                    >
                        <ChatHeader
                            title={title}
                            hasMessages={messages.length > 0}
                            onClear={clearMessages}
                        />
                        <MessageList
                            messages={messages}
                            isLoading={isLoading}
                            error={error}
                            bottomRef={bottomRef}
                        />
                        <ChatInput
                            value={input}
                            onChange={setInput}
                            onKeyDown={handleKeyDown}
                            onSend={sendMessage}
                            placeholder={placeholder}
                            disabled={isLoading}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-full bg-primary p-4 text-white transition-all hover:bg-primary-dark hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 flex items-center justify-center shadow-lg"
            >
                {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
            </motion.button>
        </div>
    );
};

export default ChatBox;
