export interface ChatBubbleProps {
  message: string;
  isUser: boolean;
  timestamp?: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp?: string;
}

export interface ChatBoxProps {
  apiRoute?: string;
  placeholder?: string;
  title?: string;
}

export interface ChatHeaderProps {
  title: string;
  hasMessages: boolean;
  onClear: () => void;
}

export interface MessageListProps {
  messages: ChatMessage[];
  isLoading: boolean;
  error: string | null;
  bottomRef: React.RefObject<HTMLDivElement | null>;
}

export interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onSend: () => void;
  placeholder: string;
  disabled: boolean;
}
