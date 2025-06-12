
import SectionWrapper from './SectionWrapper';
import ServiceCard from './ServiceCard';
import { LayoutGrid, Smartphone, Palette, Briefcase } from 'lucide-react'; // Added Briefcase

const services = [
  {
    icon: Smartphone,
    title: "App Development",
    description: "We specialize in creating custom mobile and web applications tailored to your unique business needs. Our expert developers leverage the latest technologies to build scalable, secure, and high-performance apps.",
  },
  {
    icon: LayoutGrid,
    title: "Web Development",
    description: "From responsive websites to complex web portals, we deliver comprehensive web development solutions. We focus on user experience, performance, and modern design aesthetics.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Our design team creates intuitive and visually appealing user interfaces that enhance user engagement. We follow a user-centric approach to deliver seamless digital experiences.",
  },
  {
    icon: Briefcase, // Changed icon
    title: "Consultancy", // Changed title
    description: "We provide expert consultancy services to help you strategize, plan, and execute your digital projects. Leverage our industry insights to make informed technology decisions.", // Changed description
  },
];

export default function Services() {
  return (
    <SectionWrapper id="services" className="bg-background">
      <h2 className="font-headline text-3xl sm:text-4xl font-bold text-center mb-12 uppercase">WHAT WE DO</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"> {/* Changed to 2 columns for better text fit */}
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </SectionWrapper>
  );
}
