import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { categories, menuItems } from "../data/menuData";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
  exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
};

export default function Menu() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === active);

  return (
    <div className="bg-brand-cream min-h-screen">
      {/* ── PAGE HEADER ── */}
      <div className="bg-brand-dark pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[11px] uppercase tracking-widest text-brand-red mb-4"
          >
            What We Serve
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-5xl md:text-7xl font-bold text-brand-cream leading-none"
          >
            Our Menu
          </motion.h1>
        </div>
      </div>

      {/* ── CATEGORY FILTER ── */}
      <div className="sticky top-[60px] z-40 bg-brand-cream border-b border-brand-dark/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex gap-3 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`shrink-0 text-xs uppercase tracking-widest font-medium px-5 py-2.5 rounded-lg transition-all duration-300 ${
                active === cat
                  ? "bg-brand-red text-white"
                  : "bg-brand-dark/5 text-brand-dark/60 hover:bg-brand-dark/10 hover:text-brand-dark"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── MENU GRID ── */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={i}
                className="group bg-white border border-brand-dark/5 hover:border-brand-red/20 transition-all duration-300 overflow-hidden rounded-lg"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-brand-dark/5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {item.tag && (
                    <span className="absolute top-4 left-4 bg-brand-red text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded">
                      {item.tag}
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-heading text-lg font-bold text-brand-dark leading-tight">
                      {item.name}
                    </h3>
                    <span className="shrink-0 font-heading font-bold text-brand-red">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    {item.description}
                  </p>
                  <a
                    href="https://glovoapp.com"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center justify-center w-full bg-brand-dark text-brand-cream text-xs uppercase tracking-widest font-medium py-3 rounded-lg hover:bg-brand-red transition-colors duration-300"
                  >
                    Order This
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── BOTTOM NOTE ── */}
      <div className="border-t border-brand-dark/10 px-6 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-brand-muted text-center md:text-left">
            Prices may vary slightly. All items are subject to availability.
            Call us on{" "}
            <a
              href="tel:+2348155745321"
              className="text-brand-red hover:underline"
            >
              0815 574 5321
            </a>{" "}
            to confirm.
          </p>
          
        </div>
      </div>
    </div>
  );
}
