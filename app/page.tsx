"use client";
import React from 'react';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { FaCar, FaGraduationCap, FaGlobe, FaKey, FaStar, FaQuoteLeft, FaArrowRight } from 'react-icons/fa';

export default function Home() {
  // Services data
  const services = [
    {
      icon: <FaCar className="text-4xl text-[#CDA434]" />,
      title: 'VTC & Location',
      description: 'Services de transport premium et location de véhicules haut de gamme pour tous vos déplacements.',
      link: '/vtc',
      theme: 'vtc',
      bgColor: 'bg-gradient-to-br from-black to-gray-800'
    },
    {
      icon: <FaGraduationCap className="text-4xl text-[#0057B7]" />,
      title: 'Formations',
      description: 'Formations professionnelles certifiantes pour développer vos compétences et booster votre carrière.',
      link: '/formations',
      theme: 'formations',
      bgColor: 'bg-gradient-to-br from-[#0057B7] to-blue-600'
    },
    {
      icon: <FaGlobe className="text-4xl text-[#F7931E]" />,
      title: 'Afrique & Entrepreneuriat',
      description: 'Accompagnement entrepreneurial et opportunités d\'investissement sur le continent africain.',
      link: '/afrique',
      theme: 'afrique',
      bgColor: 'bg-gradient-to-br from-[#F7931E] to-[#009245]'
    },
    {
      icon: <FaKey className="text-4xl text-[#CDA434]" />,
      title: 'Espace Client',
      description: 'Accédez à votre espace personnalisé pour gérer vos réservations et suivre vos formations.',
      link: '/espace-client',
      theme: 'vtc',
      bgColor: 'bg-gradient-to-br from-gray-700 to-gray-900'
    }
  ];

  // Key figures
  const keyFigures = [
    { number: '5000+', label: 'Clients satisfaits' },
    { number: '500+', label: 'Formations dispensées' },
    { number: '50+', label: 'Projets accompagnés en Afrique' },
    { number: '99%', label: 'Taux de satisfaction' }
  ];

  // Testimonials
  const testimonials = [
    {
      name: 'Marie Dubois',
      role: 'Directrice Marketing',
      content: 'Service VTC exceptionnel ! Ponctualité, confort et professionnalisme au rendez-vous.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Ahmed Ben Ali',
      role: 'Entrepreneur',
      content: 'Grâce aux formations DJOK PRESTIGE, j\'ai pu développer mon entreprise en Afrique.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Sophie Martin',
      role: 'Consultante',
      content: 'Location de véhicule parfaite pour mes déplacements professionnels.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?w=100&h=100&fit=crop&crop=face'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="DJOK PRESTIGE"
        subtitle="Votre partenaire de confiance pour VTC, Location, Formations et Entrepreneuriat"
        theme="vtc"
        primaryAction={{
          text: "Découvrir nos services",
          href: "#services",
          onClick: () => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
        }}
        secondaryAction={{
          text: "Nous contacter",
          href: "/contact",
          onClick: () => window.location.href = '/contact'
        }}
      />

      {/* Services Section */}
      <section id="services" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-6">
              Nos Services
            </h2>
            <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez notre gamme complète de services conçus pour répondre à tous vos besoins 
              professionnels et personnels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className={`${service.bgColor} text-white rounded-xl p-8 h-full flex flex-col items-center text-center transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl`}>
                  <div className="mb-6 p-4 bg-white/20 rounded-full">
                    {service.icon}
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-4">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm opacity-90 mb-6 flex-grow">
                    {service.description}
                  </p>
                  <Link href={service.link}>
                    <Button 
                      variant="outline"
                      className="text-white border-white hover:bg-white hover:text-gray-900"
                    >
                      En savoir plus <FaArrowRight className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Figures Section */}
      <section className="section-padding bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-6">
              DJOK PRESTIGE en Chiffres
            </h2>
            <p className="font-body text-xl text-gray-300">
              Notre expertise se reflète dans nos résultats
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFigures.map((figure, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-heading font-bold text-[#CDA434] mb-4">
                  {figure.number}
                </div>
                <div className="font-body text-lg text-gray-300">
                  {figure.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-6">
              Ce que disent nos clients
            </h2>
            <p className="font-body text-xl text-gray-600">
              Découvrez les témoignages de ceux qui nous font confiance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center">
                <FaQuoteLeft className="text-3xl text-[#CDA434] mb-4 mx-auto" />
                <p className="font-body text-gray-600 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-[#CDA434] text-sm" />
                  ))}
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-heading font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="font-body text-sm text-gray-500">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-gradient-to-r from-[#CDA434] to-[#B8941E] text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-4xl font-bold mb-6">
            Restez connecté avec DJOK PRESTIGE
          </h2>
          <p className="font-body text-xl mb-8 opacity-90">
            Inscrivez-vous à notre newsletter pour recevoir nos dernières actualités, 
            offres exclusives et conseils d'experts.
          </p>
          
          <form className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <Button 
              type="submit"
              className="bg-black text-white hover:bg-gray-800 px-8 py-4"
            >
              S'inscrire
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}