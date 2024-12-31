import React from 'react';
import { DollarSign, Calendar, Banknote } from 'lucide-react';

const brands = ['All Brands', 'BMW', 'Mercedes', 'Audi', 'Tesla', 'Toyota', 'Honda'];

export default function Filters() {
  return (
    <div className="bg-[#282828] text-white p-6 h-screen sticky top-20 w-80">
      <h2 className="text-xl font-semibold mb-6">Filters</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Brand</label>
          <select className="w-full bg-[#333] border border-gray-600 rounded-md p-2">
            {brands.map(brand => (
              <option key={brand} value={brand.toLowerCase()}>{brand}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 flex items-center">
            <DollarSign className="w-4 h-4 mr-2" />
            Price Range
          </label>
          <input
            type="range"
            className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
            min="0"
            max="200000"
          />
          <div className="flex justify-between text-sm mt-1">
            <span>$0</span>
            <span>$200,000</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 flex items-center">
            <Banknote className="w-4 h-4 mr-2" />
            EMI Range
          </label>
          <input
            type="range"
            className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
            min="0"
            max="2000"
          />
          <div className="flex justify-between text-sm mt-1">
            <span>$0</span>
            <span>$2,000</span>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-medium mb-4">Loan Deals</h3>
          <div className="space-y-4">
            <div className="bg-[#333] p-4 rounded-lg">
              <h4 className="font-medium text-[#E7F63C]">Premium Deal</h4>
              <p className="text-sm text-gray-300">3.5% APR for 60 months</p>
            </div>
            <div className="bg-[#333] p-4 rounded-lg">
              <h4 className="font-medium text-[#E7F63C]">Standard Deal</h4>
              <p className="text-sm text-gray-300">4.5% APR for 72 months</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}