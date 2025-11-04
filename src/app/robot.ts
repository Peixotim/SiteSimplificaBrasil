import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/dashboard", "/api/private"],
      },
    ],
    sitemap: "https://colegiosimplificabrasil.com.br/sitemap.xml",
    host: "https://colegiosimplificabrasil.com.br",
  };
}
