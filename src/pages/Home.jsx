import React, { useState } from 'react';
import { dummyProperties, topBuilders, bhkFilters, propertyTypes, budgetFilters, servicesData } from '../data/dummy';
import PropertyCard from '../components/PropertyCard';
import { Search, MapPin, Building, ShieldCheck, Home as HomeIcon, Wallet, Paintbrush, Scale, Truck, ClipboardEdit, Mic, ChevronDown, BedDouble, Users, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const SEARCH_TABS = ['Buy', 'Rent', 'Commercial', 'Plot'];
const POPULAR_LOCATIONS = ['Vijayanagar', 'Kuvempunagar', 'Gokulam', 'Hebbal'];

const Home = () => {
  const highDemandProperties = dummyProperties.filter(p => p.featured);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-lightGray font-sans">
      {/* Hero Section */}
      <section className="relative h-[450px] md:h-[550px] flex items-center justify-center bg-darkGray overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80" 
            alt="Mysuru Real Estate" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
        </div>
        
        <div className="relative z-20 text-center px-4 w-full max-w-5xl mt-8 md:mt-10">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 drop-shadow-md">
            Buy, Sell & Rent Properties in Mysuru
          </h1>
          <p className="text-sm md:text-xl lg:text-2xl text-gray-200 mb-6 md:mb-10 flex items-center justify-center gap-2 md:gap-3 font-medium flex-wrap">
            <span className="bg-primary/90 text-white px-2 py-1 md:px-3 md:py-1 rounded text-xs md:text-base">Free Listing</span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="text-primary-light text-xs md:text-base">Zero Brokerage</span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="flex items-center text-xs md:text-base"><ShieldCheck size={16} className="mr-1 text-green-400 md:w-5 md:h-5"/> RERA-Verified</span>
          </p>
          

        </div>

        {/* Post Requirement Floating Button */}
        <div className="absolute bottom-4 right-4 md:bottom-10 md:right-10 z-30">
          <Link to="/post-requirement" className="bg-primary text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-bold shadow-[0_0_20px_rgba(184,134,11,0.6)] hover:scale-105 hover:bg-primary-dark transition-all flex items-center gap-1 md:gap-2 border-2 border-white/20 animate-pulse text-xs md:text-base">
            <ClipboardEdit className="w-4 h-4 md:w-5 md:h-5" />
            <span className="hidden sm:inline">Post The Requirement</span>
            <span className="sm:hidden">Post Req</span>
          </Link>
        </div>
      </section>

      {/* Search and Categories Section */}
      <section className="container mx-auto px-4 -mt-16 md:-mt-20 relative z-30 mb-12">
        <div className="bg-white rounded-2xl shadow-2xl max-w-4xl mx-auto border border-gray-100 overflow-hidden">

          {/* Tab Bar */}
          <div className="flex border-b border-gray-100">
            {SEARCH_TABS.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`flex-1 py-3 md:py-4 text-xs md:text-sm font-bold tracking-wide transition-all duration-200 ${
                  activeTab === idx
                    ? 'text-primary border-b-2 border-primary bg-primary/5'
                    : 'text-gray-500 hover:text-primary hover:bg-gray-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search Body */}
          <div className="p-4 md:p-6 flex flex-col gap-3">

            {/* Location Input */}
            <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all duration-200">
              <MapPin className="ml-4 text-primary w-5 h-5 shrink-0" />
              <input
                type="text"
                placeholder="Search by locality, project, or landmark..."
                className="w-full px-3 py-3.5 md:py-4 bg-transparent focus:outline-none text-darkGray text-sm md:text-base placeholder-gray-400 font-medium"
              />
              <button className="mr-3 p-1.5 rounded-lg text-gray-400 hover:text-primary hover:bg-gray-100 transition-colors" title="Voice search">
                <Mic className="w-4 h-4" />
              </button>
            </div>

            {/* Filter Row */}
            <div className="flex flex-wrap gap-2 md:gap-3">

              {/* Property Type */}
              <div className="relative flex-1 min-w-[130px]">
                <HomeIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                <select className="w-full pl-9 pr-8 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-semibold text-gray-600 appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 cursor-pointer hover:border-primary/50 transition-colors">
                  <option>Property Type</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Plot</option>
                  <option>Commercial</option>
                </select>
                <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>

              {/* BHK */}
              <div className="relative flex-1 min-w-[110px]">
                <BedDouble className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                <select className="w-full pl-9 pr-8 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-semibold text-gray-600 appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 cursor-pointer hover:border-primary/50 transition-colors">
                  <option>BHK</option>
                  <option>1 BHK</option>
                  <option>2 BHK</option>
                  <option>3 BHK</option>
                  <option>4+ BHK</option>
                </select>
                <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>

              {/* Budget */}
              <div className="relative flex-1 min-w-[130px]">
                <Wallet className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                <select className="w-full pl-9 pr-8 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-semibold text-gray-600 appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 cursor-pointer hover:border-primary/50 transition-colors">
                  <option>Budget</option>
                  <option>Under ₹50L</option>
                  <option>₹50L – ₹1Cr</option>
                  <option>₹1Cr – ₹3Cr</option>
                  <option>Above ₹3Cr</option>
                </select>
                <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>

              {/* Search Button */}
              <button className="bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-2.5 rounded-xl font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 text-sm whitespace-nowrap">
                <Search className="w-4 h-4" /> Search
              </button>
            </div>

            {/* Popular Locations */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 pt-1">
              <span className="font-semibold text-gray-400">Popular:</span>
              {POPULAR_LOCATIONS.map((loc, i) => (
                <button key={i} className="flex items-center gap-1 bg-gray-100 hover:bg-primary/10 hover:text-primary px-2.5 py-1 rounded-full transition-colors font-medium">
                  <MapPin className="w-3 h-3" /> {loc}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recently Added Properties */}
      <section className="py-16 px-4 container mx-auto">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-darkGray mb-2">Recently Added Properties</h2>
            <p className="text-gray-500 font-medium">New properties listed in Mysuru</p>
          </div>
          <Link to="/listings" className="text-primary font-bold hover:text-primary-dark hidden md:block">
            View All Projects &rarr;
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highDemandProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mt-32 -mr-32 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -mb-32 -ml-32 pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
            <span className="inline-block text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-3 bg-primary/10 px-4 py-1.5 rounded-full">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-darkGray mb-4">Complete Real Estate Services</h2>
            <p className="text-sm md:text-lg text-gray-500 font-medium leading-relaxed">Everything you need for your property journey — from financing to moving in, we've got you covered.</p>
          </div>

          {/* Trust Stats Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 mb-12 md:mb-16">
            {[
              { value: '1,200+', label: 'Happy Customers', Icon: Users },
              { value: '500+', label: 'Properties Listed', Icon: Building },
              { value: '50+', label: 'Expert Advisors', Icon: UserCheck },
              { value: '100%', label: 'RERA Verified', Icon: ShieldCheck },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-2xl p-4 md:p-5 flex items-center gap-3 md:gap-4 shadow-sm border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                  <stat.Icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-extrabold text-primary leading-tight">{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-500 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
            {servicesData.map((service, idx) => {
              const colorMap = {
                blue:   { topBar: 'bg-blue-500',   iconBg: 'bg-blue-500',   badge: 'bg-blue-100 text-blue-700',     checkBg: 'bg-blue-500',   btn: 'bg-blue-500 hover:bg-blue-600',   border: 'hover:border-blue-200' },
                purple: { topBar: 'bg-purple-500', iconBg: 'bg-purple-500', badge: 'bg-purple-100 text-purple-700', checkBg: 'bg-purple-500', btn: 'bg-purple-500 hover:bg-purple-600', border: 'hover:border-purple-200' },
                green:  { topBar: 'bg-green-600',  iconBg: 'bg-green-600',  badge: 'bg-green-100 text-green-700',   checkBg: 'bg-green-600',  btn: 'bg-green-600 hover:bg-green-700',   border: 'hover:border-green-200' },
                amber:  { topBar: 'bg-amber-500',  iconBg: 'bg-amber-500',  badge: 'bg-amber-100 text-amber-700',   checkBg: 'bg-amber-500',  btn: 'bg-amber-500 hover:bg-amber-600',   border: 'hover:border-amber-200' },
              };
              const c = colorMap[service.color] || colorMap.blue;

              return (
                <div key={idx} className={`bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.12)] border border-gray-100 ${c.border} transition-all duration-500 group cursor-pointer hover:-translate-y-2 flex flex-col`}>
                  {/* Colored accent bar */}
                  <div className={`h-1.5 w-full ${c.topBar}`}></div>

                  <div className="p-6 flex flex-col flex-1">
                    {/* Icon + Badge */}
                    <div className="flex items-start justify-between mb-5">
                      <div className={`w-14 h-14 ${c.iconBg} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {service.icon === 'wallet'      && <Wallet    className="w-7 h-7" />}
                        {service.icon === 'paint-brush' && <Paintbrush className="w-7 h-7" />}
                        {service.icon === 'scale'       && <Scale     className="w-7 h-7" />}
                        {service.icon === 'truck'       && <Truck     className="w-7 h-7" />}
                      </div>
                      <span className={`${c.badge} text-xs font-bold px-2.5 py-1 rounded-full`}>{service.stats}</span>
                    </div>

                    {/* Title + Desc */}
                    <h3 className="text-lg font-bold text-darkGray mb-2 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.desc}</p>

                    {/* Feature List */}
                    <ul className="space-y-2.5 mb-6 flex-1">
                      {service.features.map((feature, fi) => (
                        <li key={fi} className="flex items-center gap-2.5 text-sm text-gray-600 font-medium">
                          <div className={`w-4 h-4 ${c.checkBg} rounded-full flex items-center justify-center flex-shrink-0`}>
                            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <button className={`w-full ${c.btn} text-white py-2.5 rounded-xl font-bold text-sm transition-all duration-300 shadow-md group-hover:shadow-lg`}>
                      {service.cta} &rarr;
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* View All Services */}
          <div className="text-center mt-10 md:mt-12">
            <a href="#" className="inline-flex items-center gap-2 text-primary font-bold text-sm md:text-base border border-primary/30 hover:border-primary px-6 py-2.5 rounded-full hover:bg-primary/5 transition-all duration-300">
              View All Services <span>&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* Top Real Estate Builders */}
      <section className="py-10 md:py-16 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-3xl font-bold text-darkGray mb-2 text-center">Top Real Estate Builders in Mysuru</h2>
          <p className="text-sm md:text-base text-gray-500 text-center mb-8 md:mb-10 font-medium">Brigade, Prestige, Sankalp, Pathak & more</p>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
            {topBuilders.map((builder, idx) => (
              <Link to="/search" key={idx} className="group flex flex-col items-center">
                <div className="w-20 h-20 md:w-32 md:h-32 rounded-full overflow-hidden mb-2 md:mb-4 border-2 md:border-4 border-gray-50 shadow-md group-hover:border-primary/30 transition-all duration-300 group-hover:shadow-lg">
                  <img src={builder.image} alt={builder.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <span className="font-bold text-xs md:text-base text-darkGray group-hover:text-primary transition-colors text-center">{builder.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Filter by Rooms */}
      <section className="py-10 md:py-16 container mx-auto px-4">
        <h2 className="text-xl md:text-3xl font-bold text-darkGray mb-6 md:mb-10 text-center">Filter by Rooms</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
          {bhkFilters.map((bhk, idx) => (
            <Link to="/listings" key={idx} className="relative h-28 md:h-40 rounded-xl overflow-hidden group shadow-sm hover:shadow-md transition-shadow">
              <img src={bhk.image} alt={bhk.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white/90 backdrop-blur-sm text-darkGray font-bold py-1.5 px-4 md:py-2 md:px-6 rounded-full shadow-sm text-xs md:text-base">{bhk.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Property Types */}
      <section className="py-10 md:py-16 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-3xl font-bold text-darkGray mb-2 text-center">Apartments, Villas, Plots & More</h2>
          <p className="text-sm md:text-base text-gray-500 text-center mb-8 md:mb-10 font-medium">Every property type across Mysuru — all free to browse</p>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {propertyTypes.map((type, idx) => (
              <Link to="/listings" key={idx} className="bg-gray-50 rounded-xl md:rounded-2xl p-4 md:p-8 text-center border border-gray-100 hover:border-primary hover:bg-primary/5 transition-all duration-300 group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-3 md:mb-4 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                  {type.icon === 'building' && <Building className="w-6 h-6 md:w-7 md:h-7" />}
                  {type.icon === 'home' && <HomeIcon className="w-6 h-6 md:w-7 md:h-7" />}
                  {type.icon === 'map' && <MapPin className="w-6 h-6 md:w-7 md:h-7" />}
                </div>
                <h3 className="text-sm md:text-xl font-bold text-darkGray">{type.label}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Specific Budget */}
      <section className="py-10 md:py-16 container mx-auto px-4">
        <h2 className="text-xl md:text-3xl font-bold text-darkGray mb-6 md:mb-10 text-center">Specific budget?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {budgetFilters.map((budget, idx) => (
            <Link to="/listings" key={idx} className="relative h-48 md:h-64 rounded-xl md:rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-shadow">
              <img src={budget.img} alt={budget.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">{budget.label}</h3>
                <p className="text-primary-light font-bold text-sm md:text-lg">{budget.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Post Property Banner */}
      <section className="py-10 md:py-16 container mx-auto px-4 mb-8">
        <div className="bg-darkGray rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between border border-gray-800">
          <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-primary/20 rounded-full blur-2xl md:blur-3xl -mr-10 -mt-10 md:-mr-20 md:-mt-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-primary/10 rounded-full blur-2xl md:blur-3xl -ml-10 -mb-10 md:-ml-20 md:-mb-20"></div>
          
          <div className="relative z-10 md:w-2/3 mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4">Looking for Tenants/Buyers?</h2>
            <ul className="text-gray-300 space-y-2 md:space-y-3 mb-4 md:mb-6 font-medium text-sm md:text-lg flex flex-col items-center md:items-start">
              <li className="flex items-center"><ShieldCheck className="text-primary mr-2 md:mr-3 w-5 h-5 md:w-6 md:h-6"/> Verified Tenants/Buyers</li>
              <li className="flex items-center"><ShieldCheck className="text-primary mr-2 md:mr-3 w-5 h-5 md:w-6 md:h-6"/> Unlimited Property Listing</li>
              <li className="flex items-center"><ShieldCheck className="text-primary mr-2 md:mr-3 w-5 h-5 md:w-6 md:h-6"/> Zero subscription/charges fee</li>
            </ul>
          </div>
          <div className="relative z-10 md:w-1/3 text-center md:text-right w-full">
            <Link to="/dashboard" className="inline-block bg-primary text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold text-base md:text-xl hover:bg-primary-light transition-colors shadow-lg shadow-primary/20 w-full md:w-auto text-center">
              Post Free Property Ad
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
