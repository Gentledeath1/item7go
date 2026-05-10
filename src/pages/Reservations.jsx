import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

const eventTypes = [
  "Birthday Celebration",
  "Corporate Lunch",
  "Private Dinner",
  "Event Catering",
  "Group Booking",
  "Other",
];

const packages = [
  {
    name: "Express",
    tag: "Small Groups",
    capacity: "Up to 10 guests",
    description:
      "Perfect for intimate group meals, small celebrations, or team lunches. Reserved seating with standard menu service.",
    features: [
      "Reserved seating area",
      "Standard menu access",
      "Dedicated server",
      "Flexible duration",
    ],
    cta: "Book Express",
  },
  {
    name: "Premium",
    tag: "Most Popular",
    capacity: "Up to 30 guests",
    description:
      "Our most popular package. Ideal for birthday parties, corporate events, and private gatherings with a tailored menu.",
    features: [
      "Private section of the restaurant",
      "Custom menu selection",
      "Event coordination support",
      "Decoration assistance",
      "Priority service",
    ],
    cta: "Book Premium",
    highlighted: true,
  },
  {
    name: "Full Catering",
    tag: "Large Events",
    capacity: "30+ guests",
    description:
      "We bring item 7 go to your event. Full off-site catering with our team, equipment, and signature menu.",
    features: [
      "Off-site catering available",
      "Full kitchen team deployment",
      "Custom event menu",
      "Setup and breakdown included",
      "Flexible locations",
    ],
    cta: "Enquire Now",
  },
];

export default function Reservations() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    eventType: "",
    package: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePackageSelect = (pkg) => {
    setSelectedPackage(pkg);
    setForm({ ...form, package: pkg.name });
    document
      .getElementById("booking-form")
      .scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SEO
        title="Reservations & Events"
        description="Book a table or enquire about event catering at Item 7 Go, Ibadan. We offer packages for birthdays, corporate lunches, private dinners and full off-site catering."
        canonical="/reservations"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "EventReservation",
          name: "Item 7 Go Reservations",
          description:
            "Reserve a table or book event catering at Item 7 Go, Iwo Road Ibadan.",
          url: "https://item7go-rho.vercel.app/reservations",
        }}
      />
      <div className="bg-brand-cream min-h-screen">
        {/* ── PAGE HEADER ── */}
        <div className="bg-brand-dark pt-40 pb-20 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[11px] uppercase tracking-widest text-brand-red mb-4"
              >
                Book a Table
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-heading text-5xl md:text-7xl font-bold text-brand-cream leading-none"
              >
                Reserve
                <br />
                <span className="text-brand-red">Your Spot.</span>
              </motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base text-brand-cream/50 leading-relaxed max-w-sm"
            >
              Whether it is an intimate dinner, a birthday celebration, or a
              full corporate catering request, we have a package that fits. Book
              your table or enquire about our event services below.
            </motion.p>
          </div>
        </div>

        {/* ── PACKAGES ── */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-[11px] uppercase tracking-widest text-brand-red mb-3">
              What Works for You
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-dark leading-tight">
              Choose Your Package
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className={`relative rounded-lg p-8 flex flex-col justify-between min-h-[480px] transition-all duration-300 ${
                  pkg.highlighted
                    ? "bg-brand-red text-white"
                    : "bg-white border border-brand-dark/5 hover:border-brand-red/20"
                }`}
              >
                {/* Tag */}
                <div>
                  <div className="flex items-start justify-between mb-8">
                    <div>
                      <p
                        className={`text-[11px] uppercase tracking-widest mb-2 ${
                          pkg.highlighted ? "text-white/50" : "text-brand-red"
                        }`}
                      >
                        {pkg.tag}
                      </p>
                      <h3
                        className={`font-heading text-3xl font-bold ${
                          pkg.highlighted ? "text-white" : "text-brand-dark"
                        }`}
                      >
                        {pkg.name}
                      </h3>
                    </div>
                    <span
                      className={`text-xs uppercase tracking-widest px-3 py-1.5 rounded-lg ${
                        pkg.highlighted
                          ? "bg-white/10 text-white"
                          : "bg-brand-dark/5 text-brand-dark/50"
                      }`}
                    >
                      {pkg.capacity}
                    </span>
                  </div>

                  <p
                    className={`text-sm leading-relaxed mb-8 ${
                      pkg.highlighted ? "text-white/70" : "text-brand-muted"
                    }`}
                  >
                    {pkg.description}
                  </p>

                  <ul className="flex flex-col gap-3 mb-8">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <span
                          className={`mt-0.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                            pkg.highlighted ? "bg-white" : "bg-brand-red"
                          }`}
                        />
                        <span
                          className={`text-sm ${
                            pkg.highlighted
                              ? "text-white/70"
                              : "text-brand-muted"
                          }`}
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handlePackageSelect(pkg)}
                  className={`inline-flex items-center justify-center text-xs uppercase tracking-widest font-medium py-3.5 px-6 rounded-lg transition-all duration-300 ${
                    pkg.highlighted
                      ? "bg-white text-brand-red hover:bg-brand-cream"
                      : "bg-brand-dark text-brand-cream hover:bg-brand-red"
                  }`}
                >
                  {pkg.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── BOOKING FORM ── */}
        <section id="booking-form" className="bg-brand-dark py-24 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-[11px] uppercase tracking-widest text-brand-red mb-4">
                Make a Booking
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-cream leading-tight mb-6">
                Fill in Your Details
              </h2>
              <p className="text-sm text-brand-cream/40 leading-relaxed max-w-sm mb-12">
                Complete the form and our team will confirm your reservation
                within 24 hours. For urgent bookings, call us directly on{" "}
                <a
                  href="tel:+2348155745321"
                  className="text-brand-red hover:underline"
                >
                  0815 574 5321
                </a>
                .
              </p>

              {/* Selected Package Indicator */}
              <AnimatePresence>
                {selectedPackage && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="bg-brand-red/10 border border-brand-red/20 rounded-lg px-6 py-4"
                  >
                    <p className="text-[11px] uppercase tracking-widest text-brand-red mb-1">
                      Selected Package
                    </p>
                    <p className="font-heading text-lg font-bold text-brand-cream">
                      {selectedPackage.name} — {selectedPackage.capacity}
                    </p>
                    <button
                      onClick={() => {
                        setSelectedPackage(null);
                        setForm({ ...form, package: "" });
                      }}
                      className="text-xs text-brand-cream/30 hover:text-brand-red transition-colors duration-300 mt-2 uppercase tracking-widest"
                    >
                      Change
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-start justify-center gap-6 py-12"
                  >
                    <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-brand-red" />
                    </div>
                    <h3 className="font-heading text-3xl font-bold text-brand-cream">
                      Reservation Received
                    </h3>
                    <p className="text-sm text-brand-cream/40 leading-relaxed max-w-sm">
                      We have received your booking request and will confirm it
                      within 24 hours via phone or email.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({
                          name: "",
                          email: "",
                          phone: "",
                          date: "",
                          time: "",
                          guests: "",
                          eventType: "",
                          package: "",
                          notes: "",
                        });
                        setSelectedPackage(null);
                      }}
                      className="text-xs uppercase tracking-widest text-brand-red hover:underline"
                    >
                      Make Another Booking
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-5"
                  >
                    {/* Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label className="text-[11px] uppercase tracking-widest text-brand-cream/30">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Your name"
                          className="bg-white/5 border border-white/10 text-brand-cream text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-brand-red transition-colors duration-300 placeholder:text-brand-cream/20"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[11px] uppercase tracking-widest text-brand-cream/30">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          required
                          placeholder="08XX XXX XXXX"
                          className="bg-white/5 border border-white/10 text-brand-cream text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-brand-red transition-colors duration-300 placeholder:text-brand-cream/20"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[11px] uppercase tracking-widest text-brand-cream/30">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                        className="bg-white/5 border border-white/10 text-brand-cream text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-brand-red transition-colors duration-300 placeholder:text-brand-cream/20"
                      />
                    </div>

                    {/* Date & Time */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label className="text-[11px] uppercase tracking-widest text-brand-cream/30">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={form.date}
                          onChange={handleChange}
                          required
                          className="bg-white/5 border border-white/10 text-brand-cream text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-brand-red transition-colors duration-300"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[11px] uppercase tracking-widest text-brand-cream/30">
                          Preferred Time
                        </label>
                        <input
                          type="time"
                          name="time"
                          value={form.time}
                          onChange={handleChange}
                          required
                          className="bg-white/5 border border-white/10 text-brand-cream text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-brand-red transition-colors duration-300"
                        />
                      </div>
                    </div>

                    {/* Guests & Event Type */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label className="text-[11px] uppercase tracking-widest text-brand-cream/30">
                          Number of Guests
                        </label>
                        <input
                          type="number"
                          name="guests"
                          value={form.guests}
                          onChange={handleChange}
                          required
                          min="1"
                          placeholder="e.g. 15"
                          className="bg-white/5 border border-white/10 text-brand-cream text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-brand-red transition-colors duration-300 placeholder:text-brand-cream/20"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[11px] uppercase tracking-widest text-brand-cream/30">
                          Event Type
                        </label>
                        <select
                          name="eventType"
                          value={form.eventType}
                          onChange={handleChange}
                          required
                          className="bg-white/5 border border-white/10 text-brand-cream text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-brand-red transition-colors duration-300"
                        >
                          <option value="" disabled className="bg-brand-dark">
                            Select type
                          </option>
                          {eventTypes.map((type) => (
                            <option
                              key={type}
                              value={type}
                              className="bg-brand-dark"
                            >
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Notes */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[11px] uppercase tracking-widest text-brand-cream/30">
                        Additional Notes
                      </label>
                      <textarea
                        name="notes"
                        value={form.notes}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Dietary requirements, special requests, decoration preferences..."
                        className="bg-white/5 border border-white/10 text-brand-cream text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-brand-red transition-colors duration-300 placeholder:text-brand-cream/20 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center bg-brand-red text-white text-sm font-medium uppercase tracking-widest px-8 py-4 rounded-lg hover:bg-red-700 transition-colors duration-300 mt-2"
                    >
                      Submit Reservation
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-[11px] uppercase tracking-widest text-brand-red mb-3">
              Not Ready to Book?
            </p>
            <h2 className="font-heading text-4xl font-bold text-brand-dark leading-tight max-w-md">
              Browse the menu first and come back when you are ready.
            </h2>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="flex flex-col sm:flex-row gap-4 shrink-0"
          >
            <Link
              to="/menu"
              className="inline-flex items-center justify-center bg-brand-red text-white text-sm font-medium uppercase tracking-widest px-8 py-4 rounded-lg hover:bg-red-700 transition-colors duration-300"
            >
              View Menu
            </Link>
            <a
              href="tel:+2348155745321"
              className="inline-flex items-center justify-center border border-brand-dark/20 text-brand-dark text-sm font-medium uppercase tracking-widest px-8 py-4 rounded-lg hover:border-brand-red hover:text-brand-red transition-all duration-300"
            >
              Call Us Instead
            </a>
          </motion.div>
        </section>
      </div>
    </>
  );
}
