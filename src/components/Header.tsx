import React from 'react';
import { Home, Car, Phone, Share2 } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-[#282828] text-white py-4 px-6 fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Car className="w-8 h-8 text-[#E7F63C]" />
          <span className="text-xl font-bold">AutoElite</span>
        </div>
        
        <div className="flex items-center space-x-6">
          <button className="flex items-center space-x-2 hover:text-[#E7F63C] transition-colors">
            <Home className="w-5 h-5" />
            <span>Home</span>
          </button>
          <button className="flex items-center space-x-2 hover:text-[#E7F63C] transition-colors">
            <Car className="w-5 h-5" />
            <span>Test Drive</span>
          </button>
          <button className="flex items-center space-x-2 hover:text-[#E7F63C] transition-colors">
            <Phone className="w-5 h-5" />
            <span>Contact</span>
          </button>
          <button className="flex items-center space-x-2 hover:text-[#E7F63C] transition-colors">
            <Share2 className="w-5 h-5" />
            <span>Referral</span>
          </button>
        </div>
      </nav>
    </header>
  );
}