
import { motion } from "motion/react";
import { Clock } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { CONVENTION_CONTENT } from "../constants";
import gsap from "gsap";
import agendaBg from "../../assets/agenda bg.jpeg";

interface SubSession {
  title: string;
  room?: string;
  discussants?: string[];
  speakers?: string[];
  moderator?: string;
  description?: string;
}

interface Session {
  time: string;
  title: string;
  room?: string;
  description?: string;
  keynote?: string;
  speakers?: string[];
  moderator?: string;
  subSessions?: SubSession[];
}

export default function Agenda() {
  const [activeDay, setActiveDay] = useState(0);
  const bgRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (bgRef.current) {
        const rect = sectionRef.current?.getBoundingClientRect();
        if (rect && rect.top < window.innerHeight && rect.bottom > 0) {
          const x = (e.clientX / window.innerWidth) * 20 - 10;
          const y = (e.clientY / window.innerHeight) * 20 - 10;
          
          gsap.to(bgRef.current, {
            x: x,
            y: y,
            duration: 0.5,
            ease: "power2.out",
            overwrite: "auto"
          });
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="agenda" 
      className="py-32 bg-slate-900 relative overflow-hidden"
    >
      {/* Animated Background Image */}
      <div 
        ref={bgRef}
        className="absolute inset-0 opacity-60 bg-cover bg-center"
        style={{
          backgroundImage: `url(${agendaBg})`,
          willChange: "transform"
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/20 to-slate-900/30" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white mb-6">Program Agenda</h2>
          <div className="flex justify-center gap-4">
            {CONVENTION_CONTENT.agenda.map((day, i) => (
              <button
                key={i}
                onClick={() => setActiveDay(i)}
                className={`px-8 py-3 rounded-2xl font-bold transition-all ${
                  activeDay === i 
                    ? "bg-brand-yellow text-slate-900 shadow-lg shadow-brand-yellow/30" 
                    : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20"
                }`}
              >
                {day.day.split(':')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {(CONVENTION_CONTENT.agenda[activeDay].sessions as Session[]).map((session, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={i}
              className="bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-sm border border-white/20 group hover:bg-white/15 hover:shadow-lg hover:shadow-brand-yellow/10 transition-all"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 flex items-center gap-2 text-brand-yellow font-bold text-lg bg-brand-yellow/10 px-4 py-2 rounded-xl border border-brand-yellow/20">
                  <Clock size={18} />
                  {session.time}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-yellow transition-colors">
                    {session.title}
                  </h3>
                  {session.room && (
                    <p className="text-brand-yellow font-bold mb-2">{session.room}</p>
                  )}
                  {session.description && (
                    <p className="text-slate-200 font-medium leading-relaxed whitespace-pre-line">
                      {session.description}
                    </p>
                  )}
                  {session.keynote && (
                    <div className="mt-4">
                      <h4 className="font-bold text-white">Keynote:</h4>
                      <p className="text-slate-200">{session.keynote}</p>
                    </div>
                  )}
                  {session.speakers && (
                    <div className="mt-4">
                      <h4 className="font-bold text-white">Speakers:</h4>
                      <ul className="list-disc list-inside text-slate-200">
                        {session.speakers.map((speaker, j) => <li key={j}>{speaker}</li>)}
                      </ul>
                    </div>
                  )}
                  {session.moderator && (
                    <div className="mt-4">
                      <h4 className="font-bold text-white">Moderator:</h4>
                      <p className="text-slate-200">{session.moderator}</p>
                    </div>
                  )}
                  {session.subSessions && (
                    <div className="mt-4 space-y-4">
                      {session.subSessions.map((sub, j) => (
                        <div key={j} className="bg-black/20 p-4 rounded-xl border border-white/10">
                          <h4 className="font-bold text-white">{sub.title}</h4>
                          {sub.room && <p className="text-brand-yellow font-bold mb-2">{sub.room}</p>}
                          {sub.discussants && (
                            <div className="mt-2">
                              <h5 className="font-bold text-white">Discussants:</h5>
                              <ul className="list-disc list-inside text-slate-200">
                                {sub.discussants.map((discussant, k) => <li key={k}>{discussant}</li>)}
                              </ul>
                            </div>
                          )}
                          {sub.speakers && (
                            <div className="mt-2">
                              <h5 className="font-bold text-white">Speakers:</h5>
                              <ul className="list-disc list-inside text-slate-200">
                                {sub.speakers.map((speaker, k) => <li key={k}>{speaker}</li>)}
                              </ul>
                            </div>
                          )}
                          {sub.moderator && (
                            <div className="mt-2">
                              <h5 className="font-bold text-white">Moderator:</h5>
                              <p className="text-slate-200">{sub.moderator}</p>
                            </div>
                          )}
                           {sub.description && (
                            <p className="text-slate-200 font-medium leading-relaxed mt-2">
                              {sub.description}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
