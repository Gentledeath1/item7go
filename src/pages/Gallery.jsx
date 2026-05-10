import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const allPhotos = [
  {
    id: 1,
    src: "/images/shawarma.jpg",
    alt: "Freshly wrapped chicken shawarma",
    category: "Food",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    src: "/images/jollof.jpg",
    alt: "Steaming jollof rice with grilled chicken",
    category: "Food",
    span: "",
  },
  {
    id: 3,
    src: "/images/burger.jpg",
    alt: "Smash burger",
    category: "Food",
    span: "",
  },
  {
    id: 4,
    src: "/images/kitchen.jpg",
    alt: "Kitchen team at work during peak hours",
    category: "Kitchen",
    span: "",
  },
  {
    id: 5,
    src: "/images/fries-seasoned.jpg",
    alt: "Loaded seasoned fries",
    category: "Food",
    span: "",
  },
  {
    id: 6,
    src: "/images/interior.jpg", 
    alt: "Item 7 Go restaurant interior",
    category: "Vibe",
    span: "md:col-span-2",
  },
  {
    id: 7,
    src: "/images/counter.jpg",
    alt: "Service counter during a busy afternoon",
    category: "Kitchen",
    span: "",
  },
  {
    id: 8,
    src: "/images/drinks.jpg",
    alt: "Fresh drinks and Chapman",
    category: "Food",
    span: "",
  },
  {
    id: 9,
    src: "/images/hero-bg.jpg",
    alt: "Item 7 Go exterior and signage",
    category: "Vibe",
    span: "md:col-span-2",
  },
];

const categories = ["All", "Food", "Kitchen", "Vibe"];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered =
    active === "All"
      ? allPhotos
      : allPhotos.filter((p) => p.category === active);

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
              Behind the Brand
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-5xl md:text-7xl font-bold text-brand-cream leading-none"
            >
              See It
              <br />
              <span className="text-brand-red">Up Close.</span>
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-brand-cream/50 leading-relaxed max-w-sm"
          >
            A look inside Item 7 Go — the food, the kitchen, and the atmosphere
            that keeps people coming back.
          </motion.p>
        </div>
      </div>

      {/* ── FILTER ── */}
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

      {/* ── MASONRY GRID ── */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[220px] gap-4"
          >
            {filtered.map((photo, i) => (
              <motion.div
                key={photo.id}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={i}
                onClick={() => setLightbox(photo)}
                className={`relative overflow-hidden rounded-lg bg-brand-dark/5 cursor-pointer group ${photo.span}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/50 transition-all duration-300 flex items-end p-5">
                  <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {photo.alt}
                  </p>
                </div>
                {/* Category Tag */}
                <span className="absolute top-4 left-4 bg-brand-red text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {photo.category}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── LIGHTBOX ── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-brand-dark/95 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="mt-4 flex items-center justify-between">
                <p className="text-brand-cream/60 text-sm">{lightbox.alt}</p>
                <button
                  onClick={() => setLightbox(null)}
                  className="text-xs uppercase tracking-widest text-brand-cream/40 hover:text-brand-red transition-colors duration-300"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── BOTTOM CTA ── */}
      <div className="bg-brand-dark py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <p className="text-[11px] uppercase tracking-widest text-brand-red mb-3">
              Come See It in Person
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-cream leading-tight max-w-md">
              The photos are good. The real thing is better.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
