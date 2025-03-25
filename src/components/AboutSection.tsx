import SectionTitle from "./SectionTitle";
import { User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="relative">
      <div className="absolute w-72 h-72 rounded-full bg-soft-yellow filter blur-3xl opacity-30 top-20 -right-20"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="relative order-2 md:order-1" data-aos="fade-right">
          <div className="aspect-[4/5] max-w-md mx-auto overflow-hidden rounded-3xl shadow-xl relative z-10">
            <div className="absolute inset-0 bg-gradient-to-t from-brand-500/20 to-transparent z-10"></div>
            <img
              src="/deboralira.jpg"
              alt="Débora Terapeuta Corporal"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute w-full h-full -left-4 -bottom-4 bg-brand-100 rounded-3xl -z-0"></div>
        </div>
        
        <div className="order-1 md:order-2" data-aos="fade-left">
          <SectionTitle
            icon={<User size={28} />}
            title="Olá, me chamo Débora!"
            subtitle="Tenho 27 anos e sou Terapeuta Corporal."
          />
          <div className="space-y-4 text-lg">
            <p>
              Desde 2021, me especializei em massoterapia e técnicas terapêuticas.
              Com três anos de experiência, meu objetivo é proporcionar equilíbrio
              e bem-estar através do toque.
            </p>
            <p>
              Cada sessão é personalizada para atender às necessidades específicas
              do cliente, promovendo relaxamento profundo e alívio de tensões acumuladas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
