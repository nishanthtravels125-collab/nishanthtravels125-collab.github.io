import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const message = `Hello

`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919704123338?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 animate-bounce"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
      <div className="absolute -top-12 -left-20 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with us!
      </div>
    </div>
  );
};

export default WhatsAppFloat;