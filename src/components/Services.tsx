import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Laptop, PawPrint } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: PawPrint,
      title: "Dyrepass",
      description: "Kjærlig pass av hunder og katter når du er bortreist eller på jobb",
      features: [
        "Daglige turer og lek",
        "Mating og stell",
        "Oppdateringer med bilder",
        "Akutthjelp ved behov"
      ],
      color: "text-primary"
    },
    {
      icon: Heart,
      title: "Eldrebesøk",
      description: "Hyggelig selskap og praktisk hjelp for eldre i nærmiljøet",
      features: [
        "Sosialt samvær og samtaler",
        "Hjelp med innkjøp",
        "Ledsagelse til avtaler",
        "Enkel rengjøring"
      ],
      color: "text-secondary"
    },
    {
      icon: Laptop,
      title: "Teknisk hjelp",
      description: "Hjelp med datamaskiner, telefoner og andre tekniske utfordringer",
      features: [
        "Oppsett av enheter",
        "Installasjon av programmer",
        "Grunnleggende opplæring",
        "Feilsøking og reparasjon"
      ],
      color: "text-accent"
    }
  ];

  return (
    <section id="tjenester" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Våre tjenester
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Vi tilbyr tre hovedtjenester utført av våre pålitelige ungdommer. 
            Alle tjenester er tilgjengelige etter skoletid og i helger.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-0 shadow-elegant hover:shadow-glow transition-all duration-300 hover:transform hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center mb-4`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" className="px-12">
            Se alle priser og bestill
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;