"use client"

import Link from "next/link"
import { Phone, MessageCircle, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-foreground text-background overflow-hidden">
      
      {/* TOP GRADIENT */}
      <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-primary/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10 relative z-10">
        
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* BRAND */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="flex h-18 w-18 items-center justify-center rounded-full ring-1 bg-white ring-primary/30">
                  <img
                    src="/logo-bg.png"
                    alt="Shree Radhe Radhe"
                    className="h-18 w-18 object-contain"
                  />
                </div>
                <span className="absolute inset-0 rounded-full bg-primary/20 blur-md -z-10" />
              </div>

              <h3 className="font-serif text-lg font-semibold tracking-wide">
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
                { label: "Services", href: "/services" },
                { label: "Restaurant", href: "/restaurant" },
                { label: "Gallery", href: "/gallery" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group relative inline-flex items-center gap-3 text-background/75 hover:text-white transition-all duration-300"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-white scale-0 group-hover:scale-100 transition-transform duration-300" />
                    <span className="relative">
                      {item.label}
                      <span className="absolute left-0 -bottom-1 h-px w-0 bg-white group-hover:w-full transition-all duration-300" />
                    </span>
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
                { label: "Luxury Rooms & Suites", href: "/services/stay" },
                { label: "Pilgrim Assistance", href: "/services/pilgrim" },
                { label: "Satvik Bhojan", href: "/services/bhojan" },
                { label: "Travel Services", href: "/services/travel" },
              ].map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="group inline-flex items-center gap-3 text-background/75 hover:text-white transition-all duration-300"
                  >
                    <span className="h-1 w-1 rounded-full bg-white opacity-60 group-hover:opacity-100" />
                    <span className="relative">
                      {service.label}
                      <span className="absolute left-0 -bottom-1 h-px w-0 bg-white group-hover:w-full transition-all duration-300" />
                    </span>
                  </Link>
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
                <div className="text-background/75">
                  <p>Yamunotri Road, Barkot</p>
                  <p>Uttarakhand, India</p>
                </div>
              </li>

              <li>
                <a
                  href="tel:+919876543210"
                  className="group flex items-center gap-3 text-background/75 hover:text-white transition-all"
                >
                  <Phone className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                  <span className="relative">
                    +91 63953 05738
                    <span className="absolute left-0 -bottom-1 h-px w-0 bg-primary group-hover:w-full transition-all duration-300" />
                  </span>
                </a>
              </li>

              <li>
               
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-background/15 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
          <p>
            © {new Date().getFullYear()} Hotel Shree Radhe Radhe. All rights reserved.
            Designed & Developed by{" "}
            <a
              href="https://www.rankmantra.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors"
            >
              Rankmantra
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
