import React from 'react';

function Hero() {
  return (
    <section 
      className="h-screen bg-cover bg-center flex items-center justify-center text-center px-4"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091012184-7f02e85a9b44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')" }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Building the Future Together</h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-8">
          Innovative Engineering Solutions for Students, Graduates, and Industry Leaders
        </p>
        <a href="#contact">
          <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg">
            Get Started
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;