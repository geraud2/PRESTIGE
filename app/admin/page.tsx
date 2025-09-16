"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaUsers, FaCar, FaGraduationCap, FaBlog, FaChartLine, FaCalendarAlt, FaCog, FaSignOutAlt, FaEye, FaEdit, FaTrash, FaPlus, FaBars, FaTimes } from 'react-icons/fa';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [adminUser, setAdminUser] = useState<any>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Vérifier l'authentification
    const token = localStorage.getItem('admin-token');
    const user = localStorage.getItem('admin-user');
    
    if (token && user) {
      setIsLoggedIn(true);
      try {
        setAdminUser(JSON.parse(user));
      } catch (error) {
        console.error("Erreur de parsing user:", error);
        setAdminUser(null);
      }
    } else {
      router.push('/admin/login');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('admin-token');
    localStorage.removeItem('admin-user');
    router.push('/admin/login');
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#CDA434] mx-auto mb-4"></div>
          <p className="text-gray-600">Vérification des accès...</p>
        </div>
      </div>
    );
  }

  const stats = [
    { title: 'Réservations VTC', value: '156', change: '+12%', icon: <FaCar className="text-2xl text-[#CDA434]" /> },
    { title: 'Véhicules actifs', value: '24', change: '+2', icon: <FaCar className="text-2xl text-blue-600" /> },
    { title: 'Formations en cours', value: '8', change: '+3', icon: <FaGraduationCap className="text-2xl text-green-600" /> },
    { title: 'Articles publiés', value: '45', change: '+5', icon: <FaBlog className="text-2xl text-purple-600" /> }
  ];

  const recentReservations = [
    { id: 'VTC-001', client: 'Jean Dupont', date: '2024-01-25', heure: '14:30', statut: 'Confirmé', montant: '65€' },
    { id: 'VTC-002', client: 'Marie Martin', date: '2024-01-25', heure: '16:00', statut: 'En attente', montant: '45€' },
    { id: 'VTC-003', client: 'Pierre Durand', date: '2024-01-26', heure: '09:15', statut: 'Confirmé', montant: '85€' }
  ];

  const tabs = [
    { id: 'dashboard', label: 'Tableau de bord', icon: <FaChartLine /> },
    { id: 'reservations', label: 'Réservations VTC', icon: <FaCar /> },
    { id: 'vehicles', label: 'Planning véhicules', icon: <FaCalendarAlt /> },
    { id: 'formations', label: 'Formations', icon: <FaGraduationCap /> },
    { id: 'seminaires', label: 'Séminaires', icon: <FaUsers /> },
    { id: 'blog', label: 'Blog', icon: <FaBlog /> },
    { id: 'crm', label: 'CRM', icon: <FaUsers /> },
    { id: 'settings', label: 'Paramètres', icon: <FaCog /> }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Admin */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden mr-4 p-2 text-gray-600 hover:text-[#CDA434]"
              >
                {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>
              <h1 className="text-xl md:text-2xl font-bold text-[#CDA434]">DJOK PRESTIGE</h1>
              <span className="ml-2 md:ml-4 px-2 md:px-3 py-1 bg-red-100 text-red-800 text-xs md:text-sm font-medium rounded-full">
                Admin
              </span>
            </div>
            <div className="flex items-center space-x-2 md:space-x-4">
              <span className="text-sm md:text-base text-gray-700 hidden sm:block">
                {adminUser?.name || adminUser?.email || 'Administrateur'}
              </span>
              <Button variant="outline" size="sm" onClick={handleLogout} className="text-xs md:text-sm">
                <FaSignOutAlt className="mr-1 md:mr-2" />
                <span className="hidden sm:inline">Déconnexion</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar pour desktop et mobile */}
        <aside className={`bg-white shadow-sm min-h-screen fixed lg:static inset-y-0 left-0 z-50 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out w-64`}>
          <nav className="mt-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full flex items-center px-6 py-3 text-left hover:bg-gray-50 ${
                  activeTab === tab.id ? 'bg-[#CDA434]/10 text-[#CDA434] border-r-2 border-[#CDA434]' : 'text-gray-700'
                }`}
              >
                {tab.icon}
                <span className="ml-3">{tab.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Overlay pour mobile */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
        )}

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6 lg:p-8 lg:ml-0">
          {/* Dashboard */}
          {activeTab === 'dashboard' && (
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Tableau de bord</h2>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
                {stats.map((stat, index) => (
                  <Card key={index} className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs md:text-sm text-gray-600">{stat.title}</p>
                        <p className="text-xl md:text-2xl font-bold text-gray-900">{stat.value}</p>
                        <p className="text-xs md:text-sm text-green-600">{stat.change}</p>
                      </div>
                      {stat.icon}
                    </div>
                  </Card>
                ))}
              </div>

              {/* Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                <Card className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Réservations récentes</h3>
                  <div className="space-y-3">
                    {recentReservations.map((reservation) => (
                      <div key={reservation.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-gray-900 truncate">{reservation.client}</p>
                          <p className="text-xs md:text-sm text-gray-600 truncate">{reservation.date} à {reservation.heure}</p>
                        </div>
                        <div className="text-right ml-2">
                          <p className="font-bold text-[#CDA434] text-sm md:text-base">{reservation.montant}</p>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            reservation.statut === 'Confirmé' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {reservation.statut}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Actions rapides</h3>
                  <div className="space-y-3">
                    <Button variant="vtc" className="w-full justify-center sm:justify-start">
                      <FaPlus className="mr-2" />
                      Nouvelle réservation VTC
                    </Button>
                    <Button variant="formations" className="w-full justify-center sm:justify-start">
                      <FaPlus className="mr-2" />
                      Créer une session de formation
                    </Button>
                    <Button variant="afrique" className="w-full justify-center sm:justify-start">
                      <FaPlus className="mr-2" />
                      Publier un article
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          )}

          {/* Réservations VTC */}
          {activeTab === 'reservations' && (
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 md:mb-8 gap-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Réservations VTC</h2>
                <Button variant="vtc" className="sm:w-auto w-full">
                  <FaPlus className="mr-2" />
                  Nouvelle réservation
                </Button>
              </div>

              <Card className="p-4 md:p-6">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-max">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-2 md:px-4 text-xs md:text-sm">ID</th>
                        <th className="text-left py-3 px-2 md:px-4 text-xs md:text-sm">Client</th>
                        <th className="text-left py-3 px-2 md:px-4 text-xs md:text-sm hidden md:table-cell">Date/Heure</th>
                        <th className="text-left py-3 px-2 md:px-4 text-xs md:text-sm hidden lg:table-cell">Trajet</th>
                        <th className="text-left py-3 px-2 md:px-4 text-xs md:text-sm">Statut</th>
                        <th className="text-left py-3 px-2 md:px-4 text-xs md:text-sm">Montant</th>
                        <th className="text-left py-3 px-2 md:px-4 text-xs md:text-sm">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentReservations.map((reservation) => (
                        <tr key={reservation.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-2 md:px-4 font-medium text-xs md:text-sm">{reservation.id}</td>
                          <td className="py-3 px-2 md:px-4 text-xs md:text-sm">{reservation.client}</td>
                          <td className="py-3 px-2 md:px-4 text-xs md:text-sm hidden md:table-cell">{reservation.date} {reservation.heure}</td>
                          <td className="py-3 px-2 md:px-4 text-xs md:text-sm hidden lg:table-cell">CDG → Paris Centre</td>
                          <td className="py-3 px-2 md:px-4">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              reservation.statut === 'Confirmé' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {reservation.statut}
                            </span>
                          </td>
                          <td className="py-3 px-2 md:px-4 font-bold text-[#CDA434] text-xs md:text-sm">{reservation.montant}</td>
                          <td className="py-3 px-2 md:px-4">
                            <div className="flex space-x-1 md:space-x-2">
                              <Button variant="outline" size="sm" className="p-1 md:p-2">
                                <FaEye className="text-xs md:text-sm" />
                              </Button>
                              <Button variant="outline" size="sm" className="p-1 md:p-2">
                                <FaEdit className="text-xs md:text-sm" />
                              </Button>
                              <Button variant="outline" size="sm" className="p-1 md:p-2">
                                <FaTrash className="text-xs md:text-sm" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          )}

          {/* Planning véhicules */}
          {activeTab === 'vehicles' && (
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 md:mb-8 gap-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Planning des véhicules</h2>
                <Button variant="vtc" className="sm:w-auto w-full">
                  <FaPlus className="mr-2" />
                  Ajouter véhicule
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <Card className="p-4">
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 md:mb-4">BMW Série 3 - AB-123-CD</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Statut:</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Disponible</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Prochaine course:</span>
                      <span className="text-right">14:30 - CDG</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Chauffeur:</span>
                      <span className="text-right">Jean Dupont</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-4">
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 md:mb-4">Mercedes Classe E - EF-456-GH</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Statut:</span>
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">En course</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Retour prévu:</span>
                      <span className="text-right">16:45</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Chauffeur:</span>
                      <span className="text-right">Marie Martin</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-4">
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 md:mb-4">Audi A6 - IJ-789-KL</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Statut:</span>
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Maintenance</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Retour prévu:</span>
                      <span className="text-right">Demain 10:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Garage:</span>
                      <span className="text-right">Garage Central</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          )}

          {/* Autres sections */}
          {activeTab === 'formations' && (
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Gestion des formations</h2>
              <Card className="p-4 md:p-6">
                <p className="text-gray-600">Interface de gestion des formations et inscriptions...</p>
              </Card>
            </div>
          )}

          {activeTab === 'seminaires' && (
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Gestion des séminaires</h2>
              <Card className="p-4 md:p-6">
                <p className="text-gray-600">Interface de gestion des séminaires...</p>
              </Card>
            </div>
          )}

          {activeTab === 'blog' && (
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Gestion du blog</h2>
              <Card className="p-4 md:p-6">
                <p className="text-gray-600">Interface de gestion du contenu blog...</p>
              </Card>
            </div>
          )}

          {activeTab === 'crm' && (
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">CRM - Gestion clients</h2>
              <Card className="p-4 md:p-6">
                <p className="text-gray-600">Interface CRM pour la gestion des clients et prospects...</p>
              </Card>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Paramètres</h2>
              <Card className="p-4 md:p-6">
                <p className="text-gray-600">Configuration générale, RGPD, sécurité...</p>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}