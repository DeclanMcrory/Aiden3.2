import React from 'react';
import { Card, Text, Metric, ProgressBar } from '@tremor/react';
import { useSystemStatus } from '../../hooks/useSystemStatus';

export function SystemStatus() {
  const { status, metrics } = useSystemStatus();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      <Card decoration="top" decorationColor="indigo">
        <Text>System Health</Text>
        <Metric>{status.health}%</Metric>
        <ProgressBar value={status.health} color="indigo" className="mt-2" />
      </Card>

      <Card decoration="top" decorationColor="emerald">
        <Text>Active Agents</Text>
        <Metric>{metrics.activeAgents}</Metric>
        <Text className="mt-2">Total Tasks: {metrics.totalTasks}</Text>
      </Card>

      <Card decoration="top" decorationColor="amber">
        <Text>Memory Usage</Text>
        <Metric>{metrics.memoryUsage}GB</Metric>
        <ProgressBar value={metrics.memoryUsagePercent} color="amber" className="mt-2" />
      </Card>

      <Card decoration="top" decorationColor="rose">
        <Text>Safety Score</Text>
        <Metric>{metrics.safetyScore}/100</Metric>
        <Text className="mt-2">Last Validated: {metrics.lastValidated}</Text>
      </Card>
    </div>
  );
}