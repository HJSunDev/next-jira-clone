import { RAGChat, upstash } from "@upstash/rag-chat";

// 创建一个新的 RAGChat 实例
export const ragChat = new RAGChat({
  // upstash 是一个用于配置和管理模型的函数，
  // 在这里用于指定 RAGChat 实例所使用的语言模型
  model: upstash("meta-llama/Meta-Llama-3-8B-Instruct"),
});
