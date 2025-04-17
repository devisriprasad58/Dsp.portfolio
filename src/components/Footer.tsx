
import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-tech-blue-light dark:bg-tech-blue text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-center md:text-left">
              &copy; {currentYear} Devi Sri Prasad Reddy. All rights reserved.
            </p>
          </div>
          
          <div>
            <a 
              href="#home"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
