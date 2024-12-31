import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=2000&q=80',
    title: 'Save Big on Luxury EVs',
    subtitle: 'AI-driven recommendations for your perfect match'
  },
  {
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=2000&q=80',
    title: 'Premium SUVs Available',
    subtitle: 'Exclusive deals on top brands'
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  return (
    <div className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center text-center">
            <div className="max-w-3xl px-4">
              <h1 className="text-5xl font-bold text-white mb-4">{slide.title}</h1>
              <p className="text-xl text-gray-200">{slide.subtitle}</p>
              <button className="mt-8 bg-[#E7F63C] text-black px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors">
                Explore Now
              </button>
            </div>
          </div>
        </div>
      ))}
      
      <button
        onClick={() => setCurrentSlide(current => (current === 0 ? slides.length - 1 : current - 1))}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/50 p-2 rounded-full text-white hover:bg-black/70"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={() => setCurrentSlide(current => (current === slides.length - 1 ? 0 : current + 1))}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/50 p-2 rounded-full text-white hover:bg-black/70"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? 'bg-[#E7F63C]' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}