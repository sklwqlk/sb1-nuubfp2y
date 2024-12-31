import React from 'react';
import { Tag, ArrowRight } from 'lucide-react';
import CarCard from '../CarCard';

const discountedCars = [
  {
    name: 'BMW 5 Series',
    variant: '530i',
    type: 'Sedan',
    price: 55900,
    emi: 899,
    delivery: '3 Days',
    image: 'https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?auto=format&fit=crop&w=800&q=80',
    colors: ['#2B4562', '#000000', '#FFFFFF']
  },
  {
    name: 'Mercedes-Benz C-Class',
    variant: 'C300',
    type: 'Sedan',
    price: 48900,
    emi: 799,
    delivery: '5 Days',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80',
    colors: ['#FFFFFF', '#000000', '#8B8B8B']
  }
];

export default function DiscountedPanel() {
  return (
    <section className="py-12 bg-[#282828]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <Tag className="h-6 w-6 text-[#E7F63C] mr-2" />
            <h2 className="text-2xl font-bold text-white">Special Offers</h2>
          </div>
          <button className="flex items-center text-[#E7F63C] hover:opacity-80">
            View All <ArrowRight className="h-4 w-4 ml-1" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {discountedCars.map((car, index) => (
            <CarCard key={index} {...car} />
          ))}
        </div>
      </div>
    </section>
  );
}