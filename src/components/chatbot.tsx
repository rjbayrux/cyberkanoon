import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageCircle, Send, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export const Chatbot = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I can help you understand Nepal\'s cyber laws. Ask me about cyberbullying, online fraud, data privacy, or any cyber crime issues.',
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('cyberbully') || lowerMessage.includes('harassment')) {
      return 'Cyberbullying is covered under Nepal\'s Electronic Transaction Act 2063 Section 47 and Criminal Code 2074 Sections 294-297. You can report to police with screenshots as evidence. Punishment includes up to 3 years imprisonment or Rs. 3 lakh fine.';
    }
    
    if (lowerMessage.includes('scam') || lowerMessage.includes('fraud')) {
      return 'Online fraud falls under Electronic Transaction Act 2063 Section 56 and Criminal Code 2074 Sections 251-253. Report to Cyber Bureau immediately. Keep all evidence like messages, receipts, and transaction details.';
    }
    
    if (lowerMessage.includes('privacy') || lowerMessage.includes('data')) {
      return 'Your data privacy is protected under Right to Privacy Act 2075 and Article 28 of the Constitution. You have rights to consent, access, correction, and deletion of your personal data.';
    }
    
    if (lowerMessage.includes('facebook') || lowerMessage.includes('hacked')) {
      return 'If your account is hacked: 1) Change passwords immediately 2) Enable 2FA 3) Report to platform 4) File police complaint if misused 5) Gather evidence. Under ETA 2063, unauthorized access is punishable.';
    }
    
    if (lowerMessage.includes('report') || lowerMessage.includes('police')) {
      return 'To report cyber crimes: Visit nearest police station or file online at cyberbureau.gov.np. Bring evidence like screenshots, messages, transaction details. You can also call 1144 for immediate help.';
    }
    
    return 'I can help with information about Nepal\'s cyber laws including cyberbullying, online fraud, data privacy, hacking, and how to report cyber crimes. Please ask a specific question about any of these topics.';
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    const botResponse: Message = {
      id: (Date.now() + 1).toString(),
      text: getBotResponse(inputText),
      isBot: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, botResponse]);
    setInputText('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full h-14 w-14 shadow-lg"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className="w-96 h-[500px] shadow-xl">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
          <CardTitle className="text-lg">{t('chatbotTitle')}</CardTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="flex flex-col h-[420px]">
          <div className="flex-1 overflow-y-auto space-y-4 mb-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    message.isBot
                      ? 'bg-secondary text-secondary-foreground'
                      : 'bg-primary text-primary-foreground'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <Input
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={t('chatbotPlaceholder')}
              className="flex-1"
            />
            <Button onClick={handleSendMessage} size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};