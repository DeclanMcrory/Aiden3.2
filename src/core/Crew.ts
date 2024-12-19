import { Agent } from './Agent';
import { Task } from './Task';
import { z } from 'zod';

export const CrewConfig = z.object({
  name: z.string(),
  description: z.string().optional(),
  processType: z.enum(['sequential', 'parallel', 'hierarchical']).default('sequential')
});

export type CrewConfigType = z.infer<typeof CrewConfig>;

export class Crew {
  private config: CrewConfigType;
  private agents: Agent[];
  private tasks: Task[];
  private results: Map<string, any>;

  constructor(config: CrewConfigType) {
    this.config = CrewConfig.parse(config);
    this.agents = [];
    this.tasks = [];
    this.results = new Map();
  }

  addAgent(agent: Agent): void {
    this.agents.push(agent);
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  async kickoff(): Promise<Map<string, any>> {
    console.log(`[${this.config.name}] Starting crew execution...`);

    switch (this.config.processType) {
      case 'parallel':
        await this.executeParallel();
        break;
      case 'hierarchical':
        await this.executeHierarchical();
        break;
      default:
        await this.executeSequential();
    }

    return this.results;
  }

  private async executeSequential(): Promise<void> {
    for (const task of this.tasks) {
      await task.execute();
      this.results.set(task.getName(), task.getResult());
    }
  }

  private async executeParallel(): Promise<void> {
    const executions = this.tasks.map(async (task) => {
      await task.execute();
      this.results.set(task.getName(), task.getResult());
    });

    await Promise.all(executions);
  }

  private async executeHierarchical(): Promise<void> {
    // Implement hierarchical execution logic
    await this.executeSequential();
  }
}