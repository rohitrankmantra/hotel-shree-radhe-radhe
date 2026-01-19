"use client"

export default function ContactInfo() {
  return (
    <div className="space-y-5">
      <div>
        <h3 className="font-serif text-2xl mt-10 justify-center flex font-bold text-foreground mb-2">Contact Information</h3>
      </div>

      {/* Address */}
      <div className="bg-card border border-border rounded-xl p-6 hover:border-accent transition-colors">
        <h4 className="font-serif text-lg font-semibold text-foreground mb-3">Address</h4>
        <p className="text-foreground/70 leading-relaxed">
          Yamunotri Road, Barkot <br />
          Uttarkashi District <br />
          Uttarakhand 249155 <br />
          India
        </p>
      </div>

      {/* Phone */}
      <div className="bg-card border border-border rounded-xl p-6 hover:border-accent transition-colors">
        <h4 className="font-serif text-lg font-semibold text-foreground mb-3">Phone</h4>
        <p className="text-foreground/70 mb-3">
          <a href="tel:+919876543210" className="hover:text-accent transition-colors">
            +91 9876 543 210
          </a>
        </p>
        <p className="text-sm text-foreground/60">Available 24/7</p>
      </div>

      {/* WhatsApp */}
      <div className="bg-card border border-border rounded-xl p-6 hover:border-accent transition-colors">
        <h4 className="font-serif text-lg font-semibold text-foreground mb-3">WhatsApp</h4>
        <p className="text-foreground/70 mb-3">
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            Chat with us
          </a>
        </p>
        <p className="text-sm text-foreground/60">Quick inquiries and bookings</p>
      </div>

      {/* Email */}
      <div className="bg-card border border-border rounded-xl p-6 hover:border-accent transition-colors">
        <h4 className="font-serif text-lg font-semibold text-foreground mb-3">Email</h4>
        <p className="text-foreground/70">
          <a href="mailto:info@shreRadhe.com" className="hover:text-accent transition-colors">
            info@shreRadhe.com
          </a>
        </p>
      </div>

      {/* Business Hours */}
      <div className="bg-accent/10 border border-accent rounded-xl p-6">
        <h4 className="font-serif text-lg font-semibold text-foreground mb-4">Business Hours</h4>
        <div className="space-y-2 text-foreground/70 text-sm">
          <p>Monday - Sunday: Open 24 hours</p>
          <p>Booking: Available anytime</p>
          <p>Guest Support: 24/7</p>
        </div>
      </div>
    </div>
  )
}
