import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'ne';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    home: 'Home',
    cyberLaws: 'Cyber Laws',
    whatToDo: 'What To Do If...',
    caseStudies: 'Case Studies',
    updates: 'Updates',
    
    // Hero Section
    heroTitle: 'Understand Nepal\'s Cyber Laws',
    heroSubtitle: 'in simple language',
    heroDescription: 'Navigate the digital world safely with comprehensive knowledge of Nepal\'s cyber legislation, your rights, and legal remedies.',
    exploreLaws: 'Explore Cyber Laws',
    
    // Interactive Cards
    hackedFacebook: 'Hacked Facebook?',
    hackedFacebookDesc: 'Learn your rights and step-by-step recovery process',
    onlineHarassment: 'Victim of Online Harassment?',
    onlineHarassmentDesc: 'Know the laws that protect you and how to report',
    onlineScams: 'Online Scams Explained',
    onlineScamsDesc: 'Identify common scams and legal remedies available',
    itActSimple: 'Nepal\'s IT Act 2063 Made Simple',
    itActSimpleDesc: 'Understand your digital rights in easy language',
    
    // Cyber Law Library
    cyberLawLibrary: 'Cyber Law Library',
    cyberbullying: 'Cyberbullying & Harassment',
    cyberbullyingDesc: 'Laws protecting you from online threats and harassment',
    digitalFraud: 'Digital Fraud & Scams',
    digitalFraudDesc: 'Legal framework against online financial crimes',
    dataPrivacy: 'Data Privacy',
    dataPrivacyDesc: 'Your rights regarding personal data protection',
    eTransactions: 'E-transactions & Contracts',
    eTransactionsDesc: 'Legal validity of digital transactions and contracts',
    downloadPdf: 'Download Full PDF',
    
    // Chatbot
    chatbotTitle: 'Legal Guidance Chat',
    chatbotPlaceholder: 'Ask about cyber laws...',
    send: 'Send',
  },
  ne: {
    // Navigation
    home: 'गृहपृष्ठ',
    cyberLaws: 'साइबर कानून',
    whatToDo: 'के गर्ने भने...',
    caseStudies: 'केस स्टडी',
    updates: 'अपडेटहरू',
    
    // Hero Section
    heroTitle: 'नेपालको साइबर कानून बुझ्नुहोस्',
    heroSubtitle: 'सरल भाषामा',
    heroDescription: 'नेपालको साइबर कानून, तपाईंका अधिकार र कानुनी उपचारको व्यापक ज्ञानसँग डिजिटल संसारमा सुरक्षित रूपमा हिँड्नुहोस्।',
    exploreLaws: 'साइबर कानून अन्वेषण गर्नुहोस्',
    
    // Interactive Cards
    hackedFacebook: 'फेसबुक ह्याक भयो?',
    hackedFacebookDesc: 'तपाईंका अधिकार र चरणबद्ध रिकभरी प्रक्रिया सिक्नुहोस्',
    onlineHarassment: 'अनलाइन उत्पीडनको शिकार?',
    onlineHarassmentDesc: 'तपाईंलाई सुरक्षा दिने कानून र रिपोर्ट गर्ने तरिका जान्नुहोस्',
    onlineScams: 'अनलाइन घोटालाको व्याख्या',
    onlineScamsDesc: 'सामान्य घोटालाहरू पहिचान गर्नुहोस् र उपलब्ध कानुनी उपचारहरू',
    itActSimple: 'नेपालको आईटी ऐन २०६३ सरल भाषामा',
    itActSimpleDesc: 'सजिलो भाषामा आफ्ना डिजिटल अधिकारहरू बुझ्नुहोस्',
    
    // Cyber Law Library
    cyberLawLibrary: 'साइबर कानून पुस्तकालय',
    cyberbullying: 'साइबर बुलिङ र उत्पीडन',
    cyberbullyingDesc: 'अनलाइन धम्की र उत्पीडनबाट तपाईंलाई सुरक्षा दिने कानूनहरू',
    digitalFraud: 'डिजिटल जालसाजी र घोटाला',
    digitalFraudDesc: 'अनलाइन आर्थिक अपराधहरू विरुद्धको कानुनी ढाँचा',
    dataPrivacy: 'डाटा गोपनीयता',
    dataPrivacyDesc: 'व्यक्तिगत डाटा सुरक्षा सम्बन्धी तपाईंका अधिकारहरू',
    eTransactions: 'इ-लेनदेन र सम्झौता',
    eTransactionsDesc: 'डिजिटल लेनदेन र सम्झौताहरूको कानुनी वैधता',
    downloadPdf: 'पूर्ण PDF डाउनलोड गर्नुहोस्',
    
    // Chatbot
    chatbotTitle: 'कानुनी मार्गदर्शन च्याट',
    chatbotPlaceholder: 'साइबर कानूनको बारेमा सोध्नुहोस्...',
    send: 'पठाउनुहोस्',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};