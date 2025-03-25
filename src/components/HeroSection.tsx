import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center pt-20 pb-8 md:pb-20 bg-gradient-to-b from-soft-green/50 to-white relative overflow-hidden"
    >
      <div className="absolute w-72 h-72 rounded-full bg-brand-100 filter blur-3xl opacity-50 -top-10 -left-10 animate-pulse-subtle"></div>
      <div
        className="absolute w-96 h-96 rounded-full bg-soft-blue filter blur-3xl opacity-30 -bottom-20 -right-20 animate-pulse-subtle"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in">
          <div className="chip">Massoterapia Profissional</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
            <span className="text-brand-600">
              Recupere sua energia e bem-estar
            </span>{" "}
            com o toque terapêutico!
          </h1>
          <p className="text-xl text-muted-foreground">
            Relaxamento, alívio de tensões e qualidade de vida.
          </p>
          <div className="pt-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1"
            >
              Agendar consulta
            </a>
          </div>
        </div>

        <div
          className="relative animate-fade-in-right"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="aspect-square max-w-md mx-auto overflow-hidden rounded-3xl shadow-2xl relative z-10">
            <div className="absolute inset-0 bg-gradient-to-t from-brand-500/20 to-transparent z-10"></div>
            <img
              src="public/fotoinicial.jpg"
              alt="Terapeuta corporal realizando massagem"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute w-full h-full -right-4 -bottom-4 bg-brand-100 rounded-3xl -z-0"></div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <a
          href="#about"
          className="flex flex-col items-center text-sm text-muted-foreground"
        >
          <span className="mb-2">Role para baixo</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
