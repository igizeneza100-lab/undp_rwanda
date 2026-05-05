
import { motion } from "motion/react";
import { Clock, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { CONVENTION_CONTENT } from "../constants";

export default function Agenda() {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section id="agenda" className="py-32 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Program Agenda</h2>
          <div className="flex justify-center gap-4">
            {CONVENTION_CONTENT.agenda.map((day, i) => (
              <button
                key={i}
                onClick={() => setActiveDay(i)}
                className={`px-8 py-3 rounded-2xl font-bold transition-all ${
                  activeDay === i 
                    ? "bg-brand-teal text-white shadow-lg shadow-brand-teal/20" 
                    : "bg-white text-slate-600 hover:bg-white/80"
                }`}
              >
                {day.day.split(':')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {CONVENTION_CONTENT.agenda[activeDay].sessions.map((session, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={i}
              className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 group hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 flex items-center gap-2 text-brand-teal font-bold text-lg bg-brand-teal/5 px-4 py-2 rounded-xl">
                  <Clock size={18} />
                  {session.time}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-teal transition-colors">
                    {session.title}
                  </h3>
                  {session.description && (
                    <p className="text-slate-600 font-medium leading-relaxed">
                      {session.description}
                    </p>
                  )}
                  {session.subSessions && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {session.subSessions.map((sub, j) => (
                        <span 
                          key={j} 
                          className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200"
                        >
                          {sub}
                        </span>
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
