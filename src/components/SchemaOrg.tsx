"use client";
import Script from "next/script";

export default function SchemaOrg() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": "https://colegiosimplificabrasil.com.br/#organization",
    name: "Colégio Simplifica Brasil",
    alternateName: [
      "Simplifica Brasil",
      "Colégio Técnico Simplifica Brasil",
      "Escola Técnica Simplifica Brasil",
    ],
    url: "https://colegiosimplificabrasil.com.br",
    logo: "https://colegiosimplificabrasil.com.br/logo.png",
    image: "https://colegiosimplificabrasil.com.br/logo.png",
    description:
      "O Colégio Simplifica Brasil é uma instituição de ensino técnico e profissionalizante reconhecida pelo MEC. Oferece cursos presenciais e EAD nas áreas da saúde, administração, tecnologia e refrigeração. Educação técnica de excelência para o futuro do trabalho.",
    email: "simplificabrasil.oficial@gmail.com",
    telephone: "+55-31-97332-2570",
    foundingDate: "2018",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Luiz Rodrigues dos Santos, 44",
      addressLocality: "Coronel Fabriciano",
      addressRegion: "MG",
      postalCode: "35170-000",
      addressCountry: "BR",
    },
    sameAs: [
      "https://www.instagram.com/simplificabrasiltec.oficial",
      "https://www.facebook.com/colegiosimplificabrasil",
      "https://colegiosimplificabrasil.com.br",
    ],
    hasCourse: [
      {
        "@type": "Course",
        name: "Curso Técnico em Enfermagem",
        description:
          "Formação completa e reconhecida pelo MEC para quem deseja atuar na área da saúde.",
        provider: { "@type": "EducationalOrganization", name: "Colégio Simplifica Brasil" },
      },
      {
        "@type": "Course",
        name: "Curso de Refrigeração e Climatização",
        description:
          "Curso técnico prático com foco em refrigeração e climatização residencial e comercial.",
        provider: { "@type": "EducationalOrganization", name: "Colégio Simplifica Brasil" },
      },
      {
        "@type": "Course",
        name: "Curso Técnico em Administração",
        description:
          "Capacitação para atuar em empresas, gestão de pessoas e processos administrativos.",
        provider: { "@type": "EducationalOrganization", name: "Colégio Simplifica Brasil" },
      },
    ],
    openingHours: "Mo-Fr 08:00-18:00",
  };

  return (
    <Script
      id="schema-org"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
