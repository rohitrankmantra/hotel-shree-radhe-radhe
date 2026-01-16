"use client"

import Navbar from "@/components/navbar"
import RestaurantHero from "@/components/restaurant-hero"
import MenuShowcase from "@/components/menu-showcase"
import MenuCategories from "@/components/menu-categories"
import DiningAmbiance from "@/components/dining-ambiance"

export default function RestaurantPage() {
  return (
    <main className="bg-background">
      <Navbar />
      <RestaurantHero />
      <MenuShowcase />
      <MenuCategories />
      <DiningAmbiance />
    
    </main>
  )
}
