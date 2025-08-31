import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Trygg og pålitelig hjelp fra
              <span className="bg-gradient-primary bg-clip-text text-transparent"> ungdommer i Oslo</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Våre ansvarlige ungdommer mellom 14-17 år tilbyr kjærlighetsfullt dyrepass, 
              eldrebesøk og teknisk hjelp i ditt nabolag. Tilgjengelig etter skolen og i helger.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Bestill tjeneste nå
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Les mer om oss
            </Button>
          </div>

          <div className="flex items-center space-x-8 pt-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Fornøyde familier</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">4</div>
              <div className="text-sm text-muted-foreground">Dekket områder</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Trygghet</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative z-10">
            <img 
              src={heroImage} 
              alt="Ungdommer som hjelper eldre og passer på kjæledyr i Oslo"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-primary rounded-2xl transform rotate-3 scale-105 opacity-20"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;