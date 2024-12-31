import React from 'react';
import { MapPin, DollarSign, Car, Search, SlidersHorizontal } from 'lucide-react';

export default function QuickFilters() {
  return (
    <div className="bg-[#1a1a1a] py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <select className="w-full pl-10 pr-4 py-2 bg-[#282828] border border-gray-700 rounded-md text-gray-300 focus:ring-[#E7F63C] focus:border-[#E7F63C]">
              <option>Select City</option>
              <option>New York</option>
              <option>Los Angeles</option>
              <option>Chicago</option>
            </select>
          </div>
          
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <select className="w-full pl-10 pr-4 py-2 bg-[#282828] border border-gray-700 rounded-md text-gray-300 focus:ring-[#E7F63C] focus:border-[#E7F63C]">
              <option>Price Range</option>
              <option>Under $30,000</option>
              <option>$30,000 - $50,000</option>
              <option>Above $50,000</option>
            </select>
          </div>
          
          <div className="relative">
            <Car className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <select className="w-full pl-10 pr-4 py-2 bg-[#282828] border border-gray-700 rounded-md text-gray-300 focus:ring-[#E7F63C] focus:border-[#E7F63C]">
              <option>Car Type</option>
              <option>Sedan</option>
              <option>SUV</option>
              <option>Sports</option>
            </select>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search cars..."
              className="w-full pl-10 pr-4 py-2 bg-[#282828] border border-gray-700 rounded-md text-gray-300 focus:ring-[#E7F63C] focus:border-[#E7F63C]"
            />
          </div>
          
          <button className="bg-[#E7F63C] text-black px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors flex items-center justify-center">
            <SlidersHorizontal className="h-5 w-5 mr-2" />
            Search Cars
          </button>
        </div>
      </div>
    </div>
  );
}