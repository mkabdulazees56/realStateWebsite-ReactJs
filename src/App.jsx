import Header from "./componenets/Header/Header";
import Hero from "./componenets/Hero/Hero";
import './App.css';

import { getDatabase, ref, set } from "firebase/database";
import { app } from "./firebase";
import Companies from "./componenets/Companies/Companies";
import Residencies from "./componenets/Residencies/Residencies";
import Value from "./componenets/Value/Value";
import Contact from "./componenets/Contact/Contact";
import GetStart from "./componenets/GetStarted/GetStart";
import Footer from "./componenets/Footer/Footer";


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
      <Residencies/>
      <Value/>
      <Contact/>
      <GetStart/>
      <Footer/>
    </div>
  );
}


export default App;
