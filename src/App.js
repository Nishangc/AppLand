import "./App.css";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Feature from "./components/Feature";
import About from "./components/About";
import aboutimage from "./images/about.png";
import aboutimage1 from "./images/download.png";
import Presentation from "./components/Presentation";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />
      <Feature />
      <About />
      {/* <  image={aboutimage}
        title="Come With All You Need For Daily Life"
        button="Get The App"
      />
      <About
        image={aboutimage1}
        title="Download And Get The App Now"
        button="Download"
      /> */}
      <Presentation />
      <Contact />
    </>
  );
}

export default App;
