"use client";
import React from 'react';
import HeroSection from '@/components/HeroSection';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { FaAward, FaUsers, FaHandshake, FaLeaf, FaCertificate, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function AProposPage() {
  const team = [
    {
      name: 'Djibril KONE',
      role: 'Fondateur & CEO',
      image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?w=300&h=300&fit=crop&crop=face',
      description: 'Expert en transport et entrepreneuriat avec 15 ans d\'expérience',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Sarah MARTIN',
      role: 'Directrice Formations',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=300&h=300&fit=crop&crop=face',
      description: 'Spécialiste en formation professionnelle et certification',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Ahmed BENALI',
      role: 'Responsable Afrique',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=300&h=300&fit=crop&crop=face',
      description: 'Expert en développement économique africain',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Marie DUBOIS',
      role: 'Directrice Opérations',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?w=300&h=300&fit=crop&crop=face',
      description: 'Gestion de flotte et optimisation des services',
      linkedin: '#',
      twitter: '#'
    }
  ];

  const partners = [
    {
      name: 'Ministère des Transports',
      type: 'Partenaire Institutionnel',
      description: 'Agrément officiel pour les formations VTC'
    },
    {
      name: 'Chambre de Commerce Franco-Africaine',
      type: 'Partenaire Économique',
      description: 'Développement des échanges commerciaux'
    },
    {
      name: 'Pôle Emploi',
      type: 'Partenaire Formation',
      description: 'Financement des formations professionnelles'
    },
    {
      name: 'BPI France',
      type: 'Partenaire Financier',
      description: 'Accompagnement des entrepreneurs'
    }
  ];

  const certifications = [
    {
      title: 'Organisme de Formation Certifié',
      number: 'OF-2024-001',
      description: 'Certification Qualiopi pour la qualité des formations'
    },
    {
      title: 'Agrément Préfectoral VTC',
      number: 'VTC-75-2024',
      description: 'Autorisation officielle pour les formations VTC'
    },
    {
      title: 'Certification ISO 9001',
      number: 'ISO-9001-2024',
      description: 'Management de la qualité des services'
    },
    {
      title: 'Label RSE',
      number: 'RSE-2024-FR',
      description: 'Engagement responsabilité sociétale'
    }
  ];

  const values = [
    {
      icon: <FaAward className="text-4xl text-[#CDA434]" />,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans tous nos services et formations'
    },
    {
      icon: <FaUsers className="text-4xl text-[#0057B7]" />,
      title: 'Accompagnement',
      description: 'Un suivi personnalisé pour chaque client et stagiaire'
    },
    {
      icon: <FaHandshake className="text-4xl text-[#F7931E]" />,
      title: 'Partenariat',
      description: 'Des relations durables basées sur la confiance mutuelle'
    },
    {
      icon: <FaLeaf className="text-4xl text-[#009245]" />,
      title: 'Durabilité',
      description: 'Engagement pour un développement responsable et durable'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="À Propos de DJOK PRESTIGE"
        subtitle="Votre partenaire de confiance depuis 2020 pour VTC, formations et entrepreneuriat en Afrique"
        backgroundImage="https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg"
        theme="vtc"
        primaryAction={{
          text: "Voir nos formations",
          href: "formations",
          onClick: () => document.getElementById('equipe')?.scrollIntoView({ behavior: 'smooth' })
        }}
        secondaryAction={{
          text: "Nos certifications",
          href: "#certifications",
          onClick: () => document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' })
        }}
      />

      {/* Mission */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-6">
              Notre Mission
            </h2>
            <p className="font-body text-xl text-gray-600 max-w-4xl mx-auto">
              DJOK PRESTIGE accompagne les professionnels et entrepreneurs dans leur développement 
              à travers des services de transport premium, des formations certifiantes et un 
              accompagnement personnalisé pour les projets en Afrique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <div className="mb-6">
                  {value.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="font-body text-gray-600">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Histoire */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl font-bold text-gray-900 mb-6">
                Notre Histoire
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#CDA434] rounded-full flex items-center justify-center text-black font-bold">
                    2020
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-gray-900 mb-2">
                      Création de DJOK PRESTIGE
                    </h3>
                    <p className="font-body text-gray-600">
                      Lancement des services VTC premium avec une flotte de véhicules haut de gamme.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0057B7] rounded-full flex items-center justify-center text-white font-bold">
                    2021
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-gray-900 mb-2">
                      Centre de Formation
                    </h3>
                    <p className="font-body text-gray-600">
                      Ouverture du centre de formation certifié pour chauffeurs VTC.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#F7931E] rounded-full flex items-center justify-center text-white font-bold">
                    2022
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-gray-900 mb-2">
                      Expansion Afrique
                    </h3>
                    <p className="font-body text-gray-600">
                      Lancement des programmes d'accompagnement entrepreneurial en Afrique.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#009245] rounded-full flex items-center justify-center text-white font-bold">
                    2024
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-gray-900 mb-2">
                      Leader du Secteur
                    </h3>
                    <p className="font-body text-gray-600">
                      Plus de 5000 clients satisfaits et 500 entrepreneurs accompagnés.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg"
                alt="Histoire DJOK PRESTIGE"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section id="equipe" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-6">
              Notre Équipe
            </h2>
            <p className="font-body text-xl text-gray-600">
              Une équipe d'experts passionnés à votre service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <div className="text-[#CDA434] font-medium mb-4">
                  {member.role}
                </div>
                <p className="font-body text-gray-600 mb-6">
                  {member.description}
                </p>
                <div className="flex justify-center space-x-4">
                  <a href={member.linkedin} className="text-[#0057B7] hover:text-[#003d82] transition-colors">
                    <FaLinkedin size={20} />
                  </a>
                  <a href={member.twitter} className="text-[#1DA1F2] hover:text-[#0d8bd9] transition-colors">
                    <FaTwitter size={20} />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partenaires */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-6">
              Nos Partenaires
            </h2>
            <p className="font-body text-xl text-gray-600">
              Des collaborations stratégiques pour votre réussite
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((partner, index) => (
              <Card key={index}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#CDA434] rounded-lg flex items-center justify-center">
                    <FaHandshake className="text-black text-xl" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
                      {partner.name}
                    </h3>
                    <div className="text-[#CDA434] font-medium mb-3">
                      {partner.type}
                    </div>
                    <p className="font-body text-gray-600">
                      {partner.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-6">
              Certifications & Agréments
            </h2>
            <p className="font-body text-xl text-gray-600">
              La garantie de notre professionnalisme et de notre qualité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#CDA434] to-[#B8941E] rounded-lg flex items-center justify-center">
                    <FaCertificate className="text-black text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
                      {cert.title}
                    </h3>
                    <div className="font-mono text-[#CDA434] font-medium mb-3">
                      N° {cert.number}
                    </div>
                    <p className="font-body text-gray-600">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement RSE */}
      <section className="section-padding bg-gradient-to-r from-[#009245] to-[#00b359] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-6">
              Notre Engagement RSE
            </h2>
            <p className="font-body text-xl opacity-90">
              Un développement responsable pour un avenir durable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/10 text-white border-white/20">
              <FaLeaf className="text-4xl mb-4" />
              <h3 className="font-heading text-xl font-bold mb-4">
                Environnement
              </h3>
              <p className="font-body opacity-90">
                Flotte de véhicules hybrides et électriques, compensation carbone
              </p>
            </Card>
            <Card className="bg-white/10 text-white border-white/20">
              <FaUsers className="text-4xl mb-4" />
              <h3 className="font-heading text-xl font-bold mb-4">
                Social
              </h3>
              <p className="font-body opacity-90">
                Formation gratuite pour demandeurs d'emploi, insertion professionnelle
              </p>
            </Card>
            <Card className="bg-white/10 text-white border-white/20">
              <FaHandshake className="text-4xl mb-4" />
              <h3 className="font-heading text-xl font-bold mb-4">
                Gouvernance
              </h3>
              <p className="font-body opacity-90">
                Transparence, éthique des affaires, parité dans l'équipe dirigeante
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-4xl font-bold mb-6">
            Rejoignez l'aventure DJOK PRESTIGE
          </h2>
          <p className="font-body text-xl mb-8 opacity-90">
            Que vous soyez client, partenaire ou futur collaborateur, 
            nous serions ravis de vous accompagner dans vos projets
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="vtc" size="lg">
              Nous contacter
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-black">
              Voir nos offres d'emploi
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}