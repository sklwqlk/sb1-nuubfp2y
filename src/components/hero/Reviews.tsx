import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'John Smith',
    rating: 5,
    comment: 'Amazing service! Got my dream car delivered in just 24 hours.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80'
  },
  {
    name: 'Sarah Johnson',
    rating: 5,
    comment: 'The AI recommendations were spot-on. Found exactly what I needed.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80'
  },
  {
    name: 'Michael Brown',
    rating: 5,
    comment: 'Best car buying experience ever. Everything was smooth and transparent.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80'
  }
];

export default function Reviews() {
  return (
    <section className="py-12 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">What Our Customers Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-[#282828] p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-white font-semibold">{review.name}</h3>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-[#E7F63C] fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-400">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}