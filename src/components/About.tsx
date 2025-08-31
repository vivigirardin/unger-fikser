import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Award, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Trygghet først",
      description: "Alle våre ungdommer er nøye utvalgt og har referanser"
    },
    {
      icon: Users,
      title: "Lokal forankring",
      description: "Hjelperne bor i samme område og kjenner lokalsamfunnet"
    },
    {
      icon: Award,
      title: "Kvalitet og ansvar",
      description: "Vi stiller høye krav til service og pålitelighet"
    },
    {
      icon: Heart,
      title: "Omsorg og respekt",
      description: "Våre ungdommer behandler alle med varme og respekt"
    }
  ];

  return (
    <section id="om-oss" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Hvorfor velge UngHjelp Oslo?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Vi er en trygg og pålitelig tjeneste som kobler sammen ansvarlige 
                ungdommer med familier som trenger hjelp. Våre hjelpere er mellom 
                14-17 år og har alle gått gjennom en grundig utvalgsprosess.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ved å velge oss støtter du ikke bare lokale ungdommer i å tjene 
                egne penger og lære ansvar, men du får også kvalitetstjenester 
                til en rimelig pris.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground">Våre verdier</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button variant="hero" size="lg" className="px-8">
              Bli kjent med våre hjelpere
            </Button>
          </div>

          <div className="space-y-6">
            <Card className="bg-card border-0 shadow-elegant">
              <CardContent className="p-8">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-white">14-17</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Aldersgruppe</h3>
                  <p className="text-muted-foreground">
                    Våre hjelpere er i den perfekte alderen for å være både 
                    energiske og ansvarlige.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-0 shadow-elegant">
              <CardContent className="p-8">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Sikkerhet</h3>
                  <p className="text-muted-foreground">
                    Alle hjelpere har referanser og har gått gjennom en 
                    grundig bakgrunnssjekk.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-0 shadow-elegant">
              <CardContent className="p-8">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Erfaring</h3>
                  <p className="text-muted-foreground">
                    Mange av våre hjelpere har lang erfaring med å ta vare på 
                    dyr og hjelpe eldre.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;