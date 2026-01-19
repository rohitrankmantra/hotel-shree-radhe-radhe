"use client"

import HeroSlider from "@/components/home/hero-slider"
import IntroductionSection from "@/components/home/introduction-section"
import ExperienceStrip from "@/components/home/experience-strip"
import RoomsPreview from "@/components/home/rooms-preview"
import RestaurantSection from "@/components/home/restaurant-section"
import GalleryPreview from "@/components/home/gallery-preview"
import LocationPreview from "@/components/home/location-preview"

import ReviewSection from "@/components/home/ReviewSection"


export default function Home() {
  return (
    <main className="bg-background">
      <HeroSlider />
      <IntroductionSection />
      <ExperienceStrip />
      <RoomsPreview />
      <RestaurantSection />
      <GalleryPreview />
      <ReviewSection />
      <LocationPreview />
    </main>
  )
}
