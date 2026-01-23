"use client"

import { useState } from "react"
import { FaUsers, FaBed, FaUtensils, FaCheckCircle } from "react-icons/fa"
import BookingModal from "./BookingModel"

interface Room {
  id: number
  name: string
  image: string
  capacity: string
  bed: string
  roomOnlyPrice: string
  withMealsPrice: string
}

const allRooms: Room[] = [
  {
    id: 1,
    name: "Standard Double Room",
    image: "/Rooms/hotel-room1.jpeg",
    capacity: "2 Guests",
    bed: "Queen Bed",
    roomOnlyPrice: "₹3,200",
    withMealsPrice: "₹1,800 per person",
  },
  {
    id: 2,
    name: "Triple Bed Room",
    image: "/Rooms/hotel-room3.jpeg",
    capacity: "3 Guests",
    bed: "Multiple Beds",
    roomOnlyPrice: "₹4,000",
    withMealsPrice: "₹1,600 per person",
  },
  {
    id: 3,
    name: "Family / Quadruple Room",
    image: "/Rooms/hotel-room6.jpeg",
    capacity: "4 Guests",
    bed: "King / Queen Beds",
    roomOnlyPrice: "₹4,500",
    withMealsPrice: "₹1,400 per person",
  },
  {
    id: 4,
    name: "Deluxe Double Room",
    image: "/Rooms/hotel-room7.jpeg",
    capacity: "2 Guests",
    bed: "Queen Bed",
    roomOnlyPrice: "₹4,500",
    withMealsPrice: "₹1,450 per person",
  },
]

export default function RoomGrid() {
  const [open, setOpen] = useState(false)
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null)

  const handleBook = (room: Room) => {
    setSelectedRoom(room)
    setOpen(true)
  }

  return (
    <>
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-3">
            Rooms & Accommodation
          </h2>
          <p className="text-foreground/60 mb-12 max-w-2xl">
            Comfortable rooms with transparent pricing and optional meal plans.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allRooms.map((room) => (
              <div
                key={room.id}
                className="group bg-card rounded-xl border border-border/60 hover:border-primary/60 transition-colors overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                  <h3 className="font-serif text-xl font-medium">
                    {room.name}
                  </h3>

                  {/* Guests & Bed (subtle highlight) */}
                  <div className="flex flex-wrap gap-4 text-sm text-foreground/80 font-medium">
                    <span className="flex items-center gap-2">
                      <FaUsers className="text-primary/70" />
                      {room.capacity}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaBed className="text-primary/70" />
                      {room.bed}
                    </span>
                  </div>

                  {/* Room Only (secondary) */}
                  <div>
                    <p className="text-xs uppercase tracking-wide text-foreground/50">
                      Room Only
                    </p>
                    <p className="sm:text-xl text-lg font-bold text-foreground/80">
                      {room.roomOnlyPrice}
                    </p>
                  </div>

                  {/* With Meals (primary highlight) */}
                  <div className="relative rounded-lg border border-primary/30 bg-primary/5 p-4 space-y-2">
                    <span className="absolute -top-3 right-4 bg-primary text-primary-foreground text-[10px] px-2 py-0.5 rounded-full tracking-wide">
                      Recommended
                    </span>

                    <div className="flex items-center gap-2 text-primary">
                      <FaUtensils />
                      <p className="text-xs uppercase tracking-wide">
                        With Meals
                      </p>
                    </div>

                    <p className="text-2xl font-semibold text-primary">
                      {room.withMealsPrice}
                    </p>

                    <div className="flex items-center gap-2 text-xs text-foreground/60">
                      <FaCheckCircle className="text-primary" />
                      Breakfast & Dinner included
                    </div>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => handleBook(room)}
                    className="w-full py-2.5 text-sm font-medium rounded-lg
                      bg-primary text-primary-foreground
                      hover:opacity-90 transition"
                  >
                    Book Room
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingModal
        open={open}
        onClose={() => setOpen(false)}
        room={selectedRoom ?? undefined}
      />
    </>
  )
}
