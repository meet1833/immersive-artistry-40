
import { useEffect, useRef } from 'react';
import ArtistCarousel from './ArtistCarousel';
import { Link } from 'react-router-dom';

const FeaturedArtists = () => {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.reveal-content');
    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      cards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section className="py-20 reveal-content">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="font-mono uppercase text-neon-pink text-sm tracking-wider">Featured Artists</span>
          <h2 className="editorial-heading mt-2 mb-6">Visionaries Reshaping Reality</h2>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">
            Meet the pioneering artists at the intersection of creativity and immersive technology, pushing the boundaries of what's possible.
          </p>
        </div>

        <ArtistCarousel />
        
        <div className="text-center mt-12">
          <Link to="/artists" className="px-6 py-3 border border-white/20 hover:border-neon-pink hover:text-neon-pink transition-colors rounded font-mono text-sm uppercase tracking-wider inline-block">
            View All Artists
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtists;
