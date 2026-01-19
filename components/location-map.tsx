"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MapPin, Navigation } from "lucide-react";

export default function LocationMap() {
  const { theme, systemTheme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // zoom control (pb logic preserved)
  const zoomLevel = isMobile ? "4f6.1" : "4f7.1";

  // satellite + dark mode
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13777.809842964827!2d78.4521!3d31.0127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!${zoomLevel}!3m3!1m2!1s0x3908bda7747d1f21%3A0x6870fdc614b4102a!2sHotel%20Radhe%20Radhe%2C%20Yamunotri!5e0!3m2!1sen!2sin!4v1705300000000&maptype=satellite${
    isDark ? "&theme=dark" : ""
  }`;

  return (
    <div
      className="
        relative
        w-full
        h-72
        rounded-2xl
        overflow-hidden
        border border-border/60
        shadow-sm
        bg-muted
      "
    >
          {/* MAP */}
          <iframe
            title="Hotel Radhe Radhe Yamunotri Location"
            src={mapSrc}
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            onMouseDown={() => setIsInteracting(true)}
            onTouchStart={() => setIsInteracting(true)}
            onMouseUp={() => setIsInteracting(false)}
            onTouchEnd={() => setIsInteracting(false)}
          />

          {/* OPEN IN MAPS */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Hotel+Radhe+Radhe+Yamunotri"
            target="_blank"
            rel="noopener noreferrer"
            className="
              absolute
              top-4
              right-4
              z-10
              rounded-full
              bg-background/90
              backdrop-blur-md
              border border-border/60
              px-4
              py-2
              text-xs
              font-medium
              flex items-center gap-2
              hover:bg-background
              transition
            "
          >
            <Navigation className="h-4 w-4 text-primary" />
            Open in Maps
          </a>

          {/* LOCATION OVERLAY */}
          <div
            className={`
              absolute
              z-10
              transition-opacity duration-300
              ${isInteracting ? "opacity-40" : "opacity-100"}

              /* mobile */
              bottom-8
              left-1/2
              -translate-x-1/2

              /* desktop */
              md:left-6
              md:bottom-10
              md:translate-x-0

              max-w-sm
              rounded-xl
              bg-background/85
              backdrop-blur-md
              border border-border/50
              p-3 md:p-4
              shadow-md
            `}
          >
            <div className="flex items-start gap-3">
              {/* PIN WITH AUTO PULSE */}
              <div className="relative">
                <span className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
                <MapPin className="relative h-4 w-4 md:h-5 md:w-5 text-primary" />
              </div>

              <div>
                <p className="font-semibold text-xs md:text-sm">
                  Hotel Radhe Radhe
                </p>
                <p className="text-[10px] md:text-xs text-muted-foreground">
                  Yamunotri Road, Uttarakhand
                </p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Hotel+Radhe+Radhe+Yamunotri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-block
                    mt-1.5
                    text-[11px]
                    md:text-xs
                    font-medium
                    text-primary
                    hover:underline
                  "
                >
                  Get Directions →
                </a>
              </div>
            </div>
          </div>
    </div>
  );
}
