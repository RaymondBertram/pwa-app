import React from "react";
import {
  HomeScreen,
  Form,
  Services,
  ProcessDiagramScreen,
  Solution,
  Advantages,
  Team,
} from "./screens";
import { Navigation } from "./components/navigation/navigation.component";
import { Footer } from "./components/footer/footer.component";

import "./App.scss";

function App() {
  return (
    <div className="app-container">
      <Navigation />
      <div className="main-container">
        <HomeScreen />
        <Services />
        <ProcessDiagramScreen />
        <Solution />
        <Advantages />
        <Team />
        {/* <Evolution /> */}
        <Form />
        <Footer />
      </div>
    </div>
  );
}

export default App;
