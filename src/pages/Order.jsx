import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SEO from "../components/SEO";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

const hours = [
  { day: "Monday", time: "10:00am – 10:00pm" },
  { day: "Tuesday", time: "10:00am – 10:00pm" },
  { day: "Wednesday", time: "10:00am – 10:00pm" },
  { day: "Thursday", time: "10:00am – 10:00pm" },
  { day: "Friday", time: "10:00am – 10:00pm" },
  { day: "Saturday", time: "10:00am – 10:00pm" },
  { day: "Sunday", time: "10:00am – 9:00pm" },
];

const faqs = [
  {
    question: "Do you offer delivery?",
    answer:
      "Yes. We deliver through Glovo. Simply search for Item 7 Go on the Glovo app and place your order directly.",
  },
  {
    question: "Can I place a bulk or group order?",
    answer:
      "Absolutely. For large orders, call us directly on 0815 574 5321 so we can prepare your order properly and on time.",
  },
  {
    question: "Do you cater for events?",
    answer:
      "Yes. Item 7 Go offers catering and event management services. Use the Reservations page or call us to discuss your event requirements.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash and bank transfers at the counter. Online orders via Glovo follow the payment options available on that platform.",
  },
];

export default function Order() {
  const [openFaq, setOpenFaq] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  return (
    <>
      <SEO
        title="Order & Contact"
        description="Order Item 7 Go on Glovo, call us directly, or walk into our Iwo Road location. Open seven days a week from 10am."
        canonical="/order"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "FoodEstablishment",
          name: "Item 7 Go",
          telephone: "+2348155745321",
          address: {
            "@type": "PostalAddress",
            streetAddress: "CW3R+FQ3, opposite Item 7, Iwo Road",
            addressLocality: "Ibadan",
            addressRegion: "Oyo State",
            postalCode: "200258",
            addressCountry: "NG",
          },
          hasMap: "https://maps.google.com/?q=Item+7+Go+Iwo+Road+Ibadan",
          servesCuisine: ["Nigerian", "Fast Food"],
          priceRange: "₦1,000 – ₦10,000",
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
                Get in Touch
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-heading text-5xl md:text-7xl font-bold text-brand-cream leading-none"
              >
                Order.
                <br />
                <span className="text-brand-red">Contact.</span>
                <br />
                Visit.
              </motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base text-brand-cream/50 leading-relaxed max-w-sm"
            >
              Order online through Glovo, call us directly, or walk in. We are
              open seven days a week and always ready to serve.
            </motion.p>
          </div>
        </div>

        {/* ── ORDER OPTIONS ── */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-[11px] uppercase tracking-widest text-brand-red mb-3">
              How to Order
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-dark leading-tight">
              Three Ways to Get Your Food
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Glovo */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className="bg-brand-dark rounded-lg p-8 flex flex-col justify-between min-h-[280px] group hover:bg-brand-gray transition-colors duration-300"
            >
              <div>
                <p className="text-[11px] uppercase tracking-widest text-brand-red mb-6">
                  Delivery
                </p>
                <h3 className="font-heading text-2xl font-bold text-brand-cream mb-4">
                  Order on Glovo
                </h3>
                <p className="text-sm text-brand-cream/40 leading-relaxed">
                  Search for Item 7 Go on the Glovo app and get your order
                  delivered straight to your door.
                </p>
              </div>
              <a
                href="https://glovoapp.com"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center justify-center bg-brand-red text-white text-xs uppercase tracking-widest font-medium py-3 px-6 rounded-lg hover:bg-red-700 transition-colors duration-300"
              >
                Open Glovo
              </a>
            </motion.div>

            {/* Call */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="bg-brand-red rounded-lg p-8 flex flex-col justify-between min-h-[280px]"
            >
              <div>
                <p className="text-[11px] uppercase tracking-widest text-white/50 mb-6">
                  Phone Order
                </p>
                <h3 className="font-heading text-2xl font-bold text-white mb-4">
                  Call Us Directly
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  For bulk orders, special requests, or quick takeaway
                  coordination — just call.
                </p>
              </div>
              <a
                href="tel:+2348155745321"
                className="mt-8 inline-flex items-center justify-center bg-white text-brand-red text-xs uppercase tracking-widest font-medium py-3 px-6 rounded-lg hover:bg-brand-cream transition-colors duration-300"
              >
                0815 574 5321
              </a>
            </motion.div>

            {/* Walk In */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              className="bg-brand-cream border border-brand-dark/10 rounded-lg p-8 flex flex-col justify-between min-h-[280px] hover:border-brand-red/30 transition-colors duration-300"
            >
              <div>
                <p className="text-[11px] uppercase tracking-widest text-brand-red mb-6">
                  Walk In
                </p>
                <h3 className="font-heading text-2xl font-bold text-brand-dark mb-4">
                  Come In Person
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed">
                  CW3R+FQ3, opposite Item 7, Iwo Road, Ibadan 200258, Oyo State,
                  Nigeria.
                </p>
              </div>
              <a
                href="https://maps.app.goo.gl/PzV3kSB1w7STsQo87"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center justify-center border border-brand-dark/20 text-brand-dark text-xs uppercase tracking-widest font-medium py-3 px-6 rounded-lg hover:border-brand-red hover:text-brand-red transition-all duration-300"
              >
                Get Directions
              </a>
            </motion.div>
          </div>
        </section>

        {/* ── OPENING HOURS ── */}
        <section className="bg-brand-dark py-24 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-[11px] uppercase tracking-widest text-brand-red mb-4">
                When We Are Open
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-cream leading-tight mb-12">
                Opening Hours
              </h2>
              <div className="flex flex-col divide-y divide-white/5">
                {hours.map((h) => {
                  const isToday = h.day === today;
                  return (
                    <div
                      key={h.day}
                      className={`flex items-center justify-between py-4 ${
                        isToday ? "text-brand-cream" : "text-brand-cream/40"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium">{h.day}</span>
                        {isToday && (
                          <span className="text-[10px] uppercase tracking-widest bg-brand-red text-white px-2 py-0.5 rounded">
                            Today
                          </span>
                        )}
                      </div>
                      <span className="text-sm">{h.time}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Map Embed */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              <p className="text-[11px] uppercase tracking-widest text-brand-red mb-4">
                Our Location
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-cream leading-tight mb-12">
                Find Us
              </h2>
              <div className="rounded-lg overflow-hidden aspect-square w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.559978513184!2d3.9406276462715923!3d7.403098220030807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103993007d526c01%3A0xd1932ba0d8521f71!2sItem%207%20go!5e0!3m2!1sen!2sng!4v1778371007480!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── CONTACT FORM ── */}
        <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-[11px] uppercase tracking-widest text-brand-red mb-4">
              Send a Message
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-dark leading-tight mb-4">
              We Would Love to Hear From You
            </h2>
            <p className="text-sm text-brand-muted leading-relaxed max-w-sm">
              Have a question, feedback, or a catering enquiry? Fill in the form
              and we will get back to you as soon as possible.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            {submitted ? (
              <div className="flex flex-col items-start justify-center h-full gap-4 py-12">
                <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-brand-red" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-brand-dark">
                  Message Received
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed">
                  Thank you for reaching out. We will be in touch with you
                  shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", phone: "", message: "" });
                  }}
                  className="text-xs uppercase tracking-widest text-brand-red hover:underline mt-2"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] uppercase tracking-widest text-brand-dark/50">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="bg-white border border-brand-dark/10 text-brand-dark text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-brand-red transition-colors duration-300 placeholder:text-brand-dark/20"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] uppercase tracking-widest text-brand-dark/50">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="08XX XXX XXXX"
                      className="bg-white border border-brand-dark/10 text-brand-dark text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-brand-red transition-colors duration-300 placeholder:text-brand-dark/20"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] uppercase tracking-widest text-brand-dark/50">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="bg-white border border-brand-dark/10 text-brand-dark text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-brand-red transition-colors duration-300 placeholder:text-brand-dark/20"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] uppercase tracking-widest text-brand-dark/50">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="What would you like to say?"
                    className="bg-white border border-brand-dark/10 text-brand-dark text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-brand-red transition-colors duration-300 placeholder:text-brand-dark/20 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center bg-brand-red text-white text-sm font-medium uppercase tracking-widest px-8 py-4 rounded-lg hover:bg-red-700 transition-colors duration-300 mt-2"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-brand-dark py-24 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-[11px] uppercase tracking-widest text-brand-red mb-4">
                Common Questions
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-cream leading-tight">
                Frequently Asked
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="flex flex-col divide-y divide-white/5"
            >
              {faqs.map((faq, i) => (
                <div key={i} className="py-6">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-start justify-between gap-6 text-left group"
                  >
                    <span className="text-sm font-medium text-brand-cream group-hover:text-brand-red transition-colors duration-300">
                      {faq.question}
                    </span>
                    <span
                      className={`shrink-0 text-brand-red text-lg leading-none transition-transform duration-300 ${openFaq === i ? "rotate-45" : ""}`}
                    >
                      +
                    </span>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-sm text-brand-cream/40 leading-relaxed mt-4 overflow-hidden"
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
