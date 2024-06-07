import React from 'react';

import { Navigation } from './components/navigation/navigation.component';
import { HomeScreen } from './screens/home/home.screen';
import { Form } from './screens/form/form.screen';
import './App.scss';

function App() {
  return (
    <div className='app-container'>
      <Navigation />
      <div className="main-container">
        <HomeScreen />
        <Form/>
      </div>
    </div>
  );
}

export default App;
