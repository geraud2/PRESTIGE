"use client";
import React, { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { FaGlobe, FaBuilding, FaSeedling, FaLaptop, FaBolt, FaDownload, FaUsers, FaStar, FaArrowRight, FaMapMarkerAlt } from 'react-icons/fa';

export default function AfriquePage() {
  const [projectForm, setProjectForm] = useState({
    nom: '',
    email: '',
    telephone: '',
    pays: '',
    secteur: '',
    budget: '',
    description: ''
  });

  const workshops = [
    {
      icon: <FaBuilding className="text-4xl text-[#F7931E]" />,
      title: 'Immobilier & Construction',
      description: 'Opportunités d\'investissement dans l\'immobilier africain',
      duration: '3 jours',
      price: '1 500€',
      topics: ['Marché immobilier', 'Réglementation', 'Financement', 'Gestion locative']
    },
    {
      icon: <FaSeedling className="text-4xl text-[#009245]" />,
      title: 'Agro-business',
      description: 'Développement agricole et transformation alimentaire',
      duration: '4 jours',
      price: '1 800€',
      topics: ['Agriculture moderne', 'Chaîne de valeur', 'Export', 'Subventions']
    },
    {
      icon: <FaLaptop className="text-4xl text-[#F7931E]" />,
      title: 'Digital & Tech',
      description: 'Transformation numérique et innovation technologique',
      duration: '2 jours',
      price: '1 200€',
      topics: ['Fintech', 'E-commerce', 'Mobile Money', 'Startups']
    },
    {
      icon: <FaBolt className="text-4xl text-[#009245]" />,
      title: 'Énergie Renouvelable',
      description: 'Solutions énergétiques durables pour l\'Afrique',
      duration: '3 jours',
      price: '1 600€',
      topics: ['Solaire', 'Éolien', 'Biomasse', 'Financement vert']
    }
  ];

  const successStories = [
    {
      name: 'Amadou Diallo',
      country: 'Sénégal',
      sector: 'Agro-business',
      story: 'Création d\'une coopérative agricole exportatrice de mangues',
      investment: '250 000€',
      jobs: 45,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Fatima Benali',
      country: 'Maroc',
      sector: 'Immobilier',
      story: 'Développement d\'un complexe résidentiel éco-responsable',
      investment: '2 000 000€',
      jobs: 120,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Kwame Asante',
      country: 'Ghana',
      sector: 'Tech',
      story: 'Plateforme de paiement mobile pour les zones rurales',
      investment: '500 000€',
      jobs: 35,
      image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?w=300&h=300&fit=crop&crop=face'
    }
  ];

  const resources = [
    {
      title: 'Guide d\'investissement en Afrique 2024',
      description: 'Analyse complète des opportunités par pays et secteur',
      type: 'PDF',
      pages: 120,
      category: 'Investissement'
    },
    {
      title: 'Réglementation des affaires - 15 pays',
      description: 'Cadre juridique et fiscal pour entreprendre en Afrique',
      type: 'PDF',
      pages: 85,
      category: 'Juridique'
    },
    {
      title: 'Étude de marché - Secteur agricole',
      description: 'Tendances et opportunités dans l\'agro-business africain',
      type: 'PDF',
      pages: 95,
      category: 'Agriculture'
    },
    {
      title: 'Financement et subventions disponibles',
      description: 'Sources de financement pour projets africains',
      type: 'PDF',
      pages: 60,
      category: 'Finance'
    }
  ];

  const countries = [
    'Sénégal', 'Côte d\'Ivoire', 'Ghana', 'Nigeria', 'Cameroun', 'Gabon',
    'Congo', 'RDC', 'Kenya', 'Tanzanie', 'Rwanda', 'Maroc', 'Tunisie',
    'Algérie', 'Égypte', 'Afrique du Sud', 'Botswana', 'Autre'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setProjectForm({
      ...projectForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Projet submitted:', projectForm);
    alert('Votre projet a été soumis ! Notre équipe vous contactera sous 48h.');
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Afrique & Entrepreneuriat"
        subtitle="Saisissez les opportunités du continent africain avec notre accompagnement expert"
        backgroundImage="https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg"
        theme="afrique"
        primaryAction={{
          text: "Découvrir les opportunités",
          href: "#workshops",
          onClick: () => document.getElementById('workshops')?.scrollIntoView({ behavior: 'smooth' })
        }}
        secondaryAction={{
          text: "Soumettre un projet",
          href: "#projet",
          onClick: () => document.getElementById('projet')?.scrollIntoView({ behavior: 'smooth' })
        }}
      />

      {/* Présentation */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-6">
              L'Afrique, continent d'opportunités
            </h2>
            <p className="font-body text-xl text-gray-600 max-w-4xl mx-auto">
              Avec une croissance économique soutenue et une population jeune et dynamique, 
              l'Afrique offre des opportunités d'investissement exceptionnelles. DJOK PRESTIGE 
              vous accompagne dans vos projets entrepreneuriaux sur le continent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <div className="text-4xl font-bold text-[#F7931E] mb-4">1.3 Md</div>
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
                Population
              </h3>
              <p className="font-body text-gray-600">
                Un marché en pleine expansion avec une classe moyenne croissante
              </p>
            </Card>
            <Card className="text-center">
              <div className="text-4xl font-bold text-[#009245] mb-4">6%</div>
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
                Croissance PIB
              </h3>
              <p className="font-body text-gray-600">
                Croissance économique parmi les plus dynamiques au monde
              </p>
            </Card>
            <Card className="text-center">
              <div className="text-4xl font-bold text-[#A9744F] mb-4">54</div>
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
                Pays
              </h3>
              <p className="font-body text-gray-600">
                Diversité des marchés et opportunités sectorielles
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section id="workshops" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-6">
              Nos Workshops Spécialisés
            </h2>
            <p className="font-body text-xl text-gray-600">
              Formations intensives pour maîtriser les secteurs porteurs en Afrique
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workshops.map((workshop, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 p-4 bg-gradient-to-br from-[#F7931E]/10 to-[#009245]/10 rounded-lg">
                    {workshop.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-heading text-xl font-bold text-gray-900">
                        {workshop.title}
                      </h3>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-[#F7931E]">
                          {workshop.price}
                        </div>
                        <div className="text-sm text-gray-500">{workshop.duration}</div>
                      </div>
                    </div>
                    <p className="font-body text-gray-600 mb-4">
                      {workshop.description}
                    </p>
                    <div className="mb-6">
                      <h4 className="font-heading font-semibold text-gray-900 mb-2">
                        Programme :
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {workshop.topics.map((topic, topicIndex) => (
                          <span key={topicIndex} className="bg-[#F7931E]/10 text-[#F7931E] px-3 py-1 rounded-full text-sm">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button variant="afrique" className="w-full">
                      <a href="#inscription-workshop">S'inscrire au workshop</a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ressources PDF */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-6">
              Ressources & Guides
            </h2>
            <p className="font-body text-xl text-gray-600">
              Documentation complète pour réussir vos investissements en Afrique
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="flex items-center space-x-6">
                <div className="flex-shrink-0 w-16 h-20 bg-gradient-to-br from-[#F7931E] to-[#009245] rounded-lg flex items-center justify-center">
                  <FaDownload className="text-2xl text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-heading text-lg font-bold text-gray-900">
                      {resource.title}
                    </h3>
                    <span className="bg-[#F7931E]/10 text-[#F7931E] px-2 py-1 rounded text-xs font-medium">
                      {resource.category}
                    </span>
                  </div>
                  <p className="font-body text-gray-600 mb-3">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-body text-sm text-gray-500">
                      {resource.type} • {resource.pages} pages
                    </span>
                    <Button variant="outline" size="sm">
                      <FaDownload className="mr-2" />
                      Télécharger
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Inscription Workshop */}
      <section id="inscription-workshop" className="section-padding bg-gradient-to-r from-[#0057B7] to-[#003d82] text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold mb-6">
              Inscription Workshop
            </h2>
            <p className="font-body text-xl opacity-90">
              Choisissez votre workshop et réservez votre place
            </p>
          </div>

          <Card className="bg-white text-gray-900">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-body font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0057B7] focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-body font-medium text-gray-700 mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0057B7] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block font-body font-medium text-gray-700 mb-2">
                    Workshop choisi *
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0057B7] focus:border-transparent"
                    required
                  >
                    <option value="">Sélectionner un workshop</option>
                    <option value="immobilier">Immobilier & Construction (1 500€)</option>
                    <option value="agro">Agro-business (1 800€)</option>
                    <option value="tech">Digital & Tech (1 200€)</option>
                    <option value="energie">Énergie Renouvelable (1 600€)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-body font-medium text-gray-700 mb-2">
                  Session préférée
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0057B7] focus:border-transparent"
                >
                  <option value="">Sélectionner une session</option>
                  <option value="fevrier">15-18 Février 2024</option>
                  <option value="mars">12-15 Mars 2024</option>
                  <option value="avril">16-19 Avril 2024</option>
                  <option value="mai">14-17 Mai 2024</option>
                </select>
              </div>

              <div>
                <label className="block font-body font-medium text-gray-700 mb-2">
                  Expérience entrepreneuriale
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0057B7] focus:border-transparent"
                  placeholder="Décrivez brièvement votre expérience et vos objectifs..."
                />
              </div>

              <div className="text-center">
                <Button type="submit" variant="formations" size="lg" className="px-12">
                  Réserver ma place au workshop
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* Formulaire Projet */}
      <section id="projet" className="section-padding bg-gradient-to-r from-[#F7931E] to-[#009245] text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold mb-6">
              Soumettez votre projet
            </h2>
            <p className="font-body text-xl opacity-90">
              Partagez votre vision entrepreneuriale, nous vous accompagnerons dans sa réalisation
            </p>
          </div>

          <Card className="bg-white text-gray-900">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-body font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    name="nom"
                    value={projectForm.nom}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7931E] focus:border-transparent"
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
                    value={projectForm.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7931E] focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-body font-medium text-gray-700 mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    name="telephone"
                    value={projectForm.telephone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7931E] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block font-body font-medium text-gray-700 mb-2">
                    <FaMapMarkerAlt className="inline mr-2 text-[#F7931E]" />
                    Pays ciblé *
                  </label>
                  <select
                    name="pays"
                    value={projectForm.pays}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7931E] focus:border-transparent"
                    required
                  >
                    <option value="">Sélectionner un pays</option>
                    {countries.map((country, index) => (
                      <option key={index} value={country}>{country}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-body font-medium text-gray-700 mb-2">
                    Secteur d'activité *
                  </label>
                  <select
                    name="secteur"
                    value={projectForm.secteur}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7931E] focus:border-transparent"
                    required
                  >
                    <option value="">Sélectionner un secteur</option>
                    <option value="immobilier">Immobilier & Construction</option>
                    <option value="agriculture">Agro-business</option>
                    <option value="tech">Digital & Tech</option>
                    <option value="energie">Énergie Renouvelable</option>
                    <option value="sante">Santé</option>
                    <option value="education">Éducation</option>
                    <option value="transport">Transport</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                <div>
                  <label className="block font-body font-medium text-gray-700 mb-2">
                    Budget estimé
                  </label>
                  <select
                    name="budget"
                    value={projectForm.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7931E] focus:border-transparent"
                  >
                    <option value="">Sélectionner une fourchette</option>
                    <option value="0-50k">0 - 50 000€</option>
                    <option value="50k-200k">50 000 - 200 000€</option>
                    <option value="200k-500k">200 000 - 500 000€</option>
                    <option value="500k-1M">500 000€ - 1M€</option>
                    <option value="1M+">Plus de 1M€</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-body font-medium text-gray-700 mb-2">
                  Description du projet *
                </label>
                <textarea
                  name="description"
                  value={projectForm.description}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F7931E] focus:border-transparent"
                  placeholder="Décrivez votre projet, vos objectifs, et comment nous pouvons vous accompagner..."
                  required
                />
              </div>

              <div className="text-center">
                <Button type="submit" variant="afrique" size="lg" className="px-12">
                  Soumettre mon projet
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-6">
              Success Stories
            </h2>
            <p className="font-body text-xl text-gray-600">
              Découvrez les réussites de nos entrepreneurs accompagnés
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="text-center">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
                  {story.name}
                </h3>
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <FaMapMarkerAlt className="text-[#F7931E]" />
                  <span className="font-body text-gray-600">{story.country}</span>
                  <span className="bg-[#009245]/10 text-[#009245] px-2 py-1 rounded text-xs">
                    {story.sector}
                  </span>
                </div>
                <p className="font-body text-gray-600 mb-6 italic">
                  "{story.story}"
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-[#F7931E]">
                      {story.investment}
                    </div>
                    <div className="text-sm text-gray-500">Investissement</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#009245]">
                      {story.jobs}
                    </div>
                    <div className="text-sm text-gray-500">Emplois créés</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-4xl font-bold mb-6">
            Prêt à conquérir l'Afrique ?
          </h2>
          <p className="font-body text-xl mb-8 opacity-90">
            Rejoignez notre équipe et transformez vos ambitions en réalité !
          </p>
          <Button variant="afrique" size="lg">
            Découvrir nos services
          </Button>
        </div>
      </section>
    </>
  );
}