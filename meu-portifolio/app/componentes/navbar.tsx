"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaDownload, FaBars, FaTimes } from "react-icons/fa";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#projetos", label: "Projetos" },
  { href: "#formacao", label: "Formação" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#12140f]/95 backdrop-blur-md border-b border-[#2c3624] shadow-lg shadow-black/20"
          : "bg-[#12140f]/40 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
        <Link
          href="#inicio"
          className="font-mono text-[#8ee08a] text-lg font-semibold tracking-tight"
        >
          <span className="text-[#6c7866]">~/</span>gabriel<span className="text-[#5fb05a]">.dev</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8 font-mono text-sm text-[#aab7a4]">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative transition-colors duration-200 hover:text-[#8ee08a] group"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 w-0 h-[1.5px] bg-[#5fb05a] transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="/curriculo/curriculo.pdf"
          download
          className="hidden md:inline-flex items-center gap-2 border border-[#5fb05a] text-[#8ee08a] font-mono text-sm px-4 py-2 rounded-md hover:bg-[#5fb05a] hover:text-[#12140f] transition-colors duration-200"
        >
          <FaDownload className="text-xs" />
          Currículo
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#f2f4ef] text-2xl"
          aria-label="Abrir menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-[#181c14] border-t border-[#2c3624] px-6 py-5 flex flex-col gap-4 font-mono text-sm text-[#aab7a4]">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="hover:text-[#8ee08a] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/curriculo/curriculo.pdf"
            download
            className="inline-flex items-center gap-2 border border-[#5fb05a] text-[#8ee08a] px-4 py-2 rounded-md hover:bg-[#5fb05a] hover:text-[#12140f] transition-colors duration-200 w-fit"
          >
            <FaDownload className="text-xs" />
            Currículo
          </a>
        </div>
      )}
    </header>
  );
}
