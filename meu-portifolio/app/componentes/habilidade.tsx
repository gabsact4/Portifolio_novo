import {
  FaPython,
  FaJs,
  FaReact,
  FaJava,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaAngular,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaAws,
  FaUsers,
  FaLightbulb,
  FaTasks,
  FaBrain,
  FaBook,
  FaComments,
  FaPuzzlePiece,
  FaSyncAlt,
} from "react-icons/fa";

import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiApachecassandra,
  SiNeo4J,
  SiOllama,
  SiSpringboot,
  SiTailwindcss,
} from "react-icons/si";

interface SkillCardProps {
  nome: string;
  Icon: React.ElementType;
}

interface HardSkillProps {
  titulo: string;
  descricao: string;
  projeto: string;
  nivel: string;
  Icon: React.ElementType;
}

interface SoftSkillProps {
  titulo: string;
  descricao: string;
  Icon: React.ElementType;
}

const skillsPorCategoria = {
  Linguagens: [
    { nome: "Python", Icon: FaPython },
    { nome: "JavaScript", Icon: FaJs },
    { nome: "TypeScript", Icon: SiTypescript },
    { nome: "Java", Icon: FaJava },
  ],

  Frontend: [
    { nome: "HTML", Icon: FaHtml5 },
    { nome: "CSS", Icon: FaCss3Alt },
    { nome: "React", Icon: FaReact },
    { nome: "Angular", Icon: FaAngular },
    { nome: "Tailwind CSS", Icon: SiTailwindcss },
    { nome: "Next.js", Icon: SiNextdotjs },
  ],

  Backend: [
    { nome: "Node.js", Icon: FaNodeJs },
    { nome: "Spring Boot", Icon: SiSpringboot },
  ],

  "Banco de Dados": [
    { nome: "MySQL", Icon: SiMysql },
    { nome: "MongoDB", Icon: SiMongodb },
    { nome: "Redis", Icon: SiRedis },
    { nome: "Cassandra", Icon: SiApachecassandra },
    { nome: "Neo4j", Icon: SiNeo4J },
  ],

  "Cloud & DevOps": [
    { nome: "AWS", Icon: FaAws },
    { nome: "Docker", Icon: FaDocker },
    { nome: "Git", Icon: FaGitAlt },
    { nome: "GitHub", Icon: FaGithub },
  ],

  "IA & Ferramentas": [
    { nome: "Ollama", Icon: SiOllama },
  ],
};

const hardSkills: HardSkillProps[] = [
  {
    titulo: "Java & Spring Boot",
    nivel: "Avançado",
    Icon: FaJava,
    descricao:
      "Desenvolvimento de microsserviços, APIs REST, integrações entre serviços, autenticação, DTOs, JPA e arquitetura distribuída.",
    projeto: "Sistema de Controle de Horas - Kernel Panic",
  },

  {
    titulo: "TypeScript & Next.js",
    nivel: "Avançado",
    Icon: SiTypescript,
    descricao:
      "Construção de dashboards, integração com APIs, filtros avançados, exportação de dados e desenvolvimento de interfaces modernas.",
    projeto: "Sistema de Controle de Horas - Kernel Panic",
  },

  {
    titulo: "Docker & Microsserviços",
    nivel: "Intermediário",
    Icon: FaDocker,
    descricao:
      "Configuração de containers, redes Docker, API Gateway, Eureka Server e comunicação entre microsserviços.",
    projeto: "Sistema de Controle de Horas - Kernel Panic",
  },

  {
    titulo: "Banco de Dados SQL & NoSQL",
    nivel: "Avançado",
    Icon: SiMysql,
    descricao:
      "Modelagem, consultas e integrações utilizando MySQL, MongoDB, Redis, Cassandra e Neo4j.",
    projeto: "Projetos Acadêmicos e Profissionais",
  },

  {
    titulo: "Git & GitHub",
    nivel: "Intermediário",
    Icon: FaGithub,
    descricao:
      "Versionamento de código utilizando Git Flow, branches, pull requests e colaboração em equipe.",
    projeto: "Projetos Acadêmicos e Profissionais",
  },
];

const softSkills: SoftSkillProps[] = [
  {
    titulo: "Resolução de Problemas",
    Icon: FaPuzzlePiece,
    descricao:
      "Investigação e correção de falhas em microsserviços, integrações, APIs e infraestrutura Docker.",
  },

  {
    titulo: "Trabalho em Equipe",
    Icon: FaUsers,
    descricao:
      "Colaboração constante entre equipes de frontend, backend e banco de dados durante as sprints.",
  },

  {
    titulo: "Comunicação Técnica",
    Icon: FaComments,
    descricao:
      "Alinhamento entre requisitos de negócio e implementação técnica garantindo consistência entre sistemas.",
  },

  {
    titulo: "Adaptabilidade",
    Icon: FaSyncAlt,
    descricao:
      "Atuação em projetos com diferentes stacks e arquiteturas, adaptando rapidamente soluções e tecnologias.",
  },

  {
    titulo: "Organização",
    Icon: FaTasks,
    descricao:
      "Padronização de código, estrutura de projetos e documentação para facilitar manutenção e escalabilidade.",
  },

  {
    titulo: "Pensamento Analítico",
    Icon: FaBrain,
    descricao:
      "Análise de requisitos de negócio e criação de soluções técnicas eficientes e escaláveis.",
  },

  {
    titulo: "Aprendizado Contínuo",
    Icon: FaBook,
    descricao:
      "Busca constante por novas tecnologias, arquiteturas e boas práticas de desenvolvimento.",
  },

  {
    titulo: "Proatividade",
    Icon: FaLightbulb,
    descricao:
      "Identificação de melhorias e resolução de problemas antes que impactem o desenvolvimento do projeto.",
  },
];

function SkillCard({ nome, Icon }: SkillCardProps) {
  return (
    <div className="group w-[140px] h-[140px] border border-[#2c3624] bg-[#1d2218] rounded-2xl flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#5fb05a] hover:bg-[#232a1d]">
      <Icon className="text-[#aab7a4] text-4xl transition-colors duration-300 group-hover:text-[#8ee08a]" />
      <h2 className="text-[#f2f4ef] text-sm font-medium font-mono text-center px-2">
        {nome}
      </h2>
    </div>
  );
}

export default function Habilidades() {
  return (
    <section id="habilidades" className="bg-[#181c14] py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <p className="font-mono text-[#5fb05a] text-sm text-center mb-2">
          // habilidades
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-[#f2f4ef] text-center mb-4">
          Habilidades & Stack
        </h2>

        <p className="text-[#aab7a4] text-center max-w-3xl mx-auto mb-16">
          Tecnologias, competências e experiências práticas desenvolvidas em
          projetos acadêmicos e profissionais envolvendo microsserviços,
          aplicações web, bancos de dados relacionais e não relacionais,
          DevOps e inteligência artificial.
        </p>

        {Object.entries(skillsPorCategoria).map(([categoria, skills]) => (
          <div key={categoria} className="mb-14 w-full flex flex-col items-center">
            <h3 className="text-xl font-semibold text-[#8ee08a] mb-6 font-mono">
              {categoria}
            </h3>

            <div className="flex flex-wrap justify-center gap-6">
              {skills.map((skill, index) => (
                <SkillCard
                  key={index}
                  nome={skill.nome}
                  Icon={skill.Icon}
                />
              ))}
            </div>
          </div>
        ))}

        <div className="mt-24 w-full">
          <p className="font-mono text-[#5fb05a] text-sm text-center mb-2">
            // experiência prática
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#f2f4ef] text-center mb-16">
            Hard & Soft Skills
          </h2>

          <div className="grid lg:grid-cols-2 gap-10 justify-center">
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-bold text-[#8ee08a] mb-6">
                Hard Skills
              </h3>

              <div className="space-y-5 w-full">
                {hardSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-[#1d2218] border border-[#2c3624] rounded-xl p-6 hover:border-[#5fb05a] transition-colors duration-300 text-center"
                  >
                    <div className="flex flex-col items-center justify-center mb-4 gap-2">
                      <div className="flex items-center justify-center gap-3">
                        <skill.Icon className="text-[#8ee08a] text-2xl" />

                        <h4 className="text-[#f2f4ef] font-semibold">
                          {skill.titulo}
                        </h4>
                      </div>

                      <span className="bg-[#5fb05a] text-[#181c14] text-xs px-3 py-1 rounded-full font-semibold">
                        {skill.nivel}
                      </span>
                    </div>

                    <p className="text-[#aab7a4] text-sm leading-relaxed">
                      {skill.descricao}
                    </p>

                    <p className="text-[#8ee08a] text-xs mt-4 font-medium">
                      Aplicado em: {skill.projeto}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-xl font-bold text-[#8ee08a] mb-6">
                Soft Skills
              </h3>

              <div className="space-y-5 w-full">
                {softSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-[#1d2218] border border-[#2c3624] rounded-xl p-6 hover:border-[#5fb05a] transition-colors duration-300 text-center"
                  >
                    <div className="flex flex-col items-center justify-center gap-3 mb-4">
                      <skill.Icon className="text-[#8ee08a] text-xl" />

                      <h4 className="text-[#f2f4ef] font-semibold">
                        {skill.titulo}
                      </h4>
                    </div>

                    <p className="text-[#aab7a4] text-sm leading-relaxed">
                      {skill.descricao}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}