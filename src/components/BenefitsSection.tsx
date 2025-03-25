import SectionTitle from "./SectionTitle";
import { HeartPulse, Check } from "lucide-react";

const TechniquesSection = () => {
  const techniques = [
    {
      id: 1,
      title: "Massagem Terapêutica",
      description:
        "Alívio de dores musculares e tensões através de técnicas específicas.",
    },
    {
      id: 2,
      title: "Massagem Relaxante",
      description:
        "Redução do estresse e promoção do bem-estar físico e mental.",
    },
    {
      id: 3,
      title: "Spa dos Pés",
      description:
        "Tratamento revigorante para os pés, proporcionando relaxamento e conforto.",
    },
    {
      id: 4,
      title: "Aromaterapia",
      description:
        "Uso de óleos essenciais para promover equilíbrio emocional e físico.",
    },
    {
      id: 5,
      title: "Ventosaterapia",
      description:
        "Aplicação de ventosas para melhora da circulação e relaxamento muscular.",
    },
    {
      id: 6,
      title: "Pedras Quentes",
      description:
        "Massagem com pedras aquecidas para um relaxamento profundo.",
    },
    {
      id: 7,
      title: "Candle Massage",
      description:
        "Massagem relaxante com velas especiais que hidratam a pele.",
    },
    {
      id: 8,
      title: "Reflexologia Podal",
      description:
        "Estimulação de pontos nos pés para promover equilíbrio energético.",
    },
    {
      id: 9,
      title: "Cromoterapia",
      description:
        "Uso terapêutico das cores para harmonização do corpo e mente.",
    },
    {
      id: 10,
      title: "Argiloterapia",
      description:
        "Terapia com argilas naturais para cuidados com a pele e bem-estar.",
    },
  ];

  return (
    <section id="techniques" className="bg-soft-green/30">
      <SectionTitle
        icon={<HeartPulse size={28} />}
        title="Técnicas Disponíveis"
        subtitle="Conheça as técnicas aplicadas para promover seu bem-estar"
        centered
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {techniques.map((technique) => (
          <div
            key={technique.id}
            className="technique-card"
            data-aos="fade-up"
            data-aos-delay={technique.id * 100}
          >
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 mr-3">
                <Check size={18} />
              </div>
              <h3 className="text-xl font-serif font-semibold">
                {technique.title}
              </h3>
            </div>
            <p className="text-muted-foreground pl-11">
              {technique.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechniquesSection;
