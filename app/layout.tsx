import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Cinzel, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/WhatsAppButton"



const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-serif" })
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Hotel Shree Radhe Radhe | Yamunotri, Uttarakhand",
  description:
    "Premium nature-inspired hotel near Yamunotri Dham. Experience spiritual serenity in the Himalayas with satvik vegetarian cuisine and pilgrimage services.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Hotel Shree Radhe Radhe",
    description: "Stay close to Yamunotri Dham",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable} ${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        <Navbar/>
        {children}
         <WhatsAppButton />
        <Footer/>
        <Analytics />
      </body>
    </html>
  )
}
