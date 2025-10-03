import { Technology } from "./technologies";

export interface Project {
  id: number;
  translationKey: string; // Chave para tradução (ex: "defense-ia")
  year: number;
  technologiesUsed: Technology[];
  imageUrl: string;
  alt?: string;
}

export const Projects: Project[] = [
  {
    id: 1,
    translationKey: "defense-ia",
    year: 2023,
    technologiesUsed: [
      Technology.React,
      Technology.NextJS,
      Technology.TypeScript,
      Technology.TailwindCSS,
    ],
    imageUrl: "/access-control.png",
    alt: "Sistema de controle de acesso Defense IA",
  },
  {
    id: 2,
    translationKey: "qr-creator",
    year: 2025,
    technologiesUsed: [
      Technology.React,
      Technology.NextJS,
      Technology.TypeScript,
      Technology.TailwindCSS,
    ],
    imageUrl: "/qr-code-creator.png",
    alt: "Gerador de códigos QR",
  },
  {
    id: 3,
    translationKey: "video-cleaner",
    year: 2023,
    technologiesUsed: [
      Technology.React,
      Technology.TypeScript,
      Technology.FFmpeg,
    ],
    imageUrl: "/video-cleaner.png",
    alt: "Aplicativo de limpeza de metadados de vídeo",
  },
];
