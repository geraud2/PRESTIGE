import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  structuredData?: object;
}

export default function SEOHead({
  title = "DJOK PRESTIGE - VTC, Location, Formations & Entrepreneuriat",
  description = "Services de VTC premium, location de véhicules, formations professionnelles certifiantes et accompagnement entrepreneurial en Afrique. Votre partenaire de confiance depuis 2020.",
  keywords = "VTC Paris, location véhicule, formation chauffeur VTC, entrepreneuriat Afrique, transport premium, chauffeur privé",
  ogImage = "/logo.png",
  ogUrl = "https://djokprestige.com",
  structuredData
}: SEOHeadProps) {
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="DJOK PRESTIGE" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="DJOK PRESTIGE" />
      <meta property="og:locale" content="fr_FR" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#CDA434" />
      <meta name="msapplication-TileColor" content="#CDA434" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={ogUrl} />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/logo.png" />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      )}
      
      {/* Default Structured Data for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "DJOK PRESTIGE",
            "description": description,
            "url": "https://djokprestige.com",
            "logo": "https://djokprestige.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+33-1-23-45-67-89",
              "contactType": "customer service",
              "availableLanguage": ["French", "English"]
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Avenue des Champs-Élysées",
              "addressLocality": "Paris",
              "postalCode": "75008",
              "addressCountry": "FR"
            },
            "sameAs": [
              "https://www.facebook.com/djokprestige",
              "https://www.linkedin.com/company/djokprestige",
              "https://www.instagram.com/djokprestige"
            ],
            "service": [
              {
                "@type": "Service",
                "name": "Services VTC",
                "description": "Transport de personnes avec chauffeur professionnel"
              },
              {
                "@type": "Service", 
                "name": "Location de véhicules",
                "description": "Location de véhicules premium"
              },
              {
                "@type": "Service",
                "name": "Formations professionnelles",
                "description": "Formations certifiantes pour chauffeurs VTC"
              }
            ]
          })
        }}
      />
    </Head>
  );
}