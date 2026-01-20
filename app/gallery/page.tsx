"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import GalleryHero from "@/components/gallery/gallery-hero"
import FullGalleryGrid from "@/components/gallery/full-gallery-grid"
import GalleryStories from "@/components/gallery/gallery-stories"

export default function GalleryPage() {
  return (
    <main className="bg-background">
      <Navbar />
      <GalleryHero />
      <FullGalleryGrid />
      <GalleryStories />
 
    </main>
  )
}
