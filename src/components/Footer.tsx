
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-soft-green/50 border-t border-brand-100">
      <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-serif font-semibold text-brand-600">
              Débora Terapêuta Corporal
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Terapia corporal para bem-estar e qualidade de vida.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="text-sm text-muted-foreground flex items-center">
              Feito por Matheus <Heart size={14} className="mx-1 text-brand-500" /> em {currentYear}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
