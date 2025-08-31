import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, CheckCircle } from "lucide-react";

const Areas = () => {
  const areas = [
    {
      name: "St. Hanshaugen",
      description: "Sentral beliggenhet med mange familier",
      features: ["Kort responstid", "Mange tilgjengelige hjelpere"]
    },
    {
      name: "Nordstrand",
      description: "Rolig boligområde med mange eldre",
      features: ["Spesialisert på eldrebesøk", "Lokalkjennskap"]
    },
    {
      name: "Søndre Nordstrand",
      description: "Mangfoldig område med stor etterspørsel",
      features: ["Flerspråklige hjelpere", "Flexibel tilgjengelighet"]
    },
    {
      name: "Nordre Aker",
      description: "Etablert område med mange kjæledyreiere",
      features: ["Erfarne dyrepassere", "Naturområder for turer"]
    }
  ];

  return (
    <section id="omrader" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Våre dekningsområder i Oslo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Vi dekker fire hovedområder i Oslo med dedikerte ungdommer 
            som kjenner sitt nabolag godt.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {areas.map((area, index) => (
            <Card key={index} className="bg-card border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-elegant">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg font-bold">{area.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{area.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {area.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-hero rounded-2xl p-8 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <Clock className="w-16 h-16 text-primary mx-auto" />
            <h3 className="text-2xl font-bold text-foreground">Tilgjengelighet</h3>
            <p className="text-lg text-muted-foreground">
              Vi er tilgjengelige etter skoletid (15:00-19:00) på hverdager 
              og hele dagen i helger (09:00-20:00).
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <div className="bg-background/50 rounded-lg p-4">
                <div className="font-semibold text-foreground">Hverdager</div>
                <div className="text-muted-foreground">15:00 - 19:00</div>
              </div>
              <div className="bg-background/50 rounded-lg p-4">
                <div className="font-semibold text-foreground">Helger</div>
                <div className="text-muted-foreground">09:00 - 20:00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Areas;