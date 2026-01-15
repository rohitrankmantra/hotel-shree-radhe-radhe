"use client"

import { useEffect, useState } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const reviews = [
  {
    name: "Mayur Kapse",
    rating: 5,
    review:
      "Situated on the banks of Yamuna river with an amazing view. Rooms are very clean, food feels like home, and staff is extremely supportive.",
  },
  {
    name: "Surya Clicks",
    rating: 5,
    review: "Very very beautiful view hotel, just like in a movie.",
  },
  {
    name: "Rahul Kumar",
    rating: 5,
    review: "Comfortable stay with a lovely view.",
  },
  {
    name: "Anjali Verma",
    rating: 4,
    review:
      "Peaceful location, spacious rooms, and very clean. Highly recommended.",
  },
  {
    name: "Suresh Patel",
    rating: 5,
    review:
      "Amazing hospitality and excellent food. The mountain view was breathtaking.",
  },
]

export default function ReviewSection() {
  const [current, setCurrent] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(3)

  // responsive cards
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setCardsPerView(1)
      else if (window.innerWidth < 1024) setCardsPerView(2)
      else setCardsPerView(3)

      setCurrent(0)
    }

    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  const totalSlides = Math.ceil(reviews.length / cardsPerView)

  const next = () => setCurrent((prev) => (prev + 1) % totalSlides)
  const prev = () =>
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides)

  // auto slide
  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [cardsPerView])

  return (
    <section
      className="relative py-20 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://thumbs.dreamstime.com/b/serene-mountain-lake-reflection-golden-hour-fantastic-autumn-sunset-hintersee-volcanic-morning-light-reflected-calm-400281042.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block mb-3 px-4 py-1 rounded-full bg-white/10 text-white text-xs uppercase tracking-widest">
            Guest Reviews
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
            What Our Guests Say
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Honest experiences from guests who stayed amidst nature and peace.
          </p>
        </div>

        {/* arrows */}
        <button
          onClick={prev}
          className="hidden md:flex absolute left-2 md:top-[70%] top-[50%]  -translate-y-1/2 z-20 p-4 rounded-full bg-white/10 text-white hover:bg-white/20 transition"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          onClick={next}
          className="hidden md:flex absolute right-2 md:top-[70%] top-[50%] -translate-y-1/2 z-20 p-4 rounded-full bg-white/10 text-white hover:bg-white/20 transition"
        >
          <ChevronRight size={28} />
        </button>

        {/* slider */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${
                current * (100 / cardsPerView)
              }%)`,
            }}
          >
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="w-full sm:w-1/2 lg:w-1/3 px-4 shrink-0 flex justify-center"
              >
                <div className="h-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center shadow-xl max-w-sm w-full">
                  {/* stars */}
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={
                          i < review.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-500"
                        }
                      />
                    ))}
                  </div>

                  <p className="text-gray-100 italic mb-6 leading-relaxed">
                    “{review.review}”
                  </p>

                  <div className="border-t border-white/20 pt-4 text-white font-medium">
                    {review.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
