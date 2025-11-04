import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://colegiosimplificabrasil.com.br";
  const lastModified = new Date();

  return [
    // 🌐 Páginas principais
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/sobre`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/contato`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sistec`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // 🧭 Seções internas
    {
      url: `${baseUrl}/#cursos`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/#contato`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#Certificado`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // 📘 Cursos
    {
      url: `${baseUrl}/cursos/tecnico-em-enfermagem`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/cursos/administracao`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cursos/refrigeracao-e-climatizacao`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cursos/informatica`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/cursos/ead`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },

    // 📄 Páginas adicionais
    {
      url: `${baseUrl}/politica-de-privacidade`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/termos-de-uso`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },

    // 🔗 Redes sociais (ajuda no SEO)
    {
      url: `https://www.instagram.com/simplificabrasiltec.oficial`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `https://www.facebook.com/colegiosimplificabrasil`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];
}
