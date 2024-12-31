import React from 'react';
import { Clock, Tag, ArrowRight } from 'lucide-react';

const featuredCars = [
  {
    name: 'Tesla Model S',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80',
    price: 129990,
    delivery: '24 Hours',
    isExpress: true
  },
  {
    name: 'BMW i8',
    image: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=800&q=80',
    price: 147500,
    discount: '10% OFF',
    isDiscount: true
  }
];

export default function FeaturedCars() {
  return (
    <section className="py-12 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">Featured Cars</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredCars.map((car, index) => (
            <div key={index} className="bg-[#282828] rounded-lg overflow-hidden">
              <div className="relative h-64">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover"
                />
                {car.isExpress && (
                  <div className="absolute top-4 right-4 bg-[#E7F63C] text-black px-3 py-1 rounded-full flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    Express Delivery
                  </div>
                )}
                {car.isDiscount && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full flex items-center">
                    <Tag className="h-4 w-4 mr-1" />
                    {car.discount}
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{car.name}</h3>
                <div className="flex justify-between items-center">
                  <p className="text-2xl font-bold text-[#E7F63C]">
                    ${car.price.toLocaleString()}
                  </p>
                  {car.delivery && (
                    <p className="text-gray-400 flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {car.delivery}
                    </p>
                  )}
                </div>
                <button className="mt-4 w-full bg-[#E7F63C] text-black py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-[#E7F63C] text-[#E7F63C] rounded-lg font-medium hover:bg-[#E7F63C] hover:text-black transition-colors">
            View All Cars
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}