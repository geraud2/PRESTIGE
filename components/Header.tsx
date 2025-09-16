"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes, FaPhone, FaWhatsapp, FaCar, FaGraduationCap, FaGlobe, FaKey, FaChevronDown } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: 'VTC & Transport',
      icon: <FaCar className="text-2xl text-[#CDA434]" />,
      description: 'Services de transport premium avec chauffeurs professionnels',
      links: [
        { href: '/vtc', label: 'Services VTC' },
        { href: '/vtc#tariffs', label: 'Tarifs & Forfaits' },
        { href: '/vtc#booking', label: 'Réserver' }
      ]
    },
    {
      title: 'Location de Véhicules',
      icon: <FaCar className="text-2xl text-[#CDA434]" />,
      description: 'Flotte de véhicules premium pour tous vos déplacements',
      links: [
        { href: '/location', label: 'Catalogue véhicules' },
        { href: '/location#offers', label: 'Offres spéciales' },
        { href: '/location#booking', label: 'Réserver' }
      ]
    },
    {
      title: 'Formations Professionnelles',
      icon: <FaGraduationCap className="text-2xl text-[#0057B7]" />,
      description: 'Formations certifiantes pour chauffeurs VTC et entrepreneurs',
      links: [
        { href: '/formations', label: 'Programme complet' },
        { href: '/formations#programme', label: 'Modules à la carte' },
        { href: '/formations#inscription', label: 'S\'inscrire' }
      ]
    },
    {
      title: 'Afrique & Entrepreneuriat',
      icon: <FaGlobe className="text-2xl text-[#F7931E]" />,
      description: 'Accompagnement entrepreneurial sur le continent africain',
      links: [
        { href: '/afrique', label: 'Opportunités' },
        { href: '/afrique#workshops', label: 'Workshops' },
        { href: '/afrique#projet', label: 'Soumettre un projet' }
      ]
    }
  ];

  const navigationItems = [
    { href: '/', label: 'Accueil' },
    { href: '/a-propos', label: 'À propos' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
    { href: '/espace-client', label: 'Espace Client', icon: <FaKey className="text-sm" /> }
  ];

  const getThemeClass = () => {
    if (pathname.includes('/vtc') || pathname.includes('/location')) return 'theme-vtc';
    if (pathname.includes('/formations')) return 'theme-formations';
    if (pathname.includes('/afrique')) return 'theme-afrique';
    return '';
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white lg:bg-transparent'
    } ${getThemeClass()}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-40 h-40">
              <div className="w-full h-full rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src="/logo.png"
                  alt="DJOK PRESTIGE Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className={`font-medium transition-colors duration-200 ${
                pathname === '/'
                  ? isScrolled ? 'text-[#CDA434]' : 'text-[#CDA434]'
                  : isScrolled ? 'text-gray-900 hover:text-[#CDA434]' : 'text-white hover:text-[#CDA434]'
              }`}
            >
              Accueil
            </Link>
            <Link
              href="/a-propos"
              className={`font-medium transition-colors duration-200 ${
                pathname === '/a-propos'
                  ? isScrolled ? 'text-[#CDA434]' : 'text-[#CDA434]'
                  : isScrolled ? 'text-gray-900 hover:text-[#CDA434]' : 'text-white hover:text-[#CDA434]'
              }`}
            >
              À propos
            </Link>

            {/* Services Megamenu */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className={`flex items-center space-x-1 font-medium transition-colors duration-200 ${
                  isScrolled ? 'text-gray-900 hover:text-[#CDA434]' : 'text-white hover:text-[#CDA434]'
                }`}
              >
                <span>Services</span>
                <FaChevronDown className={`text-xs transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Megamenu Dropdown */}
              {isServicesOpen && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-4xl bg-white shadow-2xl rounded-lg border border-gray-200 z-50">
                  <div className="p-8">
                    <div className="grid grid-cols-2 gap-8">
                      {services.map((service, index) => (
                        <div key={index} className="group">
                          <div className="flex items-start space-x-4 mb-4">
                            <div className="flex-shrink-0 p-3 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors">
                              {service.icon}
                            </div>
                            <div>
                              <h3 className="font-heading text-lg font-bold text-gray-900 mb-2">
                                {service.title}
                              </h3>
                              <p className="font-body text-sm text-gray-600 mb-4">
                                {service.description}
                              </p>
                              <ul className="space-y-2">
                                {service.links.map((link, linkIndex) => (
                                  <li key={linkIndex}>
                                    <Link
                                      href={link.href}
                                      className="font-body text-sm text-gray-700 hover:text-[#CDA434] transition-colors"
                                      onClick={() => setIsServicesOpen(false)}
                                    >
                                      {link.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-gray-200 mt-8 pt-6">
                      <div className="text-center">
                        <Link
                          href="/espace-client"
                          className="inline-flex items-center space-x-2 bg-[#CDA434] text-black px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
                        >
                          <FaKey />
                          <span>Accéder à l'Espace Client</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {navigationItems.slice(2).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-1 font-medium transition-colors duration-200 ${
                  pathname === item.href
                    ? isScrolled ? 'text-[#CDA434]' : 'text-[#CDA434]'
                    : isScrolled ? 'text-gray-900 hover:text-[#CDA434]' : 'text-white hover:text-[#CDA434]'
                }`}
              >
                {item.icon && item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:+33123456789" 
              className={`flex items-center space-x-2 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              } hover:text-[#CDA434] transition-colors`}
            >
              <FaPhone className="text-sm" />
              <span className="font-medium">01 23 45 67 89</span>
            </a>
            <a 
              href="https://wa.me/33123456789" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-4 py-2 rounded-lg hover:bg-[#128C7E] transition-colors flex items-center space-x-2"
            >
              <FaWhatsapp />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 text-gray-900 hover:text-[#CDA434] transition-colors`}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 text-gray-900 hover:text-[#CDA434] hover:bg-gray-50 rounded-md font-medium ${
                    pathname === item.href ? 'text-[#CDA434] bg-gray-50' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <a 
                  href="tel:+33123456789" 
                  className="flex items-center space-x-2 px-3 py-2 text-gray-900 hover:text-[#CDA434]"
                >
                  <FaPhone className="text-sm" />
                  <span>01 23 45 67 89</span>
                </a>
                <a 
                  href="https://wa.me/33123456789" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-3 py-2 bg-[#25D366] text-white rounded-lg mx-3"
                >
                  <FaWhatsapp />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
 
export default Header;