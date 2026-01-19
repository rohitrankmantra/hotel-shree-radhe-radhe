"use client"

import { useState, useEffect } from "react"
import { FaWhatsapp, FaBed, FaBus, FaLandmark } from "react-icons/fa"


export default function WhatsAppAssistant() {
  const phoneNumber = "+919876543210" // Replace with your WhatsApp number
  const message = "Hello! I want to get in touch with Shree Radhe Radhe, Yamunotri."

  const messages = [
    <>
      Need help booking your room? 
    </>,
    <>
      Plan your pilgrimage with us...
    </>,
    <>
      Check our travel packages...
    </>,
  ]

  const [currentMessage, setCurrentMessage] = useState(0)
  const [showBubble, setShowBubble] = useState(false)

  // Cycle messages every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end"
      onMouseEnter={() => setShowBubble(true)}
      onMouseLeave={() => setShowBubble(false)}
    >
      {/* Glassmorphic Popup Bubble */}
      <div
        className={`
          relative mb-2 px-2 py-3 mr-6 bg-black/30 backdrop-blur-lg border border-white/20
          rounded-t-2xl rounded-l-2xl rounded-r-2xl rounded-br-none shadow-xl max-w-xs
          transition-all duration-300
          ${showBubble ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}
        `}
      >
        <p className="text-sm text-white font-medium">{messages[currentMessage]}</p>
      </div>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-xl transition-transform duration-300 transform hover:scale-105"
        title="Chat with us on WhatsApp"
      >
        <FaWhatsapp className="w-8 h-8 drop-shadow-lg" />
      </a>
    </div>
  )
}
