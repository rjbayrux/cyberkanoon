import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ArrowRight, AlertTriangle, Shield, BookOpen } from 'lucide-react';
import facebookHackImage from '@/assets/facebook-hack.jpg';
import harassmentImage from '@/assets/harassment.jpg';
import scamsImage from '@/assets/scams.jpg';
import itActImage from '@/assets/it-act.jpg';
import { useLanguage } from '@/contexts/LanguageContext';

const cardData = [
  {
    title: "Hacked Facebook?",
    titleNepali: "फेसबुक ह्याक भयो?",
    description: "Learn what to do if your social media accounts are compromised",
    descriptionNepali: "तपाईंको सामाजिक सञ्जाल खाता हह्याक भएमा के गर्ने",
    image: facebookHackImage,
    icon: AlertTriangle,
    color: "text-red-500",
    bgColor: "bg-red-50",
    borderColor: "border-red-200"
  },
  {
    title: "Victim of Online Harassment?",
    titleNepali: "अनलाइन उत्पीडनको शिकार?",
    description: "Know your legal rights and how to seek help",
    descriptionNepali: "तपाईंको कानुनी अधिकार र मद्दत कसरी लिने",
    image: harassmentImage,
    icon: Shield,
    color: "text-orange-500",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200"
  },
  {
    title: "Online Scams Explained",
    titleNepali: "अनलाइन झांडाको व्याख्या",
    description: "Identify and protect yourself from digital fraud",
    descriptionNepali: "डिजिटल ठगी पहिचान गर्नुहोस् र सुरक्षित रहनुहोस्",
    image: scamsImage,
    icon: AlertTriangle,
    color: "text-yellow-500",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200"
  },
  {
    title: "Nepal's IT Act 2063 Made Simple",
    titleNepali: "नेपालको सूचना प्रविधि ऐन २०६३",
    description: "Understand your country's cyber laws in plain language",
    descriptionNepali: "सरल भाषामा साइबर कानून बुझ्नुहोस्",
    image: itActImage,
    icon: BookOpen,
    color: "text-primary",
    bgColor: "bg-primary/5",
    borderColor: "border-primary/20"
  }
];

export const InteractiveCards = () => {
  const { t, language } = useLanguage();
  
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Quick Solutions for Common Issues
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get immediate help and guidance for the most common cyber law situations in Nepal
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardData.map((card, index) => (
            <Card 
              key={index}
              className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer ${card.borderColor} border-2`}
            >
              <CardHeader className="space-y-4">
                <div className="relative">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className={`absolute top-4 right-4 p-2 rounded-full ${card.bgColor}`}>
                    <card.icon className={`h-5 w-5 ${card.color}`} />
                  </div>
                </div>
                
                <div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {language === 'en' ? card.title : card.titleNepali}
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription className="text-sm leading-relaxed">
                  {language === 'en' ? card.description : card.descriptionNepali}
                </CardDescription>
                
                <Button 
                  variant="ghost" 
                  className="w-full justify-between p-0 h-auto font-medium group-hover:text-primary"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8">
            View All Topics
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};