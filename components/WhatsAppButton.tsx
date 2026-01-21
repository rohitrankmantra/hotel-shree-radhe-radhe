"use client"

import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa"

export default function ContactAssistant() {
  const whatsappNumber = "916395305738" // WhatsApp number (no +, no spaces)
  const callNumber = "+91 63953 05738"   // Call number (shown to users)
  const message =
    "Hello! I want to get in touch with Shree Radhe Radhe, Yamunotri."

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      
      {/* Call Button */}
      <a
        href={`tel:${callNumber.replace(/\s+/g, "")}`}
        className="flex items-center justify-center w-14 h-14
        bg-blue-600 hover:bg-blue-700 text-white rounded-full
        shadow-xl transition-transform duration-300 hover:scale-105"
        title={`Call us at ${callNumber}`}
      >
        <FaPhoneAlt className="w-6 h-6" />
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14
        bg-green-600 hover:bg-green-700 text-white rounded-full
        shadow-xl transition-transform duration-300 hover:scale-105"
        title="Chat with us on WhatsApp"
      >
        <FaWhatsapp className="w-6 h-6" />
      </a>

    </div>
  )
}
