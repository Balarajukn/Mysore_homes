import { useState } from 'react';
import FilterBar from '../components/FilterBar';
import PropertyCard from '../components/PropertyCard';
import { dummyProperties } from '../data/dummy';
import { Grid, List, SlidersHorizontal } from 'lucide-react';

const SORT_OPTIONS = ['Relevance', 'Price: Low to High', 'Price: High to Low', 'Newest First'];

const Listings = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [sort, setSort] = useState('Relevance');
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-lightGray pt-6 pb-12">
      <div className="container mx-auto px-4">

        {/* Page Header */}
        <div className="mb-5">
          <h1 className="text-2xl md:text-3xl font-bold text-darkGray mb-1">Properties for Sale &amp; Rent</h1>
          <p className="text-sm text-gray-500">Showing {dummyProperties.length} results in Mysore</p>
        </div>

        {/* Filter Bar — hidden on mobile, shown on sm+ */}
        <div className="hidden sm:block">
          <FilterBar />
        </div>

        {/* Mobile filter toggle */}
        <div className="sm:hidden mb-4">
          <button
            onClick={() => setFilterOpen(v => !v)}
            className="flex items-center gap-2 w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold text-darkGray shadow-sm"
          >
            <SlidersHorizontal size={16} className="text-primary" />
            {filterOpen ? 'Hide Filters' : 'Show Filters'}
          </button>
          {filterOpen && (
            <div className="mt-2">
              <FilterBar />
            </div>
          )}
        </div>

        {/* Toolbar: Sort + View Toggle */}
        <div className="flex flex-wrap justify-between items-center gap-3 mb-5">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="font-medium hidden sm:inline">Sort by:</span>
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 font-semibold text-darkGray text-sm focus:outline-none focus:border-primary cursor-pointer"
            >
              {SORT_OPTIONS.map(o => <option key={o}>{o}</option>)}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400 hidden sm:inline">{dummyProperties.length} results</span>
            <div className="flex gap-1 bg-white rounded-lg p-1 shadow-sm border border-gray-100">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded transition-colors ${viewMode === 'grid' ? 'bg-primary/10 text-primary' : 'text-gray-400 hover:text-gray-600'}`}
                title="Grid view"
              >
                <Grid size={18} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded transition-colors ${viewMode === 'list' ? 'bg-primary/10 text-primary' : 'text-gray-400 hover:text-gray-600'}`}
                title="List view"
              >
                <List size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Property Grid / List */}
        <div className={`grid gap-5 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
          {dummyProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-10 gap-2">
          <button className="w-9 h-9 rounded-lg flex items-center justify-center border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors text-sm">&lt;</button>
          {[1, 2, 3].map(n => (
            <button
              key={n}
              className={`w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold transition-colors ${
                n === 1 ? 'bg-primary text-white shadow-md' : 'border border-gray-200 text-gray-500 hover:bg-gray-50'
              }`}
            >
              {n}
            </button>
          ))}
          <button className="w-9 h-9 rounded-lg flex items-center justify-center border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors text-sm">&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Listings;
