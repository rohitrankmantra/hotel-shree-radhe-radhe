"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ContactHero from "@/components/contact-hero"
import ContactForm from "@/components/contact-form"
import ContactInfo from "@/components/contact-info"

export default function ContactPage() {
  return (
    <main className="bg-background">
      <Navbar />
      <ContactHero />
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <ContactInfo />
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
