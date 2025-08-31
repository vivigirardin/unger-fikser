const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">🚀</span>
              </div>
              <h3 className="text-xl font-bold">ungpåfarta</h3>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Kul og pålitelig hjelp fra unge helter i Oslo! 
              Vi kobler sammen gjengen med familier som trenger hjelp. 😄
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
            © 2024 ungpåfarta. Vi eier ingenting, men vi hjelper alle! 🎉
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;