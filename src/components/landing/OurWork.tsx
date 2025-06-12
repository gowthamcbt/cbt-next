
import SectionWrapper from './SectionWrapper';
import ProjectCard from './ProjectCard';

const projects = [
  {
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "website mockup",
    title: "E-commerce Platform",
    category: "Web Development",
  },
  {
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "mobile app",
    title: "Fitness Tracker App",
    category: "Mobile App",
  },
  {
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "brand identity",
    title: "Corporate Branding",
    category: "UI/UX Design",
  },
  {
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "dashboard interface",
    title: "Data Analytics Dashboard",
    category: "Web Application",
  },
];

export default function OurWork() {
  return (
    <SectionWrapper id="our-work" className="bg-secondary">
      <h2 className="font-headline text-3xl sm:text-4xl font-bold text-center mb-12 uppercase">RECENT WORK</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </SectionWrapper>
  );
}
