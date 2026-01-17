"use client";

import { useState, useRef } from "react";
import { CalendarDays, Plus, Minus, Users } from "lucide-react";

/* ---------------- MAIN FORM ---------------- */

export default function BookForm() {
  return (
    <div className="w-full flex justify-center px-3 py-4">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-md border border-black/5 px-4 py-4">
        {/* Heading */}
        <div className="text-center mb-4">
          <h2 className="text-sm font-semibold">Room Booking</h2>
          <p className="text-[11px] text-gray-500">Reserve your stay</p>
        </div>

        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input label="Full Name" placeholder="Your name" />
          <Input label="Email" type="email" placeholder="you@email.com" />
          <Input label="Mobile" placeholder="+91 XXXXX XXXXX" />
          <Input label="Country" placeholder="India" />

          <GlassDate label="Check-in" />
          <GlassDate label="Check-out" />

          <div className="sm:col-span-2 space-y-3 pt-2">
            <GuestCounter />

            <button className="w-full rounded-xl bg-[#22441A] text-white py-3 text-sm font-semibold hover:opacity-90 transition">
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* ---------------- INPUT ---------------- */

function Input({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-[11px] text-gray-500">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full mt-1 px-3 py-2 rounded-md border border-gray-200 text-sm focus:outline-none focus:border-[#22441A]"
      />
    </div>
  );
}

/* ---------------- GLASS DATE ---------------- */

function GlassDate({ label }: { label: string }) {
  const [value, setValue] = useState("");
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div>
      <label className="text-[11px] text-gray-500">{label}</label>

      <div
        onClick={() => ref.current?.showPicker()}
        className="
          mt-1 cursor-pointer
          rounded-xl px
          bg-linear-to-br from-white/60 to-white/10
          shadow-sm
        "
      >
        <div
          className="
            flex items-center gap-3
            px-4 py-3
            rounded-xl
            bg-white/40 backdrop-blur-xl
            border border-white/30
          "
        >
          <CalendarDays className="w-5 h-5 text-gray-600" />

          <div className="flex flex-col">
            <span className="text-[10px] text-gray-500">{label}</span>
            <span className="text-sm font-medium text-gray-800">
              {value || "Select date"}
            </span>
          </div>
        </div>
      </div>

      {/* Hidden Native Picker */}
      <input
        ref={ref}
        type="date"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="absolute opacity-0 pointer-events-none"
      />
    </div>
  );
}

/* ---------------- GUEST COUNTER ---------------- */

function GuestCounter() {
  const [count, setCount] = useState(2);

  return (
    <div>
      <label className="text-[11px] text-gray-500">Guests</label>

      <div
        className="
          mt-1 rounded-xl p-0.5
          bg-linear-to-br from-white/60 to-white/10
          shadow-sm
        "
      >
        <div
          className="
            flex items-center justify-between
            px-4 py-3
            rounded-xl
            bg-white/40 backdrop-blur-xl
            border border-white/30
          "
        >
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 text-gray-600" />
            <span className="text-sm font-medium">
              {count} {count === 1 ? "Guest" : "Guests"}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setCount(Math.max(1, count - 1))}
              className="w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center"
            >
              <Minus size={14} />
            </button>

            <button
              type="button"
              onClick={() => setCount(count + 1)}
              className="w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center"
            >
              <Plus size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
