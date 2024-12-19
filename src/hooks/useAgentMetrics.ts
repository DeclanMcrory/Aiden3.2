import { useState, useEffect } from 'react';

export function useAgentMetrics() {
  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    // Generate sample data
    const generateData = () => {
      const now = new Date();
      return Array.from({ length: 24 }, (_, i) => ({
        time: new Date(now.getTime() - (23 - i) * 3600000).toLocaleTimeString(),
        researcher: Math.floor(Math.random() * 100),
        innovator: Math.floor(Math.random() * 100),
        guardian: Math.floor(Math.random() * 100)
      }));
    };

    setMetrics(generateData());

    const interval = setInterval(() => {
      setMetrics(prev => {
        const newData = [...prev.slice(1)];
        newData.push({
          time: new Date().toLocaleTimeString(),
          researcher: Math.floor(Math.random() * 100),
          innovator: Math.floor(Math.random() * 100),
          guardian: Math.floor(Math.random() * 100)
        });
        return newData;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return { metrics };
}