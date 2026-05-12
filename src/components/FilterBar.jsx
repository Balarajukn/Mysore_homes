import { Search, MapPin, Home, Wallet, ChevronDown } from 'lucide-react';

const FilterBar = () => (
  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6">
    <div className="flex flex-col sm:flex-row flex-wrap gap-3 items-stretch sm:items-end">

      {/* Location */}
      <div className="flex-1 min-w-0">
        <label className="text-xs text-gray-500 font-semibold mb-1.5 block">Location</label>
        <div className="relative">
          <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Locality, City..."
            className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border border-transparent rounded-lg focus:bg-white focus:border-primary focus:outline-none transition-colors text-sm"
          />
        </div>
      </div>

      {/* Property Type */}
      <div className="w-full sm:w-auto sm:min-w-[160px]">
        <label className="text-xs text-gray-500 font-semibold mb-1.5 block">Property Type</label>
        <div className="relative">
          <Home size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          <select className="w-full pl-9 pr-8 py-2.5 bg-gray-50 border border-transparent rounded-lg focus:bg-white focus:border-primary focus:outline-none appearance-none cursor-pointer text-sm font-medium text-gray-600">
            <option>All Types</option>
            <option>Apartment</option>
            <option>Villa</option>
            <option>Site</option>
            <option>Commercial</option>
          </select>
          <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* Budget */}
      <div className="w-full sm:w-auto sm:min-w-[160px]">
        <label className="text-xs text-gray-500 font-semibold mb-1.5 block">Budget</label>
        <div className="relative">
          <Wallet size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          <select className="w-full pl-9 pr-8 py-2.5 bg-gray-50 border border-transparent rounded-lg focus:bg-white focus:border-primary focus:outline-none appearance-none cursor-pointer text-sm font-medium text-gray-600">
            <option>Any Budget</option>
            <option>Under ₹50 L</option>
            <option>₹50 L – ₹1 Cr</option>
            <option>₹1 Cr – ₹3 Cr</option>
            <option>Above ₹3 Cr</option>
          </select>
          <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* Search Button */}
      <button className="bg-primary text-white px-6 py-2.5 rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 font-bold text-sm w-full sm:w-auto shrink-0">
        <Search size={16} />
        Search
      </button>
    </div>
  </div>
);

export default FilterBar;
