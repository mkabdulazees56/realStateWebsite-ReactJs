import Header from "./componenets/Header/Header";
import Hero from "./componenets/Hero/Hero";
import './App.css';

import { getDatabase, ref, set } from "firebase/database";
import { app } from "./firebase";
import Companies from "./componenets/Companies/Companies";

const db = getDatabase(app);


function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies/>
    </div>
  );
}


export default App;
