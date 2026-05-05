
import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { Calendar, MapPin, ChevronRight } from "lucide-react";
import { CONVENTION_CONTENT } from "../constants";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const circle1 = useRef<HTMLDivElement>(null);
  const circle2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      // Background animation
      gsap.to(circle1.current, {
        x: 100,
        y: 50,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
      gsap.to(circle2.current, {
        x: -50,
        y: 100,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Split text-like entrance
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.2
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-slate-50 px-6">
      {/* Decorative Circles from the Brand Identity */}
      <div 
        ref={circle1}
        className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-brand-teal rounded-full opacity-10 blur-3xl pointer-events-none" 
      />
      <div 
        ref={circle2}
        className="absolute -bottom-40 -right-20 w-[700px] h-[700px] bg-brand-yellow rounded-full opacity-10 blur-3xl pointer-events-none" 
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-teal/10 text-brand-teal text-sm font-semibold mb-8 border border-brand-teal/20"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal"></span>
          </span>
          ANNUAL CONVENTION 2026
        </motion.div>

        <h1 
          ref={titleRef}
          className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-8"
        >
          {CONVENTION_CONTENT.title.split(' ').map((word, i) => (
            <span key={i} className={i > 3 ? "text-brand-teal" : ""}>{word} </span>
          ))}
        </h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 font-medium leading-relaxed"
        >
          {CONVENTION_CONTENT.theme}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12"
        >
          <div className="flex items-center gap-3 text-slate-700 bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-100">
            <Calendar className="text-brand-teal" size={24} />
            <span className="font-semibold">{CONVENTION_CONTENT.date}</span>
          </div>
          <div className="flex items-center gap-3 text-slate-700 bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-100">
            <MapPin className="text-brand-orange" size={24} />
            <span className="font-semibold">{CONVENTION_CONTENT.location}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button className="group px-8 py-4 bg-brand-teal text-white rounded-2xl font-bold text-lg shadow-lg shadow-brand-teal/30 hover:bg-brand-teal/90 transition-all flex items-center gap-2">
            Secure Your Seat
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 bg-white text-brand-teal border-2 border-brand-teal/20 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all">
            Download Prospectus
          </button>
        </motion.div>
      </div>

      {/* Floating Host Logos Area */}
      <div className="absolute bottom-12 left-0 right-0 z-10 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center opacity-50 grayscale hover:grayscale-0 transition-all">
          <span className="text-sm font-bold uppercase tracking-widest text-slate-400">Hosted By</span>
          <div className="flex items-center gap-12">
            <div className="h-12 w-48 bg-slate-200 rounded-lg animate-pulse" /> {/* Placeholder for Rwanda Cooperation */}
            <div className="h-12 w-32 bg-slate-200 rounded-lg animate-pulse" /> {/* Placeholder for UNDP */}
          </div>
        </div>
      </div>
    </section>
  );
}
