"use client"

import { useState } from "react"
import { Users, Bed } from "lucide-react"

import twilight from "../public/rooms/twelight.jpg"
import peak from "../public/rooms/suit.jpg"
import forest from "../public/rooms/forest.jpg"
import dawn from "../public/rooms/dawn.jpg"
import serenity from "../public/rooms/serenity.jpg"

import BookingModal from "./BookingModel"

const allRooms = [
  {
    id: 1,
    name: "Serenity Room",
    image: serenity.src,
    capacity: "2 Guests",
    bed: "Queen Bed",
    price: "₹2,500",
  },
  {
    id: 2,
    name: "Peak Suite",
    image: peak.src,
    capacity: "4 Guests",
    bed: "King Bed + Sofa",
    price: "₹4,500",
  },
  {
    id: 3,
    name: "Forest Nest",
    image: forest.src,
    capacity: "2 Guests",
    bed: "Twin Beds",
    price: "₹3,200",
  },
  {
    id: 4,
    name: "Dawn Room",
    image: dawn.src,
    capacity: "2 Guests",
    bed: "Queen Bed",
    price: "₹2,800",
  },
  {
    id: 5,
    name: "Twilight Room",
    image: twilight.src,
    capacity: "3 Guests",
    bed: "King Bed",
    price: "₹3,500",
  },
  {
    id: 6,
    name: "Harmony Suite",
    image: serenity.src,
    capacity: "2 Guests",
    bed: "Queen Bed",
    price: "₹3,800",
  },
]

interface Room {
  id: number
  name: string
  image: string
  capacity: string
  bed: string
  price: string
}

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
