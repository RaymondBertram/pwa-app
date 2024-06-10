import React from 'react';

import { Navigation } from './components/navigation/navigation.component';
import { Padding } from './components/padding/padding.component';
import { HomeScreen } from './screens/home/home.screen';
import { Form } from './screens/form/form.screen';
import { Advantages } from './screens/advantages/advantages.screen';

import './App.scss';

function App() {
  return (
    <div className='app-container'>
      <Navigation />
      <div className="main-container">
        <HomeScreen />
        <Padding />
        <Advantages />
        <Padding />
        <Form/>
      </div>
    </div>
  );
}

export default App;
