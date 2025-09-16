"use client";
import React, { useState } from 'react';
import { FaUser, FaPhone, FaEnvelope, FaCalendarAlt, FaEuroSign, FaPlus, FaEdit, FaTrash, FaEye, FaFilter, FaStar, FaBuilding } from 'react-icons/fa';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function AdminCRM() {
  const [activeTab, setActiveTab] = useState('clients');
  const [showModal, setShowModal] = useState(false);

  const clients = [
    {
      id: 'CLI-001',
      nom: 'Jean Dupont',
      email: 'jean.dupont@email.com',
      telephone: '+33123456789',
      entreprise: 'ACME Corp',
      statut: 'VIP',
      dateInscription: '2023-03-15',
      derniereCommande: '2024-01-20',
      totalCommandes: 12,
      chiffreAffaires: 1250,
      notes: 'Client fidèle, toujours ponctuel'
    },
    {
      id: 'CLI-002',
      nom: 'Marie Dubois',
      email: 'marie.dubois@email.com',
      telephone: '+33987654321',
      entreprise: 'Tech Solutions',
      statut: 'Premium',
      dateInscription: '2023-06-10',
      derniereCommande: '2024-01-18',
      totalCommandes: 8,
      chiffreAffaires: 890,
      notes: 'Préfère les véhicules électriques'
    },
    {
      id: 'CLI-003',
      nom: 'Pierre Martin',
      email: 'pierre.martin@email.com',
      telephone: '+33456789123',
      entreprise: 'Consulting Plus',
      statut: 'Standard',
      dateInscription: '2023-09-22',
      derniereCommande: '2024-01-15',
      totalCommandes: 5,
      chiffreAffaires: 425,
      notes: 'Nouveau client, potentiel élevé'
    }
  ];

  const prospects = [
    {
      id: 'PROS-001',
      nom: 'Sophie Laurent',
      email: 'sophie.laurent@email.com',
      telephone: '+33111222333',
      entreprise: 'StartUp Innov',
      source: 'Site web',
      statut: 'Qualifié',
      dateContact: '2024-01-22',
      prochainRdv: '2024-01-26',
      notes: 'Intéressée par forfait mensuel'
    },
    {
      id: 'PROS-002',
      nom: 'Thomas Durand',
      email: 'thomas.durand@email.com',
      telephone: '+33444555666',
      entreprise: 'Finance Corp',
      source: 'Recommandation',
      statut: 'Contacté',
      dateContact: '2024-01-20',
      prochainRdv: '2024-01-25',
      notes: 'Besoin transport équipe direction'
    }
  ];

  const getStatutColor = (statut: string) => {
    switch (statut) {
      case 'VIP': return 'bg-purple-100 text-purple-800';
      case 'Premium': return 'bg-yellow-100 text-yellow-800';
      case 'Standard': return 'bg-blue-100 text-blue-800';
      case 'Qualifié': return 'bg-green-100 text-green-800';
      case 'Contacté': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">CRM - Gestion Clients & Prospects</h1>
            <p className="text-gray-600 mt-2">Gérez vos relations clients et développez votre portefeuille</p>
          </div>
          <Button variant="vtc" onClick={() => setShowModal(true)}>
            <FaPlus className="mr-2" />
            Nouveau contact
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total clients</p>
                <p className="text-2xl font-bold text-gray-900">156</p>
                <p className="text-sm text-green-600">+8 ce mois</p>
              </div>
              <FaUser className="text-2xl text-[#CDA434]" />
            </div>
          </Card>
          <Card>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Prospects actifs</p>
                <p className="text-2xl font-bold text-gray-900">23</p>
                <p className="text-sm text-green-600">+5 ce mois</p>
              </div>
              <FaBuilding className="text-2xl text-blue-600" />
            </div>
          </Card>
          <Card>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">CA total clients</p>
                <p className="text-2xl font-bold text-gray-900">45 680€</p>
                <p className="text-sm text-green-600">+12% ce mois</p>
              </div>
              <FaEuroSign className="text-2xl text-green-600" />
            </div>
          </Card>
          <Card>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Taux conversion</p>
                <p className="text-2xl font-bold text-gray-900">68%</p>
                <p className="text-sm text-green-600">+3% ce mois</p>
              </div>
              <FaStar className="text-2xl text-purple-600" />
            </div>
          </Card>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('clients')}
                className={`py-4 px-2 border-b-2 font-medium text-sm ${
                  activeTab === 'clients'
                    ? 'border-[#CDA434] text-[#CDA434]'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Clients ({clients.length})
              </button>
              <button
                onClick={() => setActiveTab('prospects')}
                className={`py-4 px-2 border-b-2 font-medium text-sm ${
                  activeTab === 'prospects'
                    ? 'border-[#CDA434] text-[#CDA434]'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Prospects ({prospects.length})
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`py-4 px-2 border-b-2 font-medium text-sm ${
                  activeTab === 'analytics'
                    ? 'border-[#CDA434] text-[#CDA434]'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Analytics
              </button>
            </nav>
          </div>
        </div>

        {/* Clients Tab */}
        {activeTab === 'clients' && (
          <Card>
            <div className="mb-6">
              <div className="flex items-center space-x-4">
                <FaFilter className="text-gray-600" />
                <select className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#CDA434]">
                  <option value="all">Tous les statuts</option>
                  <option value="vip">VIP</option>
                  <option value="premium">Premium</option>
                  <option value="standard">Standard</option>
                </select>
                <input
                  type="text"
                  placeholder="Rechercher un client..."
                  className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#CDA434]"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-gray-50">
                    <th className="text-left py-4 px-4 font-semibold">Client</th>
                    <th className="text-left py-4 px-4 font-semibold">Contact</th>
                    <th className="text-left py-4 px-4 font-semibold">Entreprise</th>
                    <th className="text-left py-4 px-4 font-semibold">Statut</th>
                    <th className="text-left py-4 px-4 font-semibold">Commandes</th>
                    <th className="text-left py-4 px-4 font-semibold">CA Total</th>
                    <th className="text-left py-4 px-4 font-semibold">Dernière commande</th>
                    <th className="text-left py-4 px-4 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {clients.map((client) => (
                    <tr key={client.id} className="border-b hover:bg-gray-50">
                      <td className="py-4 px-4">
                        <div>
                          <p className="font-medium text-gray-900">{client.nom}</p>
                          <p className="text-sm text-gray-600">{client.id}</p>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div>
                          <p className="text-sm text-gray-900">{client.email}</p>
                          <p className="text-sm text-gray-600">{client.telephone}</p>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <p className="font-medium text-gray-900">{client.entreprise}</p>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatutColor(client.statut)}`}>
                          {client.statut}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <p className="font-bold text-[#CDA434]">{client.totalCommandes}</p>
                      </td>
                      <td className="py-4 px-4">
                        <p className="font-bold text-green-600">{client.chiffreAffaires}€</p>
                      </td>
                      <td className="py-4 px-4">
                        <p className="text-sm text-gray-900">{client.derniereCommande}</p>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" title="Voir profil">
                            <FaEye />
                          </Button>
                          <Button variant="outline" size="sm" title="Modifier">
                            <FaEdit />
                          </Button>
                          <Button variant="outline" size="sm" title="Contacter">
                            <FaPhone />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}

        {/* Prospects Tab */}
        {activeTab === 'prospects' && (
          <Card>
            <div className="mb-6">
              <div className="flex items-center space-x-4">
                <FaFilter className="text-gray-600" />
                <select className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#CDA434]">
                  <option value="all">Tous les statuts</option>
                  <option value="qualifie">Qualifié</option>
                  <option value="contacte">Contacté</option>
                  <option value="rdv">RDV planifié</option>
                </select>
                <select className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#CDA434]">
                  <option value="all">Toutes les sources</option>
                  <option value="site-web">Site web</option>
                  <option value="recommandation">Recommandation</option>
                  <option value="publicite">Publicité</option>
                </select>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-gray-50">
                    <th className="text-left py-4 px-4 font-semibold">Prospect</th>
                    <th className="text-left py-4 px-4 font-semibold">Contact</th>
                    <th className="text-left py-4 px-4 font-semibold">Entreprise</th>
                    <th className="text-left py-4 px-4 font-semibold">Source</th>
                    <th className="text-left py-4 px-4 font-semibold">Statut</th>
                    <th className="text-left py-4 px-4 font-semibold">Premier contact</th>
                    <th className="text-left py-4 px-4 font-semibold">Prochain RDV</th>
                    <th className="text-left py-4 px-4 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {prospects.map((prospect) => (
                    <tr key={prospect.id} className="border-b hover:bg-gray-50">
                      <td className="py-4 px-4">
                        <div>
                          <p className="font-medium text-gray-900">{prospect.nom}</p>
                          <p className="text-sm text-gray-600">{prospect.id}</p>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div>
                          <p className="text-sm text-gray-900">{prospect.email}</p>
                          <p className="text-sm text-gray-600">{prospect.telephone}</p>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <p className="font-medium text-gray-900">{prospect.entreprise}</p>
                      </td>
                      <td className="py-4 px-4">
                        <p className="text-sm text-gray-900">{prospect.source}</p>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatutColor(prospect.statut)}`}>
                          {prospect.statut}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <p className="text-sm text-gray-900">{prospect.dateContact}</p>
                      </td>
                      <td className="py-4 px-4">
                        <p className="text-sm font-medium text-[#CDA434]">{prospect.prochainRdv}</p>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" title="Voir détails">
                            <FaEye />
                          </Button>
                          <Button variant="outline" size="sm" title="Modifier">
                            <FaEdit />
                          </Button>
                          <Button variant="outline" size="sm" title="Contacter">
                            <FaPhone />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Évolution du portefeuille client</h3>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Graphique d'évolution des clients</p>
              </div>
            </Card>
            <Card>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Répartition par statut</h3>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Graphique en secteurs</p>
              </div>
            </Card>
            <Card>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sources d'acquisition</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Site web</span>
                  <span className="font-bold">45%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Recommandations</span>
                  <span className="font-bold">30%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Publicité</span>
                  <span className="font-bold">25%</span>
                </div>
              </div>
            </Card>
            <Card>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Top clients</h3>
              <div className="space-y-3">
                {clients.slice(0, 3).map((client, index) => (
                  <div key={client.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">{client.nom}</p>
                      <p className="text-sm text-gray-600">{client.entreprise}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-[#CDA434]">{client.chiffreAffaires}€</p>
                      <p className="text-sm text-gray-600">{client.totalCommandes} commandes</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {/* Modal Nouveau Contact */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Nouveau Contact</h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Type de contact *
                    </label>
                    <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#CDA434]">
                      <option value="client">Client</option>
                      <option value="prospect">Prospect</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Statut *
                    </label>
                    <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#CDA434]">
                      <option value="standard">Standard</option>
                      <option value="premium">Premium</option>
                      <option value="vip">VIP</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#CDA434]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#CDA434]"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#CDA434]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Entreprise
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#CDA434]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Source d'acquisition
                  </label>
                  <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#CDA434]">
                    <option value="">Sélectionner une source</option>
                    <option value="site-web">Site web</option>
                    <option value="recommandation">Recommandation</option>
                    <option value="publicite">Publicité</option>
                    <option value="salon">Salon/Événement</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Notes
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#CDA434]"
                    placeholder="Notes sur ce contact..."
                  />
                </div>

                <div className="flex justify-end space-x-4">
                  <Button variant="outline" onClick={() => setShowModal(false)}>
                    Annuler
                  </Button>
                  <Button variant="vtc" type="submit">
                    Créer le contact
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}