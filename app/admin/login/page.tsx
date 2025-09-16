"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

export default function AdminLogin() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Identifiants de démonstration
  const DEMO_CREDENTIALS = {
    email: 'admin@djokprestige.com',
    password: 'admin123'
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulation d'une vérification d'authentification
    setTimeout(() => {
      if (
        credentials.email === DEMO_CREDENTIALS.email &&
        credentials.password === DEMO_CREDENTIALS.password
      ) {
        // Stocker le token d'authentification (simulation)
        localStorage.setItem('admin-token', 'demo-token-123');
        localStorage.setItem('admin-user', JSON.stringify({
          name: 'Administrateur DJOK PRESTIGE',
          email: credentials.email,
          role: 'admin'
        }));
        
        // Rediriger vers le dashboard admin
        router.push('/admin');
      } else {
        setError('Email ou mot de passe incorrect');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#CDA434] mb-2">DJOK PRESTIGE</h1>
          <p className="text-gray-300">Espace Administrateur</p>
        </div>

        {/* Formulaire de connexion */}
        <Card className="bg-white/10 backdrop-blur-sm border-gray-700">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-white text-center mb-6">
              Connexion Admin
            </h2>

            {/* Identifiants de démonstration */}
            <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4 mb-6">
              <h3 className="text-blue-300 font-semibold mb-2">🔑 Identifiants de démonstration :</h3>
              <div className="text-sm text-blue-200 space-y-1">
                <p><strong>Email :</strong> admin@djokprestige.com</p>
                <p><strong>Mot de passe :</strong> admin123</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email administrateur
                </label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={credentials.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-[#CDA434] focus:border-transparent"
                    placeholder="admin@djokprestige.com"
                    required
                  />
                </div>
              </div>

              {/* Mot de passe */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Mot de passe
                </label>
                <div className="relative">
                  <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={credentials.password}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-12 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-[#CDA434] focus:border-transparent"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {/* Message d'erreur */}
              {error && (
                <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-3">
                  <p className="text-red-300 text-sm">{error}</p>
                </div>
              )}

              {/* Bouton de connexion */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-[#CDA434] hover:bg-[#B8941E] text-black font-semibold py-3 px-4 rounded-lg transition-colors disabled:opacity-50"
              >
                {loading ? 'Connexion...' : 'Se connecter'}
              </Button>
            </form>

            {/* Liens utiles */}
            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm">
                Problème de connexion ?{' '}
                <a href="/contact" className="text-[#CDA434] hover:underline">
                  Contacter le support
                </a>
              </p>
            </div>
          </div>
        </Card>

        {/* Informations de sécurité */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-xs">
            🔒 Connexion sécurisée SSL • Accès réservé aux administrateurs
          </p>
        </div>
      </div>
    </div>
  );
}