import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

const values = [
  {
    number: "01",
    title: "Quality First",
    body: "Every ingredient is selected with intention. We do not cut corners on what goes into your food.",
  },
  {
    number: "02",
    title: "Speed as a Standard",
    body: "Fast food should mean fast without compromise. We have built our kitchen around that principle.",
  },
  {
    number: "03",
    title: "Community Rooted",
    body: "We are an Ibadan brand, built for Ibadan people. The city shapes everything we do.",
  },
  {
    number: "04",
    title: "Consistency Always",
    body: "The tenth visit should feel as good as the first. We hold ourselves to that standard every day.",
  },
];

const stats = [
  { value: "123+", label: "Verified Reviews" },
  { value: "4.4", label: "Google Rating" },
  { value: "₦1–10k", label: "Price Range" },
  { value: "10am", label: "Open Daily" },
];

export default function About() {
  return (
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
              Our Story
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-5xl md:text-7xl font-bold text-brand-cream leading-none"
            >
              Built in
              <br />
              <span className="text-brand-red">Ibadan.</span>
              <br />
              Built to Last.
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-brand-cream/50 leading-relaxed max-w-sm"
          >
            item 7 go started with a single question, why should fast food mean
            low quality? We set out to answer that question on Iwo Road, and we
            have been answering it every day since.
          </motion.p>
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <div className="bg-brand-red px-6 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="text-center"
            >
              <p className="font-heading text-4xl md:text-5xl font-bold text-white">
                {s.value}
              </p>
              <p className="text-[11px] uppercase tracking-widest text-white/50 mt-2">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── STORY SECTION ── */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[3/4] overflow-hidden rounded-lg bg-brand-dark/5">
            <img
              src="/images/about-main.jpg"
              alt="item 7 go restaurant interior"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-brand-red px-8 py-6 rounded-lg hidden md:block">
            <p className="font-heading text-3xl font-bold text-white">Since</p>
            <p className="font-heading text-5xl font-bold text-white leading-none">
              2019
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
        >
          <p className="text-[11px] uppercase tracking-widest text-brand-red mb-4">
            Where It Started
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark leading-tight mb-6">
            A Fast Food Experience Worth Talking About
          </h2>
          <div className="flex flex-col gap-5 text-sm text-brand-muted leading-relaxed">
            <p>
              item 7 go was born out of a simple frustration, great Nigerian
              street food was everywhere, but a consistent, clean, fast casual
              experience was hard to find. We changed that on Iwo Road.
            </p>
            <p>
              From our first day of service, the queue told us we were onto
              something. Customers kept returning, not just for the shawarma or
              the jollof rice, but for the experience of being served well at a
              price that made sense.
            </p>
            <p>
              Today, item 7 go is one of Ibadan's most recognised fast casual
              brands. We have expanded our menu, refined our service, and stayed
              true to the one thing that started it all, making food that people
              genuinely enjoy.
            </p>
          </div>
          <Link
            to="/menu"
            className="mt-10 inline-flex items-center justify-center bg-brand-red text-white text-sm font-medium uppercase tracking-widest px-8 py-4 rounded-lg hover:bg-red-700 transition-colors duration-300"
          >
            Explore the Menu
          </Link>
        </motion.div>
      </section>

      {/* ── VALUES ── */}
      <section className="bg-brand-dark py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-[11px] uppercase tracking-widest text-brand-red mb-3">
              What Drives Us
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-cream leading-tight max-w-xl">
              The Principles Behind Every Plate
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {values.map((v, i) => (
              <motion.div
                key={v.number}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="bg-brand-dark p-8 hover:bg-brand-gray transition-colors duration-300 group"
              >
                <p className="font-heading text-5xl font-bold text-white/5 group-hover:text-brand-red/20 transition-colors duration-300 mb-6">
                  {v.number}
                </p>
                <h3 className="font-heading text-lg font-bold text-brand-cream mb-3">
                  {v.title}
                </h3>
                <p className="text-sm text-brand-cream/40 leading-relaxed">
                  {v.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISUAL BREAK ── */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/about-kitchen.jpg"
          alt="item 7 go kitchen in action"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-dark/60 flex flex-col items-center justify-center px-6 text-center">
          <p className="text-[11px] uppercase tracking-widest text-brand-red mb-4">
            Our Location
          </p>
          <p className="font-heading text-3xl md:text-5xl text-white font-bold max-w-2xl leading-tight">
            Find us opposite Iwo Road roundabout, Ibadan.
          </p>
          <a
            href="tel:+2348155745321"
            className="mt-8 inline-flex items-center justify-center border border-white/30 text-white text-sm font-medium uppercase tracking-widest px-8 py-4 rounded-lg hover:border-white hover:bg-white/10 transition-all duration-300"
          >
            Call 0815 574 5321
          </a>
        </div>
      </div>

      {/* ── CTA ── */}
      <section className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between gap-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-[11px] uppercase tracking-widest text-brand-red mb-3">
            Come Experience It
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-dark leading-tight max-w-lg">
            The food speaks for itself. Come find out.
          </h2>
        </motion.div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="/reservations"
            className="inline-flex items-center justify-center bg-brand-red text-white text-sm font-medium uppercase tracking-widest px-8 py-4 rounded-lg hover:bg-red-700 transition-colors duration-300"
          >
            Book a Table
          </Link>
          <Link
            to="/menu"
            className="inline-flex items-center justify-center border border-brand-dark/20 text-brand-dark text-sm font-medium uppercase tracking-widest px-8 py-4 rounded-lg hover:border-brand-red hover:text-brand-red transition-all duration-300"
          >
            View Menu
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
