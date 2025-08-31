const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">UH</span>
              </div>
              <h3 className="text-xl font-bold">UngHjelp Oslo</h3>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Trygg og pålitelig hjelp fra ansvarlige ungdommer i Oslo. 
              Vi kobler sammen unge hjelpere med familier som trenger støtte.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Tjenester</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Dyrepass
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Eldrebesøk
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Teknisk hjelp
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Områder</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                  St. Hanshaugen
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Nordstrand
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Søndre Nordstrand
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Nordre Aker
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Kontakt</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-primary-foreground/80">
                Telefon: +47 123 45 678
              </li>
              <li className="text-primary-foreground/80">
                E-post: hei@unghjelp.oslo
              </li>
              <li className="text-primary-foreground/80">
                Hverdager: 15:00-19:00
              </li>
              <li className="text-primary-foreground/80">
                Helger: 09:00-20:00
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80 text-sm">
            © 2024 UngHjelp Oslo. Alle rettigheter forbeholdt.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;