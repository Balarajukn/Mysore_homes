import React, { useState } from 'react';
import FilterBar from '../components/FilterBar';
import PropertyCard from '../components/PropertyCard';
import { dummyProperties } from '../data/dummy';
import { Grid, List } from 'lucide-react';

const Listings = () => {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'

  return (
    <div className="min-h-screen bg-lightGray pt-24 pb-12">
      <div className="container mx-auto px-4">
        
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-darkGray mb-2">Properties for Sale & Rent</h1>
          <p className="text-gray-500">Showing {dummyProperties.length} results in Mysore</p>
        </div>

        <FilterBar />

        <div className="flex justify-between items-center mb-6">
          <div className="text-sm text-gray-500">
            Sort by: <select className="bg-transparent font-semibold text-darkGray focus:outline-none"><option>Relevance</option><option>Price: Low to High</option><option>Price: High to Low</option></select>
          </div>
          
          <div className="flex gap-2 bg-white rounded-lg p-1 shadow-sm border border-gray-100">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${viewMode === 'grid' ? 'bg-primary/10 text-primary' : 'text-gray-400 hover:text-gray-600'}`}
            >
              <Grid size={20} />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${viewMode === 'list' ? 'bg-primary/10 text-primary' : 'text-gray-400 hover:text-gray-600'}`}
            >
              <List size={20} />
            </button>
          </div>
        </div>

        <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
          {dummyProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* Pagination Placeholder */}
        <div className="flex justify-center mt-12">
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-lg flex items-center justify-center border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors">&lt;</button>
            <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary text-white font-bold shadow-md">1</button>
            <button className="w-10 h-10 rounded-lg flex items-center justify-center border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors">2</button>
            <button className="w-10 h-10 rounded-lg flex items-center justify-center border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors">3</button>
            <button className="w-10 h-10 rounded-lg flex items-center justify-center border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors">&gt;</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Listings;
