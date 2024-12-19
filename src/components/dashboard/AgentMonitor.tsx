import React from 'react';
import { Card, Title, AreaChart } from '@tremor/react';
import { useAgentMetrics } from '../../hooks/useAgentMetrics';

export function AgentMonitor() {
  const { metrics } = useAgentMetrics();

  return (
    <Card className="mt-4">
      <Title>Agent Activity</Title>
      <AreaChart
        className="h-72 mt-4"
        data={metrics}
        index="time"
        categories={["researcher", "innovator", "guardian"]}
        colors={["blue", "emerald", "rose"]}
      />
    </Card>
  );
}