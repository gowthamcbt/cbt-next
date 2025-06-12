
import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import OurValues from '@/components/landing/OurValues';
import Services from '@/components/landing/Services';
import OurWork from '@/components/landing/OurWork';
import About from '@/components/landing/About';
import OurTeam from '@/components/landing/OurTeam';
import Testimonials from '@/components/landing/Testimonials';
import Contact from '@/components/landing/Contact';
import Footer from '@/components/landing/Footer';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <OurValues />
        <Services />
        <OurWork />
        <About />
        <OurTeam />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
