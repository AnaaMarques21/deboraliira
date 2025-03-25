import { Calendar, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="relative bg-white">
      <div className="absolute w-80 h-80 rounded-full bg-soft-yellow filter blur-3xl opacity-30 -bottom-20 -left-20"></div>

      <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
        <div className="chip mb-4">
          <Calendar size={14} className="mr-1" /> Agendamento Facilitado
        </div>
        <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
          Agende sua sessão e sinta os benefícios das terapias personalizadas.
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Atendimentos no Studio, localizado na:
          <br />
          <strong>QNP 16 Conjunto M Lote 02</strong>
          <br />
          E também em domicílio.
          <br />
          Siga no Instagram: <strong>@deboraa.lira</strong>
          <br />
          Vem saber mais... 👇🏻
        </p>

        <a
          href="https://api.whatsapp.com/send/?phone=5561981889960&text=Ol%C3%A1%2C+vim+atrav%C3%A9s+do+site+e+quero+agendar+uma+consulta.&type=phone_number&app_absent=0 "
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 text-lg"
        >
          <Send size={18} className="mr-2" />
          Agendar no WhatsApp
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
