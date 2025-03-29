
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

type Artist = {
  id: number;
  name: string;
  title: string;
  bio: string;
  image: string;
  category: string;
};

const artists: Artist[] = [
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
    name: "Sagar Singh",
    title: "Spatial Design & Architecture",
    bio: "Co-founder of SA Ladakh. Designer | Creative Strategist | Artist | Space Designer | BIM architect",
    image: "/lovable-uploads/6306e457-b6f2-49e4-977e-453c269cc335.png",
    category: "Architecture & Design",
  },
  {
    id: 3,
    name: "Maya Winters",
    title: "Neuromorphic Landscapes",
    bio: "Exploring the intersection of neural networks and visual art through immersive VR environments.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    category: "Virtual Reality",
  },
  {
    id: 4,
    name: "Aiden Chen",
    title: "Digital Ephemera",
    bio: "Creating fleeting digital moments that challenge our perception of permanence in the digital age.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "Augmented Reality",
  },
  {
    id: 5,
    name: "Sofia Rodriguez",
    title: "Quantum Memory",
    bio: "Investigating memory and identity through interactive installations and mixed reality experiences.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "Interactive Installations",
  },
];

const ArtistCarousel = () => {
  return (
    <div className="w-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {artists.map((artist) => (
            <CarouselItem key={artist.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <Card className="bg-black/40 border border-white/10 hover:border-neon-pink/50 transition-all overflow-hidden group h-full">
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
                    
                    <p className="text-white/80 line-clamp-3">{artist.bio}</p>
                    
                    <div className="flex justify-between items-center mt-2">
                      <span className="inline-block text-xs font-mono uppercase tracking-wider px-3 py-1 rounded bg-neon-pink/90 text-black">
                        {artist.category}
                      </span>
                      <Link 
                        to="/artists" 
                        className="flex items-center text-sm text-white/70 hover:text-neon-pink transition-colors"
                      >
                        View <ChevronRight size={16} />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-4 mt-8">
          <CarouselPrevious className="static transform-none bg-black/50 hover:bg-neon-pink/80 hover:text-black border-neon-pink/50" />
          <CarouselNext className="static transform-none bg-black/50 hover:bg-neon-pink/80 hover:text-black border-neon-pink/50" />
        </div>
      </Carousel>
    </div>
  );
};

export default ArtistCarousel;
