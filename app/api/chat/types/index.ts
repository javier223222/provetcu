import OpenAI from 'openai'
export interface DeepSeekChatParams extends OpenAI.Chat.ChatCompletionCreateParamsNonStreaming {
  thinking?: {
    type: 'enabled' | 'disabled';
  };
  reasoning_effort?: 'low' | 'medium' | 'high';
}
