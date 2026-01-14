"use client";

import { useEffect, useState, useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Mayur Kapse",
    rating: 5,
    review:
      "It is situated on the banks of Yamuna river and has a great view. Staff is also very supportive and food was also like home cooked food. The price of the rooms are also reasonable. The rooms are very neat clean. All the services are great.",
  },
  { id: 2, name: "Surya Clicks", rating: 5, review: "Very very Beautiful view Hotel just like in the Movie" },
  { id: 3, name: "Rahul Kumar", rating: 5, review: "Comfortable Stay. Lovely View" },
  {
    id: 4,
    name: "Anjali Verma",
    rating: 4,
    review:
      "Had a wonderful stay here. The location is peaceful and the rooms are spacious and clean. Highly recommended!",
  },
  {
    id: 5,
    name: "Suresh Patel",
    rating: 5,
    review:
      "Amazing hospitality and excellent food. The view from the rooms was breathtaking. Will definitely come back.",
  },
  {
    id: 6,
    name: "Neha Singh",
    rating: 4,
    review:
      "A great place to unwind and relax. The staff were very friendly and helpful. Loved the peaceful surroundings.",
  },
  {
    id: 7,
    name: "Vikram Joshi",
    rating: 5,
    review:
      "Clean rooms, serene environment, and very accommodating staff. Truly felt at home during my stay.",
  },
  {
    id: 8,
    name: "Priya Sharma",
    rating: 5,
    review:
      "Beautiful location and great services. Perfect for a weekend getaway. Highly recommend the local food too!",
  },
];

const CARD_WIDTH = 320;
const CARD_GAP = 20;
const VISIBLE_CARDS = 3;
const CONTAINER_WIDTH =
  VISIBLE_CARDS * CARD_WIDTH + (VISIBLE_CARDS - 1) * CARD_GAP;

export default function ReviewSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScroll, setIsAutoScroll] = useState(true);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
  const cardCount = reviews.length;

  const nextIndex = (i: number) => (i + 1) % cardCount;
  const prevIndex = (i: number) => (i - 1 + cardCount) % cardCount;

  useEffect(() => {
    if (!isAutoScroll) return undefined;
    autoScrollRef.current = setInterval(
      () => setCurrentIndex((prev) => nextIndex(prev)),
      3000
    );
    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    };
  }, [isAutoScroll]);

  const goToPrev = () => {
    setIsAutoScroll(false);
    setCurrentIndex((p) => prevIndex(p));
  };

  const goToNext = () => {
    setIsAutoScroll(false);
    setCurrentIndex((p) => nextIndex(p));
  };

  const leftIndex = prevIndex(currentIndex);
  const centerIndex = currentIndex;
  const rightIndex = nextIndex(currentIndex);

  return (
    <section className="bg-background py-16 sm:py-20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="max-w-2xl mx-auto mb-10 text-center">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium uppercase">
            Guest Experiences
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            What Our Guests Say
          </h2>

          <p className="text-foreground/60 text-sm sm:text-base">
            Real experiences shared by guests who stayed with us and embraced the serenity of Shree Radhe Radhe.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative mx-auto"
          style={{ maxWidth: "100%" }}
        >
          {/* Cards */}
          <div className="flex justify-center items-center gap-5">
            {/* LEFT – hidden on mobile */}
            <div className="hidden sm:block">
              <ReviewCard review={reviews[leftIndex]} faded />
            </div>

            {/* CENTER */}
            <ReviewCard review={reviews[centerIndex]} />

            {/* RIGHT – hidden on mobile */}
            <div className="hidden sm:block">
              <ReviewCard review={reviews[rightIndex]} faded />
            </div>
          </div>

          {/* Mobile arrows */}
          <div className="flex sm:hidden justify-center gap-6 mt-6">
            <ArrowButton onClick={goToPrev}>
              <ChevronLeft size={26} />
            </ArrowButton>
            <ArrowButton onClick={goToNext}>
              <ChevronRight size={26} />
            </ArrowButton>
          </div>

          {/* Desktop arrows */}
          <div className="hidden sm:block">
            <ArrowButton
              onClick={goToPrev}
              className="absolute -left-12.5 top-1/2 -translate-y-1/2"
            >
              <ChevronLeft size={28} />
            </ArrowButton>
            <ArrowButton
              onClick={goToNext}
              className="absolute -right-[-50px] top-1/2 -translate-y-1/2"
            >
              <ChevronRight size={28} />
            </ArrowButton>
          </div>
        </div>

        
       
      </div>
    </section>
  );
}

/* ---------- Components ---------- */

function ReviewCard({
  review,
  faded = false,
}: {
  review: typeof reviews[number];
  faded?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border border-border bg-background p-5 sm:p-6 flex flex-col justify-between
      transition-all ${
        faded ? "opacity-60 scale-90 pointer-events-none" : "opacity-100"
      }`}
      style={{
        width: "100%",
        maxWidth: "320px",
        height: "260px",
      }}
    >
      <div className="flex gap-1 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={
              i < review.rating ? "text-accent fill-accent" : "text-border"
            }
          />
        ))}
      </div>

      <p className="text-foreground/70 text-sm leading-relaxed mb-4">
        “{review.review}”
      </p>

      <div className="border-t border-border pt-2">
        <p className="font-medium text-foreground">{review.name}</p>
      </div>
    </div>
  );
}

function ArrowButton({
  children,
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`bg-primary/20 hover:bg-primary/40 text-primary rounded-full
      w-11 h-11 flex items-center justify-center shadow-md transition ${className}`}
    >
      {children}
    </button>
  );
}
