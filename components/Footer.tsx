import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <div className="text-2xl font-bold text-yellow-600">
                DJOK PRESTIGE
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Votre partenaire de confiance pour les services de VTC, location de véhicules, 
              formations professionnelles et accompagnement entrepreneurial.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#CDA434] transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#CDA434] transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#CDA434] transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#CDA434] transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg text-[#CDA434]">Nos Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/vtc" className="text-gray-300 hover:text-white transition-colors">Services VTC</Link></li>
              <li><Link href="/location" className="text-gray-300 hover:text-white transition-colors">Location de véhicules</Link></li>
              <li><Link href="/formations" className="text-gray-300 hover:text-white transition-colors">Formations professionnelles</Link></li>
              <li><Link href="/afrique" className="text-gray-300 hover:text-white transition-colors">Entrepreneuriat Afrique</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg text-[#CDA434]">Liens Rapides</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/a-propos" className="text-gray-300 hover:text-white transition-colors">À propos</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/espace-client" className="text-gray-300 hover:text-white transition-colors">Espace Client</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Mentions légales</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Politique de confidentialité</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg text-[#CDA434]">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-[#CDA434] mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Avenue des Champs-Élysées<br />
                  75008 Paris, France
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-[#CDA434] flex-shrink-0" />
                <a href="tel:+33123456789" className="text-gray-300 hover:text-white transition-colors">
                  +33 1 23 45 67 89
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-[#CDA434] flex-shrink-0" />
                <a href="mailto:contact@djokprestige.com" className="text-gray-300 hover:text-white transition-colors">
                  contact@djokprestige.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaWhatsapp className="text-[#CDA434] flex-shrink-0" />
                <a href="https://wa.me/33123456789" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  WhatsApp Business
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center space-y-4">
            <h3 className="font-heading font-semibold text-xl text-[#CDA434]">
              Restez informé de nos actualités
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Inscrivez-vous à notre newsletter pour recevoir nos dernières offres, 
              formations et conseils entrepreneuriaux.
            </p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CDA434] focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#CDA434] text-black font-medium rounded-lg hover:bg-opacity-90 transition-colors"
              >
                S'inscrire
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 DJOK PRESTIGE. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;