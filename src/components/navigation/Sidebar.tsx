import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ChartBarIcon,
  CubeIcon,
  HomeIcon,
  CogIcon,
} from '@heroicons/react/24/outline';

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <motion.aside
      initial={{ width: 240 }}
      animate={{ width: isCollapsed ? 64 : 240 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-800 text-white flex flex-col"
    >
      <div className="p-4">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full p-2 hover:bg-gray-700 rounded-lg transition-colors"
        >
          {isCollapsed ? '→' : '←'}
        </button>
      </div>
      
      <nav className="flex-1">
        <ul className="space-y-2 p-2">
          {[
            { icon: HomeIcon, label: 'Home' },
            { icon: ChartBarIcon, label: 'Analytics' },
            { icon: CubeIcon, label: '3D Models' },
            { icon: CogIcon, label: 'Settings' },
          ].map(({ icon: Icon, label }) => (
            <li key={label}>
              <button className="w-full p-2 flex items-center space-x-2 hover:bg-gray-700 rounded-lg transition-colors">
                <Icon className="w-6 h-6" />
                {!isCollapsed && <span>{label}</span>}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </motion.aside>
  );
}