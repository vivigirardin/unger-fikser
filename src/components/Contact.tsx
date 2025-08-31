import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MessageCircle, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="kontakt" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Ta kontakt med oss
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Vi er klare til å hjelpe deg! Ta kontakt for å bestille tjenester 
            eller stille spørsmål.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="bg-card border-0 shadow-elegant">
              <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center space-x-3">
                  <MessageCircle className="w-6 h-6 text-primary" />
                  <span>Send oss en melding</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Navn
                    </label>
                    <Input id="name" placeholder="Ditt navn" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Telefon
                    </label>
                    <Input id="phone" placeholder="Ditt telefonnummer" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="area" className="block text-sm font-medium text-foreground mb-2">
                    Område
                  </label>
                  <Input id="area" placeholder="Hvilket område bor du i?" />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Tjeneste
                  </label>
                  <Input id="service" placeholder="Hvilken tjeneste trenger du?" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Melding
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Fortell oss mer om hva du trenger hjelp til..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button variant="hero" size="lg" className="w-full">
                  Send melding
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-card border-0 shadow-elegant">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Ring oss</h3>
                    <p className="text-muted-foreground">+47 123 45 678</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Hverdager 15:00-19:00, Helger 09:00-20:00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-0 shadow-elegant">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Send e-post</h3>
                    <p className="text-muted-foreground">hei@unghjelp.oslo</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Vi svarer innen 24 timer
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-hero border-0 shadow-elegant">
              <CardContent className="p-8">
                <div className="text-center space-y-4">
                  <Clock className="w-16 h-16 text-primary mx-auto" />
                  <h3 className="text-xl font-bold text-foreground">Åpningstider</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Mandag - Fredag:</span>
                      <span className="font-medium text-foreground">15:00 - 19:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Lørdag - Søndag:</span>
                      <span className="font-medium text-foreground">09:00 - 20:00</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground pt-2">
                    Akutte henvendelser besvares så fort som mulig
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

export default Contact;