import SectionTitle from "./SectionTitle";
import { BookHeart } from "lucide-react";

const StorySection = () => {
  return (
    <section id="story" className="bg-soft-green/30">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          icon={<BookHeart size={28} />}
          title="Transformando um hobby em profissão"
          subtitle="O caminho que me trouxe até aqui"
          centered
        />

        <div className="glass-card p-8 md:p-10 text-lg" data-aos="fade-up">
          <p className="mb-4">
            O toque terapêutico sempre fez parte da minha vida. Desde cedo,
            percebi o poder da massagem para aliviar tensões, relaxamento e dores locais.
          </p>
          <p className="mb-4">
            Após a maternidade, compreendi ainda mais a importância do
            autocuidado e do equilíbrio físico e emocional. Foi então que decidi
            me especializar e transformar minha vocação em profissão.
          </p>
          <p>
            Acredito que o toque certo pode transformar vidas, e minha missão é
            fazer com que cada sessão seja uma experiência única de bem-estar e
            conexão.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
