"use client";

import { useState, useRef } from "react";
import { CalendarDays, Plus, Minus, Users, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function BookForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    country: "",
    checkIn: "",
    checkOut: "",
    guests: 2,
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (field: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const serviceId = "service_kw65ulh"; // attach manually
    const templateId = "template_s4n10ds"; // attach manually
    const publicKey = "pOzHfu0EgFqX45rSm"; // attach manually

    const templateParams = { ...formData };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        mobile: "",
        country: "",
        checkIn: "",
        checkOut: "",
        guests: 2,
      });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err: any) {
      console.error(err);
      setError(err?.text || err?.message || "Failed to send booking. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex justify-center px-2 py-4">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-md border border-black/5 px-4 py-4 sm:px-6 sm:py-6">
        <div className="text-center mb-3 sm:mb-4">
          <h2 className="text-sm font-semibold">Room Booking</h2>
          <p className="text-[11px] text-gray-500">Reserve your stay</p>
        </div>

        {submitted ? (
          <p className="text-green-600 text-center font-semibold">
            Booking request sent successfully!
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-2 gap-2 sm:gap-4"
          >
            {error && (
              <p className="text-red-500 col-span-2 text-sm">{error}</p>
            )}

            {/* Full Name + Email */}
            <Input
              label="Full Name"
              placeholder="Your name"
              value={formData.name}
              onChange={(val) => handleChange("name", val)}
            />
            <Input
              label="Email"
              type="email"
              placeholder="you@email.com"
              value={formData.email}
              onChange={(val) => handleChange("email", val)}
            />

            {/* Mobile + Country */}
            <Input
              label="Mobile"
              placeholder="+91 XXXXX XXXXX"
              value={formData.mobile}
              onChange={(val) => handleChange("mobile", val)}
            />
            <Input
              label="Country"
              placeholder="India"
              value={formData.country}
              onChange={(val) => handleChange("country", val)}
            />

            {/* Check-in + Check-out */}
            <GlassDate
              label="Check-in"
              value={formData.checkIn}
              onChange={(val) => handleChange("checkIn", val)}
            />
            <GlassDate
              label="Check-out"
              value={formData.checkOut}
              onChange={(val) => handleChange("checkOut", val)}
            />

            {/* Guest Counter + Submit */}
            <div className="flex flex-col sm:flex-row sm:gap-2 col-span-2 items-stretch">
              <GuestCounter
                guests={formData.guests}
                onChange={(val) => handleChange("guests", val)}
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full sm:flex-1 rounded-xl bg-linear-to-r from-[#22441A] to-[#2d5a24] text-white py-3 text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex justify-center items-center gap-2 mt-2 sm:mt-0 disabled:opacity-60 disabled:cursor-not-allowed disabled:shadow-none"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Booking...</span>
                  </>
                ) : (
                  <>
                    <span className="tracking-wide">Confirm Booking</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

/* ---------------- INPUT ---------------- */
function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}: {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (val: string) => void;
}) {
  return (
    <div className="flex flex-col">
      <label className="text-[11px] text-gray-500">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full mt-1 px-2 py-2 rounded-md border border-gray-200 text-sm focus:outline-none focus:border-[#22441A]"
      />
    </div>
  );
}

/* ---------------- GLASS DATE ---------------- */
function GlassDate({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (val: string) => void;
}) {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-col">
      <label className="text-[11px] text-gray-500">{label}</label>

      <div
        onClick={() => ref.current?.showPicker()}
        className="mt-1 cursor-pointer"
      >
        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/40 backdrop-blur-xl border border-white/30">
          <CalendarDays className="w-4 h-4 text-gray-600" />
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-500">{label}</span>
            <span className="text-sm font-medium text-gray-800">
              {value || "Select date"}
            </span>
          </div>
        </div>
      </div>

      <input
        ref={ref}
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="absolute opacity-0 pointer-events-none"
      />
    </div>
  );
}

/* ---------------- GUEST COUNTER ---------------- */
function GuestCounter({
  guests,
  onChange,
}: {
  guests: number;
  onChange: (val: number) => void;
}) {
  return (
    <div className="flex flex-col flex-1">
      <label className="text-[11px] text-gray-500">Guests</label>
      <div className="mt-1 flex items-center justify-between px-3 py-2 rounded-xl bg-white/40 backdrop-blur-xl border border-white/30">
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-gray-600" />
          <span className="text-sm font-medium">
            {guests} {guests === 1 ? "Guest" : "Guests"}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onChange(Math.max(1, guests - 1))}
            className="w-7 h-7 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center"
          >
            <Minus size={12} />
          </button>
          <button
            type="button"
            onClick={() => onChange(guests + 1)}
            className="w-7 h-7 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center"
          >
            <Plus size={12} />
          </button>
        </div>
      </div>
    </div>
  );
}
