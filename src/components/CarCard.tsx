import React from 'react';
import { Calendar, DollarSign, Car } from 'lucide-react';

interface CarCardProps {
  name: string;
  variant: string;
  type: string;
  price: number;
  emi: number;
  delivery: string;
  image: string;
  colors: string[];
}

export default function CarCard({
  name,
  variant,
  type,
  price,
  emi,
  delivery,
  image,
  colors
}: CarCardProps) {
  return (
    <div className="bg-[#282828] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute bottom-4 right-4 flex space-x-2">
          {colors.map(color => (
            <button
              key={color}
              className="w-6 h-6 rounded-full border-2 border-white"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold text-white">{name}</h3>
            <p className="text-gray-400">{variant} · {type}</p>
          </div>
          <span className="bg-[#E7F63C] text-black px-3 py-1 rounded-full text-sm font-medium">
            New
          </span>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-[#E7F63C]">
              <DollarSign className="w-5 h-5 mr-1" />
              <span className="text-2xl font-bold">${price.toLocaleString()}</span>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-400">EMI from</p>
              <p className="text-white font-medium">${emi}/mo</p>
            </div>
          </div>

          <div className="flex items-center text-gray-400">
            <Calendar className="w-4 h-4 mr-2" />
            <span>Estimated Delivery: {delivery}</span>
          </div>

          <div className="space-y-2">
            <button className="w-full flex items-center justify-center bg-transparent border border-[#E7F63C] text-[#E7F63C] py-2 rounded-lg font-medium hover:bg-[#E7F63C] hover:text-black transition-colors">
              <Car className="w-4 h-4 mr-2" />
              Test Drive
            </button>
            <button className="w-full bg-[#E7F63C] text-black py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}