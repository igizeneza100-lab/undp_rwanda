/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Agenda from "./components/Agenda";
import Footer from "./components/Footer";
import { motion } from "motion/react";
import { CONVENTION_CONTENT } from "./constants";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Quote Section from PDF Page 3 */}
        <section className="py-24 bg-brand-teal text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-yellow/20 rounded-full blur-3xl -mr-48 -mt-48" />
          <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
            <motion.blockquote
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold leading-tight"
            >
              "Resilient and inclusive development strategies that can withstand shocks and promote sustainable recovery, especially for the poor and marginalized."
            </motion.blockquote>
          </div>
        </section>

        <About />

        {/* Expected Outcomes Section - Orange Background Style from PDF */}
        <section className="py-32 bg-brand-orange text-white overflow-hidden relative">
          <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 -ml-64" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-3xl mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8">Expected Outcomes</h2>
              <p className="text-xl text-orange-50 font-medium">
                The event will be held over two days and is expected to have the following outcomes:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 text-slate-900">
              {CONVENTION_CONTENT.outcomes.map((outcome, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={i}
                  className="bg-white/95 backdrop-blur-sm p-8 rounded-[2.5rem] flex gap-6 items-start"
                >
                  <div className="w-10 h-10 rounded-2xl bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-orange font-bold text-xl">{i + 1}</span>
                  </div>
                  <p className="text-lg font-semibold leading-snug">{outcome}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Agenda />

        {/* Who is attending Section - Modern Card List */}
        <section className="py-32 bg-white px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
                <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Who Is Attending?</h2>
                <div className="h-1.5 w-24 bg-brand-yellow mx-auto rounded-full" />
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {CONVENTION_CONTENT.attendees.map((item, i) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  key={i}
                  className="bg-slate-50 border border-slate-100 p-6 rounded-3xl text-center group hover:bg-brand-teal transition-all duration-300"
                >
                  <p className="font-bold text-slate-900 group-hover:text-white transition-colors">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-5xl mx-auto px-6 text-center glass-card py-20 rounded-[3rem] relative overflow-hidden">
             <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl" />
             <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-teal/10 rounded-full blur-3xl" />
             
             <h2 className="text-4xl font-extrabold text-slate-900 mb-8 relative z-10">Join the Global Dialogue in Kigali</h2>
             <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto relative z-10">
               Registration is now open for international delegates, government officials, and development partners.
             </p>
             <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
               <a
                 href="https://evregister.com/event/reg/annual-convention-on-south-south-triangular-cooperation"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="px-10 py-5 bg-brand-teal text-white rounded-2xl font-bold text-lg shadow-xl shadow-brand-teal/30 hover:scale-105 active:scale-95 transition-all"
               >
                 Register for ACSSTrC 2026
               </a>
               <button className="px-10 py-5 bg-white text-slate-900 border border-slate-200 shadow-sm rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all">
                 Contact Secretariat
               </button>
             </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
