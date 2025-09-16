"use client";
import React, { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import Card from '@/components/ui/Card';
import { FaUser, FaGraduationCap, FaDownload, FaEuroSign, FaCertificate, FaFileAlt, FaChartLine, FaSignOutAlt, FaBook, FaClock, FaCheckCircle, FaVideo, FaComments, FaChalkboardTeacher, FaCalendarAlt, FaEdit, FaLock } from 'react-icons/fa';

// Composant Button simple et fonctionnel
const Button = ({ 
  variant = 'default', 
  size = 'default', 
  className = '', 
   
  ...props 
}) => {
  // Classes de base
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  
  // Définition des variants
  const getVariantClasses = () => {
    switch(variant) {
      case 'education':
        return 'bg-[#4A90E2] text-white hover:bg-[#3a7bc8] focus:ring-[#4A90E2]';
      case 'vtc':
        return 'bg-[#CDA434] text-black hover:bg-[#b8932a] focus:ring-[#CDA434]';
      case 'formations':
        return 'bg-[#0057B7] text-white hover:bg-[#004696] focus:ring-[#0057B7]';
      case 'outline':
        return 'border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500';
      case 'secondary':
        return 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500';
      default:
        return 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500';
    }
  };
  
  // Définition des tailles
  const getSizeClasses = () => {
    switch(size) {
      case 'sm':
        return 'h-9 px-3 text-xs';
      case 'lg':
        return 'h-11 px-8 text-base';
      default:
        return 'h-10 px-4 py-2 text-sm';
    }
  };
  
  const classes = `${baseClasses} ${getVariantClasses()} ${getSizeClasses()} ${className}`;
  
  return (
    <button className={classes} {...props}>
      
    </button>
  );
};

export default function EspaceFormationPage() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });
  const [profileForm, setProfileForm] = useState({
    nom: 'Jean Dupont',
    email: 'jean.dupont@email.com',
    telephone: '+33 1 23 45 67 89'
  });
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  // Mock user data
  const userData = {
    nom: profileForm.nom,
    email: profileForm.email,
    telephone: profileForm.telephone,
    dateInscription: '15 Mars 2023',
    statut: 'Stagiaire Premium',
    financement: 'CPF'
  };

  // Mock activity log
  const activityLog = [
    { id: 'ACT-001', date: '15 Janvier 2024', action: 'Inscription à Formation VTC Complète' },
    { id: 'ACT-002', date: '20 Janvier 2024', action: 'Téléchargement de Guide du chauffeur VTC' },
    { id: 'ACT-003', date: '10 Février 2024', action: 'Participation au webinaire Q&A Réglementation' }
  ];

  // Catalogue des formations
  const catalogueFormations = [
    {
      id: 'VTC-001',
      titre: 'Formation VTC Complète',
      description: 'Devenez chauffeur VTC professionnel avec notre formation certifiante',
      duree: '120 heures',
      format: 'Présentiel/Distanciel',
      prix: 1490,
      certification: 'Certificat VTC officiel',
      programme: [
        'Réglementation VTC',
        'Gestion de clientèle',
        'Navigation et optimisation',
        'Sécurité routière',
        'Gestion administrative'
      ],
      prochaineSession: '15 Mars 2024'
    },
    {
      id: 'MICRO-002',
      titre: 'Micro-entreprise',
      description: 'Apprenez à créer et gérer votre micro-entreprise efficacement',
      duree: '40 heures',
      format: 'Distanciel',
      prix: 490,
      certification: 'Attestation de formation',
      programme: [
        'Création de micro-entreprise',
        'Obligations fiscales',
        'Comptabilité simplifiée',
        'Développement clientèle',
        'Gestion administrative'
      ],
      prochaineSession: '22 Mars 2024'
    }
  ];

  // Formations de l'utilisateur
  const formations = [
    {
      id: 'VTC-001',
      nom: 'Formation VTC Complète',
      dateDebut: '15 Janvier 2024',
      dateFin: '15 Mars 2024',
      progression: 75,
      statut: 'En cours',
      certificat: false,
      duree: '120 heures',
      modules: [
        { nom: 'Réglementation VTC', termine: true, score: 85 },
        { nom: 'Gestion de clientèle', termine: true, score: 92 },
        { nom: 'Navigation et optimisation', termine: false, score: null },
        { nom: 'Sécurité routière', termine: false, score: null },
        { nom: 'Gestion administrative', termine: false, score: null }
      ],
      formateur: 'Marie Lambert',
      sessionsLive: [
        { date: '20 Février 2024', heure: '18:00', titre: 'Q&A Réglementation' },
        { date: '27 Février 2024', heure: '18:00', titre: 'Atelier clientèle' }
      ]
    }
  ];

  const ressources = [
    {
      id: 'RESS-001',
      titre: 'Guide du chauffeur VTC professionnel',
      type: 'PDF',
      taille: '2.5 MB',
      formation: 'Formation VTC Complète',
      description: 'Bonnes pratiques et conseils pour exceller dans le métier',
      dateAjout: '15 Janvier 2024'
    }
  ];

  const factures = [
    {
      id: 'FACT-2024-001',
      date: '15 Janvier 2024',
      service: 'Formation VTC Complète',
      montant: '1490€',
      statut: 'Payée',
      financement: 'CPF'
    }
  ];

  const tabs = [
    { id: 'dashboard', label: 'Tableau de bord', icon: <FaChartLine /> },
    { id: 'catalogue', label: 'Catalogue', icon: <FaBook /> },
    { id: 'mes-formations', label: 'Mes formations', icon: <FaGraduationCap /> },
    // { id: 'ressources', label: 'Ressources', icon: <FaFileAlt /> },
    { id: 'webinaires', label: 'Webinaires', icon: <FaVideo /> },
    { id: 'factures', label: 'Factures', icon: <FaEuroSign /> },
    { id: 'profil', label: 'Mon profil', icon: <FaUser /> }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value
    });
  };

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileForm({
      ...profileForm,
      [e.target.name]: e.target.value
    });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordForm({
      ...passwordForm,
      [e.target.name]: e.target.value
    });
  };

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call to update profile
    alert('Profil mis à jour avec succès');
    setIsEditingProfile(false);
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }
    // Simulate API call to update password
    alert('Mot de passe mis à jour avec succès');
    setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
    setIsChangingPassword(false);
  };

  const handleInscription = (formationId: string) => {
    alert(`Inscription à la formation ${formationId} en cours de traitement`);
  };

  if (!isLoggedIn) {
    return (
      <>
        <HeroSection
          title="Espace Client"
          subtitle="Accédez à votre portail d'apprentissage et développez vos compétences"
          backgroundImage="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg"
        />

        <section className="section-padding">
          <div className="max-w-md mx-auto">
            <Card>
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-[#4A90E2] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaGraduationCap className="text-2xl text-white" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                  Connexion à votre espace
                </h2>
                <p className="font-body text-gray-600">
                  Accédez à vos formations et ressources pédagogiques
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                    required
                  />
                </div>

                <Button type="submit" variant="education" size="lg" className="w-full">
                  Se connecter
                </Button>
              </form>

              <div className="text-center mt-6">
                <p className="font-body text-gray-600">
                  Pas encore de compte ?{' '}
                  <a href="#" className="text-[#4A90E2] hover:underline">
                    S'inscrire
                  </a>
                </p>
                <p className="font-body text-gray-600 mt-2">
                  <a href="#" className="text-[#4A90E2] hover:underline">
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
      <section className="bg-gradient-to-r from-[#1a237e] to-[#4A90E2] text-white py-12 md:py-16 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
                Bienvenue, {userData.nom}
              </h1>
              <p className="font-body text-base sm:text-lg md:text-xl opacity-90">
                Votre portail de formation et de développement de compétences
              </p>
            </div>
            <div className="text-center md:text-right mt-4 md:mt-0">
              <div className="bg-white text-[#1a237e] px-3 py-1 md:px-4 md:py-2 rounded-lg font-medium mb-2 text-sm md:text-base">
                {userData.statut}
              </div>
              <Button 
                variant="outline" 
                className="text-white border-white hover:bg-white hover:text-[#1a237e] text-sm md:text-base"
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
          <div className="flex overflow-x-auto space-x-2 md:space-x-8 py-2 md:py-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-1 md:space-x-2 py-2 px-3 md:py-4 md:px-2 border-b-2 font-medium text-xs md:text-sm whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'border-[#4A90E2] text-[#4A90E2]'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.icon}
                <span className="hidden sm:inline">{tab.label}</span>
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
            <div className="space-y-6 md:space-y-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                <Card className="text-center p-4 md:p-6">
                  <FaBook className="text-2xl md:text-3xl text-[#4A90E2] mx-auto mb-2 md:mb-4" />
                  <div className="text-xl md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">{formations.length}</div>
                  <div className="font-body text-sm md:text-base text-gray-600">Formations</div>
                </Card>
                <Card className="text-center p-4 md:p-6">
                  <FaClock className="text-2xl md:text-3xl text-[#FF6B6B] mx-auto mb-2 md:mb-4" />
                  <div className="text-xl md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">87</div>
                  <div className="font-body text-sm md:text-base text-gray-600">Heures suivies</div>
                </Card>
                <Card className="text-center p-4 md:p-6">
                  <FaCheckCircle className="text-2xl md:text-3xl text-[#4CAF50] mx-auto mb-2 md:mb-4" />
                  <div className="text-xl md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">1</div>
                  <div className="font-body text-sm md:text-base text-gray-600">Certificats</div>
                </Card>
                <Card className="text-center p-4 md:p-6">
                  <FaFileAlt className="text-2xl md:text-3xl text-[#FFA726] mx-auto mb-2 md:mb-4" />
                  <div className="text-xl md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">{ressources.length}</div>
                  <div className="font-body text-sm md:text-base text-gray-600">Ressources</div>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                <Card className="p-4 md:p-6">
                  <h3 className="font-heading text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">
                    Formations en cours
                  </h3>
                  <div className="space-y-4">
                    {formations.filter(f => f.statut === 'En cours').map((formation) => (
                      <div key={formation.id} className="p-4 bg-blue-50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-gray-900">{formation.nom}</h4>
                          <span className="text-sm text-blue-600">{formation.progression}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${formation.progression}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between items-center mt-3">
                          <span className="text-xs text-gray-500">{formation.duree}</span>
                          <Button size="sm" variant="education">
                            Continuer
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-4 md:p-6">
                  <h3 className="font-heading text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">
                    Prochaines sessions live
                  </h3>
                  <div className="space-y-4">
                    {formations.flatMap(f => f.sessionsLive || []).slice(0, 3).map((session, index) => (
                      <div key={index} className="flex items-center p-3 bg-white border-l-4 border-purple-500 rounded shadow-sm">
                        <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                          <FaVideo className="text-purple-500" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{session.titre}</p>
                          <p className="text-sm text-gray-500">{session.date} à {session.heure}</p>
                        </div>
                      </div>
                    ))}
                    {formations.flatMap(f => f.sessionsLive || []).length === 0 && (
                      <p className="text-gray-500 text-center py-4">Aucune session live programmée</p>
                    )}
                  </div>
                </Card>
              </div>

              <Card className="p-4 md:p-6">
                <h3 className="font-heading text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">
                  Dernières ressources ajoutées
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {ressources.slice(0, 3).map((ressource) => (
                    <div key={ressource.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                          <FaFileAlt className="text-blue-500" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">{ressource.type}</span>
                      </div>
                      <h4 className="font-medium text-gray-900 mb-1">{ressource.titre}</h4>
                      <p className="text-sm text-gray-600 mb-2">{ressource.formation}</p>
                      <div className="flex justify-between items-center text-xs text-gray-500">
                        <span>{ressource.taille}</span>
                        <span>{ressource.dateAjout}</span>
                      </div>
                      <Button variant="outline" size="sm" className="w-full mt-3">
                        <FaDownload className="mr-2" />
                        Télécharger
                      </Button>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {/* Catalogue */}
          {activeTab === 'catalogue' && (
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
                Catalogue de Formations
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {catalogueFormations.map((formation) => (
                  <Card key={formation.id} className="p-4 md:p-6 flex flex-col h-full">
                    <div className="flex-grow">
                      <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
                        {formation.titre}
                      </h3>
                      <p className="font-body text-gray-600 mb-4">
                        {formation.description}
                      </p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <FaClock className="mr-2 text-blue-500" />
                          {formation.duree}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <FaChalkboardTeacher className="mr-2 text-blue-500" />
                          {formation.format}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <FaCertificate className="mr-2 text-blue-500" />
                          {formation.certification}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <FaCalendarAlt className="mr-2 text-blue-500" />
                          Prochaine session: {formation.prochaineSession}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-medium text-gray-900 mb-2">Programme:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {formation.programme.slice(0, 3).map((item, index) => (
                            <li key={index}>• {item}</li>
                          ))}
                          {formation.programme.length > 3 && (
                            <li>• ... et {formation.programme.length - 3} autres modules</li>
                          )}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-auto pt-4 border-t border-gray-200">
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-heading text-2xl font-bold text-gray-900">
                          {formation.prix}€
                        </span>
                        <span className="text-sm text-gray-600">Financement CPF possible</span>
                      </div>
                      <Button 
                        variant="education" 
                        className="w-full"
                        onClick={() => handleInscription(formation.id)}
                      >
                        S'inscrire
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Mes Formations */}
          {activeTab === 'mes-formations' && (
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
                Mes Formations
              </h2>
              <div className="space-y-6">
                {formations.map((formation) => (
                  <Card key={formation.id} className="p-4 md:p-6">
                    <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">
                      {formation.nom}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-600">
                          <FaCalendarAlt className="inline mr-2 text-blue-500" />
                          Début: {formation.dateDebut}
                        </p>
                        <p className="text-sm text-gray-600">
                          <FaCalendarAlt className="inline mr-2 text-blue-500" />
                          Fin: {formation.dateFin}
                        </p>
                        <p className="text-sm text-gray-600">
                          <FaClock className="inline mr-2 text-blue-500" />
                          Durée: {formation.duree}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">
                          <FaChalkboardTeacher className="inline mr-2 text-blue-500" />
                          Formateur: {formation.formateur}
                        </p>
                        <p className="text-sm text-gray-600">
                          <FaCheckCircle className="inline mr-2 text-blue-500" />
                          Statut: {formation.statut}
                        </p>
                        <p className="text-sm text-gray-600">
                          <FaCertificate className="inline mr-2 text-blue-500" />
                          Certificat: {formation.certificat ? 'Obtenu' : 'Non obtenu'}
                        </p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">Progression:</h4>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${formation.progression}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">{formation.progression}% complété</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">Modules:</h4>
                      <ul className="space-y-2">
                        {formation.modules.map((module, index) => (
                          <li key={index} className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">{module.nom}</span>
                            <span className="text-sm">
                              {module.termine ? (
                                <span className="text-green-600">Terminé (Score: {module.score}%)</span>
                              ) : (
                                <span className="text-gray-500">En cours</span>
                              )}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button variant="education" size="sm">
                      Accéder à la formation
                    </Button>
                  </Card>
                ))}
                {formations.length === 0 && (
                  <p className="text-gray-500 text-center py-4">Aucune formation en cours</p>
                )}
              </div>
            </div>
          )}

          {/* Ressources */}
          {activeTab === 'ressources' && (
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
                Mes Ressources
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ressources.map((ressource) => (
                  <Card key={ressource.id} className="p-4 md:p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <FaFileAlt className="text-blue-500" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{ressource.titre}</h4>
                        <p className="text-sm text-gray-600">{ressource.type}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{ressource.description}</p>
                    <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
                      <span>{ressource.formation}</span>
                      <span>{ressource.dateAjout}</span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      <FaDownload className="mr-2" />
                      Télécharger
                    </Button>
                  </Card>
                ))}
                {ressources.length === 0 && (
                  <p className="text-gray-500 text-center py-4">Aucune ressource disponible</p>
                )}
              </div>
            </div>
          )}

          {/* Webinaires */}
          {activeTab === 'webinaires' && (
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
                Mes Webinaires
              </h2>
              <div className="space-y-6">
                {formations.flatMap(f => f.sessionsLive || []).map((session, index) => (
                  <Card key={index} className="p-4 md:p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                        <FaVideo className="text-purple-500" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{session.titre}</h4>
                        <p className="text-sm text-gray-600">{session.date} à {session.heure}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">Rejoignez notre session live pour approfondir vos connaissances.</p>
                    <Button variant="education" size="sm">
                      Participer
                    </Button>
                  </Card>
                ))}
                {formations.flatMap(f => f.sessionsLive || []).length === 0 && (
                  <p className="text-gray-500 text-center py-4">Aucun webinaire programmé</p>
                )}
              </div>
            </div>
          )}

          {/* Factures */}
          {activeTab === 'factures' && (
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
                Mes Factures
              </h2>
              <div className="space-y-6">
                {factures.map((facture) => (
                  <Card key={facture.id} className="p-4 md:p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-gray-900">{facture.service}</h4>
                      <span className={`text-sm ${facture.statut === 'Payée' ? 'text-green-600' : 'text-red-600'}`}>
                        {facture.statut}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                      <p className="text-sm text-gray-600">
                        <FaEuroSign className="inline mr-2 text-blue-500" />
                        Montant: {facture.montant}
                      </p>
                      <p className="text-sm text-gray-600">
                        <FaCalendarAlt className="inline mr-2 text-blue-500" />
                        Date: {facture.date}
                      </p>
                      <p className="text-sm text-gray-600">
                        <FaFileAlt className="inline mr-2 text-blue-500" />
                        Financement: {facture.financement}
                      </p>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      <FaDownload className="mr-2" />
                      Télécharger la facture
                    </Button>
                  </Card>
                ))}
                {factures.length === 0 && (
                  <p className="text-gray-500 text-center py-4">Aucune facture disponible</p>
                )}
              </div>
            </div>
          )}

          {/* Profil */}
          {activeTab === 'profil' && (
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
                Mon Profil
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Profile Information */}
                <Card className="p-4 md:p-6 lg:col-span-2">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <FaUser className="text-2xl text-blue-500" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-bold text-gray-900">{userData.nom}</h3>
                        <p className="text-sm text-gray-600">{userData.statut}</p>
                      </div>
                    </div>
                    <Button 
                      variant="education" 
                      size="sm" 
                      onClick={() => setIsEditingProfile(!isEditingProfile)}
                    >
                      <FaEdit className="mr-2" />
                      {isEditingProfile ? 'Annuler' : 'Modifier'}
                    </Button>
                  </div>

                  {isEditingProfile ? (
                    <form onSubmit={handleProfileSubmit} className="space-y-4">
                      <div>
                        <label className="block font-body font-medium text-gray-700 mb-2">
                          Nom
                        </label>
                        <input
                          type="text"
                          name="nom"
                          value={profileForm.nom}
                          onChange={handleProfileChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block font-body font-medium text-gray-700 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={profileForm.email}
                          onChange={handleProfileChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block font-body font-medium text-gray-700 mb-2">
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          name="telephone"
                          value={profileForm.telephone}
                          onChange={handleProfileChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                          required
                        />
                      </div>
                      <div className="flex space-x-4">
                        <Button type="submit" variant="education" size="sm">
                          Enregistrer
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => setIsEditingProfile(false)}
                        >
                          Annuler
                        </Button>
                      </div>
                    </form>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600 mb-2">
                          <FaUser className="inline mr-2 text-blue-500" />
                          Email: {userData.email}
                        </p>
                        <p className="text-sm text-gray-600">
                          <FaUser className="inline mr-2 text-blue-500" />
                          Téléphone: {userData.telephone}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-2">
                          <FaCalendarAlt className="inline mr-2 text-blue-500" />
                          Date d'inscription: {userData.dateInscription}
                        </p>
                        <p className="text-sm text-gray-600">
                          <FaEuroSign className="inline mr-2 text-blue-500" />
                          Financement: {userData.financement}
                        </p>
                      </div>
                    </div>
                  )}
                </Card>

                {/* Password Change */}
                <Card className="p-4 md:p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-heading text-lg font-bold text-gray-900">Mot de passe</h3>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => setIsChangingPassword(!isChangingPassword)}
                    >
                      <FaLock className="mr-2" />
                      {isChangingPassword ? 'Annuler' : 'Changer'}
                    </Button>
                  </div>
                  {isChangingPassword && (
                    <form onSubmit={handlePasswordSubmit} className="space-y-4">
                      <div>
                        <label className="block font-body font-medium text-gray-700 mb-2">
                          Mot de passe actuel
                        </label>
                        <input
                          type="password"
                          name="currentPassword"
                          value={passwordForm.currentPassword}
                          onChange={handlePasswordChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block font-body font-medium text-gray-700 mb-2">
                          Nouveau mot de passe
                        </label>
                        <input
                          type="password"
                          name="newPassword"
                          value={passwordForm.newPassword}
                          onChange={handlePasswordChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block font-body font-medium text-gray-700 mb-2">
                          Confirmer le mot de passe
                        </label>
                        <input
                          type="password"
                          name="confirmPassword"
                          value={passwordForm.confirmPassword}
                          onChange={handlePasswordChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                          required
                        />
                      </div>
                      <div className="flex space-x-4">
                        <Button type="submit" variant="education" size="sm">
                          Enregistrer
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => setIsChangingPassword(false)}
                        >
                          Annuler
                        </Button>
                      </div>
                    </form>
                  )}
                </Card>

                {/* Activity Log */}
                <Card className="p-4 md:p-6 lg:col-span-3">
                  <h3 className="font-heading text-lg font-bold text-gray-900 mb-4">
                    Historique d'activités
                  </h3>
                  <div className="space-y-4">
                    {activityLog.map((activity) => (
                      <div key={activity.id} className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <FaFileAlt className="text-blue-500" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                          <p className="text-xs text-gray-500">{activity.date}</p>
                        </div>
                      </div>
                    ))}
                    {activityLog.length === 0 && (
                      <p className="text-gray-500 text-center py-4">Aucune activité récente</p>
                    )}
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