import React, { Suspense } from 'react';
import { SystemStatus } from './SystemStatus';
import { AgentMonitor } from './AgentMonitor';
import { Scene3D } from './Scene3D';

export function Dashboard() {
  return (
    <div className="h-screen overflow-auto bg-gray-900 text-white p-4">
      <div className="grid gap-4">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Project Daedalus Dashboard</h1>
        </div>
        
        <SystemStatus />
        <AgentMonitor />
        
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">System Visualization</h2>
          <div className="h-[500px] bg-gray-800 rounded-lg overflow-hidden">
            <Suspense fallback={<div className="w-full h-full flex items-center justify-center">Loading 3D Scene...</div>}>
              <Scene3D />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}