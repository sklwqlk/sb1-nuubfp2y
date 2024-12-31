import React from 'react';
import { Brain, LineChart, FileCheck, Clock } from 'lucide-react';

const capabilities = [
  {
    icon: Brain,
    title: 'AI-Powered Recommendations',
    description: 'Get personalized car suggestions based on your preferences'
  },
  {
    icon: LineChart,
    title: 'Instant Price Comparisons',
    description: 'Compare prices across different dealers in real-time'
  },
  {
    icon: FileCheck,
    title: 'Hassle-Free Documentation',
    description: 'Complete paperwork online with digital signatures'
  },
  {
    icon: Clock,
    title: 'Express Delivery',
    description: '24-hour delivery for selected models'
  }
];

export default function Capabilities() {
  return (
    <section className="py-12 bg-[#282828]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose AutoElite</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((item, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#E7F63C] mb-4">
                <item.icon className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}