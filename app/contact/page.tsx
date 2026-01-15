"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ContactHero from "@/components/contact-hero";
import ContactForm from "@/components/contact-form";
import ContactInfo from "@/components/contact-info";
import LocationMap from "@/components/location-map";

export default function ContactPage() {
  return (
    <main className="bg-background">
      <Navbar />
      <ContactHero />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

          {/* LEFT COLUMN */}
          <ContactInfo />

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-2 flex flex-col gap-8">

            {/* FORM */}
            <div className="rounded-2xl border border-border/40 bg-background">
              <ContactForm />
            </div>

            {/* MAP — FIXED HEIGHT + CENTER FRAME */}
            <div className="  h-70 rounded-2xl overflow-hidden border border-border/40 flex items-center justify-center">
              <LocationMap />
            </div>

          </div>
        </div>
      </div>

      
    </main>
  );
}
