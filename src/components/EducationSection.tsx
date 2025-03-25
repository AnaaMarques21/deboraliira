
import SectionTitle from "./SectionTitle";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      id: 1,
      mentor: "Dayane Lima",
      title: "Formação em Massoterapia",
      year: "2021",
      description: "Formação completa em Massoterapia com grande suporte e aprendizado contínuo em técnicas terapêuticas."
    },
    {
      id: 2,
      mentor: "Lilian Yaginuma",
      title: "Curso de Massagem de SPA",
      year: "2022",
      description: "Aprendizado de técnicas profissionais utilizadas em grandes Spas e estratégias de marketing para expandir meu atendimento."
    }
  ];

  return (
    <section id="education">
      <SectionTitle
        icon={<GraduationCap size={28} />}
        title="Minha Formação"
        subtitle="Aperfeiçoamento constante para oferecer o melhor"
        centered
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {education.map((item) => (
          <div 
            key={item.id} 
            className="glass-card p-6 md:p-8 transition-all duration-300 hover:shadow-lg" 
            data-aos="fade-up" 
            data-aos-delay={item.id * 100}
          >
            <div className="flex items-start mb-4">
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-brand-100 text-brand-700 font-semibold mr-4">
                {item.id}
              </div>
              <div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-brand-600 font-medium">{item.mentor} • {item.year}</p>
              </div>
            </div>
            <p className="text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
