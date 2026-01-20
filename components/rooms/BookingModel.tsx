"use client";

import { X } from "lucide-react";
import BookForm from "./bookForm";

type Room = {
  name?: string;
  price?: string;
};

export default function BookingModal({
  open,
  onClose,
  room,
}: {
  open: boolean;
  onClose: () => void;
  room?: Room;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Content (NO BIG BOX) */}
      <div className="relative z-10 w-full flex flex-col items-center">

        {/* Header – floating */}
        <div className="w-full max-w-sm mb-3 flex items-center justify-between text-white">
          <div>
            <p className="text-xs uppercase tracking-widest text-white/70">
              Booking
            </p>
            <h3 className="text-lg font-semibold">
              {room?.name || "Reserve Room"}
            </h3>
            {room?.price && (
              <p className="text-xs text-white/70">
                {room.price} / night
              </p>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 transition"
          >
            <X size={18} />
          </button>
        </div>

        {/* Form ONLY */}
        <BookForm />
      </div>
    </div>
  );
}
