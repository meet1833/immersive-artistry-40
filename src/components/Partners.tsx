
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Building, Award, Heart, Star, Zap } from "lucide-react";

const partnersData = [
  {
    name: "TechVision Labs",
    description: "Pioneering VR development studio",
    icon: Building
  },
  {
    name: "ArtSpace Global",
    description: "International art exhibition platform",
    icon: Award
  },
  {
    name: "CreativeCore",
    description: "Digital art collective and incubator",
    icon: Heart
  },
  {
    name: "Immerse Studios",
    description: "AR experience designers",
    icon: Star
  },
  {
    name: "FutureCanvas",
    description: "Next-gen digital gallery",
    icon: Zap
  }
];

const Partners = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-background/80 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-10">
          <span className="font-mono uppercase text-neon-purple text-sm tracking-wider">Collaboration</span>
          <h2 className="text-3xl md:text-4xl font-display mt-2 mb-6">Our Partners</h2>
          <p className="text-lg opacity-80">
            Collaborating with industry leaders to push the boundaries of immersive art experiences.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {partnersData.map((partner, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <Card className="bg-card/20 backdrop-blur-sm border border-white/10 hover:border-neon-purple/50 transition-all group h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center h-full">
                    <div className="w-16 h-16 rounded-full bg-neon-purple/10 flex items-center justify-center mb-4 group-hover:bg-neon-purple/20 transition-all">
                      <partner.icon className="w-8 h-8 text-neon-purple" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                    <p className="text-sm text-muted-foreground">{partner.description}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6 space-x-4">
            <CarouselPrevious className="static translate-y-0 mx-2" />
            <CarouselNext className="static translate-y-0 mx-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Partners;
