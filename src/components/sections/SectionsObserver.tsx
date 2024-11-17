"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { SECTIONS } from "src/constants/sections";

const SectionsObserver = () => {
  const router = useRouter();

  useEffect(() => {
    // Função de callback para o IntersectionObserver
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;

          // Atualiza a URL sem afetar a rolagem
          // Usamos a opção scroll: false para garantir que não haja mudança de posição ao trocar a URL
          router.replace(`#${sectionId}`, { scroll: false });
        }
      });
    };

    // Configuração do IntersectionObserver para ativação na visibilidade de pelo menos 30% da seção
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.3, // Detecta quando 30% da seção está visível
    });

    // Observa todas as seções do projeto
    Object.values(SECTIONS).forEach((sectionId) => {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        observer.observe(sectionElement);
      }
    });

    // Limpa o observer quando o componente for desmontado
    return () => {
      observer.disconnect();
    };
  }, [router]);

  return null;
};

export default SectionsObserver;
