"use client";

import { useState } from "react";
import ImagemFallback from "./ImagemFallback";

interface Projeto {
  id: number;
  nome: string;
  descricao: string;
  imagens: string[];
  tecnologias: string[];
  github: string;
}

const projetos: Projeto[] = [
  {
    id: 1,
    nome: "Sistema de Analise de Mercado - Chronos",
    descricao:
      "O objetivo do projeto é fornecer uma solução eficiente para monitorar as tendências de mercado.",
    imagens: [
      "/img/api_1(1).png",
      "/img/api_1(2).png",
      "/img/Api_1(3).png",
    ],
    tecnologias: [
      "HTML",
      "CSS",
      "PYTHON",
      "JAVASCRIPT",
      "MYSQL",
      "PANDAS",
      "NUMPY",
      "MATPLOTLIB",
      "AWS",
      "GIT",
      "GITHUB",
      "Flask",
    ],
    github:
      "https://github.com/Team-Chronos/API-DSM-1SEMESTRE-2025.git",
  },
  {
    id: 2,
    nome: "Sistema de Gestão de Relacionamento com o Cliente (CRM) - Chronos",
    descricao:
      "O Newe CRM é uma plataforma que centraliza informações e processos, facilitando o controle de treinamentos, vendas, operações e relatórios.",
    imagens: [
      "/img/api_2(2)_gsw.png",
      "/img/api_2(2)_gws.png",
      "/img/api_2(3)_gws.png",
    ],
    tecnologias: ["TypeScript", "React", "Mysql", "Node.js", "Express"],
    github:
      "https://github.com/Team-Chronos/API-DSM-2SEMESTRE-2025.git",
  },
  {
    id: 3,
    nome: "Sistema de Controle de Horas - Kernel Panic",
    descricao:
      "Plataforma de controle de horas e apontamentos que permite registrar, aprovar e acompanhar atividades e projetos em tempo real.",
    imagens: [
      "/img/embraer.png",
      "/img/embraer(2).png",
      "/img/Embraer(3).png",
    ],
    tecnologias: [
      "Next.js",
      "Tailwind",
      "React",
      "Java",
      "Spring Boot",
      "MySQL",
      "Docker",
    ],
    github:
      "https://github.com/Kernel-Panic-FatecSjc/KP-3DSM-API-FRONTEND.git",
  },
  {
    id: 4,
    nome: "Resort Hospedagem",
    descricao:
      "Sistema de gerenciamento de hospedagem e reservas.",
    imagens: [
      "/img/resort.png",
      "/img/resort2.png",
      "/img/resort3.png",
    ],
    tecnologias: ["TypeScript", "React", "Mysql", "Node.js", "Express"],
    github: "https://github.com/gabsact4/TP-II-AV5.git",
  },
  {
    id: 5,
    nome: "Embraer",
    descricao:
      "Projeto acadêmico desenvolvido para análise e solução de problemas propostos pela Embraer.",
    imagens: [
      "/img/embraer.png",
      "/img/embraer(2).png",
      "/img/Embraer(3).png",
    ],
    tecnologias: ["TypeScript", "React", "Mysql", "Node.js", "Express", "Prisma"],
    github: "https://github.com/gabsact4/AV3.git",
  },
  {
    id: 6,
    nome: "Ollamo",
    descricao:
      "Assistente inteligente integrado ao Telegram utilizando Ollama.",
    imagens: [
      "/img/telegram.png",
      "/img/telegram2.png",
      "/img/telegram3.png",
    ],
    tecnologias: ["Python", "Ollama", "Pandas", "Telegram API"],
    github: "https://github.com/anajrubim/Atividade_IHC.git",
  },
  {
    id: 7,
    nome: "Banco de Dados NoSQL - Mercadinho",
    descricao:
      "Atividade avaliativa de bancos não relacionais, integrando MongoDB, Redis, Cassandra e Neo4j em um único sistema.",
    imagens: [
      "/img/mongoDB.png",
      "/img/neo4j.png",
      "/img/neo4j-12.png",
    ],
    tecnologias: ["Python", "MongoDB", "Redis", "Cassandra", "Neo4j"],
    github: "https://github.com/gabsact4/Banco_Nao_Relacional.git",
  },
];

function ProjectImageCarousel({
  imagens,
  nome,
}: {
  imagens: string[];
  nome: string;
}) {
  const [imagemAtual, setImagemAtual] = useState(0);

  const proximaImagem = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImagemAtual((prev) => (prev + 1) % imagens.length);
  };

  const imagemAnterior = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImagemAtual((prev) => (prev - 1 + imagens.length) % imagens.length);
  };

  return (
    <div className="relative w-full h-[200px] group overflow-hidden rounded-t-2xl">
      <ImagemFallback
        src={imagens[imagemAtual]}
        alt={`${nome} - imagem ${imagemAtual + 1}`}
        fill
        className="object-cover transition-all duration-500 group-hover:scale-105"
      />

      {imagens.length > 1 && (
        <>
          <button
            onClick={imagemAnterior}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Imagem anterior"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <button
            onClick={proximaImagem}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Próxima imagem"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {imagens.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setImagemAtual(index);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === imagemAtual
                    ? "bg-[#62a358] w-4"
                    : "bg-white/60 w-1.5 hover:bg-white/80"
                }`}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function ProjectsGrid() {
  return (
    <section id="projetos" className="py-20 bg-[#12140f] px-4">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-[#5fb05a] text-sm text-center mb-2">
          {"// projetos"}
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-[#f2f4ef] text-center mb-16">
          Meus Projetos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projetos.map((projeto) => (
            <div
              key={projeto.id}
              className="bg-[#1d2218] rounded-2xl overflow-hidden border border-[#2c3624] hover:border-[#5fb05a] transition-all duration-300 hover:shadow-xl hover:shadow-black/30 hover:-translate-y-1"
            >
              <ProjectImageCarousel
                imagens={projeto.imagens}
                nome={projeto.nome}
              />

              <div className="p-5">
                <h3 className="text-[#8ee08a] text-xl font-bold mb-2">
                  {projeto.nome}
                </h3>

                <p className="text-[#aab7a4] text-sm mb-4 line-clamp-2">
                  {projeto.descricao}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {projeto.tecnologias.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-[#5fb05a]/15 text-[#8ee08a] text-xs rounded-full font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={projeto.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-2 border border-[#5fb05a] text-[#8ee08a] rounded-lg text-sm font-medium hover:bg-[#5fb05a]/10 transition-colors"
                >
                  Ver Código no GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}