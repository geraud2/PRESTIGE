"use client";
import React, { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { FaUser, FaCar, FaGraduationCap, FaDownload, FaCalendarAlt, FaEuroSign, FaCertificate, FaFileAlt, FaChartLine, FaSignOutAlt } from 'react-icons/fa';

export default function EspaceClientPage() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });

  // Mock user data
  const userData = {
    nom: 'Jean Dupont',
    email: 'jean.dupont@email.com',
    telephone: '+33 1 23 45 67 89',
    dateInscription: '15 Mars 2023',
    statut: 'Client Premium'
  };

  const reservations = [
    {
      id: 'VTC-2024-001',
      type: 'VTC',
      date: '25 Janvier 2024',
      heure: '14:30',
      depart: 'Aéroport CDG',
      arrivee: 'Centre-ville Paris',
      statut: 'Confirmé',
      prix: '65€'
    },
    {
      id: 'LOC-2024-002',
      type: 'Location',
      date: '20 Janvier 2024',
      heure: '09:00',
      vehicule: 'BMW Série 3',
      duree: '3 jours',
      statut: 'Terminé',
      prix: '255€'
    },
    {
      id: 'VTC-2024-003',
      type: 'VTC',
      date: '18 Janvier 2024',
      heure: '16:45',
      depart: 'Gare de Lyon',
      arrivee: 'Aéroport Orly',
      statut: 'Terminé',
      prix: '45€'
    }
  ];

  const formations = [
    {
      id: 'FORM-2023-001',
      nom: 'Formation VTC Complète',
      dateDebut: '15 Mars 2023',
      dateFin: '2 Avril 2023',
      progression: 100,
      statut: 'Terminée',
      certificat: true
    },
    {
      id: 'FORM-2024-001',
      nom: 'Perfectionnement Service Client',
      dateDebut: '10 Janvier 2024',
      dateFin: '12 Janvier 2024',
      progression: 75,
      statut: 'En cours',
      certificat: false
    }
  ];

  const factures = [
    {
      id: 'FACT-2024-001',
      date: '25 Janvier 2024',
      service: 'VTC Premium',
      montant: '65€',
      statut: 'Payée'
    },
    {
      id: 'FACT-2024-002',
      date: '20 Janvier 2024',
      service: 'Location BMW 3 jours',
      montant: '255€',
      statut: 'Payée'
    },
    {
      id: 'FACT-2023-045',
      date: '2 Avril 2023',
      service: 'Formation VTC',
      montant: '2490€',
      statut: 'Payée'
    }
  ];

  const ressources = [
    {
      titre: 'Guide du chauffeur VTC professionnel',
      type: 'PDF',
      taille: '2.5 MB',
      description: 'Bonnes pratiques et conseils pour exceller dans le métier'
    },
    {
      titre: 'Réglementation VTC 2024',
      type: 'PDF',
      taille: '1.8 MB',
      description: 'Mise à jour complète de la réglementation en vigueur'
    },
    {
      titre: 'Templates de facturation',
      type: 'ZIP',
      taille: '0.5 MB',
      description: 'Modèles de factures et devis professionnels'
    }
  ];

  const tabs = [
    { id: 'dashboard', label: 'Tableau de bord', icon: <FaChartLine /> },
    { id: 'reservations', label: 'Mes réservations', icon: <FaCar /> },
    { id: 'formations', label: 'Mes formations', icon: <FaGraduationCap /> },
    { id: 'factures', label: 'Factures', icon: <FaEuroSign /> },
    { id: 'ressources', label: 'Ressources', icon: <FaFileAlt /> },
    { id: 'profil', label: 'Mon profil', icon: <FaUser /> }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    setIsLoggedIn(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value
    });
  };

  if (!isLoggedIn) {
    return (
      <>
        <HeroSection
          title="Espace Client"
          subtitle="Accédez à votre espace personnel pour gérer vos réservations et formations"
          backgroundImage="https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg"
          theme="vtc"
        />

        <section className="section-padding">
          <div className="max-w-md mx-auto">
            <Card>
              <div className="text-center mb-8">
                <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                  Connexion à votre espace
                </h2>
                <p className="font-body text-gray-600">
                  Connectez-vous pour accéder à vos services
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label className="block font-body font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={loginForm.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CDA434] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block font-body font-medium text-gray-700 mb-2">
                    Mot de passe
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={loginForm.password}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CDA434] focus:border-transparent"
                    required
                  />
                </div>

                <Button type="submit" variant="vtc" size="lg" className="w-full">
                  Se connecter
                </Button>
              </form>

              <div className="text-center mt-6">
                <p className="font-body text-gray-600">
                  Pas encore de compte ?{' '}
                  <a href="#" className="text-[#CDA434] hover:underline">
                    Créer un compte
                  </a>
                </p>
                <p className="font-body text-gray-600 mt-2">
                  <a href="#" className="text-[#CDA434] hover:underline">
                    Mot de passe oublié ?
                  </a>
                </p>
              </div>
            </Card>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-black to-gray-800 text-white py-16 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-heading text-4xl font-bold mb-4">
                Bienvenue, {userData.nom}
              </h1>
              <p className="font-body text-xl opacity-90">
                Gérez vos services DJOK PRESTIGE depuis votre espace personnel
              </p>
            </div>
            <div className="text-right">
              <div className="bg-[#CDA434] text-black px-4 py-2 rounded-lg font-medium mb-2">
                {userData.statut}
              </div>
              <Button 
                variant="outline" 
                className="text-white border-white hover:bg-white hover:text-black"
                onClick={() => setIsLoggedIn(false)}
              >
                <FaSignOutAlt className="mr-2" />
                Déconnexion
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'border-[#CDA434] text-[#CDA434]'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Dashboard */}
          {activeTab === 'dashboard' && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="text-center">
                  <FaCar className="text-3xl text-[#CDA434] mx-auto mb-4" />
                  <div className="text-2xl font-bold text-gray-900 mb-2">12</div>
                  <div className="font-body text-gray-600">Courses VTC</div>
                </Card>
                <Card className="text-center">
                  <FaCar className="text-3xl text-black mx-auto mb-4" />
                  <div className="text-2xl font-bold text-gray-900 mb-2">5</div>
                  <div className="font-body text-gray-600">Locations</div>
                </Card>
                <Card className="text-center">
                  <FaGraduationCap className="text-3xl text-[#0057B7] mx-auto mb-4" />
                  <div className="text-2xl font-bold text-gray-900 mb-2">2</div>
                  <div className="font-body text-gray-600">Formations</div>
                </Card>
                <Card className="text-center">
                  <FaCertificate className="text-3xl text-[#F7931E] mx-auto mb-4" />
                  <div className="text-2xl font-bold text-gray-900 mb-2">1</div>
                  <div className="font-body text-gray-600">Certificat</div>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-6">
                    Dernières réservations
                  </h3>
                  <div className="space-y-4">
                    {reservations.slice(0, 3).map((reservation) => (
                      <div key={reservation.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <div className="font-medium text-gray-900">{reservation.id}</div>
                          <div className="text-sm text-gray-600">{reservation.date}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-[#CDA434]">{reservation.prix}</div>
                          <div className={`text-sm ${
                            reservation.statut === 'Confirmé' ? 'text-green-600' : 'text-gray-600'
                          }`}>
                            {reservation.statut}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card>
                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-6">
                    Progression formations
                  </h3>
                  <div className="space-y-4">
                    {formations.map((formation) => (
                      <div key={formation.id}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-medium text-gray-900">{formation.nom}</div>
                          <div className="text-sm text-gray-600">{formation.progression}%</div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-[#0057B7] h-2 rounded-full transition-all duration-300"
                            style={{ width: `${formation.progression}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          )}

          {/* Reservations */}
          {activeTab === 'reservations' && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-heading text-3xl font-bold text-gray-900">
                  Mes Réservations
                </h2>
                <Button variant="vtc">
                  Nouvelle réservation
                </Button>
              </div>

              <div className="space-y-4">
                {reservations.map((reservation) => (
                  <Card key={reservation.id}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6">
                        <div className="w-12 h-12 bg-[#CDA434] rounded-lg flex items-center justify-center">
                          <FaCar className="text-black" />
                        </div>
                        <div>
                          <div className="font-heading font-bold text-gray-900">
                            {reservation.id}
                          </div>
                          <div className="font-body text-gray-600">
                            {reservation.date} à {reservation.heure}
                          </div>
                          {reservation.type === 'VTC' ? (
                            <div className="font-body text-sm text-gray-500">
                              {reservation.depart} → {reservation.arrivee}
                            </div>
                          ) : (
                            <div className="font-body text-sm text-gray-500">
                              {reservation.vehicule} - {reservation.duree}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-2xl text-[#CDA434] mb-2">
                          {reservation.prix}
                        </div>
                        <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                          reservation.statut === 'Confirmé' 
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {reservation.statut}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Formations */}
          {activeTab === 'formations' && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-heading text-3xl font-bold text-gray-900">
                  Mes Formations
                </h2>
                <Button variant="formations">
                  Nouvelle formation
                </Button>
              </div>

              <div className="space-y-6">
                {formations.map((formation) => (
                  <Card key={formation.id}>
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
                          {formation.nom}
                        </h3>
                        <div className="font-body text-gray-600">
                          {formation.dateDebut} - {formation.dateFin}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`px-3 py-1 rounded-full text-sm font-medium mb-2 ${
                          formation.statut === 'Terminée' 
                            ? 'bg-green-100 text-green-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {formation.statut}
                        </div>
                        {formation.certificat && (
                          <Button variant="outline" size="sm">
                            <FaDownload className="mr-2" />
                            Certificat
                          </Button>
                        )}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-body text-gray-700">Progression</span>
                        <span className="font-body text-gray-700">{formation.progression}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-[#0057B7] h-3 rounded-full transition-all duration-300"
                          style={{ width: `${formation.progression}%` }}
                        ></div>
                      </div>
                    </div>

                    {formation.statut === 'En cours' && (
                      <Button variant="formations">
                        Continuer la formation
                      </Button>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Factures */}
          {activeTab === 'factures' && (
            <div>
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-8">
                Mes Factures
              </h2>

              <div className="space-y-4">
                {factures.map((facture) => (
                  <Card key={facture.id}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6">
                        <div className="w-12 h-12 bg-[#0057B7] rounded-lg flex items-center justify-center">
                          <FaFileAlt className="text-white" />
                        </div>
                        <div>
                          <div className="font-heading font-bold text-gray-900">
                            {facture.id}
                          </div>
                          <div className="font-body text-gray-600">
                            {facture.service}
                          </div>
                          <div className="font-body text-sm text-gray-500">
                            {facture.date}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-2xl text-gray-900 mb-2">
                          {facture.montant}
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                            {facture.statut}
                          </span>
                          <Button variant="outline" size="sm">
                            <FaDownload className="mr-2" />
                            PDF
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Ressources */}
          {activeTab === 'ressources' && (
            <div>
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-8">
                Ressources & Documents
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ressources.map((ressource, index) => (
                  <Card key={index}>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[#F7931E] rounded-lg flex items-center justify-center mx-auto mb-4">
                        <FaDownload className="text-2xl text-white" />
                      </div>
                      <h3 className="font-heading text-lg font-bold text-gray-900 mb-2">
                        {ressource.titre}
                      </h3>
                      <p className="font-body text-gray-600 mb-4">
                        {ressource.description}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <span>{ressource.type}</span>
                        <span>{ressource.taille}</span>
                      </div>
                      <Button variant="outline" className="w-full">
                        <FaDownload className="mr-2" />
                        Télécharger
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Profil */}
          {activeTab === 'profil' && (
            <div>
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-8">
                Mon Profil
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-6">
                    Informations personnelles
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block font-body font-medium text-gray-700 mb-2">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        value={userData.nom}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CDA434] focus:border-transparent"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block font-body font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={userData.email}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CDA434] focus:border-transparent"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block font-body font-medium text-gray-700 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        value={userData.telephone}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CDA434] focus:border-transparent"
                      />
                    </div>
                    <Button variant="vtc">
                      Mettre à jour
                    </Button>
                  </div>
                </Card>

                <Card>
                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-6">
                    Informations du compte
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <span className="font-body text-gray-700">Statut</span>
                      <span className="bg-[#CDA434] text-black px-3 py-1 rounded-full text-sm font-medium">
                        {userData.statut}
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <span className="font-body text-gray-700">Membre depuis</span>
                      <span className="font-body text-gray-900">{userData.dateInscription}</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <span className="font-body text-gray-700">Dernière connexion</span>
                      <span className="font-body text-gray-900">Aujourd'hui</span>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="font-heading text-lg font-bold text-gray-900 mb-4">
                      Sécurité
                    </h4>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full">
                        Changer le mot de passe
                      </Button>
                      <Button variant="outline" className="w-full">
                        Activer l'authentification 2FA
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}