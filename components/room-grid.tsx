"use client"

import { useState } from "react"
import { Users, Bed } from "lucide-react"

import BookingModal from "./BookingModel"

interface Room {
  id: number
  name: string
  image: string
  capacity: string
  bed: string
  price: string
}

const allRooms: Room[] = [
  {
    id: 1,
    name: "Standard Double Room",
    image: "/rooms/hotel-room1.jpeg",
    capacity: "2 Guests",
    bed: "Queen Bed",
    price: "₹2,500",
  },
  {
    id: 2,
    name: "Quadruple / Family Room",
    image: "/rooms/hotel-room6.jpeg",
    capacity: "4 Guests",
    bed: "King / Queen Bed",
    price: "₹4,500",
  },
  {
    id: 3,
    name: "Deluxe Double Room (Pink Wood)",
    image: "/rooms/hotel-room3.jpeg",
    capacity: "2 Guests",
    bed: "Double Beds",
    price: "₹3,200",
  },
  {
    id: 4,
    name: "Standard Double Room (Red)",
    image: "/rooms/hotel-room7.jpeg",
    capacity: "2 Guests",
    bed: "Queen Bed",
    price: "₹2,800",
  },

  // 🔁 Duplicated cards
  {
    id: 5,
    name: "Standard Double Room",
    image: "/rooms/hotel-room1.jpeg",
    capacity: "2 Guests",
    bed: "Queen Bed",
    price: "₹2,500",
  },
  {
    id: 6,
    name: "Quadruple / Family Room",
    image: "/rooms/hotel-room6.jpeg",
    capacity: "4 Guests",
    bed: "King / Queen Bed",
    price: "₹4,500",
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
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            All Rooms
          </h2>
          <p className="text-foreground/60 mb-12 max-w-2xl">
            Explore our complete collection of thoughtfully designed spaces
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allRooms.map((room) => (
              <div
                key={room.id}
                className="group overflow-hidden rounded-xl border border-border hover:border-primary transition-colors"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 bg-card">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                    {room.name}
                  </h3>

                  <div className="space-y-2 mb-6 text-sm text-foreground/70">
                    <p className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      {room.capacity}
                    </p>
                    <p className="flex items-center gap-2">
                      <Bed className="w-4 h-4 text-primary" />
                      {room.bed}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <p className="font-serif text-2xl font-bold text-primary">
                      {room.price}
                    </p>
                    <button
                      onClick={() => handleBook(room)}
                      className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <BookingModal
        open={open}
        onClose={() => setOpen(false)}
        room={selectedRoom ?? undefined}
      />
    </>
  )
}
