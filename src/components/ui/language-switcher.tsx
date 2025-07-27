import React from 'react';
import { Button } from './button';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ne' : 'en');
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className={cn(
        "flex items-center gap-2 border-border hover:bg-accent",
        "transition-colors duration-200"
      )}
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium">
        {language === 'en' ? 'नेपाली' : 'English'}
      </span>
    </Button>
  );
};