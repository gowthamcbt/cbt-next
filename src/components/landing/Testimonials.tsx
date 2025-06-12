
import SectionWrapper from './SectionWrapper';
import TestimonialCard from './TestimonialCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "CloverBridgeTech delivered an outstanding product that exceeded our expectations. Highly recommended!",
    name: "John Doe",
    role: "CEO, Tech Solutions",
    avatarUrl: "https://placehold.co/100x100.png",
    avatarHint: "person portrait",
  },
  {
    quote: "Their team is professional, skilled, and a pleasure to work with. Our project was a great success.",
    name: "Jane Smith",
    role: "Marketing Director, Innovate Corp",
    avatarUrl: "https://placehold.co/100x100.png",
    avatarHint: "professional woman",
  },
  {
    quote: "The attention to detail and commitment to quality from CloverBridgeTech was impressive. We are thrilled with the results.",
    name: "Mike Johnson",
    role: "Product Manager, Future Gadgets",
    avatarUrl: "https://placehold.co/100x100.png",
    avatarHint: "person smiling",
  },
   {
    quote: "Working with CloverBridgeTech has been a game-changer for our business. Their innovative solutions and expert team helped us scale effectively.",
    name: "Sarah Lee",
    role: "CTO, Enterprise Solutions",
    avatarUrl: "https://placehold.co/100x100.png",
    avatarHint: "tech professional",
  },
  {
    quote: "The UI/UX design provided by CloverBridgeTech was top-notch. Our users love the new interface!",
    name: "David Kim",
    role: "Founder, StartupX",
    avatarUrl: "https://placehold.co/100x100.png",
    avatarHint: "startup founder",
  },
];

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials" className="bg-secondary">
      <h2 className="font-headline text-3xl sm:text-4xl font-bold text-center mb-12 uppercase">WHAT CLIENTS SAY</h2>
      <div className="relative"> {/* Added relative positioning for arrow buttons */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <TestimonialCard {...testimonial} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </SectionWrapper>
  );
}
