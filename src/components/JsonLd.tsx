import { SITE_URL } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "BracZero Tech Private Limited",
        url: SITE_URL,
        email: "info@braczero.com",
        telephone: ["+91 83174 60516", "+91 81053 42557"],
        address: {
          "@type": "PostalAddress",
          streetAddress: "Center Point Building, Balmatta, Kanakandy",
          addressLocality: "Mangalore",
          postalCode: "575002",
          addressCountry: "IN",
        },
        slogan: "One qubit ahead.",
        logo: `${SITE_URL}/favicon-48.png`,
        image: `${SITE_URL}/favicon-192.png`,
        sameAs: [
          "https://www.linkedin.com/company/braczero",
          "https://www.instagram.com/braczero",
          "https://www.facebook.com/braczero",
          "https://x.com/braczero",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "BracZero",
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
