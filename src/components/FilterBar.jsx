import React from 'react';
import { Search, MapPin, Home, DollarSign } from 'lucide-react';

const FilterBar = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-soft border border-gray-100 flex flex-wrap gap-4 items-center mb-8">
      <div className="flex-1 min-w-[200px]">
        <label className="text-xs text-gray-500 font-semibold mb-1 block">Search Location</label>
        <div className="relative">
          <MapPin size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="text" placeholder="Locality, City..." className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-transparent rounded-lg focus:bg-white focus:border-primary focus:outline-none transition-colors" />
        </div>
      </div>
      
      <div className="w-full sm:w-auto min-w-[150px]">
        <label className="text-xs text-gray-500 font-semibold mb-1 block">Property Type</label>
        <div className="relative">
          <Home size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <select className="w-full pl-10 pr-8 py-2 bg-gray-50 border border-transparent rounded-lg focus:bg-white focus:border-primary focus:outline-none appearance-none cursor-pointer">
            <option>All Types</option>
            <option>Apartment</option>
            <option>Villa</option>
            <option>Site</option>
            <option>Commercial</option>
          </select>
        </div>
      </div>
      
      <div className="w-full sm:w-auto min-w-[150px]">
        <label className="text-xs text-gray-500 font-semibold mb-1 block">Budget</label>
        <div className="relative">
          <DollarSign size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <select className="w-full pl-10 pr-8 py-2 bg-gray-50 border border-transparent rounded-lg focus:bg-white focus:border-primary focus:outline-none appearance-none cursor-pointer">
            <option>Any Budget</option>
            <option>Under ₹50 L</option>
            <option>₹50 L - ₹1 Cr</option>
            <option>₹1 Cr - ₹3 Cr</option>
            <option>Above ₹3 Cr</option>
          </select>
        </div>
      </div>
      
      <button className="bg-primary text-white p-3 rounded-lg hover:bg-primary-dark transition-colors self-end sm:ml-auto">
        <Search size={20} />
      </button>
    </div>
  );
};

export default FilterBar;
