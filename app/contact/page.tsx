"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ContactHero from "@/components/contact/contact-hero";
import ContactForm from "@/components/contact/contact-form";
import ContactInfo from "@/components/contact/contact-info";
import LocationMap from "@/components/location/location-map";
import ContactLocation from "@/components/contact/contact-location";

export default function ContactPage() {
  return (
    <main className="bg-background">
      <Navbar />
      <ContactHero />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 items-start">

          {/* LEFT COLUMN */}
          <ContactInfo />

          {/* RIGHT COLUMN - BENTO LAYOUT */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-2 auto-rows-max">

            {/* FORM */}
            <div className="md:col-span-2 rounded-2xl border border-border/40 bg-background">
              <ContactForm />
            </div>

            {/* MAP */}
            <div className="md:col-span-2">
              <ContactLocation/>
            </div>

          </div>
        </div>
      </div>

      
    </main>
  );
}
