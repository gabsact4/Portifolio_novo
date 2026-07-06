"use client";

import { useState } from "react";
import Image from "next/image";
import { FaCode } from "react-icons/fa";

interface ImagemFallbackProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

/**
 * Wrapper sobre next/image que mostra um placeholder consistente com o
 * tema do site (em vez do ícone de imagem quebrada do navegador) sempre
 * que o arquivo de origem ainda não existir em /public.
 */
export default function ImagemFallback({
  src,
  alt,
  fill,
  width,
  height,
  className,
  priority,
}: ImagemFallbackProps) {
  const [erro, setErro] = useState(false);

  if (erro) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-[#1d2218] to-[#12140f] ${className ?? ""}`}
      >
        <FaCode className="text-[#3a4632] text-3xl" />
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        onError={() => setErro(true)}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 600}
      height={height ?? 600}
      priority={priority}
      className={className}
      onError={() => setErro(true)}
    />
  );
}
