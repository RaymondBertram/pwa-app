import React from 'react';

import './App.scss';
import { Navigation } from './components/navigation/navigation.component';
import { HomeScreen } from './screens/home/home.screen';
import { Form } from './screens/form/form.screen';

function App() {
  return (
    <div className="app-container">
      <Navigation />
      <HomeScreen />
      <Form/>
    </div>
  );
}

export default App;
