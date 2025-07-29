import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, Phone, FileText, Shield, AlertTriangle } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { useLanguage } from '@/contexts/LanguageContext';

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  urgent?: boolean;
}

interface Scenario {
  id: string;
  title: string;
  description: string;
  steps: Step[];
  emergencyContacts: string[];
}

export const WhatToDo = () => {
  const { t } = useLanguage();
  const [selectedScenario, setSelectedScenario] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(0);

  const scenarios: Scenario[] = [
    {
      id: 'hacked-social',
      title: t('hackedFacebook'),
      description: 'Your social media account has been compromised',
      steps: [
        {
          id: 1,
          title: 'Secure Your Account Immediately',
          description: 'Change passwords on all accounts, enable 2FA, and log out of all devices',
          icon: <Shield className="h-5 w-5" />,
          urgent: true
        },
        {
          id: 2,
          title: 'Document Everything',
          description: 'Take screenshots of unauthorized posts/messages, note time and date',
          icon: <FileText className="h-5 w-5" />
        },
        {
          id: 3,
          title: 'Report to Platform',
          description: 'Use platform reporting tools to report the hack and request account recovery',
          icon: <AlertTriangle className="h-5 w-5" />
        },
        {
          id: 4,
          title: 'File Police Report',
          description: 'Visit cyber crime unit with evidence. Call 1144 for immediate assistance',
          icon: <Phone className="h-5 w-5" />
        }
      ],
      emergencyContacts: ['Nepal Police Cyber Bureau: 01-4412344', 'Emergency: 1144']
    },
    {
      id: 'online-harassment',
      title: t('onlineHarassment'),
      description: 'Experiencing cyberbullying or online threats',
      steps: [
        {
          id: 1,
          title: 'Do Not Engage',
          description: 'Do not respond to harassment. Block the harasser immediately',
          icon: <Shield className="h-5 w-5" />,
          urgent: true
        },
        {
          id: 2,
          title: 'Preserve Evidence',
          description: 'Screenshot messages, save URLs, note dates and times of incidents',
          icon: <FileText className="h-5 w-5" />
        },
        {
          id: 3,
          title: 'Report to Platform',
          description: 'Use platform reporting mechanisms to report harassment',
          icon: <AlertTriangle className="h-5 w-5" />
        },
        {
          id: 4,
          title: 'File Legal Complaint',
          description: 'File complaint under Criminal Code 2074 Sections 294-297 at nearest police station',
          icon: <Phone className="h-5 w-5" />
        }
      ],
      emergencyContacts: ['Women and Children Service Center: 1145', 'Nepal Police Cyber Bureau: 01-4412344']
    },
    {
      id: 'financial-fraud',
      title: t('onlineScams'),
      description: 'Victim of online financial fraud or scams',
      steps: [
        {
          id: 1,
          title: 'Contact Bank Immediately',
          description: 'Call your bank to freeze accounts and report unauthorized transactions',
          icon: <Phone className="h-5 w-5" />,
          urgent: true
        },
        {
          id: 2,
          title: 'Gather Transaction Evidence',
          description: 'Collect receipts, SMS confirmations, emails, and transaction history',
          icon: <FileText className="h-5 w-5" />
        },
        {
          id: 3,
          title: 'File Cyber Crime Report',
          description: 'Report to Cyber Bureau with all evidence within 24 hours',
          icon: <AlertTriangle className="h-5 w-5" />
        },
        {
          id: 4,
          title: 'Follow Legal Process',
          description: 'Cooperate with investigation under Electronic Transaction Act 2063 Section 56',
          icon: <Shield className="h-5 w-5" />
        }
      ],
      emergencyContacts: ['Nepal Rastra Bank: 01-4410158', 'Cyber Bureau: cyberbureau.gov.np']
    }
  ];

  const selectedScenarioData = scenarios.find(s => s.id === selectedScenario);

  if (!selectedScenario) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-foreground mb-4">
                What To Do If...
              </h1>
              <p className="text-lg text-muted-foreground">
                Step-by-step guidance for common cyber crime situations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {scenarios.map((scenario) => (
                <Card 
                  key={scenario.id}
                  className="cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setSelectedScenario(scenario.id)}
                >
                  <CardHeader>
                    <CardTitle className="text-xl">{scenario.title}</CardTitle>
                    <CardDescription>{scenario.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{scenario.steps.length} Steps</Badge>
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Button 
            variant="ghost" 
            onClick={() => setSelectedScenario(null)}
            className="mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Scenarios
          </Button>

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              {selectedScenarioData?.title}
            </h1>
            <p className="text-muted-foreground">{selectedScenarioData?.description}</p>
          </div>

          {/* Emergency Contacts */}
          <Card className="mb-6 border-destructive">
            <CardHeader>
              <CardTitle className="flex items-center text-destructive">
                <Phone className="h-5 w-5 mr-2" />
                Emergency Contacts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {selectedScenarioData?.emergencyContacts.map((contact, index) => (
                  <div key={index} className="text-sm font-medium">{contact}</div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Steps */}
          <div className="grid gap-6">
            {selectedScenarioData?.steps.map((step, index) => (
              <Card 
                key={step.id}
                className={`${step.urgent ? 'border-destructive' : ''} ${
                  index <= currentStep ? 'bg-secondary/50' : ''
                }`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center">
                      {step.icon}
                      <span className="ml-3">Step {step.id}: {step.title}</span>
                      {step.urgent && <Badge variant="destructive" className="ml-2">Urgent</Badge>}
                    </CardTitle>
                    {index <= currentStep && (
                      <Badge variant="secondary">Completed</Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{step.description}</p>
                  {index === currentStep && (
                    <Button 
                      onClick={() => setCurrentStep(currentStep + 1)}
                      disabled={currentStep >= selectedScenarioData.steps.length - 1}
                    >
                      Mark as Complete
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {currentStep >= selectedScenarioData.steps.length && (
            <Card className="mt-6 border-success">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-success mb-2">
                    All Steps Completed!
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    You've followed all the recommended steps. Keep all documentation safe for legal proceedings.
                  </p>
                  <Button onClick={() => setCurrentStep(0)}>
                    Reset Steps
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};