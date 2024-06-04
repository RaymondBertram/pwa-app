import React from 'react';

import './App.scss';
import { Navigation } from './components/navigation/navigation.component';
import { HomeScreen } from './screens/home/home.screen';

function App() {
  return (
    <div className="app-container">
      <Navigation />
      <HomeScreen />
    </div>
  );
}

export default App;
