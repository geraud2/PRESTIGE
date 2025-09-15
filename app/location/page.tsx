"use client";
import React, { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { FaCar, FaGasPump, FaCogs, FaCalendarAlt, FaStar, FaFilter, FaMapMarkerAlt } from 'react-icons/fa';

export default function LocationPage() {
  const [filters, setFilters] = useState({
    category: 'all',
    fuelType: 'all',
    transmission: 'all',
    priceRange: 'all'
  });

  const [bookingForm, setBookingForm] = useState({
    pickupDate: '',
    returnDate: '',
    pickupLocation: '',
    returnLocation: ''
  });

  const vehicles = [
    {
      id: 1,
      name: 'Peugeot 208',
      category: 'economique',
      image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg',
      price: 35,
      fuel: 'essence',
      transmission: 'manuelle',
      seats: 5,
      rating: 4.5,
      features: ['Climatisation', 'GPS', 'Bluetooth']
    },
    {
      id: 2,
      name: 'Volkswagen Golf',
      category: 'compacte',
      image: 'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg',
      price: 45,
      fuel: 'essence',
      transmission: 'automatique',
      seats: 5,
      rating: 4.7,
      features: ['Climatisation', 'GPS', 'Cruise Control', 'Bluetooth']
    },
    {
      id: 3,
      name: 'BMW Série 3',
      category: 'berline',
      image: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg',
      price: 85,
      fuel: 'diesel',
      transmission: 'automatique',
      seats: 5,
      rating: 4.8,
      features: ['Cuir', 'GPS Premium', 'Système Audio', 'Sièges Chauffants']
    },
    {
      id: 4,
      name: 'Mercedes GLE',
      category: 'suv',
      image: 'https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg',
      price: 120,
      fuel: 'diesel',
      transmission: 'automatique',
      seats: 7,
      rating: 4.9,
      features: ['7 Places', 'AWD', 'Toit Panoramique', 'Système Audio Premium']
    },
    {
      id: 5,
      name: 'Renault Clio',
      category: 'economique',
      image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg',
      price: 30,
      fuel: 'essence',
      transmission: 'manuelle',
      seats: 5,
      rating: 4.3,
      features: ['Climatisation', 'Radio', 'USB']
    },
    {
      id: 6,
      name: 'Audi A6',
      category: 'prestige',
      image: 'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg',
      price: 150,
      fuel: 'hybride',
      transmission: 'automatique',
      seats: 5,
      rating: 4.9,
      features: ['Cuir Premium', 'Massages', 'HUD', 'Conduite Autonome']
    }
  ];

  const specialOffers = [
    {
      title: 'Week-end découverte',
      description: 'Réservez du vendredi au dimanche et économisez 20%',
      discount: '20%',
      code: 'WEEKEND20'
    },
    {
      title: 'Longue durée',
      description: 'Plus de 7 jours de location, -25% sur le tarif',
      discount: '25%',
      code: 'LONG25'
    },
    {
      title: 'Première location',
      description: 'Nouveau client ? Profitez de 15% de réduction',
      discount: '15%',
      code: 'NOUVEAU15'
    }
  ];

  const filteredVehicles = vehicles.filter(vehicle => {
    return (
      (filters.category === 'all' || vehicle.category === filters.category) &&
      (filters.fuelType === 'all' || vehicle.fuel === filters.fuelType) &&
      (filters.transmission === 'all' || vehicle.transmission === filters.transmission) &&
      (filters.priceRange === 'all' || 
       (filters.priceRange === '0-50' && vehicle.price <= 50) ||
       (filters.priceRange === '50-100' && vehicle.price > 50 && vehicle.price <= 100) ||
       (filters.priceRange === '100+' && vehicle.price > 100))
    );
  });

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters({
      ...filters,
      [filterType]: value
    });
  };

  const handleBookingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setBookingForm({
      ...bookingForm,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Location de Véhicules"
        subtitle="Découvrez notre flotte de véhicules premium pour tous vos déplacements"
        backgroundImage="https://images.pexels.com/photos/1429775/pexels-photo-1429775.jpeg"
        theme="vtc"
        primaryAction={{
          text: "Voir les véhicules",
          href: "#vehicles",
          onClick: () => document.getElementById('vehicles')?.scrollIntoView({ behavior: 'smooth' })
        }}
        secondaryAction={{
          text: "Réserver maintenant",
          href: "#booking",
          onClick: () => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
        }}
      />

      {/* Booking Form Section */}
      <section id="booking" className="section-padding bg-gradient-to-r from-black to-gray-800 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold mb-6">
              Réservez votre véhicule
            </h2>
            <p className="font-body text-xl text-gray-300">
              Remplissez vos informations pour voir les disponibilités
            </p>
          </div>

          <Card className="bg-white text-gray-900">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <div>
                <label className="block font-body font-medium mb-2">
                  <FaCalendarAlt className="inline mr-2 text-[#CDA434]" />
                  Date de prise en charge
                </label>
                <input
                  type="datetime-local"
                  name="pickupDate"
                  value={bookingForm.pickupDate}
                  onChange={handleBookingChange}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#CDA434]"
                />
              </div>
              <div>
                <label className="block font-body font-medium mb-2">
                  <FaCalendarAlt className="inline mr-2 text-[#CDA434]" />
                  Date de retour
                </label>
                <input
                  type="datetime-local"
                  name="returnDate"
                  value={bookingForm.returnDate}
                  onChange={handleBookingChange}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#CDA434]"
                />
              </div>
              <div>
                <label className="block font-body font-medium mb-2">
                  <FaMapMarkerAlt className="inline mr-2 text-[#CDA434]" />
                  Lieu de prise en charge
                </label>
                <select
                  name="pickupLocation"
                  value={bookingForm.pickupLocation}
                  onChange={handleBookingChange}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#CDA434]"
                >
                  <option value="">Sélectionner</option>
                  <option value="orly">Aéroport Orly</option>
                  <option value="cdg">Aéroport CDG</option>
                  <option value="gare-lyon">Gare de Lyon</option>
                  <option value="centre-ville">Centre-ville Paris</option>
                </select>
              </div>
              <div>
                <label className="block font-body font-medium mb-2">
                  <FaMapMarkerAlt className="inline mr-2 text-[#CDA434]" />
                  Lieu de retour
                </label>
                <select
                  name="returnLocation"
                  value={bookingForm.returnLocation}
                  onChange={handleBookingChange}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#CDA434]"
                >
                  <option value="">Sélectionner</option>
                  <option value="orly">Aéroport Orly</option>
                  <option value="cdg">Aéroport CDG</option>
                  <option value="gare-lyon">Gare de Lyon</option>
                  <option value="centre-ville">Centre-ville Paris</option>
                </select>
              </div>
            </div>
            <div className="text-center">
              <Button variant="vtc" size="lg">
                Rechercher des véhicules
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center space-x-2">
              <FaFilter className="text-gray-600" />
              <span className="font-medium text-gray-700">Filtres:</span>
            </div>
            
            <select
              value={filters.category}
              onChange={(e) => handleFilterChange('category', e.target.value)}
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#CDA434]"
            >
              <option value="all">Toutes catégories</option>
              <option value="economique">Économique</option>
              <option value="compacte">Compacte</option>
              <option value="berline">Berline</option>
              <option value="suv">SUV</option>
              <option value="prestige">Prestige</option>
            </select>

            <select
              value={filters.fuelType}
              onChange={(e) => handleFilterChange('fuelType', e.target.value)}
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#CDA434]"
            >
              <option value="all">Tous carburants</option>
              <option value="essence">Essence</option>
              <option value="diesel">Diesel</option>
              <option value="hybride">Hybride</option>
              <option value="electrique">Électrique</option>
            </select>

            <select
              value={filters.transmission}
              onChange={(e) => handleFilterChange('transmission', e.target.value)}
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#CDA434]"
            >
              <option value="all">Toutes boîtes</option>
              <option value="manuelle">Manuelle</option>
              <option value="automatique">Automatique</option>
            </select>

            <select
              value={filters.priceRange}
              onChange={(e) => handleFilterChange('priceRange', e.target.value)}
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#CDA434]"
            >
              <option value="all">Tous prix</option>
              <option value="0-50">0€ - 50€</option>
              <option value="50-100">50€ - 100€</option>
              <option value="100+">100€+</option>
            </select>
          </div>
        </div>
      </section>

      {/* Vehicles Catalog */}
      <section id="vehicles" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-6">
              Notre Flotte de Véhicules
            </h2>
            <p className="font-body text-xl text-gray-600">
              {filteredVehicles.length} véhicule{filteredVehicles.length > 1 ? 's' : ''} disponible{filteredVehicles.length > 1 ? 's' : ''}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVehicles.map((vehicle) => (
              <Card key={vehicle.id} className="overflow-hidden">
                <div className="relative">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#CDA434] text-black px-3 py-1 rounded-full text-sm font-medium capitalize">
                    {vehicle.category}
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-heading text-xl font-bold text-gray-900">
                        {vehicle.name}
                      </h3>
                      <div className="flex items-center mt-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              className={i < Math.floor(vehicle.rating) ? 'text-[#CDA434]' : 'text-gray-300'}
                              size={12}
                            />
                          ))}
                        </div>
                        <span className="ml-2 text-sm text-gray-500">({vehicle.rating})</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#CDA434]">
                        {vehicle.price}€
                      </div>
                      <div className="text-sm text-gray-500">par jour</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <FaGasPump className="mr-1" />
                      {vehicle.fuel}
                    </div>
                    <div className="flex items-center">
                      <FaCogs className="mr-1" />
                      {vehicle.transmission}
                    </div>
                    <div className="flex items-center">
                      <FaCar className="mr-1" />
                      {vehicle.seats} places
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {vehicle.features.map((feature, index) => (
                        <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button variant="vtc" className="w-full">
                    Réserver ce véhicule
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section id="offers" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-6">
              Offres Spéciales
            </h2>
            <p className="font-body text-xl text-gray-600">
              Profitez de nos promotions exceptionnelles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialOffers.map((offer, index) => (
              <Card key={index} className="text-center bg-gradient-to-br from-[#CDA434] to-[#B8941E] text-black">
                <div className="text-4xl font-bold mb-4">
                  -{offer.discount}
                </div>
                <h3 className="font-heading text-xl font-bold mb-4">
                  {offer.title}
                </h3>
                <p className="font-body mb-6 opacity-90">
                  {offer.description}
                </p>
                <div className="bg-black/20 px-4 py-2 rounded-lg mb-4">
                  <span className="font-mono font-bold">
                    Code: {offer.code}
                  </span>
                </div>
                <Button 
                  variant="outline"
                  className="border-black text-black hover:bg-black hover:text-white"
                >
                  Utiliser ce code
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-4xl font-bold text-gray-900 mb-8">
            Paiement Sécurisé en Ligne
          </h2>
          <p className="font-body text-xl text-gray-600 mb-8">
            Réservez et payez en toute sécurité avec nos solutions de paiement partenaires
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
            <div className="text-4xl">💳</div>
            <div className="text-4xl">🅿️</div>
            <div className="text-4xl">🔒</div>
            <div className="text-4xl">✅</div>
          </div>
          
          <p className="font-body text-gray-500 mt-8">
            Cartes bancaires, PayPal, virements acceptés • Paiement SSL sécurisé • Annulation gratuite
          </p>
        </div>
      </section>
    </>
  );
}