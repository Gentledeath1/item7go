import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

const dishes = [
  {
    id: 1,
    name: "Signature Shawarma",
    description:
      "Slow-roasted meat, fresh vegetables, garlic sauce — wrapped tight and served hot.",
    tag: "Best Seller",
    price: "₦2,500",
    image: "/images/shawarma.jpg",
  },
  {
    id: 2,
    name: "Jollof Rice & Protein",
    description:
      "Party-style jollof rice cooked over open flame, served with your choice of protein.",
    tag: "Fan Favourite",
    price: "₦2,000",
    image: "/images/jollof.jpg",
  },
  {
    id: 3,
    name: "Smash Burger",
    description:
      "Double smashed patty, caramelised onions, special sauce on a brioche bun.",
    tag: "New",
    price: "₦3,000",
    image: "/images/burger.jpg",
  },
];

const reasons = [
  {
    number: "01",
    title: "Speed Without Compromise",
    body: "High volume. Zero shortcuts. Every order is prepared fresh regardless of the queue.",
  },
  {
    number: "02",
    title: "Honest Pricing",
    body: "Premium quality at prices that make sense. No hidden costs, no inflated menus.",
  },
  {
    number: "03",
    title: "Consistent Every Time",
    body: "Whether it is your first visit or your fiftieth, the standard does not change.",
  },
  {
    number: "04",
    title: "Right in the Heart of Ibadan",
    body: "Located at Iwo Road — easy to find, easy to get to, impossible to forget.",
  },
];

const testimonials = [
  {
    name: "Obiorah Chidubem",
    role: "Verified Customer",
    quote:
      "Item 7 Go is the best thing that has happened to me since moving to Ibadan. The food is tasty, affordable, and consistent every single time.",
  },
  {
    name: "Ahmed Ademola",
    role: "Local Guide",
    quote:
      "Despite the volume of customers, the attendants are incredibly fast. There is always a queue but you are served before you know it.",
  },
  {
    name: "Deborah Ajisebiyawo",
    role: "Verified Customer",
    quote:
      "Easy to locate, perfect for a quick satisfying meal. The service is fast, the food is delicious, and the staff are always courteous.",
  },
];

const marqueeItems = [
  "Shawarma",
  "Jollof Rice",
  "Smash Burgers",
  "Crispy Fries",
  "Grilled Chicken",
  "Cold Drinks",
  "Fast Service",
  "Real Flavour",
];

export default function Home() {
  return (
    <div className="bg-brand-cream">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bg.jpg"
            alt="Item 7 Go restaurant"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24 pt-40">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="text-[11px] uppercase tracking-widest text-brand-red mb-4"
          >
            Iwo Road, Ibadan
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-heading text-5xl md:text-4xl lg:text-8xl text-white font-bold leading-none max-w-3xl mb-6"
          >
            Food That
            <br />
            <span className="text-brand-red">Moves</span> With You.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-base md:text-lg text-white/60 max-w-md mb-10 leading-relaxed"
          >
            Fast casual dining done right. Shawarma, jollof rice, burgers and
            more — made fresh, served fast, no compromises.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/menu"
              className="inline-flex rounded-lg items-center justify-center bg-brand-red text-white text-sm font-medium uppercase tracking-widest px-8 py-4 hover:bg-red-700 transition-colors duration-300"
            >
              View the Menu
            </Link>
            <a
              href="https://glovoapp.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-lg items-center justify-center border border-white/30 text-white text-sm font-medium uppercase tracking-widest px-8 py-4 hover:border-white hover:bg-white/5 transition-all duration-300"
            >
              Order on Glovo
            </a>
          </motion.div>
        </div>

        {/* Rating Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
          className="hidden md:block absolute bottom-24 right-12 z-10 bg-white/10 backdrop-blur-sm border border-white/10 px-6 py-4 text-center rounded-lg"
        >
          <p className="font-heading text-4xl text-white font-bold">4.4</p>
          <p className="text-[10px] uppercase tracking-widest text-white/50 mt-1">
            123 Reviews
          </p>
          <p className="text-[10px] uppercase tracking-widest text-brand-gold mt-0.5">
            Google Rating
          </p>
        </motion.div>
      </section>

      {/* ── MARQUEE STRIP ── */}
      <div className="bg-brand-red py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="text-white text-xs uppercase tracking-widest font-medium mx-8"
            >
              {item}
              <span className="mx-8 text-white/30">—</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── FEATURED DISHES ── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <p className="text-[11px] uppercase tracking-widest text-brand-red mb-3">
              What We Do Best
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-dark leading-tight">
              The Dishes People
              <br />
              Keep Coming Back For
            </h2>
          </div>
          <Link
            to="/menu"
            className="shrink-0 text-sm uppercase tracking-widest text-brand-dark/50 hover:text-brand-red transition-colors duration-300 border-b border-brand-dark/20 hover:border-brand-red pb-1"
          >
            Full Menu
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dishes.map((dish, i) => (
            <motion.div
              key={dish.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="group"
            >
              {/* Image */}
              <div className="relative overflow-hidden bg-brand-dark/5 aspect-[4/3] mb-6">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="rounded-md absolute top-4 left-4 bg-brand-red text-white text-[10px] uppercase tracking-widest px-3 py-1">
                  {dish.tag}
                </span>
              </div>

              {/* Info */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-heading text-xl font-bold text-brand-dark mb-2">
                    {dish.name}
                  </h3>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    {dish.description}
                  </p>
                </div>
                <span className="shrink-0 font-heading text-lg font-bold text-brand-red">
                  {dish.price}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── WHY ITEM 7 GO ── */}
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
              Why We Are Different
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-cream leading-tight max-w-xl">
              Built on a Simple Promise
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {reasons.map((r, i) => (
              <motion.div
                key={r.number}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="bg-brand-dark p-8 hover:bg-brand-gray transition-colors duration-300 group"
              >
                <p className="font-heading text-5xl font-bold text-white/5 group-hover:text-brand-red/20 transition-colors duration-300 mb-6">
                  {r.number}
                </p>
                <h3 className="font-heading text-lg font-bold text-brand-cream mb-3">
                  {r.title}
                </h3>
                <p className="text-sm text-brand-cream/40 leading-relaxed">
                  {r.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISUAL BREAK ── */}
      <div className="relative h-[50vh] overflow-hidden">
        <img
          src="/images/kitchen.jpg"
          alt="Item 7 Go kitchen"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-dark/50 flex items-center justify-center">
          <p className="font-heading text-3xl md:text-5xl text-white font-bold text-center px-6 max-w-2xl leading-tight">
            Every order made fresh. No exceptions.
          </p>
        </div>
      </div>

      {/* ── TESTIMONIALS ── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-[11px] uppercase tracking-widest text-brand-red mb-3">
            What People Say
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-dark leading-tight">
            Straight From
            <br />
            Our Customers
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="border rounded-lg border-brand-dark/10 p-8 hover:border-brand-red/30 transition-colors duration-300"
            >
              <p className="font-heading text-4xl text-brand-red mb-6 leading-none">
                "
              </p>
              <p className="text-sm text-brand-dark/70 leading-relaxed mb-8">
                {t.quote}
              </p>
              <div>
                <p className="font-heading font-bold text-brand-dark">
                  {t.name}
                </p>
                <p className="text-xs uppercase tracking-widest text-brand-muted mt-1">
                  {t.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
