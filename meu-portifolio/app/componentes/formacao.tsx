interface EventoFormacao {
  ano: string;
  titulo: string;
  descricao: string;
}

const trajetoria: EventoFormacao[] = [
  {
    ano: "2026",
    titulo: "Maratona de Programação FATEC",
    descricao:
      "Desenvolvimento de solução algorítmica para otimização logística. Classificação entre as 10 melhores equipes.",
  },
  {
    ano: "2025",
    titulo: "Semana de Tecnologia FATEC",
    descricao:
      "Participação em workshops de Inteligência Artificial e Cloud Computing.",
  },
  {
    ano: "2024",
    titulo: "Hackathon",
    descricao: "Desenvolvimento de aplicativo para gestão de resíduos urbanos.",
  },
];

export default function Formacao() {
  return (
    <section id="formacao" className="bg-[#181c14] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="font-mono text-[#5fb05a] text-sm text-center mb-2">// trajetoria</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#f2f4ef] text-center mb-16">
          Formação &amp; Trajetória
        </h2>

        <div className="relative pl-8">
          <div className="absolute left-[7px] top-1 bottom-1 w-px bg-[#2c3624]" />

          <ol className="space-y-12">
            {trajetoria.map((evento) => (
              <li key={evento.ano} className="relative">
                <span className="absolute -left-8 top-1.5 w-3.5 h-3.5 rounded-full bg-[#12140f] border-2 border-[#5fb05a]" />

                <span className="font-mono text-[#8ee08a] text-sm">{evento.ano}</span>
                <h3 className="text-xl font-semibold text-[#f2f4ef] mt-1">
                  {evento.titulo}
                </h3>
                <p className="text-[#aab7a4] mt-2 leading-relaxed max-w-2xl">
                  {evento.descricao}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
