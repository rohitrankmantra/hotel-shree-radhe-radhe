"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

import satvik from "../public/foods/food2.jpg";
import pilgrim from "../public/nature/surr.jpg";
import travel from "../public/services/tour.png";

import BookingForm from "../components/rooms/bookingForm";

/* ---------------- NAV ITEM ---------------- */
function NavItem({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
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
        className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300
        ${active ? "w-full" : "w-0 group-hover:w-full"}`}
      />
    </Link>
  );
}

/* ---------------- NAVBAR ---------------- */
export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsBookingOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  const servicesMenu = [
    {
      label: "Luxury Rooms & Suites",
      href: "/services/stay",
      description: "Premium comfort with Himalayan views",
      image: "/hotel-services.jpg",
    },
    {
      label: "Satvik Bhojan",
      href: "/services/bhojan",
      description: "Traditional Pahadi & wellness vegetarian food",
      image: satvik,
    },
    {
      label: "Pilgrim Assistance",
      href: "/services/pilgrim",
      description: "Complete support for Yamunotri Yatra",
      image: pilgrim,
    },
    {
      label: "Travel Services",
      href: "/services/travel",
      description: "Transfers, tours & Himalayan travel",
      image: travel,
    },
  ];

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-background/85 backdrop-blur-lg border-b border-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            {/* LOGO */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo-bg.png"
                alt="Shree Radhe Logo"
                width={200}
                height={80}
                priority
                className="h-16 w-auto sm:h-20 object-contain"
              />
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center gap-9">
              <NavItem href="/" label="Home" active={isActive("/")} />
              <NavItem
                href="/rooms-stays"
                label="Rooms & Stay"
                active={isActive("/rooms-stays")}
              />

              {/* SERVICES */}
              <div
                className="relative group"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <Link
                  href="/services"
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
                </Link>

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
            {/* IMAGE */}
            <div className="relative w-32 h-24 rounded-md overflow-hidden">
              <Image
                src={item.image}
                alt={item.label}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* CONTENT */}
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

              <NavItem
                href="/restaurant"
                label="Restaurant"
                active={isActive("/restaurant")}
              />
              <NavItem
                href="/gallery"
                label="Gallery"
                active={isActive("/gallery")}
              />
              <NavItem
                href="/location"
                label="Location"
                active={isActive("/location")}
              />
              <NavItem
                href="/contact"
                label="Contact"
                active={isActive("/contact")}
              />

              {/* BOOK NOW BUTTON */}
              <button
                onClick={() => setIsBookingOpen(true)}
                className="rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition"
              >
                Book Now
              </button>
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
              <Link
                href="/"
                className="block text-base font-medium text-muted-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/rooms-stays"
                className="block text-base font-medium text-muted-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Rooms & Stay
              </Link>

              {/* Services Section with Dropdown */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Link
                    href="/services"
                    className="block text-base font-medium text-muted-foreground hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    Services
                  </Link>
                  <button
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className="p-1 text-muted-foreground hover:text-primary focus:outline-none"
                    aria-label="Toggle services menu"
                  >
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isMobileServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isMobileServicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pl-4 space-y-3 border-l-2 border-muted pt-2">
                    {servicesMenu.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block text-sm font-medium text-muted-foreground hover:text-primary"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/restaurant"
                className="block text-base font-medium text-muted-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Restaurant
              </Link>
              <Link
                href="/gallery"
                className="block text-base font-medium text-muted-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/location"
                className="block text-base font-medium text-muted-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Location
              </Link>
              <Link
                href="/contact"
                className="block text-base font-medium text-muted-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* ---------------- BOOKING FORM MODAL (PORTAL) ---------------- */}
      {isBookingOpen && (
        <div
          className="fixed inset-0 z-9999 flex items-center justify-center bg-black/50 backdrop-blur-sm overflow-y-auto p-4"
          onClick={() => setIsBookingOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl p-6 relative transform transition-transform duration-300 scale-100 my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsBookingOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 font-bold text-xl z-10"
            >
              ✕
            </button>

            {/* Booking Form */}
            <BookingForm />
          </div>
        </div>
      )}
    </>
  );
}
