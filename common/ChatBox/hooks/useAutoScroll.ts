import { useRef, useEffect } from 'react';
import type { ChatMessage } from '../types';

const useAutoScroll = (messages: ChatMessage[], isLoading: boolean) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  return { bottomRef };
};

export default useAutoScroll;
