
import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/80 dark:bg-tech-blue/80 backdrop-blur-md shadow-md py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          href="#home"
          className="text-2xl font-bold text-tech-blue dark:text-white flex items-center"
        >
          <span className="text-tech-accent font-mono">&lt;</span>
          DSP
          <span className="text-tech-accent font-mono">/&gt;</span>
        </a>

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.name}>
                    <a
                      href={item.href}
                      className="text-lg font-medium px-4 py-2 rounded-md hover:bg-muted"
                    >
                      {item.name}
                    </a>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-auto pt-4">
                <Button onClick={toggleTheme} variant="outline" size="icon">
                  {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium rounded-md hover:bg-muted transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <Button onClick={toggleTheme} variant="outline" size="icon">
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
