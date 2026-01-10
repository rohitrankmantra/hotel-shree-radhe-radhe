"use client"

import { useState } from "react"
import { Leaf } from "lucide-react"

const menuItems: Record<
  string,
  {
    name: string
    description: string
    veg?: boolean
  }[]
> = {
  breakfast: [
    { name: "Himalayan Porridge", description: "Organic millet with local fruits and nuts", veg: true },
    { name: "Masala Dosa", description: "Crispy rice and lentil crepe with vegetable filling", veg: true },
    { name: "Poha with Sprouts", description: "Flattened rice with fresh sprouts and herbs", veg: true },
    { name: "Fresh Fruit Salad", description: "Seasonal fruits with yogurt and honey", veg: true },
    { name: "Herbal Tea Selection", description: "Chamomile, ginger, tulsi, and local blends", veg: true },
    { name: "Millets & Honey Toast", description: "Whole grain bread with organic honey", veg: true },
  ],
  lunch: [
    { name: "Dal Makhani", description: "Creamy lentils with aromatic spices", veg: true },
    { name: "Paneer Tikka Masala", description: "Cottage cheese in tomato-based curry", veg: true },
    { name: "Vegetable Biryani", description: "Fragrant rice with seasonal vegetables", veg: true },
    { name: "Chappati with Seasonal Vegetables", description: "Whole wheat flatbread with fresh curry", veg: true },
    { name: "Raita & Pickles", description: "Yogurt-based side dish with traditional pickles", veg: true },
    { name: "Khichdi", description: "Comfort rice and lentil dish", veg: true },
  ],
  dinner: [
    { name: "Vegetable Korma", description: "Mixed vegetables in mild coconut sauce", veg: true },
    { name: "Mushroom Biryani", description: "Aromatic rice with mushrooms", veg: true },
    { name: "Spinach & Cottage Cheese", description: "Palak paneer with traditional spices", veg: true },
    { name: "Roasted Vegetables", description: "Seasonal vegetables with Himalayan herbs", veg: true },
    { name: "Rice & Lentil Blend", description: "Comfort food for easy digestion", veg: true },
    { name: "Herbal Soup", description: "Warm, nourishing vegetable soup", veg: true },
  ],
  snacks: [
    { name: "Samosa", description: "Crispy pastry with spiced potato filling", veg: true },
    { name: "Vegetable Pakora", description: "Battered and fried vegetables", veg: true },
    { name: "Chikhalwali", description: "Traditional Himalayan snack", veg: true },
    { name: "Honey Laddu", description: "Sweet spheres with nuts and dates", veg: true },
    { name: "Bhakri & Chutney", description: "Millet bread with fresh chutneys", veg: true },
    { name: "Sesame Crackers", description: "Organic seed-based crackers", veg: true },
  ],
}

export default function MenuCategories() {
  const [activeCategory, setActiveCategory] = useState("breakfast")
  const categories = Object.keys(menuItems)

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-12 text-center text-balance">
          Our Menu
        </h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all capitalize ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-foreground hover:border-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {menuItems[activeCategory].map((item, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-serif text-lg font-bold text-foreground">{item.name}</h3>
                {item.veg && <Leaf className="w-5 h-5 text-primary flex-shrink-0" />}
              </div>
              <p className="text-foreground/70 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
