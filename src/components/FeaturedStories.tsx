import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const stories = [
  {
    id: 1,
    title: 'How VR is Revolutionizing the Museum Experience',
    excerpt: 'Explore how virtual reality is transforming traditional art spaces and expanding access to cultural heritage.',
    image: 'https://images.unsplash.com/photo-1626379953822-baec19c3accd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    category: 'Technology',
    featured: true
  },
  {
    id: 2,
    title: 'Artist Spotlight: Sofia Rodriguez and Quantum Memory',
    excerpt: 'An interview with the groundbreaking artist about her process and vision for merging quantum computing concepts with visual art.',
    image: 'https://images.unsplash.com/photo-1586520688080-b9cbd259bae1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80',
    category: 'Interview',
    featured: false
  },
  {
    id: 3,
    title: 'The Ethics of AI-Generated Art',
    excerpt: 'A deep dive into the complex questions surrounding authorship, creativity, and the role of artificial intelligence in art creation.',
    image: 'https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    category: 'Opinion',
    featured: false
  }
];

const FeaturedStories = () => {
  const storiesRef = useRef<HTMLDivElement>(null);

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

    const items = document.querySelectorAll('.story-item');
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
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end">
            <div>
              <span className="font-mono uppercase text-neon-green text-sm tracking-wider">Editorial</span>
              <h2 className="editorial-heading mt-2">Latest Stories</h2>
            </div>
            <a 
              href="/editorial" 
              className="group inline-flex items-center mt-4 md:mt-0 font-mono text-sm uppercase tracking-wider hover:text-neon-green transition-colors"
            >
              View All Articles
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Featured story */}
          <div 
            className="story-item reveal-content md:col-span-8 relative overflow-hidden rounded-lg group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10"></div>
            <img 
              src={stories[0].image} 
              alt={stories[0].title} 
              className="w-full h-full object-cover aspect-[16/9] transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 w-full p-8 z-20">
              <span className="inline-block text-xs font-mono uppercase tracking-wider px-2 py-1 rounded bg-neon-green/90 text-black mb-4">
                {stories[0].category}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">{stories[0].title}</h3>
              <p className="text-white/70 mb-4 max-w-2xl">{stories[0].excerpt}</p>
              <button className="px-4 py-2 border border-white/20 hover:border-neon-green hover:text-neon-green transition-colors rounded text-sm">
                Read More
              </button>
            </div>
          </div>
          
          {/* Other stories */}
          <div className="md:col-span-4 space-y-8">
            {stories.slice(1).map((story, index) => (
              <div 
                key={story.id}
                className="story-item reveal-content glass-card overflow-hidden rounded-lg group hover-lift"
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={story.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block text-xs font-mono uppercase tracking-wider px-2 py-1 rounded bg-white/10 text-white/70 mb-3">
                    {story.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                  <p className="text-white/70 text-sm mb-4 line-clamp-2">{story.excerpt}</p>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-sm hover:text-neon-green transition-colors"
                  >
                    Read More
                    <ArrowRight size={14} className="ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedStories;
