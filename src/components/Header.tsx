import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-fun rounded-lg flex items-center justify-center animate-pulse">
            <span className="text-white font-bold text-sm">🚀</span>
          </div>
          <h1 className="text-xl font-bold text-foreground">ungpåfarta</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#tjenester" className="text-muted-foreground hover:text-primary transition-colors">
            Tjenester
          </a>
          <a href="#omrader" className="text-muted-foreground hover:text-primary transition-colors">
            Områder
          </a>
          <a href="#om-oss" className="text-muted-foreground hover:text-primary transition-colors">
            Om oss
          </a>
          <a href="#kontakt" className="text-muted-foreground hover:text-primary transition-colors">
            Kontakt
          </a>
        </nav>

        <Button variant="hero" size="lg">
          Bestill tjeneste
        </Button>
      </div>
    </header>
  );
};

export default Header;