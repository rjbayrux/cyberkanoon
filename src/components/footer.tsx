import React from 'react';
import { Shield, Phone, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-cyber-dark text-white">
      <div className="container py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-primary" />
              <div>
                <div className="text-xl font-bold">CyberKanoon</div>
                <div className="text-sm text-gray-400">साइबर कानून</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Nepal's comprehensive cyber law awareness platform. Empowering citizens 
              with knowledge about digital rights and cybersecurity.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/cyber-laws" className="text-gray-300 hover:text-primary transition-colors">Cyber Law Library</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">What To Do If...</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Case Studies</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Legal Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://lawcommission.gov.np/content/13397/electronic--electronic--traded-international-act--2063/" className="text-gray-300 hover:text-primary transition-colors">IT Act 2063</a></li>
              <li><a href="https://mocit.gov.np/content/268/268-e-consultations-digital-nepal/" className="text-gray-300 hover:text-primary transition-colors">Digital Nepal Framework</a></li>
              <li><a href="https://cyberbureau.nepalpolice.gov.np/report-cyber-crime/" className="text-gray-300 hover:text-primary transition-colors">Cyber Bureau Reports</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Emergency Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary" />
                <span className="text-gray-300">Nepal Police: 100</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-secondary" />
                <span className="text-gray-300">https://cyberbureau.nepalpolice.gov.np/</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-secondary" />
                <span className="text-gray-300">Cyber Bureau, Kathmandu</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2024 CyberKanoon. All rights reserved. | Developed for Nepal's digital safety.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};