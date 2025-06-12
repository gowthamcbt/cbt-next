
import SectionWrapper from './SectionWrapper';
import TeamMemberCard from './TeamMemberCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const teamMembers = [
  {
    imageUrl: "https://placehold.co/128x128.png",
    imageHint: "male professional",
    name: "Muru",
    role: "Lead Developer",
  },
  {
    imageUrl: "https://placehold.co/128x128.png",
    imageHint: "female designer",
    name: "Yukesh",
    role: "UX/UI Design Lead",
  },
  {
    imageUrl: "https://placehold.co/128x128.png",
    imageHint: "project manager",
    name: "Balaji",
    role: "Project Manager",
  },
  {
    imageUrl: "https://placehold.co/128x128.png",
    imageHint: "marketing specialist",
    name: "Gowtham",
    role: "Marketing Specialist",
  },
  {
    imageUrl: "https://placehold.co/128x128.png",
    imageHint: "software engineer",
    name: "Kamaraj",
    role: "Software Engineer",
  },
];

export default function OurTeam() {
  return (
    <SectionWrapper id="our-team" className="bg-background">
      <h2 className="font-headline text-3xl sm:text-4xl font-bold text-center mb-12 uppercase">MEET OUR TEAM</h2>
      <div className="relative">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto"
        >
          <CarouselContent>
            {teamMembers.map((member, index) => (
              <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <div className="p-1 h-full">
                  <TeamMemberCard {...member} />
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

