import { FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope, FaDownload } from "react-icons/fa";

export default function Contato() {
  return (
    <footer id="contato" className="bg-[#12140f] border-t border-[#2c3624] pt-16 pb-8 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-mono text-[#5fb05a] text-sm mb-2">// contato</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#f2f4ef] mb-4">
          Vamos conversar?
        </h2>
        <p className="text-[#aab7a4] max-w-xl mx-auto mb-10">
          Estou aberto a oportunidades, projetos colaborativos e trocas sobre desenvolvimento
          backend. Baixe meu currículo completo ou entre em contato pelos canais abaixo.
        </p>

        <a
          href="/curriculo.pdf"
          download
          className="inline-flex items-center gap-2 bg-[#5fb05a] text-[#12140f] font-medium px-6 py-3 rounded-md hover:bg-[#8ee08a] transition-colors duration-200 mb-12"
        >
          <FaDownload className="text-sm" />
          Baixar currículo completo
        </a>

        <ul className="flex justify-center gap-8 text-3xl text-[#aab7a4]">
          <li>
            <a
              href="mailto:gabrielhlazaro2022@gmail.com"
              className="hover:text-[#8ee08a] transition-colors duration-300"
              aria-label="E-mail"
            >
              <FaEnvelope />
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/5512988478126"
              className="hover:text-[#8ee08a] transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/gabriel-henrique-lazaro-4b287025a/"
              className="hover:text-[#8ee08a] transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/gabsact4"
              className="hover:text-[#8ee08a] transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </li>
        </ul>

        <p className="font-mono text-xs text-[#6c7866] mt-12">
          © 2026 Gabriel Lázaro. Construído com Next.js &amp; Tailwind.
        </p>
      </div>
    </footer>
  );
}
