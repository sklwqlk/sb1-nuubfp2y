import React from 'react';
import Navbar from '../components/hero/Navbar';
import HeroCarousel from '../components/hero/HeroCarousel';
import QuickFilters from '../components/hero/QuickFilters';
import ExpressDeliveryPanel from '../components/cars/ExpressDeliveryPanel';
import DiscountedPanel from '../components/cars/DiscountedPanel';
import FeaturedCars from '../components/hero/FeaturedCars';
import LoanCalculator from '../components/calculator/LoanCalculator';
import Capabilities from '../components/hero/Capabilities';
import Reviews from '../components/hero/Reviews';

export default function HeroPage() {
  return (
    <div className="min-h-screen bg-[#282828]">
      <Navbar />
      <main>
        <HeroCarousel />
        <QuickFilters />
        <ExpressDeliveryPanel />
        <DiscountedPanel />
        <FeaturedCars />
        <LoanCalculator />
        <Capabilities />
        <Reviews />
      </main>
    </div>
  );
}