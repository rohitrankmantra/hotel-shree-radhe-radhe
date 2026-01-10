"use client"

export default function RestaurantHero() {
  return (
    <section className="relative h-screen pt-20 flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Restaurant"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-background" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        <p className="text-accent text-sm font-medium mb-4 uppercase tracking-widest">Satvik Cuisine</p>
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 text-balance">
          Pure Vegetarian Bhojan
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
          Experience the philosophy of Satvik cuisine—food prepared with care, intention, and the finest organic
          ingredients from the Himalayan region.
        </p>
      </div>
    </section>
  )
}
