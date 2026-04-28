import OpenAI from 'openai'
import { DeepSeekChatParams } from './types'
import { deepseek } from './models'


export async function askDeepSeek(message: string) {
  const body: DeepSeekChatParams = {
    messages: [
      { role: 'system', content: 'You are a helpful assistant.' },
      { role: 'user', content: message },
    ],
    model: 'deepseek-v4-pro',
    thinking: { type: 'enabled' },
    reasoning_effort: 'high',
  };

 
  return await deepseek.chat.completions.create(
    body as unknown as OpenAI.Chat.ChatCompletionCreateParamsNonStreaming
  );
}