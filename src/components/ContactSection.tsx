
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, Linkedin, MapPin, Send } from 'lucide-react';

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Thank you for your message!",
        description: "I'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-tech-gray-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center scroll-animate">Get In Touch</h2>
        <div className="h-1 w-20 bg-tech-accent mx-auto mb-12 scroll-animate" style={{ transitionDelay: '100ms' }}></div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="scroll-animate" style={{ transitionDelay: '200ms' }}>
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="text-tech-accent mr-4 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a 
                    href="mailto:reddydevisriprasad@gmail.com" 
                    className="text-muted-foreground hover:text-tech-accent transition-colors"
                  >
                    reddydevisriprasad@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-tech-accent mr-4 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <a 
                    href="tel:+917989563371" 
                    className="text-muted-foreground hover:text-tech-accent transition-colors"
                  >
                    +91 7989563371
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Linkedin className="text-tech-accent mr-4 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-medium mb-1">LinkedIn</h4>
                  <a 
                    href="https://linkedin.com/in/DeviSriPrasad" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-tech-accent transition-colors"
                  >
                    linkedin.com/in/DeviSriPrasad
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="text-tech-accent mr-4 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-muted-foreground">Hyderabad, India</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="scroll-animate" style={{ transitionDelay: '400ms' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-2 font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Subject of your message"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="mr-2" size={16} />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
