import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Menu", path: "/menu" },
  { label: "About", path: "/about" },
  { label: "Gallery", path: "/gallery" },
  { label: "Reservations", path: "/reservations" },
  { label: "Order", path: "/order" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/item7go_official/" },
  {
    label: "Facebook",
    href: "https://web.facebook.com/profile.php?id=100067050698390",
  },
  { label: "Twitter", href: "https://twitter.com/item7go" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-cream/70">
      {/* Top CTA Band */}
      <div className="bg-brand-red py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-widest text-white/60 mb-1">
              Hungry right now?
            </p>
            <h3 className="font-heading text-3xl md:text-2xl text-white font-bold">
              Order in minutes. Eat in style.
            </h3>
          </div>
          <a
            href="https://glovoapp.com"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 bg-white rounded-lg text-brand-red text-sm font-medium uppercase tracking-widest px-8 py-4 hover:bg-brand-cream transition-colors duration-300"
          >
            Order on Glovo
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center">
            <div className="h-[40px] w-[88px] bg-brand-dark mb-3 overflow-hidden rounded">
              <img
                src="/images/logo.jpg"
                alt="Item 7 Go"
                className="h-[100%] w-[120%] object-cover object-left"
              />
            </div>
          </Link>
          <p className="text-sm leading-relaxed text-brand-cream/50 max-w-xs">
            Fast. Fresh. Uncompromising. Ibadan's go-to spot for shawarma,
            jollof rice, burgers and more. ....Served right, every time.
          </p>
          <div className="flex gap-6 mt-8">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="text-xs uppercase tracking-widest text-brand-cream/40 hover:text-brand-red transition-colors duration-300"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Nav Column */}
        <div>
          <p className="text-[11px] uppercase tracking-widest text-brand-cream/30 mb-6">
            Navigate
          </p>
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-sm text-brand-cream/60 hover:text-brand-red transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <p className="text-[11px] uppercase tracking-widest text-brand-cream/30 mb-6">
            Find Us
          </p>
          <ul className="flex flex-col gap-4 text-sm text-brand-cream/60">
            <li className="leading-relaxed">
              CW3R+FQ3, opposite Item 7,
              <br />
              Iwo Road, Ibadan 200258,
              <br />
              Oyo State, Nigeria
            </li>
            <li>
              <a
                href="tel:+2348155745321"
                className="hover:text-brand-red transition-colors duration-300"
              >
                0815 574 5321
              </a>
            </li>
            <li className="text-brand-cream/40">
              Mon – Sat: 10:00am – 10:00pm
              <br />
              Sunday: 10:00am – 9:00pm
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 px-6 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 text-[10px] md:text-xs text-brand-cream/25 uppercase tracking-widest">
          <span>
            &copy; {new Date().getFullYear()} item 7 go. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
