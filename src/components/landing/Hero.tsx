
import AnimatedHeadlineCarousel from './AnimatedHeadlineCarousel';

export default function Hero() {
  const headlineItems = [
    {
      title: "Invigorate Your Business",
      subtitle: "We enable business growth through innovative and transformational technology services."
    },
    {
      title: "Solution Focus",
      subtitle: "Team up with us to build digital engineering solutions for your business."
    },
    {
      title: "Customer Centricity",
      subtitle: "We strive to ensure delightful customer experience through our customized and differentiated solutions."
    }
  ];

  return (
    <section id="home" className="relative h-[500px] min-h-[400px] flex items-center justify-center text-center text-white overflow-hidden">
      {/* 
        Video Background:
        The video is now sourced from Pexels.
        The poster image is a fallback or shown while the video loads.
      */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 filter blur-sm"
        poster="https://placehold.co/1920x1080.png" // Poster image
        data-ai-poster-hint="digital matrix" // AI hint for the poster
      >
        <source src="https://videos.pexels.com/video-files/4964616/4964616-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="absolute inset-0 bg-black/70 z-10"></div> {/* Darker overlay */}
      
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <AnimatedHeadlineCarousel items={headlineItems} interval={4500} />
      </div>
    </section>
  );
}
