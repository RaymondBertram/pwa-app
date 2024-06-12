import React from 'react';
import { HomeScreen, Form, Advantages, ProcessDiagramScreen, GetStarted, Payment, Solution, Evolution } from './screens';
import { Padding } from './components/padding/padding.component';
import { Navigation } from './components/navigation/navigation.component';

import './App.scss';

function App() {
  return (
    <div className='app-container'>
      <Navigation />
      <div className="main-container">
        <HomeScreen />
        <Advantages />
        <Padding />
        <ProcessDiagramScreen />
        <Padding />
        <GetStarted />
        <Padding />
        <Payment />
        <Padding />
        <Solution />
        <Padding />
        <Evolution />
        <Padding />
        <Form/>
      </div>
    </div>
  );
}

export default App;
