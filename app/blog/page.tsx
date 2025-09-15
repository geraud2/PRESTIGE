"use client";
import React, { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { FaCar, FaGraduationCap, FaGlobe, FaCalendarAlt, FaUser, FaArrowRight, FaSearch } from 'react-icons/fa';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', label: 'Tous les articles', color: 'bg-gray-500' },
    { id: 'vtc', label: 'VTC & Transport', color: 'bg-[#CDA434]' },
    { id: 'location', label: 'Location', color: 'bg-black' },
    { id: 'formations', label: 'Formations', color: 'bg-[#0057B7]' },
    { id: 'afrique', label: 'Afrique & Entrepreneuriat', color: 'bg-[#F7931E]' }
  ];

  const articles = [
    {
      id: 1,
      title: 'Comment devenir chauffeur VTC en 2024 : Guide complet',
      excerpt: 'Découvrez toutes les étapes pour obtenir votre carte professionnelle VTC et lancer votre activité.',
      image: 'https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg',
      category: 'vtc',
      author: 'Djibril KONE',
      date: '15 Janvier 2024',
      readTime: '8 min',
      featured: true
    },
    {
      id: 2,
      title: 'Les opportunités d\'investissement en Afrique de l\'Ouest',
      excerpt: 'Analyse des secteurs porteurs et des pays les plus attractifs pour les investisseurs.',
      image: 'https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg',
      category: 'afrique',
      author: 'Ahmed BENALI',
      date: '12 Janvier 2024',
      readTime: '12 min',
      featured: true
    },
    {
      id: 3,
      title: 'Location de véhicules : 5 conseils pour économiser',
      excerpt: 'Nos astuces pour réduire vos coûts de location tout en gardant un service de qualité.',
      image: 'https://images.pexels.com/photos/1429775/pexels-photo-1429775.jpeg',
      category: 'location',
      author: 'Marie DUBOIS',
      date: '10 Janvier 2024',
      readTime: '6 min',
      featured: false
    },
    {
      id: 4,
      title: 'Financer sa formation VTC avec le CPF',
      excerpt: 'Comment utiliser votre Compte Personnel de Formation pour financer votre formation VTC.',
      image: 'https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg',
      category: 'formations',
      author: 'Sarah MARTIN',
      date: '8 Janvier 2024',
      readTime: '5 min',
      featured: false
    },
    {
      id: 5,
      title: 'Transport premium : l\'art du service client',
      excerpt: 'Les clés pour offrir une expérience client exceptionnelle dans le transport de personnes.',
      image: 'https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg',
      category: 'vtc',
      author: 'Djibril KONE',
      date: '5 Janvier 2024',
      readTime: '7 min',
      featured: false
    },
    {
      id: 6,
      title: 'Créer son entreprise au Sénégal : démarches et conseils',
      excerpt: 'Guide pratique pour les entrepreneurs souhaitant s\'implanter au Sénégal.',
      image: 'https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg',
      category: 'afrique',
      author: 'Ahmed BENALI',
      date: '3 Janvier 2024',
      readTime: '10 min',
      featured: false
    },
    {
      id: 7,
      title: 'Véhicules électriques : l\'avenir du transport',
      excerpt: 'Pourquoi et comment intégrer des véhicules électriques dans votre flotte.',
      image: 'https://images.pexels.com/photos/1429775/pexels-photo-1429775.jpeg',
      category: 'location',
      author: 'Marie DUBOIS',
      date: '1 Janvier 2024',
      readTime: '9 min',
      featured: false
    },
    {
      id: 8,
      title: 'Formation continue : rester compétitif sur le marché',
      excerpt: 'L\'importance de la formation continue pour les professionnels du transport.',
      image: 'https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg',
      category: 'formations',
      author: 'Sarah MARTIN',
      date: '28 Décembre 2023',
      readTime: '6 min',
      featured: false
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticles = articles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'vtc':
      case 'location':
        return <FaCar className="text-sm" />;
      case 'formations':
        return <FaGraduationCap className="text-sm" />;
      case 'afrique':
        return <FaGlobe className="text-sm" />;
      default:
        return null;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'vtc':
        return 'bg-[#CDA434] text-black';
      case 'location':
        return 'bg-black text-white';
      case 'formations':
        return 'bg-[#0057B7] text-white';
      case 'afrique':
        return 'bg-[#F7931E] text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Blog DJOK PRESTIGE"
        subtitle="Actualités, conseils et expertise dans le transport, la formation et l'entrepreneuriat"
        backgroundImage="https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg"
        theme="vtc"
        primaryAction={{
          text: "Découvrir les articles",
          href: "#articles",
          onClick: () => document.getElementById('articles')?.scrollIntoView({ behavior: 'smooth' })
        }}
        secondaryAction={{
          text: "S'abonner à la newsletter",
          href: "#newsletter",
          onClick: () => document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })
        }}
      />

      {/* Search & Filters */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un article..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CDA434] focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? `${category.color} text-white shadow-lg`
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {selectedCategory === 'all' && (
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl font-bold text-gray-900 mb-6">
                Articles à la Une
              </h2>
              <p className="font-body text-xl text-gray-600">
                Nos derniers articles les plus populaires
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <Card key={article.id} className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300">
                  <div className="relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(article.category)}`}>
                        {getCategoryIcon(article.category)}
                        <span>{categories.find(c => c.id === article.category)?.label}</span>
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 bg-[#CDA434] text-black px-3 py-1 rounded-full text-sm font-bold">
                      À LA UNE
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-gray-900 mb-3 group-hover:text-[#CDA434] transition-colors">
                      {article.title}
                    </h3>
                    <p className="font-body text-gray-600 mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <FaUser />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <FaCalendarAlt />
                          <span>{article.date}</span>
                        </div>
                      </div>
                      <span>{article.readTime} de lecture</span>
                    </div>
                    <Button variant="outline" className="w-full group-hover:bg-[#CDA434] group-hover:text-black group-hover:border-[#CDA434]">
                      Lire l'article <FaArrowRight className="ml-2" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section id="articles" className={`section-padding ${selectedCategory === 'all' ? 'bg-gray-50' : ''}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-6">
              {selectedCategory === 'all' ? 'Tous nos Articles' : `Articles - ${categories.find(c => c.id === selectedCategory)?.label}`}
            </h2>
            <p className="font-body text-xl text-gray-600">
              {filteredArticles.length} article{filteredArticles.length > 1 ? 's' : ''} trouvé{filteredArticles.length > 1 ? 's' : ''}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(selectedCategory === 'all' ? regularArticles : filteredArticles).map((article) => (
              <Card key={article.id} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(article.category)}`}>
                      {getCategoryIcon(article.category)}
                      <span>{categories.find(c => c.id === article.category)?.label}</span>
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold text-gray-900 mb-3 group-hover:text-[#CDA434] transition-colors">
                    {article.title}
                  </h3>
                  <p className="font-body text-gray-600 mb-4 text-sm">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <FaUser />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FaCalendarAlt />
                      <span>{article.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{article.readTime} de lecture</span>
                    <Button variant="outline" size="sm" className="group-hover:bg-[#CDA434] group-hover:text-black group-hover:border-[#CDA434]">
                      Lire plus <FaArrowRight className="ml-1" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="font-body text-xl text-gray-500">
                Aucun article trouvé pour cette recherche.
              </p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchTerm('');
                }}
              >
                Voir tous les articles
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="section-padding bg-gradient-to-r from-[#CDA434] to-[#B8941E] text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-4xl font-bold mb-6">
            Restez informé de nos actualités
          </h2>
          <p className="font-body text-xl mb-8 opacity-90">
            Recevez nos derniers articles, conseils d'experts et actualités directement dans votre boîte mail
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
              S'abonner
            </Button>
          </form>
          
          <p className="font-body text-sm opacity-75 mt-4">
            Pas de spam, désabonnement en un clic
          </p>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-6">
              Explorez nos Thématiques
            </h2>
            <p className="font-body text-xl text-gray-600">
              Découvrez nos articles par domaine d'expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.slice(1).map((category) => (
              <Card 
                key={category.id} 
                className="text-center cursor-pointer hover:shadow-xl transition-all duration-300 group"
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <div className="text-2xl text-white">
                    {getCategoryIcon(category.id)}
                  </div>
                </div>
                <h3 className="font-heading text-lg font-bold text-gray-900 mb-3">
                  {category.label}
                </h3>
                <p className="font-body text-gray-600 mb-4">
                  {articles.filter(a => a.category === category.id).length} articles
                </p>
                <Button variant="outline" size="sm" className="group-hover:bg-gray-900 group-hover:text-white">
                  Voir les articles
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}