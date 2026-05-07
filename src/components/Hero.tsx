
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { Calendar, MapPin, ChevronRight } from "lucide-react";
import { CONVENTION_CONTENT } from "../constants";
import kccImage from "../../assets/KCC_image.jpg";

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
  const [countdown, setCountdown] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Countdown timer
    const updateCountdown = () => {
      const conventionDate = new Date(2026, 5, 22, 0, 0, 0).getTime(); // June 22, 2026
      const now = new Date().getTime();
      const distance = conventionDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

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
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-24 overflow-hidden px-4 sm:px-6">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${kccImage})` }}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-slate-900/60" />
      {/* Decorative Circles */}
      <div 
        ref={circle1}
        className="absolute -top-20 -left-20 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-brand-teal rounded-full opacity-10 blur-3xl pointer-events-none" 
      />
      <div 
        ref={circle2}
        className="absolute -bottom-40 -right-20 w-[350px] h-[350px] sm:w-[700px] sm:h-[700px] bg-brand-yellow rounded-full opacity-10 blur-3xl pointer-events-none" 
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center w-full pb-32 sm:pb-40 md:pb-48">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/10 text-white text-xs sm:text-sm font-semibold mb-6 sm:mb-8 border border-white/20"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal"></span>
          </span>
          INAUGURAL CONVENTION 2026
        </motion.div>

        <h1 
          ref={titleRef}
          className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 sm:mb-8 px-2"
        >
          INAUGURAL CONVENTION ON SOUTH-SOUTH & TRIANGULAR COOPERATION
        </h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 font-medium leading-relaxed px-2"
        >
          {CONVENTION_CONTENT.theme}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12"
        >
          <div className="flex items-center gap-3 text-slate-700 bg-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-sm border border-slate-100 w-full sm:w-auto justify-center">
            <Calendar className="text-brand-teal flex-shrink-0" size={20} />
            <span className="font-semibold text-sm sm:text-base">{CONVENTION_CONTENT.date}</span>
          </div>
          <div className="flex items-center gap-3 text-slate-700 bg-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-sm border border-slate-100 w-full sm:w-auto justify-center">
            <MapPin className="text-brand-orange flex-shrink-0" size={20} />
            <span className="font-semibold text-sm sm:text-base">{CONVENTION_CONTENT.location}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 px-4 sm:px-0"
        >
          <a
            href="https://evregister.com/event/reg/annual-convention-on-south-south-triangular-cooperation"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-6 sm:px-8 py-3 sm:py-4 bg-brand-teal text-white rounded-xl sm:rounded-2xl font-bold text-sm sm:text-lg shadow-lg shadow-brand-teal/30 hover:bg-brand-teal/90 transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            Secure Your Seat
            <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </a>
          
        </motion.div>
      </div>

      {/* Countdown Timer */}
      <div className="absolute bottom-8 sm:bottom-12 left-0 right-0 z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-center items-center">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl px-4 sm:px-8 py-4 sm:py-6 border border-white/20 shadow-lg w-full sm:w-auto">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-white/80">Starts In</span>
            <div className="flex items-center gap-2 sm:gap-4">
              <motion.div 
                key={countdown.days}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center"
              >
                <div className="text-xl sm:text-3xl font-bold text-brand-teal">
                  {String(countdown.days).padStart(2, '0')}
                </div>
                <span className="text-xs font-semibold text-white/60 uppercase mt-0.5 sm:mt-1">Days</span>
              </motion.div>
              <span className="text-lg sm:text-2xl font-bold text-white/40">:</span>
              <motion.div 
                key={countdown.hours}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center"
              >
                <div className="text-xl sm:text-3xl font-bold text-brand-teal">
                  {String(countdown.hours).padStart(2, '0')}
                </div>
                <span className="text-xs font-semibold text-white/60 uppercase mt-0.5 sm:mt-1">Hours</span>
              </motion.div>
              <span className="text-lg sm:text-2xl font-bold text-white/40">:</span>
              <motion.div 
                key={countdown.minutes}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center"
              >
                <div className="text-xl sm:text-3xl font-bold text-brand-teal">
                  {String(countdown.minutes).padStart(2, '0')}
                </div>
                <span className="text-xs font-semibold text-white/60 uppercase mt-0.5 sm:mt-1">Mins</span>
              </motion.div>
              <span className="text-lg sm:text-2xl font-bold text-white/40">:</span>
              <motion.div 
                key={countdown.seconds}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center"
              >
                <div className="text-xl sm:text-3xl font-bold text-brand-yellow">
                  {String(countdown.seconds).padStart(2, '0')}
                </div>
                <span className="text-xs font-semibold text-white/60 uppercase mt-0.5 sm:mt-1">Secs</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
