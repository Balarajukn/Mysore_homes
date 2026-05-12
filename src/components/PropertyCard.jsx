import React from 'react';
import { MapPin, Bed, Bath, Square, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white rounded-2xl shadow-soft overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300 group">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={property.images[0]} 
          alt={property.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary">
          {property.status}
        </div>
        <button className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-400 hover:text-red-500 transition-colors">
          <Heart size={18} />
        </button>
        <div className="absolute bottom-4 left-4">
          <span className="bg-darkGray/80 backdrop-blur-sm text-white px-3 py-1 rounded-lg font-bold">
            {property.price}
          </span>
        </div>
      </div>
      
      <div className="p-4 md:p-5">
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <MapPin size={14} className="mr-1 text-primary" />
          {property.locality}, {property.city}
        </div>
        
        <Link to={`/property/${property.id}`}>
          <h3 className="text-base md:text-lg font-bold text-darkGray mb-3 md:mb-4 hover:text-primary transition-colors line-clamp-1">
            {property.title}
          </h3>
        </Link>
        
        <div className="flex justify-between items-center text-xs md:text-sm text-gray-600 border-t border-gray-100 pt-3 md:pt-4">
          {property.bhk > 0 && (
            <div className="flex items-center">
              <Bed className="w-4 h-4 md:w-4 md:h-4 mr-1 text-gray-400" />
              <span>{property.bhk} Beds</span>
            </div>
          )}
          {property.baths > 0 && (
            <div className="flex items-center">
              <Bath className="w-4 h-4 md:w-4 md:h-4 mr-1 text-gray-400" />
              <span>{property.baths} Baths</span>
            </div>
          )}
          <div className="flex items-center">
            <Square className="w-4 h-4 md:w-4 md:h-4 mr-1 text-gray-400" />
            <span>{property.area}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
