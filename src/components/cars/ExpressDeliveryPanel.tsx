import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import CarCard from '../CarCard';

const expressDeliveryCars = [
  {
    name: 'Tesla Model 3',
    variant: 'Performance',
    type: 'Electric',
    price: 89990,
    emi: 1200,
    delivery: '24 Hours',
    image: 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&w=800&q=80',
    colors: ['#000000', '#FFFFFF', '#FF0000']
  },
  {
    name: 'Porsche Taycan',
    variant: 'Turbo',
    type: 'Electric',
    price: 150900,
    emi: 2100,
    delivery: '24 Hours',
    image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&w=800&q=80',
    colors: ['#2B4562', '#FFFFFF', '#000000']
  }
];

export default function ExpressDeliveryPanel() {
  return (
    <section className="py-12 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <Clock className="h-6 w-6 text-[#E7F63C] mr-2" />
            <h2 className="text-2xl font-bold text-white">Express Delivery</h2>
          </div>
          <button className="flex items-center text-[#E7F63C] hover:opacity-80">
            View All <ArrowRight className="h-4 w-4 ml-1" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expressDeliveryCars.map((car, index) => (
            <CarCard key={index} {...car} />
          ))}
        </div>
      </div>
    </section>
  );
}