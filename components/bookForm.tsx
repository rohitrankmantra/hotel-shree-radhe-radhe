"use client";

export default function BookForm() {
  return (
    <div className="w-full flex justify-center px-3 sm:px-4 py-3 sm:py-4">
      
      {/* Card */}
      <div
        className="
          w-full max-w-lg bg-white rounded-xl shadow-md border border-black/5
          px-4 py-3
          sm:px-5 sm:py-4
        "
      >
        
        {/* Heading */}
        <div className="text-center mb-3 sm:mb-4">
          <h2 className="text-sm sm:text-base font-semibold text-gray-900">
            Room Booking
          </h2>
          <p className="text-[10px] sm:text-[11px] text-gray-500">
            Reserve your stay
          </p>
        </div>

        {/* Form */}
        <form
          className="
            grid grid-cols-1 sm:grid-cols-2
            gap-x-4
            gap-y-2.5 sm:gap-y-3
          "
        >

          <Input label="Full Name" placeholder="Your name" />
          <Input label="Email Address" type="email" placeholder="you@email.com" />

          <Input label="Mobile Number" placeholder="+91 XXXXX XXXXX" />
          <Input label="Country / Nationality" placeholder="India" />

          <Select
            label="ID Type"
            options={["Aadhaar Card", "Passport", "Driving License"]}
          />

          <Input label="ID Number" placeholder="ID number" />

          {/* Dates */}
          <DateInput label="Check-in" />
          <DateInput label="Check-out" />

          <Select
            label="Guests"
            options={["1 Guest", "2 Guests", "3 Guests", "4+ Guests"]}
          />

          {/* Button */}
          <div className="sm:col-span-2 pt-1.5 sm:pt-2">
            <button
              type="submit"
              className="
                w-full rounded-lg bg-[#22441A] text-white font-medium
                py-2 sm:py-2.5
                text-xs sm:text-sm
                hover:opacity-90 transition
              "
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* ---------- Components ---------- */

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
      <label className="block text-[10px] sm:text-[11px] text-gray-500 mb-0.5 sm:mb-1">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="
          w-full rounded-md border border-gray-200
          px-2.5 sm:px-3
          py-1.5 sm:py-2
          text-xs sm:text-sm
          focus:outline-none focus:border-[#22441A]
        "
      />
    </div>
  );
}

function Select({
  label,
  options,
}: {
  label: string;
  options: string[];
}) {
  return (
    <div>
      <label className="block text-[10px] sm:text-[11px] text-gray-500 mb-0.5 sm:mb-1">
        {label}
      </label>
      <select
        className="
          w-full rounded-md border border-gray-200
          px-2.5 sm:px-3
          py-1.5 sm:py-2
          text-xs sm:text-sm
          focus:outline-none focus:border-[#22441A]
        "
      >
        <option value="">Select</option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}

function DateInput({ label }: { label: string }) {
  return (
    <div>
      <label className="block text-[10px] sm:text-[11px] text-gray-500 mb-0.5 sm:mb-1">
        {label}
      </label>
      <input
        type="date"
        className="
          w-full rounded-md border border-gray-200
          px-2.5 sm:px-3
          py-1.5 sm:py-2
          text-xs sm:text-sm
          bg-white/70 backdrop-blur
          focus:outline-none focus:border-[#22441A]
        "
      />
    </div>
  );
}
