import React from 'react';
import { Layout } from './components/layout/Layout';
import { Dashboard } from './components/dashboard/Dashboard';
import { ThemeProvider } from './contexts/ThemeContext';
import { Sidebar } from './components/navigation/Sidebar';

export default function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Sidebar />
        <main className="flex-1 overflow-hidden bg-gray-900">
          <Dashboard />
        </main>
      </Layout>
    </ThemeProvider>
  );
}