"use client"

import Navbar from "@/components/navbar"

import RoomDetailSlider from "@/components/room-detail-slider"
import RoomGrid from "@/components/room-grid"
import Amenities from "@/components/amenities"

export default function RoomsPage() {
  return (
    <main className="bg-background">
      <Navbar />
      <div className="pt-20" />
      <RoomDetailSlider />
      <Amenities />
      <RoomGrid />
     
    </main>
  )
}
