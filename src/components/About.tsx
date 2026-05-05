
import { motion } from "motion/react";
import { CheckCircle2, Users, Target, Globe } from "lucide-react";
import { CONVENTION_CONTENT } from "../constants";

export default function About() {
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-1 w-20 bg-brand-teal mb-8" />
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
              Driving Change through <br/>
              <span className="text-brand-yellow">South-South Cooperation</span>
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              {CONVENTION_CONTENT.about.description}
            </p>

            <div className="space-y-6">
              {CONVENTION_CONTENT.about.objectives.map((obj, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-teal/10 flex items-center justify-center mt-1">
                    <CheckCircle2 size={16} className="text-brand-teal" />
                  </div>
                  <p className="text-slate-700 font-medium">{obj}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Featured Stats or Visuals */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="p-8 bg-brand-teal rounded-[2rem] text-white flex flex-col justify-between aspect-square">
              <Globe size={40} className="mb-4 opacity-80" />
              <div>
                <div className="text-4xl font-bold mb-1">Globally</div>
                <div className="text-teal-100 font-medium">Focused Impact</div>
              </div>
            </div>
            <div className="p-8 bg-brand-yellow rounded-[2rem] text-slate-900 flex flex-col justify-between aspect-square mt-12">
              <Users size={40} className="mb-4 opacity-80" />
              <div>
                <div className="text-4xl font-bold mb-1">500+</div>
                <div className="text-slate-700 font-medium">Delegates</div>
              </div>
            </div>
            <div className="p-8 bg-slate-100 rounded-[2rem] text-slate-900 flex flex-col justify-between aspect-square -mt-12">
              <Target size={40} className="mb-4 text-brand-orange opacity-80" />
              <div>
                <div className="text-4xl font-bold mb-1">7 Years</div>
                <div className="text-slate-700 font-medium">Rwanda Cooperation</div>
              </div>
            </div>
            <div className="p-8 bg-brand-orange rounded-[2rem] text-white flex flex-col justify-between aspect-square">
              <CheckCircle2 size={40} className="mb-4 opacity-80" />
              <div>
                <div className="text-4xl font-bold mb-1">100%</div>
                <div className="text-orange-100 font-medium">Committed</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
