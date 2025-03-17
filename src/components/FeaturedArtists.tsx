
import { useEffect, useRef } from 'react';

const artists = [
  {
    id: 1,
    name: 'Maya Winters',
    title: 'Neuromorphic Landscapes',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
    category: 'Virtual Reality',
  },
  {
    id: 2,
    name: 'Aiden Chen',
    title: 'Digital Ephemera',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    category: 'Augmented Reality',
  },
  {
    id: 3,
    name: 'Sofia Rodriguez',
    title: 'Quantum Memory',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    category: 'Interactive Installations',
  },
  {
    id: 4,
    name: 'Julian Black',
    title: 'Echo Chamber',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    category: 'Mixed Reality',
  },
];

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

    const cards = document.querySelectorAll('.artist-card');
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
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="font-mono uppercase text-neon-pink text-sm tracking-wider">Featured Artists</span>
          <h2 className="editorial-heading mt-2 mb-6">Visionaries Reshaping Reality</h2>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">
            Meet the pioneering artists at the intersection of creativity and immersive technology, pushing the boundaries of what's possible.
          </p>
        </div>

        <div 
          ref={cardsRef} 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {artists.map((artist, index) => (
            <div 
              key={artist.id}
              className="artist-card reveal-content overflow-hidden group rounded-lg"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                <img 
                  src={artist.image} 
                  alt={artist.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                  <span className="inline-block text-xs font-mono uppercase tracking-wider px-2 py-1 rounded bg-neon-pink/90 text-black mb-2">
                    {artist.category}
                  </span>
                  <h3 className="text-xl font-bold">{artist.name}</h3>
                  <p className="text-white/70">{artist.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-6 py-3 border border-white/20 hover:border-neon-pink hover:text-neon-pink transition-colors rounded font-mono text-sm uppercase tracking-wider">
            View All Artists
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtists;
