import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from './components/Contact';
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <div className="pt-20">
       <Hero />
       <About />
       <Services />
       <Contact />
       <Footer />
      </div>
    </div>
  );
}

export default App;
