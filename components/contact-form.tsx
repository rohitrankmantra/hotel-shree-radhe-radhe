"use client"

import type React from "react"

import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="bg-card border border-border rounded-xl p-8 md:p-12">
      <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Send Us a Message</h2>

      {submitted ? (
        <div className="bg-accent/10 border border-accent rounded-lg p-6 text-center">
          <p className="text-accent font-semibold mb-2">Thank you for contacting us!</p>
          <p className="text-foreground/70">We'll get back to you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-accent transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-accent transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-accent transition-colors"
                placeholder="+91 98765 43210"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-accent transition-colors"
              >
                <option value="">Select subject</option>
                <option value="booking">Room Booking</option>
                <option value="inquiry">General Inquiry</option>
                <option value="services">Services Question</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-accent transition-colors resize-none"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-accent text-accent-foreground py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  )
}
