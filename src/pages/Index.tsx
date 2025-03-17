
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import FeaturedArtists from '../components/FeaturedArtists';
import EventsTimeline from '../components/EventsTimeline';
import FeaturedStories from '../components/FeaturedStories';
import ExhibitsGrid from '../components/ExhibitsGrid';
import Newsletter from '../components/Newsletter';

const Index = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      
      <main>
        <HeroSection />
        <FeaturedArtists />
        <ExhibitsGrid />
        <EventsTimeline />
        <FeaturedStories />
        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
