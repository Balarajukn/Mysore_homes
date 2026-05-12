import React from 'react';
import { Menu, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-gradient-to-br from-primary to-primary-dark text-white p-2 rounded-xl shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
            <Building2 size={22} />
          </div>
          <span className="text-xl md:text-2xl font-black tracking-tight text-darkGray">
            Dhare <span className="text-primary">Infra</span>
          </span>
        </Link>

        {/* Links & CTA */}
        <div className="flex items-center gap-4 md:gap-8">
          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-gray-600">
            <Link to="/listings" className="relative group hover:text-primary transition-colors">
              Buy
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/listings" className="relative group hover:text-primary transition-colors">
              Rent
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/login" className="relative group hover:text-primary transition-colors">
              Login
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* CTA Button */}
          <Link to="/dashboard" className="bg-gradient-to-r from-primary to-primary-dark text-white px-4 py-2 md:px-6 md:py-2.5 rounded-full font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all duration-300 text-xs md:text-sm flex items-center gap-1.5 group">
            <span className="hidden sm:inline">Post Property</span>
            <span className="sm:hidden">Post</span>
            <span className="bg-white/20 text-white px-1.5 py-0.5 rounded-md text-[10px] md:text-xs uppercase tracking-wider group-hover:bg-white group-hover:text-primary transition-colors">Free</span>
          </Link>

          {/* Mobile Menu Icon */}
          <button className="md:hidden text-darkGray p-1 focus:outline-none hover:text-primary transition-colors">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
