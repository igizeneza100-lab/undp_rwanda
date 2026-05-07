
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks: { name: string; href: string; primary?: boolean }[] = [
    { name: "About", href: "#about" },
    { name: "Speakers", href: "#speakers" },
    { name: "Agenda", href: "#agenda" },
    { name: "Register", href: "https://evregister.com/event/reg/annual-convention-on-south-south-triangular-cooperation", primary: true },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass-card px-4 sm:px-6 py-3 rounded-2xl">
        <div className="flex items-center gap-3">
          <img src={logo} alt="ACSSTrC Logo" className="h-9 sm:h-10 w-auto object-contain" />
          <span className="font-bold text-base sm:text-lg hidden sm:block tracking-tight">SSTC-Convention 2026</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              {...(link.primary && { target: "_blank", rel: "noopener noreferrer" })}
              className={`text-sm font-medium transition-colors ${
                link.primary
                  ? "bg-brand-teal text-white px-5 py-2 rounded-xl hover:bg-brand-teal/90"
                  : "text-slate-600 hover:text-brand-teal"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-600 p-2 rounded-lg hover:bg-slate-100 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-20 left-4 right-4 glass-card p-5 rounded-2xl flex flex-col gap-2 shadow-xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                {...(link.primary && { target: "_blank", rel: "noopener noreferrer" })}
                className={`text-base font-medium px-3 py-3 rounded-xl transition-colors ${
                  link.primary
                    ? "bg-brand-teal text-white text-center hover:bg-brand-teal/90"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
