"use client"

import Navbar from "@/components/navbar"

import RoomDetailSlider from "@/components/rooms/room-detail-slider"
import RoomGrid from "@/components/rooms/room-grid"
import Amenities from "@/components/rooms/amenities"

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
