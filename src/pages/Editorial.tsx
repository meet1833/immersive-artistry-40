
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Editorial = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <span className="font-mono uppercase text-neon-green text-sm tracking-wider">Knowledge</span>
            <h1 className="editorial-heading mt-2 mb-6">Editorial & Stories</h1>
            <p className="text-xl opacity-80">
              Dive into articles, interviews, and behind-the-scenes stories from the world of immersive art.
            </p>
          </div>
          
          <div className="text-center py-20">
            <p className="text-white/70">Articles coming soon...</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Editorial;
