import { useState, useEffect } from 'react';

export function useSystemStatus() {
  const [status, setStatus] = useState({
    health: 98,
    lastUpdate: new Date().toISOString()
  });

  const [metrics, setMetrics] = useState({
    activeAgents: 3,
    totalTasks: 12,
    memoryUsage: 2.4,
    memoryUsagePercent: 60,
    safetyScore: 95,
    lastValidated: new Date().toLocaleTimeString()
  });

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate real-time updates
      setMetrics(prev => ({
        ...prev,
        activeAgents: prev.activeAgents + Math.floor(Math.random() * 2),
        memoryUsage: Math.round((prev.memoryUsage + Math.random() * 0.1) * 10) / 10,
        lastValidated: new Date().toLocaleTimeString()
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return { status, metrics };
}