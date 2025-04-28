import React from 'react';

function Contact() {
  return (
    <div id="contact" className="min-h-screen bg-gray-100 p-10">
      <h2 className="text-4xl font-bold mb-4 text-center">Contact Us</h2>
      <form className="flex flex-col gap-4 w-full max-w-md">
        <input className="p-3 rounded-md border border-gray-300" type="text" placeholder="Your Name" required />
        <input className="p-3 rounded-md border border-gray-300" type="email" placeholder="Your Email" required />
        <textarea className="p-3 rounded-md border border-gray-300" rows="5" placeholder="Your Message" required></textarea>
        <button type="submit" className="bg-blue-700 text-white py-3 rounded-md hover:bg-blue-800">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;