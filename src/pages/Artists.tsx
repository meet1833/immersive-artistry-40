
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

type Artist = {
  id: number;
  name: string;
  title: string;
  bio: string;
  image: string;
  category: string;
};

const artistsData: Artist[] = [
  {
    id: 1,
    name: "Sajid Wajid",
    title: "Digital Frontiers",
    bio: "Creative Director & Founder @SO LAB. ART/EXPERIENCES/ExperiMENTS",
    image: "/lovable-uploads/454eba7a-bf0b-49d9-a1f3-e8da56555b6e.png",
    category: "Digital Art",
  },
  {
    id: 2,
    name: "Maya Winters",
    title: "Neuromorphic Landscapes",
    bio: "Exploring the intersection of neural networks and visual art through immersive VR environments.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    category: "Virtual Reality",
  },
  {
    id: 3,
    name: "Aiden Chen",
    title: "Digital Ephemera",
    bio: "Creating fleeting digital moments that challenge our perception of permanence in the digital age.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "Augmented Reality",
  },
  {
    id: 4,
    name: "Sofia Rodriguez",
    title: "Quantum Memory",
    bio: "Investigating memory and identity through interactive installations and mixed reality experiences.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "Interactive Installations",
  },
];

const Artists = () => {
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
            <span className="font-mono uppercase text-neon-pink text-sm tracking-wider">Creators</span>
            <h1 className="editorial-heading mt-2 mb-6">Featured Artists</h1>
            <p className="text-xl opacity-80">
              Discover the visionary artists pushing the boundaries of immersive technology and digital art.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {artistsData.map((artist) => (
              <Card key={artist.id} className="bg-black/40 border border-white/10 hover:border-neon-pink/50 transition-all overflow-hidden group">
                <CardContent className="p-0">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
                    <img 
                      src={artist.image} 
                      alt={artist.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="p-6 flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-14 h-14 border-2 border-neon-pink">
                        <AvatarImage src={artist.image} alt={artist.name} />
                        <AvatarFallback>{artist.name.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-bold text-xl">{artist.name}</h3>
                        <span className="text-sm text-white/70">{artist.title}</span>
                      </div>
                    </div>
                    
                    <p className="text-white/80">{artist.bio}</p>
                    
                    <div className="flex justify-between items-center mt-2">
                      <span className="inline-block text-xs font-mono uppercase tracking-wider px-3 py-1 rounded bg-neon-pink/90 text-black">
                        {artist.category}
                      </span>
                      <button className="text-sm text-white/70 hover:text-neon-pink transition-colors">
                        View Portfolio →
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Artists;
