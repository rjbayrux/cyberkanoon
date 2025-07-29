import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Scale, Shield, AlertTriangle, DollarSign, Users } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { useLanguage } from '@/contexts/LanguageContext';

interface CaseStudy {
  id: string;
  title: string;
  category: 'cyberbullying' | 'fraud' | 'privacy' | 'hacking';
  date: string;
  location: string;
  summary: string;
  lawViolated: string;
  penalty: string;
  lesson: string;
  impact: string;
  severity: 'low' | 'medium' | 'high';
}

export const CaseStudies = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const caseStudies: CaseStudy[] = [
    {
      id: 'case-001',
      title: 'Facebook Profile Misuse Case',
      category: 'cyberbullying',
      date: 'March 2024',
      location: 'Kathmandu',
      summary: 'A student\'s Facebook profile was hacked and used to post inappropriate content and harass classmates. The victim reported to police with evidence.',
      lawViolated: 'Electronic Transaction Act 2063, Section 47 (Computer-related offenses)',
      penalty: 'Perpetrator fined Rs. 50,000 and sentenced to 6 months imprisonment',
      lesson: 'Always use strong passwords and enable two-factor authentication on social media accounts',
      impact: 'Case led to increased awareness about social media security in schools',
      severity: 'medium'
    },
    {
      id: 'case-002',
      title: 'Online Banking Fraud',
      category: 'fraud',
      date: 'January 2024',
      location: 'Pokhara',
      summary: 'Victim received fake bank SMS asking for OTP. After sharing OTP, Rs. 2,50,000 was fraudulently transferred from their account.',
      lawViolated: 'Electronic Transaction Act 2063, Section 56 (Fraudulent activities)',
      penalty: 'Rs. 5,00,000 fine and 2 years imprisonment for the fraudster',
      lesson: 'Banks never ask for OTP via SMS or calls. Never share OTP with anyone',
      impact: 'Led to nationwide awareness campaign by Nepal Rastra Bank',
      severity: 'high'
    },
    {
      id: 'case-003',
      title: 'Workplace Cyberbullying',
      category: 'cyberbullying',
      date: 'February 2024',
      location: 'Lalitpur',
      summary: 'An employee faced continuous harassment through office messaging apps and social media by colleagues, affecting mental health.',
      lawViolated: 'Criminal Code 2074, Sections 294-297 (Harassment and defamation)',
      penalty: 'Perpetrators fined Rs. 25,000 each and mandatory counseling',
      lesson: 'Workplace cyberbullying is a serious offense. Document evidence and report to authorities',
      impact: 'Company implemented strict digital communication policies',
      severity: 'medium'
    },
    {
      id: 'case-004',
      title: 'Data Privacy Breach',
      category: 'privacy',
      date: 'December 2023',
      location: 'Bhaktapur',
      summary: 'A company illegally collected and sold customer data without consent to third-party marketing firms.',
      lawViolated: 'Right to Privacy Act 2075 and Electronic Transaction Act 2063',
      penalty: 'Company fined Rs. 10,00,000 and ordered to implement data protection measures',
      lesson: 'Always read privacy policies and understand how your data is being used',
      impact: 'Led to stricter data protection regulations for businesses',
      severity: 'high'
    },
    {
      id: 'case-005',
      title: 'Online Romance Scam',
      category: 'fraud',
      date: 'November 2023',
      location: 'Chitwan',
      summary: 'Victim was deceived by a fake online romantic partner who requested money for various emergencies. Lost Rs. 3,00,000 over 6 months.',
      lawViolated: 'Electronic Transaction Act 2063, Section 56 and Criminal Code 2074',
      penalty: 'Scammer sentenced to 3 years imprisonment and ordered to pay compensation',
      lesson: 'Be cautious of online relationships, especially when money is involved',
      impact: 'Increased awareness about romance scams among rural communities',
      severity: 'high'
    },
    {
      id: 'case-006',
      title: 'Corporate Email Hacking',
      category: 'hacking',
      date: 'October 2023',
      location: 'Kathmandu',
      summary: 'A corporation\'s email system was compromised, leading to theft of sensitive business information and client data.',
      lawViolated: 'Electronic Transaction Act 2063, Section 56 (Unauthorized access)',
      penalty: 'Hacker group fined Rs. 15,00,000 and 5 years imprisonment',
      lesson: 'Implement robust cybersecurity measures and regular security audits',
      impact: 'Led to mandatory cybersecurity compliance for corporations',
      severity: 'high'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Cases', icon: <Scale className="h-4 w-4" /> },
    { id: 'cyberbullying', label: 'Cyberbullying', icon: <Users className="h-4 w-4" /> },
    { id: 'fraud', label: 'Fraud', icon: <DollarSign className="h-4 w-4" /> },
    { id: 'privacy', label: 'Privacy', icon: <Shield className="h-4 w-4" /> },
    { id: 'hacking', label: 'Hacking', icon: <AlertTriangle className="h-4 w-4" /> }
  ];

  const filteredCases = selectedCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(case_ => case_.category === selectedCategory);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'destructive';
      case 'medium': return 'default';
      case 'low': return 'secondary';
      default: return 'default';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'cyberbullying': return <Users className="h-4 w-4" />;
      case 'fraud': return <DollarSign className="h-4 w-4" />;
      case 'privacy': return <Shield className="h-4 w-4" />;
      case 'hacking': return <AlertTriangle className="h-4 w-4" />;
      default: return <Scale className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Cyber Crime Case Studies
            </h1>
            <p className="text-lg text-muted-foreground">
              Learn from real cases and understand legal consequences
            </p>
          </div>

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
            <TabsList className="grid w-full grid-cols-5">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                  {category.icon}
                  <span className="hidden sm:inline">{category.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="grid gap-6">
            {filteredCases.map((case_) => (
              <Card key={case_.id} className="overflow-hidden">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="flex items-center gap-3 mb-2">
                        {getCategoryIcon(case_.category)}
                        {case_.title}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {case_.date}
                        </span>
                        <span>📍 {case_.location}</span>
                      </CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Badge variant={getSeverityColor(case_.severity) as any}>
                        {case_.severity.toUpperCase()}
                      </Badge>
                      <Badge variant="outline">{case_.category}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="summary" className="w-full">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="summary">Summary</TabsTrigger>
                      <TabsTrigger value="legal">Legal Details</TabsTrigger>
                      <TabsTrigger value="lesson">Lesson</TabsTrigger>
                      <TabsTrigger value="impact">Impact</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="summary" className="mt-4">
                      <p className="text-muted-foreground">{case_.summary}</p>
                    </TabsContent>
                    
                    <TabsContent value="legal" className="mt-4 space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Law Violated:</h4>
                        <p className="text-muted-foreground">{case_.lawViolated}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Penalty:</h4>
                        <p className="text-muted-foreground">{case_.penalty}</p>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="lesson" className="mt-4">
                      <div className="bg-secondary/50 p-4 rounded-lg">
                        <h4 className="font-semibold text-foreground mb-2">Key Lesson:</h4>
                        <p className="text-muted-foreground">{case_.lesson}</p>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="impact" className="mt-4">
                      <div className="bg-primary/10 p-4 rounded-lg">
                        <h4 className="font-semibold text-foreground mb-2">Social Impact:</h4>
                        <p className="text-muted-foreground">{case_.impact}</p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCases.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No cases found for the selected category.</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};