
import { useState, useEffect, useRef } from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'Opening Night Reception',
    date: 'Sept 12, 2023',
    time: '7:00 PM - 10:00 PM',
    location: 'Main Gallery Hall',
    description: 'Exclusive preview of the exhibit with artists in attendance.',
    featured: true
  },
  {
    id: 2,
    title: 'AR Workshop: Creating Living Artworks',
    date: 'Sept 14, 2023',
    time: '2:00 PM - 5:00 PM',
    location: 'Tech Lab B',
    description: 'Hands-on workshop exploring augmented reality art techniques.',
    featured: false
  },
  {
    id: 3,
    title: 'Panel: The Future of Immersive Storytelling',
    date: 'Sept 15, 2023',
    time: '4:00 PM - 6:00 PM',
    location: 'Conference Room A',
    description: 'Leading artists and technologists discuss the evolution of narrative in digital spaces.',
    featured: true
  },
  {
    id: 4,
    title: 'VR Experience: Quantum Dreams',
    date: 'Sept 16-17, 2023',
    time: '11:00 AM - 8:00 PM',
    location: 'Immersion Zone',
    description: 'A curated collection of boundary-pushing VR experiences.',
    featured: false
  }
];

const EventsTimeline = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const timelineRef = useRef<HTMLDivElement>(null);

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

    const items = document.querySelectorAll('.timeline-item');
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
    <section className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="font-mono uppercase text-neon-blue text-sm tracking-wider">Schedule</span>
          <h2 className="editorial-heading mt-2 mb-6">Upcoming Events</h2>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">
            Join us for exclusive exhibitions, workshops, and performances at the cutting edge of art and technology.
          </p>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              className={`px-4 py-2 rounded-full font-mono text-sm uppercase tracking-wider transition-colors ${
                activeTab === 'upcoming' 
                  ? 'bg-neon-blue text-black' 
                  : 'border border-white/20 hover:border-neon-blue hover:text-neon-blue'
              }`}
              onClick={() => setActiveTab('upcoming')}
            >
              Upcoming
            </button>
            <button 
              className={`px-4 py-2 rounded-full font-mono text-sm uppercase tracking-wider transition-colors ${
                activeTab === 'past' 
                  ? 'bg-neon-blue text-black' 
                  : 'border border-white/20 hover:border-neon-blue hover:text-neon-blue'
              }`}
              onClick={() => setActiveTab('past')}
            >
              Past Events
            </button>
          </div>
        </div>
        
        <div 
          ref={timelineRef}
          className="max-w-4xl mx-auto relative"
        >
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-8 w-px bg-white/10 ml-1.5 hidden md:block"></div>
          
          <div className="space-y-12">
            {events.map((event, index) => (
              <div 
                key={event.id}
                className="timeline-item reveal-content md:grid md:grid-cols-[80px_1fr] gap-8 relative"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Circle marker */}
                <div className="absolute top-0 left-0 w-4 h-4 rounded-full bg-neon-blue hidden md:block"></div>
                
                {/* Date */}
                <div className="text-sm font-mono mb-3 md:mb-0 opacity-70 md:text-right md:pr-6">
                  {event.date.split(',')[0]}<br />
                  {event.date.split(',')[1]}
                </div>
                
                {/* Content */}
                <div className={`glass-card p-6 rounded-lg ${event.featured ? 'border-neon-blue' : ''}`}>
                  {event.featured && (
                    <div className="inline-block px-2 py-1 bg-neon-blue/20 text-neon-blue text-xs font-mono uppercase rounded mb-3">
                      Featured
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                  <p className="text-white/70 mb-4">{event.description}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-white/60">
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      {event.location}
                    </div>
                  </div>
                  
                  <button className="mt-4 px-4 py-2 border border-white/20 hover:border-neon-blue hover:text-neon-blue transition-colors rounded text-sm">
                    RSVP
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="px-6 py-3 border border-white/20 hover:border-neon-blue hover:text-neon-blue transition-colors rounded font-mono text-sm uppercase tracking-wider">
              View Full Schedule
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsTimeline;
