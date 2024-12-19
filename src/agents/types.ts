import { z } from 'zod';

export const AgentType = z.enum([
  'COORDINATOR',
  'DATA_PROCESSOR',
  'KNOWLEDGE_SYNTHESIS',
  'SECURITY',
  'LEARNING',
  'INTERFACE'
]);

export type AgentType = z.infer<typeof AgentType>;

export interface AgentMetrics {
  tasksCompleted: number;
  successRate: number;
  averageProcessingTime: number;
  lastActive: Date;
}