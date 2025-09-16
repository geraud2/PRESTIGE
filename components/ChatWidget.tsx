"use client";
import React, { useState } from 'react';
import { FaWhatsapp, FaFacebook, FaComments, FaTimes, FaPaperPlane } from 'react-icons/fa';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeChat, setActiveChat] = useState('whatsapp');
  const [message, setMessage] = useState('');

  const chatOptions = [
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      icon: <FaWhatsapp className="text-xl" />,
      color: 'bg-[#25D366]',
      action: () => window.open('https://wa.me/33123456789?text=Bonjour, je souhaite obtenir des informations sur vos services.', '_blank')
    },
    {
      id: 'messenger',
      name: 'Messenger',
      icon: <FaFacebook className="text-xl" />,
      color: 'bg-[#0084FF]',
      action: () => window.open('https://m.me/djokprestige', '_blank')
    },
    {
      id: 'chat',
      name: 'Chat en ligne',
      icon: <FaComments className="text-xl" />,
      color: 'bg-[#CDA434]',
      action: () => setActiveChat('chat')
    }
  ];

  const quickMessages = [
    "Bonjour, je souhaite réserver un VTC",
    "Quels sont vos tarifs ?",
    "Informations sur les formations",
    "Disponibilité pour demain"
  ];

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#CDA434] hover:bg-[#B8941E] text-black p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          {isOpen ? <FaTimes className="text-xl" /> : <FaComments className="text-xl" />}
        </button>
      </div>

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-lg shadow-2xl border z-50">
          {/* Header */}
          <div className="bg-[#CDA434] text-black p-4 rounded-t-lg">
            <h3 className="font-bold text-lg">Contactez-nous</h3>
            <p className="text-sm opacity-90">Choisissez votre moyen de communication préféré</p>
          </div>

          {/* Chat Options */}
          {activeChat !== 'chat' && (
            <div className="p-4 space-y-3">
              {chatOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={option.action}
                  className={`w-full flex items-center space-x-3 p-3 rounded-lg text-white hover:opacity-90 transition-opacity ${option.color}`}
                >
                  {option.icon}
                  <span className="font-medium">{option.name}</span>
                </button>
              ))}
              
              <div className="border-t pt-3 mt-4">
                <p className="text-sm text-gray-600 mb-2">Messages rapides :</p>
                <div className="space-y-2">
                  {quickMessages.map((msg, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        const encodedMsg = encodeURIComponent(msg);
                        window.open(`https://wa.me/33123456789?text=${encodedMsg}`, '_blank');
                      }}
                      className="w-full text-left p-2 text-sm bg-gray-100 hover:bg-gray-200 rounded transition-colors"
                    >
                      {msg}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Live Chat Interface */}
          {activeChat === 'chat' && (
            <div className="h-96 flex flex-col">
              {/* Chat Header */}
              <div className="flex items-center justify-between p-3 border-b">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-medium text-gray-900">Support DJOK PRESTIGE</span>
                </div>
                <button
                  onClick={() => setActiveChat('whatsapp')}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ←
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 p-4 overflow-y-auto">
                <div className="space-y-3">
                  <div className="flex justify-start">
                    <div className="bg-gray-100 p-3 rounded-lg max-w-xs">
                      <p className="text-sm">Bonjour ! Comment puis-je vous aider aujourd'hui ?</p>
                      <span className="text-xs text-gray-500">À l'instant</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message Input */}
              <div className="p-3 border-t">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tapez votre message..."
                    className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CDA434]"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        // Handle send message
                        setMessage('');
                      }
                    }}
                  />
                  <button
                    onClick={() => setMessage('')}
                    className="bg-[#CDA434] text-black p-2 rounded-lg hover:bg-[#B8941E] transition-colors"
                  >
                    <FaPaperPlane />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="p-3 bg-gray-50 rounded-b-lg text-center">
            <p className="text-xs text-gray-600">
              Réponse rapide • Service client 24h/24
            </p>
          </div>
        </div>
      )}
    </>
  );
}