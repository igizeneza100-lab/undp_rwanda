
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { Calendar, MapPin, ChevronRight } from "lucide-react";
import { CONVENTION_CONTENT } from "../constants";
import kccImage from "../../assets/KCC_image.jpg";
import rwandaCoopLogo from "../../assets/rwandacoop logo.jpg";
import undpLogo from "../../assets/undp_logo.png";

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const circle1 = useRef<HTMLDivElement>(null);
  const circle2 = useRef<HTMLDivElement>(null);
  const [countdown, setCountdown] = useState<CountdownTime>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateCountdown = () => {
      const distance = new Date(2026, 5, 22).getTime() - Date.now();
      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };
    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!heroRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(circle1.current, { x: 100, y: 50, duration: 10, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(circle2.current, { x: -50, y: 100, duration: 12, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.from(titleRef.current, { y: 50, opacity: 0, duration: 1.2, ease: "power4.out", delay: 0.2 });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const countdownUnits = [
    { value: countdown.days, label: "Days", color: "text-brand-teal" },
    { value: countdown.hours, label: "Hrs", color: "text-brand-teal" },
    { value: countdown.minutes, label: "Mins", color: "text-brand-teal" },
    { value: countdown.seconds, label: "Secs", color: "text-brand-yellow" },
  ];

  return (
    <section ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden px-4 sm:px-6">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${kccImage})` }} />
      <div className="absolute inset-0 bg-slate-900/65" />

      {/* Decorative Circles */}
      <div ref={circle1} className="absolute -top-20 -left-20 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-brand-teal rounded-full opacity-10 blur-3xl pointer-events-none" />
      <div ref={circle2} className="absolute -bottom-40 -right-20 w-[350px] h-[350px] sm:w-[700px] sm:h-[700px] bg-brand-yellow rounded-full opacity-10 blur-3xl pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center w-full flex-1 flex flex-col items-center justify-center py-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white text-xs font-semibold mb-4 border border-white/20"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal"></span>
          </span>
          INAUGURAL CONVENTION 2026
        </motion.div>

        <h1
          ref={titleRef}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 sm:mb-6"
        >
          INAUGURAL CONVENTION ON SOUTH-SOUTH & TRIANGULAR COOPERATION
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-6 font-medium leading-relaxed"
        >
          {CONVENTION_CONTENT.theme}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6 w-full"
        >
          <div className="flex items-center gap-2 text-slate-700 bg-white px-4 py-2.5 rounded-xl shadow-sm border border-slate-100 w-full sm:w-auto justify-center">
            <Calendar className="text-brand-teal flex-shrink-0" size={18} />
            <span className="font-semibold text-sm">{CONVENTION_CONTENT.date}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-700 bg-white px-4 py-2.5 rounded-xl shadow-sm border border-slate-100 w-full sm:w-auto justify-center">
            <MapPin className="text-brand-orange flex-shrink-0" size={18} />
            <span className="font-semibold text-sm">{CONVENTION_CONTENT.location}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="w-full sm:w-auto"
        >
          <a
            href="https://evregister.com/event/reg/annual-convention-on-south-south-triangular-cooperation"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-3 bg-brand-teal text-white rounded-xl font-bold text-sm shadow-lg shadow-brand-teal/30 hover:bg-brand-teal/90 transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            Secure Your Seat
            <ChevronRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </a>
        </motion.div>

        {/* Hosted By Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="mt-10 sm:mt-12 w-full"
        >
          <p className="text-white/70 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-4 text-center">Hosted By</p>
          <div className="flex items-center justify-center gap-6 sm:gap-8 flex-wrap">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all">
              <img 
                src={rwandaCoopLogo} 
                alt="Rwanda Cooperation" 
                className="h-12 sm:h-16 object-contain"
              />
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all">
              <img 
                src={undpLogo} 
                alt="UNDP" 
                className="h-12 sm:h-16 object-contain"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Countdown Timer */}
      <div className="relative z-10 w-full max-w-sm sm:max-w-md mx-auto mt-10 sm:mt-12 px-4">
        <div className="flex items-center justify-between bg-white/10 backdrop-blur-md rounded-2xl px-4 sm:px-6 py-3 sm:py-4 border border-white/20 shadow-lg gap-2 sm:gap-4">
          <span className="text-xs font-bold uppercase tracking-widest text-white/70 hidden sm:block flex-shrink-0">Starts In</span>
          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center">
            {countdownUnits.map((unit, i) => (
              <div key={unit.label} className="flex items-center gap-2 sm:gap-3">
                <motion.div
                  key={unit.value}
                  initial={{ y: -8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center min-w-[36px]"
                >
                  <span className={`text-xl sm:text-2xl font-bold ${unit.color}`}>
                    {String(unit.value).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] font-semibold text-white/60 uppercase">{unit.label}</span>
                </motion.div>
                {i < countdownUnits.length - 1 && (
                  <span className="text-lg font-bold text-white/40 mb-3">:</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
