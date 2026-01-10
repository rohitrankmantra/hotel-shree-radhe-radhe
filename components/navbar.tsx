"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, Leaf, ChevronDown, ArrowRight } from "lucide-react"

/* ---------------- NAV ITEM (UNDERLINE EFFECT) ---------------- */
function NavItem({
  href,
  label,
  active,
}: {
  href: string
  label: string
  active: boolean
}) {
  return (
    <Link href={href} className="relative group inline-block">
      <span
        className={`text-sm font-medium transition-colors duration-200 ${
          active
            ? "text-primary"
            : "text-muted-foreground group-hover:text-primary"
        }`}
      >
        {label}
      </span>

      <span
        className={`absolute -bottom-1 left-0 h-0.75 bg-primary transition-all duration-300 ease-out
        ${active ? "w-full" : "w-0 group-hover:w-full"}`}
      />
    </Link>
  )
}

/* ---------------- MAIN NAVBAR ---------------- */
export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  useEffect(() => {
    setIsOpen(false)
    setIsServicesOpen(false)
  }, [pathname])

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href))

  const servicesMenu = [
    {
      label: "Luxury Rooms & Suites",
      href: "/services#stay",
      description: "Premium comfort with Himalayan views",
      image: "/hotel-services.jpg",
    },
    {
      label: "Satvik Cuisine",
      href: "/services#bhojan",
      description: "Traditional Pahari & wellness vegetarian food",
      image: "/hotel-services.jpg",
    },
    {
      label: "Pilgrim Assistance",
      href: "/services#pilgrim",
      description: "Complete support for Yamunotri Yatra",
      image: "/hotel-services.jpg",
    },
    {
      label: "Travel Services",
      href: "/services#travel",
      description: "Transfers, tours & Himalayan travel",
      image: "/hotel-services.jpg",
    },
  ]

  return (
    <nav className="fixed top-0 z-50 w-full bg-background/85 backdrop-blur-lg border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="p-1.5 rounded-full bg-primary/10 group-hover:bg-primary/20 transition">
              <Leaf className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
            <span className="font-serif text-xl sm:text-2xl font-bold">
              Shree Radhe
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-9">
            <NavItem href="/" label="Home" active={isActive("/")} />
            <NavItem href="/rooms" label="Rooms & Stay" active={isActive("/rooms")} />

            {/* SERVICES */}
            <div
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                type="button"
                className={`relative flex items-center gap-1.5 text-sm font-medium transition-colors ${
                  pathname.startsWith("/services") || isServicesOpen
                    ? "text-primary"
                    : "text-muted-foreground group-hover:text-primary"
                }`}
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />

                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300
                  ${
                    pathname.startsWith("/services") || isServicesOpen
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </button>

              {/* MEGA MENU */}
              {isServicesOpen && (
                <div className="absolute left-1/2 top-full z-50 w-screen max-w-5xl -translate-x-1/2 pt-3">
                  <div className="bg-background border border-border/70 rounded-xl shadow-2xl overflow-hidden">
                    <div className="grid grid-cols-2 gap-6 p-8">
                      {servicesMenu.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="group flex gap-5 rounded-lg p-5 hover:bg-muted/70 transition border border-transparent hover:border-primary/20"
                        >
                          <div className="w-32 h-24 rounded-md overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.label}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                          </div>
                          <div>
                            <h3 className="font-serif text-base font-semibold group-hover:text-primary">
                              {item.label}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1.5">
                              {item.description}
                            </p>
                            <div className="mt-3 text-xs text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition">
                              Explore <ArrowRight className="w-3 h-3" />
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <NavItem href="/" label="Restaurant" active={isActive("/restaurant")} />
            <NavItem href="/" label="Gallery" active={isActive("/gallery")} />
            <NavItem href="/" label="Location" active={isActive("/location")} />
            <NavItem href="/" label="Contact" active={isActive("/contact")} />

            <Link
              href="/contact"
              className="rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition"
            >
              Book Now
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-primary"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background/95">
          <div className="px-5 py-6 space-y-5">
            {[
              { href: "/", label: "Home" },
              { href: "/rooms", label: "Rooms & Stay" },
              { href: "/restaurant", label: "Restaurant" },
              { href: "/gallery", label: "Gallery" },
              { href: "/location", label: "Location" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block text-base font-medium text-muted-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="flex w-full items-center justify-between text-base font-medium text-muted-foreground hover:text-primary"
            >
              Services
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isServicesOpen && (
              <div className="pl-6 space-y-3">
                {servicesMenu.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block text-sm text-muted-foreground hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
