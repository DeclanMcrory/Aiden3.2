# Project Daedalus 🚀

A cutting-edge 3D dashboard system built with React, Three.js, and TypeScript, featuring real-time data visualization, interactive 3D components, and a modern dark mode interface.

[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-0.160.0-green)](https://threejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0.10-purple)](https://vitejs.dev/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/project-daedalus/deploys/badge.svg)](https://app.netlify.com/sites/project-daedalus)

## 🌟 Live Demo

[View Live Demo](https://project-daedalus.netlify.app)

## ✨ Features

### Real-time 3D Visualizations
- **Dynamic Bar Chart**: Interactive 3D bars with real-time data updates
- **Network Graph**: Force-directed 3D network visualization
- **Waveform Display**: Animated 3D waveform representation
- **Orbit Controls**: Full 3D camera control with zoom and pan

### Dashboard Components
- **System Status**: Real-time monitoring of system health and metrics
- **Agent Monitor**: Track and visualize agent activities
- **Dark Mode Interface**: Modern, eye-friendly design
- **Responsive Layout**: Adapts to all screen sizes

### Performance Features
- **60fps Animations**: Smooth transitions and updates
- **Efficient State Management**: Using Zustand for minimal rerenders
- **Optimized 3D Rendering**: Using React Three Fiber
- **Real-time Updates**: WebSocket-ready architecture

## 🛠 Tech Stack

- **Frontend Framework**: React 18.2.0
- **3D Graphics**: Three.js 0.160.0, React Three Fiber 8.15.12
- **State Management**: Zustand 4.4.7
- **Styling**: Tailwind CSS 3.4.0
- **Animations**: Framer Motion 10.16.16, React Spring 9.7.3
- **Data Visualization**: Recharts 2.10.3, D3.js 7.8.5
- **UI Components**: Tremor 3.12.1
- **Build Tool**: Vite 5.0.10
- **Language**: TypeScript 5.3.3

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/project-daedalus.git
cd project-daedalus
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## 🔧 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_APP_TITLE=Project Daedalus
VITE_API_URL=your_api_url
```

## 💻 Usage

### Basic Implementation

```tsx
import { Dashboard } from './components/dashboard/Dashboard';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Dashboard />
      </Layout>
    </ThemeProvider>
  );
}
```

### Adding Custom Visualizations

```tsx
import { Scene3D } from './components/dashboard/Scene3D';

<Scene3D>
  <BarChart3D data={yourData} />
  <NetworkGraph3D nodes={networkData} />
  <WaveForm3D values={waveformData} />
</Scene3D>
```

## 📸 Screenshots

![Dashboard Overview](screenshots/dashboard.png)
![3D Visualizations](screenshots/3d-viz.png)
![System Monitor](screenshots/system-monitor.png)

## 🚧 Known Limitations

- Font loading for Text3D components requires internet connection
- Initial 3D scene load may be slower on mobile devices
- WebGL 2.0 support required for all features

## 🔄 Updates

Latest updates include:
- Real-time data visualization components
- Enhanced 3D scene performance
- Improved mobile responsiveness
- New network visualization features

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Support

For support:
- Open an issue in the GitHub repository
- Check existing documentation
- Review closed issues for similar problems

---

Made with ❤️ by the Project Daedalus Team