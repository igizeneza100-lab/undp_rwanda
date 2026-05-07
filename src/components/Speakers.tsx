
import { motion } from "motion/react";
import richardImg from "../../assets/Richard Niwenshuti.jpg";
import fatmataImg from "../../assets/Dr. Fatmata Lovetta Sesay.jpeg";
import olivierImg from "../../assets/Hon. Olivier J.P. Nduhungirehe.jpg";

const SPEAKERS = [
  {
    name: "Hon. Olivier J.P. Nduhungirehe",
    role: "Minister of Foreign Affairs and International Cooperation",
    image: olivierImg,
    agendaTime: "9:42 am",
    day: 0
  },
  {
    name: "Richard Niwenshuti",
    role: "CEO, Rwanda Cooperation",
    image: richardImg,
    agendaTime: "9:30 am",
    day: 0
  },
  {
    name: "Dr. Fatmata Lovetta Sesay",
    role: "UN Rwanda Resident Coordinator a.i. & UNDP Resident Representative",
    image: fatmataImg,
    agendaTime: "9:35 am",
    day: 0
  }
];

export default function Speakers() {
  const scrollToAgenda = () => {
    const agendaSection = document.getElementById("agenda");
    if (agendaSection) {
      agendaSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="speakers" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6"
          >
            Speakers
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto"
          >
            Join global leaders and experts as they share insights on South-South and Triangular Cooperation.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {SPEAKERS.map((speaker, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group text-center cursor-pointer"
              onClick={scrollToAgenda}
            >
              <div className="relative mb-6 inline-block">
                <div className="absolute inset-0 bg-brand-teal rounded-3xl rotate-6 group-hover:rotate-12 transition-transform duration-300" />
                <div className="relative overflow-hidden rounded-3xl w-64 h-64 mx-auto border-4 border-white shadow-xl">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{speaker.name}</h3>
              <p className="text-brand-teal font-extrabold text-sm uppercase tracking-wider mb-2">{speaker.role}</p>
              <div className="inline-flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full">
                <span>Starts {speaker.agendaTime}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
