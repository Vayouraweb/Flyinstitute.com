import React, { useState } from 'react';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  
  // Replace with actual WhatsApp number (with country code, no + or spaces)
  const phoneNumber = '919876543210';
  const message = encodeURIComponent('Hello! I would like to know more about Fly Institute of Commerce.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip */}
      <div
        className={`bg-white text-gray-800 px-4 py-2 rounded-xl shadow-lg text-sm font-medium transition-all duration-300 whitespace-nowrap ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
        }`}
      >
        Chat with us! 💬
      </div>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative group"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-green-400 animate-wa-ping opacity-75"></span>

        {/* Button */}
        <span className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-xl shadow-green-500/30 hover:shadow-green-500/50 hover:scale-110 transition-all duration-300">
          <svg
            viewBox="0 0 32 32"
            fill="white"
            className="w-7 h-7"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.96A15.924 15.924 0 0016.004 32C24.826 32 32 24.826 32 16.004 32 7.176 24.826 0 16.004 0zm9.334 22.616c-.39 1.098-1.934 2.01-3.162 2.276-.842.178-1.94.32-5.638-1.212-4.734-1.96-7.782-6.764-8.018-7.08-.228-.316-1.906-2.54-1.906-4.846s1.206-3.44 1.634-3.912c.39-.428.918-.624 1.226-.624.312 0 .546.004.782.014.316.014.494.032.716.554.272.644 1.14 2.776 1.236 2.978.098.2.196.466.06.73-.128.272-.242.438-.478.682-.24.244-.49.544-.7.73-.24.214-.488.448-.21.878s1.232 2.032 2.646 3.292c1.82 1.624 3.354 2.126 3.828 2.364.474.238.752.2 1.028-.12.284-.316 1.216-1.414 1.54-1.898.316-.486.642-.402 1.078-.24.44.158 2.778 1.31 3.254 1.548.474.238.792.356.908.554.116.2.116 1.14-.274 2.236z"/>
          </svg>
        </span>
      </a>
    </div>
  );
}
