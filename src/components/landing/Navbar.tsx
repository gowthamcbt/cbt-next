
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import CloverBridgeTechLogo from '@/components/CloverBridgeTechLogo';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useTheme } from "next-themes";
const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about-us', label: 'About Us' },
  // { href: '#our-values', label: 'Our Values' },
  { href: '#services', label: 'Services' },
  { href: '#our-work', label: 'Our Work' },

  { href: '#our-team', label: 'Our Team' },
  // { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact-us', label: 'Contact Us' },
];

export default function Navbar() {
    const {theme} = useTheme();
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="#home" className="mr-6 flex items-center gap-2" prefetch={false}>
        {<img src={`/images/cbt-${theme === 'dark' ? 'white': 'black'}.png`} style={{ width: '18rem' }}/>}
          {/* <CloverBridgeTechLogo className="h-7 w-7" />
          <span className="font-bold text-xl text-foreground">CloverBridgeTech</span> */}
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium ml-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative transition-colors hover:text-primary text-foreground/80"
              prefetch={false}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center ml-6">
          <ThemeToggle />
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="ml-auto md:hidden"> {/* ml-auto pushed it right, now ThemeToggle might need to be before it or handled differently */}
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background">
            <Link href="#home" className="mr-6 flex items-center gap-2 mb-6" prefetch={false}>
              {/* <CloverBridgeTechLogo className="h-7 w-7" />
              <span className="font-bold text-xl text-foreground">CloverBridgeTech</span> */}
              {<img src={`/images/cbt-${theme === 'dark' ? 'white': 'black'}.png`} style={{ width: '18rem' }}/>}
            </Link>
            <nav className="grid gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative flex w-full items-center py-2 text-lg font-semibold transition-colors hover:text-primary text-foreground/80"
                  prefetch={false}
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
                </Link>
              ))}
            </nav>
            <div className="mt-6 pt-6 border-t border-border/50">
              <ThemeToggle />
            </div>
          </SheetContent>
        </Sheet>
        {/* For Mobile view, ThemeToggle is inside SheetContent. For Desktop, it's separate. The mobile trigger needs to be last for layout. */}
        <div className="flex md:hidden items-center ml-2"> {/* This ensures ThemeToggle on mobile is next to Menu icon if Sheet is not used, but it is in Sheet now */}
           {/* If ThemeToggle needs to be outside sheet on mobile too, it would go here. But it's better inside sheet. */}
        </div>
      </div>
    </header>
  );
}
