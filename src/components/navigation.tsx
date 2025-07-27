import React from 'react';
import { Shield, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { LanguageSwitcher } from './ui/language-switcher';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  const { t } = useLanguage();
  
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="h-8 w-8 text-primary" />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-foreground">CyberKanoon</span>
            <span className="text-xs text-muted-foreground">साइबर कानून</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            {t('home')}
          </Link>
          <Link to="/cyber-laws" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            {t('cyberLaws')}
          </Link>
          <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            {t('whatToDo')}
          </a>
          <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            {t('caseStudies')}
          </a>
        </div>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Button variant="outline" size="sm" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
};