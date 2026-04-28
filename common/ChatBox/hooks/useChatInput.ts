import { KeyboardEvent } from 'react';

const useChatInput = (sendMessage: () => void) => {
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return { handleKeyDown };
};

export default useChatInput;
