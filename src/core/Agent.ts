import { nanoid } from 'nanoid';
import { z } from 'zod';

export const AgentConfig = z.object({
  role: z.string(),
  goal: z.string(),
  backstory: z.string().optional(),
  tools: z.array(z.string()).default([]),
  memorySize: z.string().default('1GB')
});

export type AgentConfigType = z.infer<typeof AgentConfig>;

export class Agent {
  private id: string;
  private memory: Map<string, any>;
  private config: AgentConfigType;

  constructor(config: AgentConfigType) {
    this.id = nanoid();
    this.config = AgentConfig.parse(config);
    this.memory = new Map();
  }

  async learn(data: any): Promise<boolean> {
    const key = `${Date.now()}-${nanoid(6)}`;
    this.memory.set(key, data);
    return true;
  }

  async recall(query: string): Promise<any[]> {
    return Array.from(this.memory.values());
  }

  async executeTask(task: { name: string; data: any }): Promise<{
    status: 'completed' | 'failed';
    result: any;
  }> {
    console.log(`[${this.config.role}] Executing task: ${task.name}`);
    try {
      // Task execution logic here
      return {
        status: 'completed',
        result: `Task ${task.name} completed by ${this.config.role}`
      };
    } catch (error) {
      return {
        status: 'failed',
        result: error
      };
    }
  }

  getId(): string {
    return this.id;
  }

  getRole(): string {
    return this.config.role;
  }

  getGoal(): string {
    return this.config.goal;
  }
}