
import { useEffect, useRef } from 'react';

const exhibits = [
  {
    id: 1,
    title: 'Neuromorphic Landscapes',
    artist: 'Maya Winters',
    image: 'https://images.unsplash.com/photo-1633127590229-0d1cb80fc356?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    category: 'Virtual Reality',
    description: 'An immersive journey through landscapes inspired by neural networks and human cognition.'
  },
  {
    id: 2,
    title: 'Digital Ephemera',
    artist: 'Aiden Chen',
    image: 'https://images.unsplash.com/photo-1617791160536-598cf32026fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
    category: 'Augmented Reality',
    description: 'Overlaying digital memories and artifacts onto physical spaces, exploring the transience of digital culture.'
  },
  {
    id: 3,
    title: 'Quantum Memory',
    artist: 'Sofia Rodriguez',
    image: 'https://images.unsplash.com/photo-1618005198919-c0fba0680344?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    category: 'Interactive Installation',
    description: 'A participatory installation where visitor movements generate quantum-inspired visual patterns.'
  },
  {
    id: 4,
    title: 'Echo Chamber',
    artist: 'Julian Black',
    image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    category: 'Mixed Reality',
    description: 'Exploring filter bubbles and information silos through an immersive audio-visual experience.'
  }
];

const ExhibitsGrid = () => {
  const gridRef = useRef<HTMLDivElement>(null);

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

    const items = document.querySelectorAll('.exhibit-item');
    items.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      items.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-black to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="font-mono uppercase text-neon-purple text-sm tracking-wider">Experience</span>
          <h2 className="editorial-heading mt-2 mb-6">Featured Exhibits</h2>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">
            Immerse yourself in groundbreaking digital art installations that challenge perception and expand consciousness.
          </p>
        </div>
        
        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {exhibits.map((exhibit, index) => (
            <div 
              key={exhibit.id}
              className="exhibit-item reveal-content glass-card rounded-lg overflow-hidden group hover-lift"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="aspect-video overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <img 
                  src={exhibit.image} 
                  alt={exhibit.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                  <span className="inline-block text-xs font-mono uppercase tracking-wider px-2 py-1 rounded bg-neon-purple/90 text-white mb-2">
                    {exhibit.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-1">{exhibit.title}</h3>
                <p className="text-neon-purple mb-3">by {exhibit.artist}</p>
                <p className="text-white/70 mb-4">{exhibit.description}</p>
                <div className="flex justify-between items-center">
                  <button className="px-4 py-2 border border-white/20 hover:border-neon-purple hover:text-neon-purple transition-colors rounded text-sm">
                    Explore
                  </button>
                  <div className="text-white/50 text-sm">On view until Oct 15</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-6 py-3 border border-white/20 hover:border-neon-purple hover:text-neon-purple transition-colors rounded font-mono text-sm uppercase tracking-wider">
            View All Exhibits
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExhibitsGrid;
