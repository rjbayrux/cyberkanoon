import React from 'react';
import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { InteractiveCards } from '@/components/interactive-cards';
import { Footer } from '@/components/footer';
import { Chatbot } from '@/components/chatbot';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <InteractiveCards />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
