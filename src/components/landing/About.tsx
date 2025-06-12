
import SectionWrapper from './SectionWrapper';
import Image from 'next/image';

export default function About() {
  return (
    <SectionWrapper id="about-us" className="bg-background">
      <h2 className="font-headline text-3xl sm:text-4xl font-bold text-center mb-12 uppercase">WHO WE ARE</h2>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            CloverBridgeTech is a team of passionate developers, designers, and strategists dedicated to crafting exceptional digital experiences. We believe in the power of technology to transform businesses and are committed to delivering innovative solutions that drive growth and efficiency for our clients.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Our collaborative approach ensures that we understand your vision and translate it into a successful digital product. We thrive on challenges and are always exploring new frontiers in technology to bring you the best.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="https://placehold.co/600x400.png"
            alt="Modern office environment"
            width={550}
            height={360}
            className="rounded-lg shadow-xl"
            data-ai-hint="modern office"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
