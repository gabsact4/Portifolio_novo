import { FaDownload, FaArrowRight } from "react-icons/fa";
import ImagemFallback from "../componentes/ImagemFallback";

export default function Homepage() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-[#12140f] overflow-hidden flex items-center pt-28 px-6 md:px-16"
    >
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #5fb05a 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div
        className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full blur-3xl opacity-20"
        style={{ background: "#5fb05a" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-16">
        <div className="flex-1 max-w-2xl">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#8ee08a] border border-[#2c3624] bg-[#1d2218] rounded-full px-3 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5fb05a] animate-pulse" />
            disponível para novas oportunidades
          </div>

          <p className="font-mono text-[#5fb05a] text-sm mb-3">$ whoami</p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#f2f4ef]">
            Gabriel Lázaro
          </h1>
          <h2 className="text-xl md:text-3xl font-semibold text-[#8ee08a] mt-2 font-mono">
            Desenvolvedor FullStack
          </h2>

          <p className="mt-6 text-base md:text-lg leading-8 text-[#aab7a4]">
            Estudante de Desenvolvimento de Software Multiplataforma (FATEC) focado em
            construir APIs robustas e arquiteturas de microsserviços. Aqui você encontra
            meus projetos, habilidades e trajetória acadêmica.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 bg-[#5fb05a] text-[#12140f] font-medium px-6 py-3 rounded-md hover:bg-[#8ee08a] transition-colors duration-200"
            >
              Ver projetos
              <FaArrowRight className="text-sm" />
            </a>
            <a
              href="/curriculo/curriculo.pdf"
              download
              className="inline-flex items-center gap-2 border border-[#2c3624] text-[#f2f4ef] font-medium px-6 py-3 rounded-md hover:border-[#5fb05a] hover:text-[#8ee08a] transition-colors duration-200"
            >
              <FaDownload className="text-sm" />
              Baixar currículo
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-60 h-60 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-2xl border border-[#2c3624] translate-x-3 translate-y-3" />
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[#2c3624] shadow-2xl shadow-black/40">
              <ImagemFallback
                className="object-cover w-full h-full"
                src="/eu.jpg"
                alt="Foto de Gabriel Lázaro"
                width={600}
                height={600}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
