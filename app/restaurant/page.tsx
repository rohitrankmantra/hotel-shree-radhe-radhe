"use client"

import Navbar from "@/components/navbar"
import RestaurantHero from "@/components/restaurant/restaurant-hero"
import MenuShowcase from "@/components/restaurant/menu-showcase"
import MenuCategories from "@/components/restaurant/menu-categories"
import DiningAmbiance from "@/components/restaurant/dining-ambiance"

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
