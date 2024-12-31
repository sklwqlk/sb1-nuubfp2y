import React from 'react';
import { Car, Phone, UserPlus } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#282828] border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Car className="h-8 w-8 text-[#E7F63C]" />
            <span className="ml-2 text-xl font-bold text-white">AutoElite</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="text-gray-300 hover:text-[#E7F63C] px-3 py-2 rounded-md text-sm font-medium">
              Buy Car
            </button>
            <button className="text-gray-300 hover:text-[#E7F63C] px-3 py-2 rounded-md text-sm font-medium flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              Contact
            </button>
            <button className="bg-[#E7F63C] text-black px-4 py-2 rounded-md text-sm font-medium flex items-center">
              <UserPlus className="h-4 w-4 mr-2" />
              Sign Up to Explore!
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}