import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-darkGray text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-primary mb-4">Dhare Infra</h3>
          <p className="text-gray-400">Premium hyperlocal real estate in Mysore.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/listings" className="hover:text-primary transition-colors">Buy Property</a></li>
            <li><a href="/listings" className="hover:text-primary transition-colors">Rent Property</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Interior Design (Coming Soon)</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-white">Contact</h4>
          <p className="text-gray-400">Mysore, Karnataka, India</p>
          <p className="text-gray-400">Email: info@dhareinfra.com</p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Dhare Infra. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
