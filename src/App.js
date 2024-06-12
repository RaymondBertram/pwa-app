import React from 'react';

import { Navigation } from './components/navigation/navigation.component';
import { Padding } from './components/padding/padding.component';
import { HomeScreen } from './screens/home/home.screen';
import { Form } from './screens/form/form.screen';
import { Advantages } from './screens/advantages/advantages.screen';

import './App.scss';
import { ProcessDiagramScreen } from './screens/processdiagram/processdiagram.screen';
import { GetStarted } from './screens/get-started/get-started.screen';
import { Payment } from './screens/payment/payment.screen';

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
        <Form/>
      </div>
    </div>
  );
}

export default App;
