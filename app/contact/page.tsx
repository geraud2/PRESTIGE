"use client";
import React, { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock, FaComments, FaPaperPlane } from 'react-icons/fa';

export default function ContactPage() {
  const [contactForm, setContactForm] = useState({
    nom: '',
    email: '',
    telephone: '',
    service: '',
    sujet: '',
    message: ''
  });

  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      message: 'Bonjour ! Je suis l\'assistant virtuel de DJOK PRESTIGE. Comment puis-je vous aider aujourd\'hui ?',
      time: 'À l\'instant'
    }
  ]);

  const [newMessage, setNewMessage] = useState('');

  const contactInfo = [
    {
      icon: <FaPhone className="text-2xl text-[#CDA434]" />,
      title: 'Téléphone',
      details: ['+33 1 23 45 67 89', 'Lun-Ven: 8h-19h', 'Sam: 9h-17h'],
      action: 'tel:+33123456789'
    },
    {
      icon: <FaWhatsapp className="text-2xl text-[#25D366]" />,
      title: 'WhatsApp Business',
      details: ['+33 1 23 45 67 89', 'Réponse rapide', 'Service 24h/24'],
      action: 'https://wa.me/33123456789'
    },
    {
      icon: <FaEnvelope className="text-2xl text-[#0057B7]" />,
      title: 'Email',
      details: ['contact@djokprestige.com', 'Réponse sous 24h', 'Support technique'],
      action: 'mailto:contact@djokprestige.com'
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-[#F7931E]" />,
      title: 'Adresse',
      details: ['123 Avenue des Champs-Élysées', '75008 Paris, France', 'RDV sur rendez-vous'],
      action: 'https://maps.google.com'
    }
  ];

  const services = [
    'Services VTC',
    'Location de véhicules',
    'Formations professionnelles',
    'Afrique & Entrepreneuriat',
    'Espace Client',
    'Partenariat',
    'Autre'
  ];

  const faq = [
    {
      question: 'Comment réserver un VTC ?',
      answer: 'Vous pouvez réserver via notre formulaire en ligne, par téléphone ou WhatsApp. Nous confirmons votre réservation immédiatement.'
    },
    {
      question: 'Quels sont vos tarifs de formation ?',
      answer: 'Nos formations VTC complètes démarrent à 2 490€. Elles sont éligibles CPF et peuvent être financées par Pôle Emploi.'
    },
    {
      question: 'Accompagnez-vous les projets en Afrique ?',
      answer: 'Oui, nous proposons un accompagnement complet : étude de marché, mise en relation, suivi de projet et formations spécialisées.'
    },
    {
      question: 'Puis-je louer un véhicule pour une longue durée ?',
      answer: 'Absolument ! Nous proposons des tarifs préférentiels pour les locations longue durée (plus de 7 jours).'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    alert('Votre message a été envoyé ! Nous vous répondrons dans les plus brefs délais.');
    setContactForm({
      nom: '',
      email: '',
      telephone: '',
      service: '',
      sujet: '',
      message: ''
    });
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const userMessage = {
        id: chatMessages.length + 1,
        sender: 'user',
        message: newMessage,
        time: new Date().toLocaleTimeString()
      };
      
      setChatMessages([...chatMessages, userMessage]);
      setNewMessage('');
      
      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          id: chatMessages.length + 2,
          sender: 'bot',
          message: 'Merci pour votre message ! Un conseiller va vous répondre rapidement. Pour une réponse immédiate, n\'hésitez pas à nous appeler au 01 23 45 67 89.',
          time: new Date().toLocaleTimeString()
        };
        setChatMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Contactez DJOK PRESTIGE"
        subtitle="Notre équipe est à votre disposition pour répondre à toutes vos questions"
        backgroundImage="https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg"
        theme="vtc"
        primaryAction={{
          text: "Nous appeler",
          href: "tel:+33123456789",
          onClick: () => window.location.href = 'tel:+33123456789'
        }}
        secondaryAction={{
          text: "WhatsApp",
          href: "https://wa.me/33123456789",
          onClick: () => window.open('https://wa.me/33123456789', '_blank')
        }}
      />

      {/* Contact Info */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-6">
              Plusieurs moyens de nous contacter
            </h2>
            <p className="font-body text-xl text-gray-600">
              Choisissez le canal qui vous convient le mieux
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300">
                <div className="mb-6">
                  {info.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">
                  {info.title}
                </h3>
                <div className="space-y-2 mb-6">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="font-body text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
                <a
                  href={info.action}
                  target={info.action.startsWith('http') ? '_blank' : '_self'}
                  rel={info.action.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  <Button variant="outline" className="w-full group-hover:bg-[#CDA434] group-hover:text-black group-hover:border-[#CDA434]">
                    Contacter
                  </Button>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-8">
                Envoyez-nous un message
              </h2>
              <Card>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-body font-medium text-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        name="nom"
                        value={contactForm.nom}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CDA434] focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-body font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={contactForm.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CDA434] focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-body font-medium text-gray-700 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        name="telephone"
                        value={contactForm.telephone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CDA434] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block font-body font-medium text-gray-700 mb-2">
                        Service concerné *
                      </label>
                      <select
                        name="service"
                        value={contactForm.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CDA434] focus:border-transparent"
                        required
                      >
                        <option value="">Sélectionner un service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-body font-medium text-gray-700 mb-2">
                      Sujet *
                    </label>
                    <input
                      type="text"
                      name="sujet"
                      value={contactForm.sujet}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CDA434] focus:border-transparent"
                      placeholder="Résumez votre demande en quelques mots"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-body font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={contactForm.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CDA434] focus:border-transparent"
                      placeholder="Décrivez votre demande en détail..."
                      required
                    />
                  </div>

                  <Button type="submit" variant="vtc" size="lg" className="w-full">
                    <FaPaperPlane className="mr-2" />
                    Envoyer le message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Map & Hours */}
            <div className="space-y-8">
              {/* Map */}
              <div>
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                  Notre localisation
                </h3>
                <Card className="p-0 overflow-hidden">
                  <div className="bg-gray-200 h-64 flex items-center justify-center">
                    <div className="text-center">
                      <FaMapMarkerAlt className="text-4xl text-[#CDA434] mx-auto mb-4" />
                      <p className="font-body text-gray-600">
                        123 Avenue des Champs-Élysées<br />
                        75008 Paris, France
                      </p>
                      <Button variant="outline" className="mt-4">
                        Voir sur Google Maps
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Hours */}
              <div>
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                  Horaires d'ouverture
                </h3>
                <Card>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-body font-medium text-gray-900">Lundi - Vendredi</span>
                      <span className="font-body text-gray-600">8h00 - 19h00</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-body font-medium text-gray-900">Samedi</span>
                      <span className="font-body text-gray-600">9h00 - 17h00</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-body font-medium text-gray-900">Dimanche</span>
                      <span className="font-body text-gray-600">Fermé</span>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex items-center space-x-2 text-[#25D366]">
                        <FaWhatsapp />
                        <span className="font-body font-medium">WhatsApp: 24h/24 - 7j/7</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chatbot */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-6">
              Chat en Direct
            </h2>
            <p className="font-body text-xl text-gray-600">
              Posez vos questions à notre assistant virtuel
            </p>
          </div>

          <Card>
            <div className="h-96 flex flex-col">
              {/* Chat Header */}
              <div className="flex items-center space-x-3 p-4 border-b border-gray-200">
                <div className="w-10 h-10 bg-[#CDA434] rounded-full flex items-center justify-center">
                  <FaComments className="text-black" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-gray-900">Assistant DJOK PRESTIGE</h3>
                  <p className="font-body text-sm text-green-600">En ligne</p>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4">
                {chatMessages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      msg.sender === 'user' 
                        ? 'bg-[#CDA434] text-black' 
                        : 'bg-gray-100 text-gray-900'
                    }`}>
                      <p className="font-body text-sm">{msg.message}</p>
                      <p className="font-body text-xs opacity-70 mt-1">{msg.time}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200">
                <div className="flex space-x-3">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Tapez votre message..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CDA434] focus:border-transparent"
                  />
                  <Button type="submit" variant="vtc">
                    <FaPaperPlane />
                  </Button>
                </div>
              </form>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-6">
              Questions Fréquentes
            </h2>
            <p className="font-body text-xl text-gray-600">
              Trouvez rapidement les réponses à vos questions
            </p>
          </div>

          <div className="space-y-6">
            {faq.map((item, index) => (
              <Card key={index}>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                  {item.question}
                </h3>
                <p className="font-body text-gray-600">
                  {item.answer}
                </p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="font-body text-gray-600 mb-4">
              Vous ne trouvez pas la réponse à votre question ?
            </p>
            <Button variant="vtc">
              Contactez notre équipe
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}