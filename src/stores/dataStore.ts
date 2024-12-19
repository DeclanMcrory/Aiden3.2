import create from 'zustand';

interface DataState {
  metrics: number[];
  networkNodes: Array<{
    position: [number, number, number];
    color: string;
    connections: number[];
  }>;
  waveform: number[];
  updateMetrics: () => void;
  updateNetwork: () => void;
  updateWaveform: () => void;
}

export const useDataStore = create<DataState>((set) => ({
  metrics: [50, 30, 70, 40, 60],
  networkNodes: Array.from({ length: 10 }, (_, i) => ({
    position: [
      Math.sin(i / Math.PI) * 2,
      Math.cos(i / Math.PI) * 2,
      Math.sin((i + 2) / Math.PI) * 2
    ],
    color: `hsl(${i * 36}, 70%, 50%)`,
    connections: [
      (i + 1) % 10,
      (i + 2) % 10
    ]
  })),
  waveform: Array.from({ length: 20 }, (_, i) => 
    Math.sin(i * 0.5) * 0.5
  ),

  updateMetrics: () => set(state => ({
    metrics: state.metrics.map(v => 
      Math.max(10, Math.min(100, v + (Math.random() - 0.5) * 20))
    )
  })),

  updateNetwork: () => set(state => ({
    networkNodes: state.networkNodes.map(node => ({
      ...node,
      position: node.position.map(p => p + (Math.random() - 0.5) * 0.1) as [number, number, number]
    }))
  })),

  updateWaveform: () => set(state => ({
    waveform: state.waveform.map((v, i) => 
      Math.sin(Date.now() * 0.001 + i * 0.5) * 0.5
    )
  }))
}));