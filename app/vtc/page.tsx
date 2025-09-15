"use client";
import React, { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { FaClock, FaShieldAlt, FaCar, FaStar, FaMapMarkerAlt, FaCalendarAlt, FaUsers, FaPhoneAlt } from 'react-icons/fa';

export default function VTCPage() {
  const [bookingForm, setBookingForm] = useState({
    departure: '',
    arrival: '',
    date: '',
    time: '',
    passengers: '1',
    vehicleType: 'berline'
  });

  const services = [
    {
      icon: <FaClock className="text-3xl text-[#CDA434]" />,
      title: 'Ponctualité garantie',
      description: 'Nos chauffeurs arrivent toujours à l\'heure, pour que vous ne soyez jamais en retard.'
    },
    {
      icon: <FaShieldAlt className="text-3xl text-[#CDA434]" />,
      title: 'Sécurité maximale',
      description: 'Véhicules régulièrement entretenus et chauffeurs professionnels licenciés.'
    },
    {
      icon: <FaCar className="text-3xl text-[#CDA434]" />,
      title: 'Véhicules premium',
      description: 'Flotte de véhicules haut de gamme pour un confort optimal.'
    },
    {
      icon: <FaStar className="text-3xl text-[#CDA434]" />,
      title: 'Service 5 étoiles',
      description: 'Un service personnalisé adapté à vos besoins spécifiques.'
    }
  ];

  const tariffs = [
    {
      name: 'Trajets Urbains',
      price: 'À partir de 25€',
      features: ['Berline confortable', 'Chauffeur professionnel', 'Eau offerte', 'WiFi gratuit']
    },
    {
      name: 'Aéroports',
      price: 'À partir de 45€',
      features: ['Service porte-à-porte', 'Suivi de vol', 'Attente incluse', 'Aide aux bagages']
    },
    {
      name: 'Événements',
      price: 'Sur devis',
      features: ['Véhicules de prestige', 'Service sur mesure', 'Chauffeur dédié', 'Tarif horaire']
    }
  ];

  const reviews = [
    {
      name: 'Jean Dupont',
      rating: 5,
      comment: 'Service exceptionnel, chauffeur très professionnel !',
      date: '15 Janvier 2024'
    },
    {
      name: 'Marie Claire',
      rating: 5,
      comment: 'Ponctuel, confortable et tarifs raisonnables.',
      date: '10 Janvier 2024'
    },
    {
      name: 'Pierre Martin',
      rating: 5,
      comment: 'Je recommande vivement, service irréprochable.',
      date: '5 Janvier 2024'
    }
  ];

  const faqs = [
    {
      question: 'Comment réserver un VTC ?',
      answer: 'Vous pouvez réserver via notre formulaire en ligne, par téléphone ou WhatsApp.'
    },
    {
      question: 'Puis-je modifier ma réservation ?',
      answer: 'Oui, vous pouvez modifier votre réservation jusqu\'à 2h avant le départ.'
    },
    {
      question: 'Quels sont les modes de paiement acceptés ?',
      answer: 'Nous acceptons les cartes bancaires, espèces et virements d\'entreprise.'
    },
    {
      question: 'Proposez-vous un service 24h/24 ?',
      answer: 'Oui, nos services sont disponibles 24h/24 et 7j/7.'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setBookingForm({
      ...bookingForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission
    console.log('Booking submitted:', bookingForm);
    alert('Demande de réservation envoyée ! Nous vous contacterons sous peu.');
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Services VTC Premium"
        subtitle="Transport de qualité avec des chauffeurs professionnels et des véhicules haut de gamme"
        backgroundImage="https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg"
        theme="vtc"
        primaryAction={{
          text: "Réserver maintenant",
          href: "#booking",
          onClick: () => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
        }}
        secondaryAction={{
          text: "Voir nos tarifs",
          href: "#tariffs",
          onClick: () => document.getElementById('tariffs')?.scrollIntoView({ behavior: 'smooth' })
        }}
      />

      {/* Services Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-6">
              Pourquoi choisir nos services VTC ?
            </h2>
            <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les avantages de faire appel à DJOK PRESTIGE pour tous vos déplacements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center">
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="font-body text-gray-600">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tariffs Section */}
      <section id="tariffs" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-6">
              Nos Tarifs & Forfaits
            </h2>
            <p className="font-body text-xl text-gray-600">
              Des tarifs transparents adaptés à tous vos besoins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tariffs.map((tariff, index) => (
              <Card key={index} className="text-center relative">
                {index === 1 && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-[#CDA434] text-black px-4 py-1 rounded-full text-sm font-medium">
                      Populaire
                    </span>
                  </div>
                )}
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                  {tariff.name}
                </h3>
                <div className="text-3xl font-bold text-[#CDA434] mb-6">
                  {tariff.price}
                </div>
                <ul className="space-y-3 mb-8">
                  {tariff.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="font-body text-gray-600">
                      ✓ {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="vtc" className="w-full">
                  Réserver
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-6">
              Réservez votre course
            </h2>
            <p className="font-body text-xl text-gray-600">
              Remplissez le formulaire ci-dessous pour une réservation rapide
            </p>
          </div>

          <Card>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-body font-medium text-gray-700 mb-2">
                    <FaMapMarkerAlt className="inline mr-2 text-[#CDA434]" />
                    Lieu de départ
                  </label>
                  <input
                    type="text"
                    name="departure"
                    value={bookingForm.departure}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CDA434] focus:border-transparent"
                    placeholder="Adresse de départ"
                    required
                  />
                </div>
                <div>
                  <label className="block font-body font-medium text-gray-700 mb-2">
                    <FaMapMarkerAlt className="inline mr-2 text-[#CDA434]" />
                    Destination
                  </label>
                  <input
                    type="text"
                    name="arrival"
                    value={bookingForm.arrival}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CDA434] focus:border-transparent"
                    placeholder="Adresse d'arrivée"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block font-body font-medium text-gray-700 mb-2">
                    <FaCalendarAlt className="inline mr-2 text-[#CDA434]" />
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={bookingForm.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CDA434] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block font-body font-medium text-gray-700 mb-2">
                    <FaClock className="inline mr-2 text-[#CDA434]" />
                    Heure
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={bookingForm.time}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CDA434] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block font-body font-medium text-gray-700 mb-2">
                    <FaUsers className="inline mr-2 text-[#CDA434]" />
                    Passagers
                  </label>
                  <select
                    name="passengers"
                    value={bookingForm.passengers}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CDA434] focus:border-transparent"
                  >
                    <option value="1">1 passager</option>
                    <option value="2">2 passagers</option>
                    <option value="3">3 passagers</option>
                    <option value="4">4 passagers</option>
                    <option value="5+">5+ passagers</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-body font-medium text-gray-700 mb-2">
                  <FaCar className="inline mr-2 text-[#CDA434]" />
                  Type de véhicule
                </label>
                <select
                  name="vehicleType"
                  value={bookingForm.vehicleType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CDA434] focus:border-transparent"
                >
                  <option value="berline">Berline</option>
                  <option value="monospace">Monospace</option>
                  <option value="van">Van</option>
                  <option value="prestige">Véhicule de prestige</option>
                </select>
              </div>

              <div className="text-center">
                <Button type="submit" variant="vtc" size="lg" className="px-12">
                  <FaPhoneAlt className="mr-2" />
                  Réserver maintenant
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-6">
              Avis de nos clients
            </h2>
            <p className="font-body text-xl text-gray-600">
              Ce que pensent nos clients de nos services VTC
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index}>
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} className="text-[#CDA434]" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">{review.date}</span>
                </div>
                <p className="font-body text-gray-600 mb-4 italic">
                  "{review.comment}"
                </p>
                <p className="font-body font-semibold text-gray-900">
                  {review.name}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-6">
              Questions Fréquentes
            </h2>
            <p className="font-body text-xl text-gray-600">
              Trouvez rapidement les réponses à vos questions
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="font-body text-gray-600">
                  {faq.answer}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}