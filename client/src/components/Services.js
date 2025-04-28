import React from 'react';

function Services() {
  return (
    <div id="services" className="min-h-screen bg-gray-100 p-10">
      <h2 className="text-4xl font-bold mb-6 text-center">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 shadow-md rounded-xl hover:scale-105 duration-300 bg-blue-50">
          <h3 className="text-2xl font-semibold mb-2">Planning</h3>
          <p>Strategic project planning and management solutions for engineering industries.</p>
        </div>
        <div className="p-6 shadow-md rounded-xl hover:scale-105 duration-300 bg-blue-50">
          <h3 className="text-2xl font-semibold mb-2">Product Design</h3>
          <p>Innovative product design that meets market and user demands.</p>
        </div>
        <div className="p-6 shadow-md rounded-xl hover:scale-105 duration-300 bg-blue-50">
          <h3 className="text-2xl font-semibold mb-2">Manufacturing</h3>
          <p>High-quality manufacturing processes with industry-standard technologies.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;