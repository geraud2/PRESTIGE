"use client";
import React, { useState } from 'react';
import { FaPlus, FaEdit, FaTrash, FaEye, FaFilter, FaDownload, FaCalendarAlt, FaCar, FaUser, FaPhone } from 'react-icons/fa';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function AdminReservations() {
  const [showModal, setShowModal] = useState(false);
  const [filterStatus, setFilterStatus] = useState('all');

  const reservations = [
    {
      id: 'VTC-2024-001',
      client: { nom: 'Jean Dupont', email: 'jean.dupont@email.com', tel: '+33123456789' },
      date: '2024-01-25',
      heure: '14:30',
      depart: 'Aéroport CDG Terminal 2E',
      arrivee: '15 Avenue des Champs-Élysées, Paris',
      vehicule: 'BMW Série 3',
      chauffeur: 'Pierre Martin',
      statut: 'Confirmé',
      montant: 65,
      commission: 13,
      notes: 'Client VIP - Service premium'
    },
    {
      id: 'VTC-2024-002',
      client: { nom: 'Marie Dubois', email: 'marie.dubois@email.com', tel: '+33987654321' },
      date: '2024-01-25',
      heure: '16:00',
      depart: 'Gare de Lyon',
      arrivee: 'Aéroport Orly Sud',
      vehicule: 'Mercedes Classe E',
      chauffeur: 'Ahmed Ben Ali',
      statut: 'En attente',
      montant: 45,
      commission: 9,
      notes: 'Vol à 18:30 - Urgent'
    },
    {
      id: 'VTC-2024-003',
      client: { nom: 'Pierre Durand', email: 'pierre.durand@email.com', tel: '+33456789123' },
      date: '2024-01-26',
      heure: '09:15',
      depart: 'Hotel Le Bristol, Paris',
      arrivee: 'La Défense - Tour Total',
      vehicule: 'Audi A6',
      chauffeur: 'Sarah Martin',
      statut: 'Terminé',
      montant: 85,
      commission: 17,
      notes: 'RDV important - Ponctualité requise'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Confirmé': return 'bg-green-100 text-green-800';
      case 'En attente': return 'bg-yellow-100 text-yellow-800';
      case 'Terminé': return 'bg-blue-100 text-blue-800';
      case 'Annulé': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredReservations = filterStatus === 'all' 
    ? reservations 
    : reservations.filter(r => r.statut.toLowerCase() === filterStatus);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Gestion des Réservations VTC</h1>
            <p className="text-gray-600 mt-2">Gérez toutes les réservations de transport</p>
          </div>
          <div className="flex space-x-4">
            <Button variant="outline">
              <FaDownload className="mr-2" />
              Exporter
            </Button>
            <Button variant="vtc" onClick={() => setShowModal(true)}>
              <FaPlus className="mr-2" />
              Nouvelle réservation
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total réservations</p>
                <p className="text-2xl font-bold text-gray-900">156</p>
                <p className="text-sm text-green-600">+12% ce mois</p>
              </div>
              <FaCar className="text-2xl text-[#CDA434]" />
            </div>
          </Card>
          <Card>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Chiffre d'affaires</p>
                <p className="text-2xl font-bold text-gray-900">8 450€</p>
                <p className="text-sm text-green-600">+8% ce mois</p>
              </div>
              <FaCalendarAlt className="text-2xl text-green-600" />
            </div>
          </Card>
          <Card>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Taux satisfaction</p>
                <p className="text-2xl font-bold text-gray-900">98%</p>
                <p className="text-sm text-green-600">+2% ce mois</p>
              </div>
              <FaUser className="text-2xl text-blue-600" />
            </div>
          </Card>
          <Card>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Commissions</p>
                <p className="text-2xl font-bold text-gray-900">1 690€</p>
                <p className="text-sm text-green-600">+15% ce mois</p>
              </div>
              <FaPhone className="text-2xl text-purple-600" />
            </div>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center space-x-2">
              <FaFilter className="text-gray-600" />
              <span className="font-medium text-gray-700">Filtres:</span>
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#CDA434]"
            >
              <option value="all">Tous les statuts</option>
              <option value="confirmé">Confirmé</option>
              <option value="en attente">En attente</option>
              <option value="terminé">Terminé</option>
              <option value="annulé">Annulé</option>
            </select>
            <input
              type="date"
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#CDA434]"
            />
            <input
              type="text"
              placeholder="Rechercher client..."
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#CDA434]"
            />
          </div>
        </Card>

        {/* Reservations Table */}
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="text-left py-4 px-4 font-semibold">ID</th>
                  <th className="text-left py-4 px-4 font-semibold">Client</th>
                  <th className="text-left py-4 px-4 font-semibold">Date/Heure</th>
                  <th className="text-left py-4 px-4 font-semibold">Trajet</th>
                  <th className="text-left py-4 px-4 font-semibold">Véhicule</th>
                  <th className="text-left py-4 px-4 font-semibold">Chauffeur</th>
                  <th className="text-left py-4 px-4 font-semibold">Statut</th>
                  <th className="text-left py-4 px-4 font-semibold">Montant</th>
                  <th className="text-left py-4 px-4 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredReservations.map((reservation) => (
                  <tr key={reservation.id} className="border-b hover:bg-gray-50">
                    <td className="py-4 px-4 font-medium text-[#CDA434]">
                      {reservation.id}
                    </td>
                    <td className="py-4 px-4">
                      <div>
                        <p className="font-medium text-gray-900">{reservation.client.nom}</p>
                        <p className="text-sm text-gray-600">{reservation.client.email}</p>
                        <p className="text-sm text-gray-600">{reservation.client.tel}</p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div>
                        <p className="font-medium">{reservation.date}</p>
                        <p className="text-sm text-gray-600">{reservation.heure}</p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="max-w-xs">
                        <p className="text-sm font-medium text-green-600">📍 {reservation.depart}</p>
                        <p className="text-sm font-medium text-red-600">📍 {reservation.arrivee}</p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <p className="font-medium">{reservation.vehicule}</p>
                    </td>
                    <td className="py-4 px-4">
                      <p className="font-medium">{reservation.chauffeur}</p>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(reservation.statut)}`}>
                        {reservation.statut}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div>
                        <p className="font-bold text-[#CDA434]">{reservation.montant}€</p>
                        <p className="text-sm text-gray-600">Com: {reservation.commission}€</p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" title="Voir détails">
                          <FaEye />
                        </Button>
                        <Button variant="outline" size="sm" title="Modifier">
                          <FaEdit />
                        </Button>
                        <Button variant="outline" size="sm" title="Supprimer">
                          <FaTrash />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Modal Nouvelle Réservation */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Nouvelle Réservation VTC</h2>
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
                      Nom du client *
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
                      Date et heure *
                    </label>
                    <input
                      type="datetime-local"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#CDA434]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Adresse de départ *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#CDA434]"
                    placeholder="Adresse complète de départ"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Adresse d'arrivée *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#CDA434]"
                    placeholder="Adresse complète d'arrivée"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Véhicule
                    </label>
                    <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#CDA434]">
                      <option value="">Sélectionner un véhicule</option>
                      <option value="bmw-serie3">BMW Série 3</option>
                      <option value="mercedes-classe-e">Mercedes Classe E</option>
                      <option value="audi-a6">Audi A6</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Chauffeur
                    </label>
                    <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#CDA434]">
                      <option value="">Sélectionner un chauffeur</option>
                      <option value="pierre-martin">Pierre Martin</option>
                      <option value="ahmed-benali">Ahmed Ben Ali</option>
                      <option value="sarah-martin">Sarah Martin</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Montant (€) *
                    </label>
                    <input
                      type="number"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#CDA434]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Statut
                    </label>
                    <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#CDA434]">
                      <option value="en-attente">En attente</option>
                      <option value="confirme">Confirmé</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Notes
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#CDA434]"
                    placeholder="Notes particulières pour cette réservation..."
                  />
                </div>

                <div className="flex justify-end space-x-4">
                  <Button variant="outline" onClick={() => setShowModal(false)}>
                    Annuler
                  </Button>
                  <Button variant="vtc" type="submit">
                    Créer la réservation
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