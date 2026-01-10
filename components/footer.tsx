"use client"

import Link from "next/link"
import { Phone, MessageCircle, MapPin, Leaf } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-foreground text-background overflow-hidden">
      
      {/* TOP GRADIENT */}
      <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-primary/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10 relative z-10">
        
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* BRAND */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-primary/15">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-serif text-2xl font-bold">
                Shree Radhe Radhe
              </h3>
            </div>

            <p className="text-sm text-background/70 leading-relaxed max-w-sm">
              A peaceful sanctuary for pilgrims and seekers, located on the
              sacred Yamunotri Road amidst the serene beauty of Uttarakhand.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "Rooms & Stay", href: "/rooms" },
                { label: "Restaurant", href: "/restaurant" },
                { label: "Gallery", href: "/gallery" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-5">
              Our Services
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                "Comfortable Stay",
                "Pilgrim Assistance",
                "Satvik Bhojan",
                "Travel Guidance",
              ].map((service) => (
                <li key={service} className="flex items-center gap-2 text-background/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-5">
              Contact Us
            </h4>

            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-white mt-0.5" />
                <div className="text-background/80">
                  <p>Yamunotri Road, Barkot</p>
                  <p>Uttarakhand, India</p>
                </div>
              </li>

              <li>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 text-white" />
                  +91 9876 543 210
                </a>
              </li>

              <li>
                <a
                  href="https://wa.me/919876543210"
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  WhatsApp Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-background/15 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
          <p>
            © {new Date().getFullYear()} Hotel Shree Radhe Radhe. All rights reserved.
          </p>

          <div className="flex gap-6">
            {["Privacy Policy", "Terms", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
