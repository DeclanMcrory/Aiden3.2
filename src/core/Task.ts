import { z } from 'zod';
import { Agent } from './Agent';

export const TaskConfig = z.object({
  name: z.string(),
  description: z.string(),
  priority: z.number().min(1).max(10).default(5),
  deadline: z.date().optional(),
  dependencies: z.array(z.string()).default([])
});

export type TaskConfigType = z.infer<typeof TaskConfig>;

export class Task {
  private config: TaskConfigType;
  private agent: Agent;
  private status: 'pending' | 'running' | 'completed' | 'failed';
  private result: any;

  constructor(config: TaskConfigType, agent: Agent) {
    this.config = TaskConfig.parse(config);
    this.agent = agent;
    this.status = 'pending';
  }

  async execute(): Promise<void> {
    this.status = 'running';
    try {
      const result = await this.agent.executeTask({
        name: this.config.name,
        data: this.config
      });
      this.result = result;
      this.status = result.status === 'completed' ? 'completed' : 'failed';
    } catch (error) {
      this.status = 'failed';
      this.result = error;
    }
  }

  getStatus(): string {
    return this.status;
  }

  getResult(): any {
    return this.result;
  }

  getName(): string {
    return this.config.name;
  }

  getDescription(): string {
    return this.config.description;
  }
}