"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import GalleryHero from "@/components/gallery/gallery-hero"
import GalleryGrid from "@/components/gallery/gallery-grid"
import GalleryStories from "@/components/gallery/gallery-stories"
import GalleryVideos from "@/components/gallery/gallery-videos"

export default function GalleryPage() {
  return (
    <main className="bg-background">
      <Navbar />
      <GalleryHero />
      <GalleryGrid />
      <GalleryVideos />
      <GalleryStories />
    
    </main>
  )
}
