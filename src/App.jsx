import React from 'react';
import Background from './components/Background';
import Profile from './components/Profile'; // Новый объединенный компонент
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Background />
      <Profile />
    </div>
  );
};

export default App;