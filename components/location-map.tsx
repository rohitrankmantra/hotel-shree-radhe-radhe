"use client"

export default function LocationMap() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-12 text-center text-balance">
          Our Location on Yamunotri Road
        </h2>

        <div className="rounded-xl overflow-hidden h-96 md:h-screen max-h-96 md:max-h-none border border-border">
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3335.8883155905447!2d78.48567!3d30.3875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390b97f7d1a1a1a1%3A0x1a1a1a1a1a1a1a1a!2sYamunotri%20Road%2C%20Barkot%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1234567890"
          />
        </div>
      </div>
    </section>
  )
}
