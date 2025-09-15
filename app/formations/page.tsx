"use client";
import React, { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { FaGraduationCap, FaCertificate, FaUsers, FaCalendarAlt, FaClock, FaEuroSign, FaDownload, FaPlay, FaStar, FaQuestionCircle } from 'react-icons/fa';

export default function FormationsPage() {
  const [selectedModule, setSelectedModule] = useState(null);
  const [inscriptionForm, setInscriptionForm] = useState({
    nom: '',
    email: '',
    telephone: '',
    formation: '',
    session: '',
    financement: ''
  });

  const modules = [
    {
      id: 1,
      title: 'Réglementation VTC',
      icon: <FaCertificate className="text-3xl text-[#0057B7]" />,
      duration: '2 jours',
      description: 'Maîtrisez la réglementation en vigueur pour exercer en tant que chauffeur VTC.',
      content: ['Cadre légal', 'Obligations professionnelles', 'Sanctions', 'Évolutions réglementaires']
    },
    {
      id: 2,
      title: 'Gestion Commerciale',
      icon: <FaEuroSign className="text-3xl text-[#0057B7]" />,
      duration: '3 jours',
      description: 'Développez vos compétences commerciales et de gestion d\'entreprise.',
      content: ['Création d\'entreprise', 'Comptabilité', 'Facturation', 'Développement commercial']
    },
    {
      id: 3,
      title: 'Sécurité Routière',
      icon: <FaUsers className="text-3xl text-[#0057B7]" />,
      duration: '1 jour',
      description: 'Perfectionnez votre conduite et adoptez les bons réflexes sécuritaires.',
      content: ['Code de la route', 'Conduite défensive', 'Premiers secours', 'Gestion du stress']
    },
    {
      id: 4,
      title: 'Relation Client',
      icon: <FaUsers className="text-3xl text-[#0057B7]" />,
      duration: '2 jours',
      description: 'Excellez dans l\'accueil et la satisfaction de votre clientèle.',
      content: ['Communication', 'Gestion des conflits', 'Service premium', 'Fidélisation']
    },
    {
      id: 5,
      title: 'Anglais Professionnel',
      icon: <FaGraduationCap className="text-3xl text-[#0057B7]" />,
      duration: '5 jours',
      description: 'Communiquez efficacement avec une clientèle internationale.',
      content: ['Vocabulaire transport', 'Situations courantes', 'Accueil aéroport', 'Conversation']
    },
    {
      id: 6,
      title: 'Géographie Touristique',
      icon: <FaUsers className="text-3xl text-[#0057B7]" />,
      duration: '2 jours',
      description: 'Maîtrisez les lieux touristiques et itinéraires de votre région.',
      content: ['Points d\'intérêt', 'Itinéraires optimaux', 'Histoire locale', 'Recommandations']
    },
    {
      id: 7,
      title: 'Développement Durable',
      icon: <FaCertificate className="text-3xl text-[#0057B7]" />,
      duration: '1 jour',
      description: 'Intégrez les enjeux environnementaux dans votre activité.',
      content: ['Éco-conduite', 'Véhicules propres', 'Réduction d\'impact', 'Sensibilisation']
    },
    {
      id: 8,
      title: 'Gestion du Stress',
      icon: <FaUsers className="text-3xl text-[#0057B7]" />,
      duration: '1 jour',
      description: 'Gérez efficacement le stress et maintenez votre bien-être professionnel.',
      content: ['Techniques de relaxation', 'Gestion du temps', 'Équilibre vie pro/perso', 'Prévention burn-out']
    }
  ];

  const tarifs = [
    {
      name: 'Formation Complète',
      price: '2 490€',
      originalPrice: '2 990€',
      features: ['8 modules inclus', 'Certification officielle', 'Support pédagogique', 'Suivi personnalisé', 'Accès e-learning 1 an'],
      popular: true
    },
    {
      name: 'Modules à la Carte',
      price: 'À partir de 290€',
      features: ['Choix des modules', 'Flexibilité planning', 'Support inclus', 'Certificat par module'],
      popular: false
    },
    {
      name: 'Remise à Niveau',
      price: '890€',
      features: ['4 modules essentiels', 'Formation accélérée', 'Support numérique', 'Certification'],
      popular: false
    }
  ];

  const sessions = [
    { date: '15-19 Janvier 2024', places: 8, status: 'Disponible' },
    { date: '5-9 Février 2024', places: 3, status: 'Dernières places' },
    { date: '4-8 Mars 2024', places: 12, status: 'Disponible' },
    { date: '8-12 Avril 2024', places: 15, status: 'Disponible' }
  ];

  const financements = [
    {
      name: 'CPF (Compte Personnel de Formation)',
      description: 'Utilisez vos droits CPF pour financer votre formation',
      montant: 'Jusqu\'à 2 500€'
    },
    {
      name: 'Pôle Emploi',
      description: 'Aide au retour à l\'emploi pour demandeurs d\'emploi',
      montant: 'Prise en charge totale possible'
    },
    {
      name: 'Autofinancement',
      description: 'Paiement en plusieurs fois sans frais',
      montant: 'Facilités de paiement'
    }
  ];

  const testimonials = [
    {
      name: 'Marc Dubois',
      rating: 5,
      comment: 'Formation excellente, formateurs compétents. Je recommande !',
      date: 'Décembre 2023'
    },
    {
      name: 'Sarah Ben Ali',
      rating: 5,
      comment: 'Grâce à cette formation, j\'ai pu créer mon entreprise VTC.',
      date: 'Novembre 2023'
    },
    {
      name: 'Pierre Martin',
      rating: 5,
      comment: 'Contenu riche et pratique, parfait pour débuter dans le VTC.',
      date: 'Octobre 2023'
    }
  ];

  const faqs = [
    {
      question: 'Quelle est la durée totale de la formation ?',
      answer: 'La formation complète dure 17 jours répartis sur 4 semaines, avec possibilité d\'étalement.'
    },
    {
      question: 'La formation est-elle certifiante ?',
      answer: 'Oui, vous obtenez une certification reconnue par l\'État nécessaire pour exercer.'
    },
    {
      question: 'Puis-je utiliser mon CPF ?',
      answer: 'Absolument, notre formation est éligible CPF et peut être entièrement financée.'
    },
    {
      question: 'Y a-t-il un suivi après la formation ?',
      answer: 'Oui, nous proposons un accompagnement de 6 mois pour votre installation.'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setInscriptionForm({
      ...inscriptionForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Inscription submitted:', inscriptionForm);
    alert('Demande d\'inscription envoyée ! Nous vous contacterons sous peu.');
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Formations Professionnelles VTC"
        subtitle="Obtenez votre certification et lancez votre activité de chauffeur VTC avec nos formations reconnues"
        backgroundImage="https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg"
        theme="formations"
        primaryAction={{
          text: "S'inscrire maintenant",
          href: "#inscription",
          onClick: () => document.getElementById('inscription')?.scrollIntoView({ behavior: 'smooth' })
        }}
        secondaryAction={{
          text: "Voir le programme",
          href: "#programme",
          onClick: () => document.getElementById('programme')?.scrollIntoView({ behavior: 'smooth' })
        }}
      />

      {/* Présentation */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-6">
              Pourquoi choisir nos formations ?
            </h2>
            <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
              DJOK PRESTIGE vous accompagne dans votre projet professionnel avec des formations 
              certifiantes dispensées par des experts du secteur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <FaCertificate className="text-4xl text-[#0057B7] mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">
                Certification Officielle
              </h3>
              <p className="font-body text-gray-600">
                Formation agréée par l'État, certification reconnue pour exercer légalement.
              </p>
            </Card>
            <Card className="text-center">
              <FaUsers className="text-4xl text-[#0057B7] mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">
                Formateurs Experts
              </h3>
              <p className="font-body text-gray-600">
                Professionnels expérimentés du secteur VTC et transport de personnes.
              </p>
            </Card>
            <Card className="text-center">
              <FaGraduationCap className="text-4xl text-[#0057B7] mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">
                Accompagnement Complet
              </h3>
              <p className="font-body text-gray-600">
                Suivi personnalisé de l'inscription jusqu'à votre installation professionnelle.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Programme des Modules */}
      <section id="programme" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-6">
              Programme de Formation
            </h2>
            <p className="font-body text-xl text-gray-600">
              8 modules complets pour maîtriser tous les aspects du métier de chauffeur VTC
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module) => (
              <Card 
                key={module.id} 
                className={`cursor-pointer transition-all duration-300 hover:shadow-xl ${
                  selectedModule === module.id ? 'ring-2 ring-[#0057B7]' : ''
                }`}
                onClick={() => setSelectedModule(selectedModule === module.id ? null : module.id)}
              >
                <div className="text-center mb-4">
                  {module.icon}
                </div>
                <h3 className="font-heading text-lg font-bold text-gray-900 mb-2">
                  {module.title}
                </h3>
                <div className="flex items-center justify-center mb-3">
                  <FaClock className="text-[#0057B7] mr-2" />
                  <span className="font-body text-sm text-gray-600">{module.duration}</span>
                </div>
                <p className="font-body text-sm text-gray-600 mb-4">
                  {module.description}
                </p>
                {selectedModule === module.id && (
                  <div className="border-t pt-4">
                    <h4 className="font-heading font-semibold text-gray-900 mb-2">Contenu :</h4>
                    <ul className="space-y-1">
                      {module.content.map((item, index) => (
                        <li key={index} className="font-body text-sm text-gray-600">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tarifs & Financements */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-6">
              Tarifs & Financements
            </h2>
            <p className="font-body text-xl text-gray-600">
              Des solutions de financement adaptées à votre situation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {tarifs.map((tarif, index) => (
              <Card key={index} className={`text-center relative ${tarif.popular ? 'ring-2 ring-[#0057B7]' : ''}`}>
                {tarif.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-[#0057B7] text-white px-4 py-1 rounded-full text-sm font-medium">
                      Populaire
                    </span>
                  </div>
                )}
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                  {tarif.name}
                </h3>
                <div className="mb-4">
                  <div className="text-3xl font-bold text-[#0057B7]">
                    {tarif.price}
                  </div>
                  {tarif.originalPrice && (
                    <div className="text-lg text-gray-500 line-through">
                      {tarif.originalPrice}
                    </div>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {tarif.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="font-body text-gray-600">
                      ✓ {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="formations" className="w-full">
                  Choisir cette formule
                </Button>
              </Card>
            ))}
          </div>

          {/* Options de financement */}
          <div className="bg-[#F5F5F5] rounded-xl p-8">
            <h3 className="font-heading text-2xl font-bold text-center text-gray-900 mb-8">
              Options de Financement
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {financements.map((financement, index) => (
                <div key={index} className="bg-white rounded-lg p-6">
                  <h4 className="font-heading text-lg font-bold text-[#0057B7] mb-3">
                    {financement.name}
                  </h4>
                  <p className="font-body text-gray-600 mb-4">
                    {financement.description}
                  </p>
                  <div className="font-body font-semibold text-gray-900">
                    {financement.montant}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Calendrier & Inscription */}
      <section id="inscription" className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-6">
              Prochaines Sessions
            </h2>
            <p className="font-body text-xl text-gray-600">
              Choisissez votre session et inscrivez-vous dès maintenant
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Calendrier des sessions */}
            <div>
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                Sessions Disponibles
              </h3>
              <div className="space-y-4">
                {sessions.map((session, index) => (
                  <Card key={index} className="flex justify-between items-center">
                    <div>
                      <div className="font-heading font-bold text-gray-900">
                        {session.date}
                      </div>
                      <div className="font-body text-sm text-gray-600">
                        {session.places} places disponibles
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                        session.status === 'Disponible' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-orange-100 text-orange-800'
                      }`}>
                        {session.status}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Formulaire d'inscription */}
            <div>
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                Formulaire d'Inscription
              </h3>
              <Card>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-body font-medium text-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        name="nom"
                        value={inscriptionForm.nom}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0057B7] focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-body font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={inscriptionForm.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0057B7] focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-body font-medium text-gray-700 mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      name="telephone"
                      value={inscriptionForm.telephone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0057B7] focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-body font-medium text-gray-700 mb-2">
                      Formation souhaitée *
                    </label>
                    <select
                      name="formation"
                      value={inscriptionForm.formation}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0057B7] focus:border-transparent"
                      required
                    >
                      <option value="">Sélectionner une formation</option>
                      <option value="complete">Formation Complète</option>
                      <option value="modules">Modules à la Carte</option>
                      <option value="remise">Remise à Niveau</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-body font-medium text-gray-700 mb-2">
                      Session préférée *
                    </label>
                    <select
                      name="session"
                      value={inscriptionForm.session}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0057B7] focus:border-transparent"
                      required
                    >
                      <option value="">Sélectionner une session</option>
                      {sessions.map((session, index) => (
                        <option key={index} value={session.date}>
                          {session.date}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-body font-medium text-gray-700 mb-2">
                      Mode de financement
                    </label>
                    <select
                      name="financement"
                      value={inscriptionForm.financement}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0057B7] focus:border-transparent"
                    >
                      <option value="">Sélectionner</option>
                      <option value="cpf">CPF</option>
                      <option value="pole-emploi">Pôle Emploi</option>
                      <option value="autofinancement">Autofinancement</option>
                    </select>
                  </div>

                  <Button type="submit" variant="formations" size="lg" className="w-full">
                    Envoyer ma demande d'inscription
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* E-learning */}
      <section className="section-padding bg-[#0057B7] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold mb-6">
              Plateforme E-Learning
            </h2>
            <p className="font-body text-xl opacity-90">
              Complétez votre formation avec notre plateforme d'apprentissage en ligne
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/10 text-white border-white/20">
              <FaPlay className="text-3xl mb-4" />
              <h3 className="font-heading text-xl font-bold mb-4">
                Cours Vidéo
              </h3>
              <p className="font-body opacity-90">
                Plus de 50 heures de contenu vidéo accessible 24h/24
              </p>
            </Card>
            <Card className="bg-white/10 text-white border-white/20">
              <FaDownload className="text-3xl mb-4" />
              <h3 className="font-heading text-xl font-bold mb-4">
                Ressources PDF
              </h3>
              <p className="font-body opacity-90">
                Documents téléchargeables et supports de cours
              </p>
            </Card>
            <Card className="bg-white/10 text-white border-white/20">
              <FaCertificate className="text-3xl mb-4" />
              <h3 className="font-heading text-xl font-bold mb-4">
                Quiz & Évaluations
              </h3>
              <p className="font-body opacity-90">
                Testez vos connaissances avec nos évaluations interactives
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-6">
              Témoignages de nos Stagiaires
            </h2>
            <p className="font-body text-xl text-gray-600">
              Découvrez les retours de ceux qui ont suivi nos formations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-[#0057B7]" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">{testimonial.date}</span>
                </div>
                <p className="font-body text-gray-600 mb-4 italic">
                  "{testimonial.comment}"
                </p>
                <p className="font-body font-semibold text-gray-900">
                  {testimonial.name}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
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
                <div className="flex items-start">
                  <FaQuestionCircle className="text-[#0057B7] mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="font-body text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}