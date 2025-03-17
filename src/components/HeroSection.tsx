
import { useEffect, useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      const opacity = 1 - (scrollPosition / 700);
      const translateY = scrollPosition * 0.5;
      
      heroRef.current.style.opacity = opacity > 0 ? opacity.toString() : '0';
      heroRef.current.style.transform = `translateY(${translateY}px)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-background z-10"></div>
      
      {/* Video background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/30 z-[1]"></div>
        <video 
          autoPlay 
          muted 
          loop 
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1594739388650-5d764e086e37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
        >
          <source src="https://player.vimeo.com/external/404603288.sd.mp4?s=2d2bdef3c70973444c34a4827c03a30de9c7ebaa&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Text content */}
      <div 
        ref={heroRef}
        className="relative container mx-auto px-4 h-full flex flex-col justify-center items-start z-20 transition-opacity duration-1000"
        style={{ opacity: isLoaded ? 1 : 0 }}
      >
        <div className="max-w-3xl space-y-6">
          <div className="overflow-hidden inline-block">
            <span className="font-mono uppercase text-neon-pink text-sm tracking-wider animate-text-reveal" style={{ animationDelay: '300ms' }}>
              Xart Exhibit 2023
            </span>
          </div>
          
          <div className="space-y-4">
            <div className="reveal-container">
              <h1 className="editorial-heading animate-text-reveal" style={{ animationDelay: '500ms' }}>
                Where Art Meets <span className="text-neon-pink">Immersive</span> Technologies
              </h1>
            </div>
            
            <div className="reveal-container">
              <p className="text-xl opacity-90 animate-text-reveal" style={{ animationDelay: '700ms' }}>
                Explore boundary-pushing AR/VR art installations, connect with visionary artists, and experience the future of digital expression.
              </p>
            </div>
          </div>
          
          <div className="reveal-container pt-4">
            <div className="animate-text-reveal" style={{ animationDelay: '900ms' }}>
              <button className="px-8 py-3 bg-neon-pink text-black font-medium rounded hover:bg-opacity-90 transition-all hover:scale-105 transform">
                Explore Exhibits
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer animate-bounce"
        onClick={scrollToContent}
      >
        <ChevronDown size={32} className="text-white opacity-80" />
      </div>
    </div>
  );
};

export default HeroSection;
