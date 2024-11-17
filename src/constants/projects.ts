import { Technology } from "./technologies";

type Project = {
  id: number;
  name: string;
  year: number;
  description: string;
  technologiesUsed: Technology[];
  imageUrl: string;
};

export const Projects: Project[] = [
  {
    id: 1,
    name: "Meu Portfólio",
    year: 2024,
    description: "Um portfólio criado para exibir meus projetos e habilidades.",
    technologiesUsed: [
      Technology.React,
      Technology.NextJS,
      Technology.TailwindCSS,
    ],
    imageUrl: "link-da-imagem-aqui",
  },
  {
    id: 2,
    name: "Aplicativo de Manipulação de Vídeos",
    year: 2023,
    description:
      "Aplicação para carregar vídeos e limpar metadados usando FFmpeg.",
    technologiesUsed: [Technology.React, Technology.FFmpeg],
    imageUrl: "link-da-imagem-aqui",
  },
];
