"use client";
import React, { useState, useEffect } from 'react';
import { FaCookie, FaCog, FaCheck, FaTimes } from 'react-icons/fa';
import Button from '@/components/ui/Button';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
    functional: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    } else {
      const savedPreferences = JSON.parse(consent);
      setPreferences(savedPreferences);
      loadScripts(savedPreferences);
    }
  }, []);

  const loadScripts = (prefs: typeof preferences) => {
    // Load Google Analytics if analytics cookies are accepted
    if (prefs.analytics) {
      // Google Analytics 4
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
      document.head.appendChild(script1);

      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'GA_MEASUREMENT_ID');
      `;
      document.head.appendChild(script2);
    }

    // Load marketing scripts if marketing cookies are accepted
    if (prefs.marketing) {
      // Facebook Pixel, Google Ads, etc.
      console.log('Loading marketing scripts...');
    }

    // Load functional scripts if functional cookies are accepted
    if (prefs.functional) {
      // Chat widgets, preferences, etc.
      console.log('Loading functional scripts...');
    }
  };

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true
    };
    setPreferences(allAccepted);
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    loadScripts(allAccepted);
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false
    };
    setPreferences(necessaryOnly);
    localStorage.setItem('cookie-consent', JSON.stringify(necessaryOnly));
    setShowBanner(false);
    setShowSettings(false);
  };

  const savePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    loadScripts(preferences);
    setShowBanner(false);
    setShowSettings(false);
  };

  const togglePreference = (key: keyof typeof preferences) => {
    if (key === 'necessary') return; // Cannot disable necessary cookies
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50">
        <div className="max-w-7xl mx-auto p-6">
          <div className="flex items-start space-x-4">
            <FaCookie className="text-3xl text-[#CDA434] flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Nous utilisons des cookies
              </h3>
              <p className="text-gray-600 mb-4">
                Nous utilisons des cookies pour améliorer votre expérience sur notre site, 
                analyser le trafic et personnaliser le contenu. Vous pouvez choisir quels 
                cookies accepter.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="vtc" onClick={acceptAll}>
                  <FaCheck className="mr-2" />
                  Accepter tout
                </Button>
                <Button variant="outline" onClick={acceptNecessary}>
                  Nécessaires uniquement
                </Button>
                <Button variant="outline" onClick={() => setShowSettings(true)}>
                  <FaCog className="mr-2" />
                  Personnaliser
                </Button>
              </div>
            </div>
            <button
              onClick={acceptNecessary}
              className="text-gray-500 hover:text-gray-700 p-2"
            >
              <FaTimes />
            </button>
          </div>
        </div>
      </div>

      {/* Cookie Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Paramètres des cookies</h2>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FaTimes />
                </button>
              </div>

              <div className="space-y-6">
                {/* Necessary Cookies */}
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-gray-900">Cookies nécessaires</h3>
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      Toujours actifs
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Ces cookies sont essentiels au fonctionnement du site et ne peuvent pas être désactivés.
                    Ils permettent la navigation, la sécurité et l'accessibilité de base.
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-gray-900">Cookies d'analyse</h3>
                    <button
                      onClick={() => togglePreference('analytics')}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        preferences.analytics ? 'bg-[#CDA434]' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                        preferences.analytics ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Ces cookies nous aident à comprendre comment les visiteurs utilisent notre site
                    pour améliorer l'expérience utilisateur. (Google Analytics)
                  </p>
                </div>

                {/* Marketing Cookies */}
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-gray-900">Cookies marketing</h3>
                    <button
                      onClick={() => togglePreference('marketing')}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        preferences.marketing ? 'bg-[#CDA434]' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                        preferences.marketing ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Ces cookies sont utilisés pour afficher des publicités pertinentes et mesurer
                    l'efficacité de nos campagnes marketing.
                  </p>
                </div>

                {/* Functional Cookies */}
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-gray-900">Cookies fonctionnels</h3>
                    <button
                      onClick={() => togglePreference('functional')}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        preferences.functional ? 'bg-[#CDA434]' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                        preferences.functional ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Ces cookies permettent des fonctionnalités avancées comme le chat en ligne,
                    la mémorisation de vos préférences et la personnalisation du contenu.
                  </p>
                </div>
              </div>

              <div className="flex justify-end space-x-4 mt-8">
                <Button variant="outline" onClick={() => setShowSettings(false)}>
                  Annuler
                </Button>
                <Button variant="vtc" onClick={savePreferences}>
                  Sauvegarder les préférences
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t text-center">
                <p className="text-sm text-gray-600">
                  Pour plus d'informations, consultez notre{' '}
                  <a href="/politique-confidentialite" className="text-[#CDA434] hover:underline">
                    politique de confidentialité
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}