
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import CloverBridgeTechLogo from '@/components/CloverBridgeTechLogo';

const footerNavLinks = [
  { href: '#home', label: 'Home' },
  { href: '#our-values', label: 'Our Values' },
  { href: '#services', label: 'Services' },
  { href: '#our-work', label: 'Portfolio' },
  { href: '#about-us', label: 'About Us' },
  { href: '#our-team', label: 'Our Team' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact-us', label: 'Contact Us' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8 items-center">
          <div className="flex flex-col items-center md:items-start">
            <Link href="#home" className="flex items-center gap-2 mb-2" prefetch={false}>
              <CloverBridgeTechLogo className="h-7 w-7" />
              <span className="font-bold text-xl text-foreground">CloverBridgeTech</span>
            </Link>
            <p className="text-sm text-center md:text-left text-foreground/70">Crafting digital excellence.</p>
          </div>
          
          <nav className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-x-6 gap-y-2">
            {footerNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-foreground/80 hover:text-primary transition-colors"
                prefetch={false}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex justify-center md:justify-end space-x-4">
            <Link href="#" className="text-foreground/70 hover:text-primary transition-colors" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-foreground/70 hover:text-primary transition-colors" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-foreground/70 hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-foreground/70 hover:text-primary transition-colors" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </div>
        <div className="border-t border-border/50 pt-8 text-center">
          <p className="text-sm text-foreground/70">&copy; {currentYear} CloverBridgeTech.dev. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
