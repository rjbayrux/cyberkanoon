import React from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Shield, CreditCard, Lock, FileText } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const CyberLawLibrary = () => {
  const { t } = useLanguage();

  const lawCategories = [
    {
      title: t('cyberbullying'),
      description: t('cyberbullyingDesc'),
      icon: Shield,
      content: `
        Nepal's Electronic Transaction Act 2063 and Criminal Code 2074 address cyberbullying:
        
        • Section 47 of ETA 2063: Unauthorized access to computer systems
        • Section 294-297 of Criminal Code: Defamation and character assassination
        • Section 298: Outrage of modesty
        • Punishment: Up to 3 years imprisonment or Rs. 3 lakh fine
        
        Protection includes:
        - Screenshots as evidence
        - Police reporting procedures
        - Social media platform reporting
        - Legal remedies available
      `,
      pdfLink: '#'
    },
    {
      title: t('digitalFraud'),
      description: t('digitalFraudDesc'),
      icon: CreditCard,
      content: `
        Digital fraud is covered under multiple acts:
        
        • Electronic Transaction Act 2063 Section 56: Computer fraud
        • Criminal Code 2074 Section 251-253: Fraud and cheating
        • Nepal Rastra Bank regulations on digital payments
        • Punishment: Up to 5 years imprisonment or Rs. 5 lakh fine
        
        Common frauds covered:
        - Online shopping scams
        - Fake investment schemes
        - Identity theft
        - Phishing attacks
      `,
      pdfLink: '#'
    },
    {
      title: t('dataPrivacy'),
      description: t('dataPrivacyDesc'),
      icon: Lock,
      content: `
        Data privacy rights under Nepali law:
        
        • Right to Privacy Act 2075
        • Information Technology Policy 2067
        • Electronic Transaction Act 2063 Section 71-72
        • Constitutional right to privacy (Article 28)
        
        Your rights include:
        - Consent before data collection
        - Right to access your data
        - Right to correction and deletion
        - Protection from unauthorized disclosure
      `,
      pdfLink: '#'
    },
    {
      title: t('eTransactions'),
      description: t('eTransactionsDesc'),
      icon: FileText,
      content: `
        Legal validity of digital transactions:
        
        • Electronic Transaction Act 2063 Section 7-15
        • Contract Act 2056 applies to digital contracts
        • Electronic signature legal validity (Section 16-25)
        • Digital certificate requirements
        
        Valid e-transactions require:
        - Clear terms and conditions
        - Proper electronic signatures
        - Secure authentication
        - Record keeping requirements
      `,
      pdfLink: '#'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {t('cyberLawLibrary')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive guide to Nepal's cyber laws in simplified language
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {lawCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-sm max-w-none mb-6">
                    <pre className="whitespace-pre-wrap text-sm text-muted-foreground font-sans">
                      {category.content}
                    </pre>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open(category.pdfLink, '_blank')}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    {t('downloadPdf')}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CyberLawLibrary;