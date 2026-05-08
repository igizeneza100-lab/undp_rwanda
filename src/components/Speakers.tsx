
import { motion } from "motion/react";
import richardImg from "../../assets/Richard Niwenshuti.jpg";
import fatmataImg from "../../assets/Dr. Fatmata Lovetta Sesay.jpeg";
import olivierImg from "../../assets/Hon. Olivier J.P. Nduhungirehe.jpg";
import angelaImg from "../../assets/Angela Zeleza.jpg";
import assiaImg from "../../assets/Assia Toure Sar.jpeg";
import belenImg from "../../assets/H.E. Mrs. Belén CALVO UYARRA EU Ambassador.jpg";
import habtamuImg from "../../assets/Habtamu Fuje.jpg";
import yusufImg from "../../assets/Hon. Yusuf Murangwa.jpg";
import jacquesImg from "../../assets/Jacques Butera.jpeg";
import laureImg from "../../assets/Laure Bella Ange Izere.jpeg";
import maxwellImg from "../../assets/Maxwell Gomera.jpg";
import rajivImg from "../../assets/Rajiv Garg .jpeg";
import salamaImg from "../../assets/Salama Umuhoza.jpeg";
import tikikelImg from "../../assets/Tikikel Tadele Alemu.jpg";
import samuelImg from "../../assets/ Samuel Doe Samuel Doe.jpg";
import chanceImg from "../../assets/Chance Tubane.jpeg";
import marleneImg from "../../assets/Marlene Ngoyi.webp";
import liekeImg from "../../assets/Lieke Van de Wiel.jpg";
import sahrImg from "../../assets/Dr. Sahr John Kpundeh.jpg";
import saraImg from "../../assets/Sara Hamouda Senior.jpeg";
import paulaImg from "../../assets/Hon. Paula Ingabire.jpg";
import israelImg from "../../assets/ Israel Bimpe Israel.jpg";
import antoineImg from "../../assets/Antoine Sebera Chief Executive Officer, RISA.jpeg";

const SPEAKERS = [
  {
    name: "Hon. Olivier J.P. Nduhungirehe",
    role: "Minister of Foreign Affairs and International Cooperation",
    image: olivierImg,
    day: 0
  },
  {
    name: "Richard Niwenshuti",
    role: "CEO, Rwanda Cooperation",
    image: richardImg,
    day: 0
  },
  {
    name: "Dr. Fatmata Lovetta Sesay",
    role: "UN Rwanda Resident Coordinator a.i. & UNDP Resident Representative",
    image: fatmataImg,
    day: 0
  },
  {
    name: "Chance Tubane",
    role: "Chief Operations Officer, Rwanda Cooperation",
    image: chanceImg,
    day: 0
  },
  {
    name: "Marlene Ngoyi Mvidia",
    role: "Head of Mission, FEDA",
    image: marleneImg,
    day: 0
  },
  {
    name: "Lieke Van de Wiel",
    role: "Country Representative, UNICEF Rwanda",
    image: liekeImg,
    day: 0
  },
  {
    name: "Dr. Sahr John Kpundeh",
    role: "Country Director, World Bank Rwanda",
    image: sahrImg,
    day: 0
  },
  {
    name: "Sara Hamouda",
    role: "Senior Continental Governance Officer, APRM",
    image: saraImg,
    day: 0
  },
  {
    name: "Hon. Paula Ingabire",
    role: "Minister of ICT & Innovation",
    image: paulaImg,
    day: 0
  },
  {
    name: "Israel Bimpe",
    role: "Chief Executive Officer, Irembo",
    image: israelImg,
    day: 0
  },
  {
    name: "Antoine Sebera",
    role: "Chief Executive Officer, RISA",
    image: antoineImg,
    day: 0
  },
  {
    name: "Tikikel Tadele Alemu",
    role: "Programme Management Specialist, UN Women Rwanda",
    image: tikikelImg,
    day: 0
  },
  {
    name: "Maxwell Gomera",
    role: "UNDP Resident Representative, UNDP South Africa",
    image: maxwellImg,
    day: 0
  },
  {
    name: "Samuel Doe",
    role: "UNDP Resident Representative, UNDP Ethiopia",
    image: samuelImg,
    day: 0
  },
  {
    name: "Hon. Yusuf Murangwa",
    role: "Minister of Finance and Economic Planning",
    image: yusufImg,
    day: 0
  },
  {
    name: "Assia Toure Sarr",
    role: "Representative, African Development Bank",
    image: assiaImg,
    day: 0
  },
  {
    name: "Habtamu Fuje",
    role: "Representative, IMF",
    image: habtamuImg,
    day: 0
  },
  {
    name: "H.E. Mrs. Belén CALVO UYARRA",
    role: "EU Ambassador, European Union",
    image: belenImg,
    day: 0
  },
  {
    name: "Angela Zeleza",
    role: "Head of Office and Strategic Planner, UN RCO",
    image: angelaImg,
    day: 0
  },
  {
    name: "Rajiv Garg",
    role: "Senior Programme Management Officer, UNEP",
    image: rajivImg,
    day: 0
  },
  {
    name: "Laure Bella Ange Izere",
    role: "Founder and CEO, ILBA Products Ltd",
    image: laureImg,
    day: 0
  },
  {
    name: "Salama Umuhoza",
    role: "Founder and CEO, Salama Tours and Travel Agency Ltd",
    image: salamaImg,
    day: 0
  },
  {
    name: "Jacques Butera",
    role: "Founder, Jabu Clothing",
    image: jacquesImg,
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
              <p className="text-brand-teal font-extrabold text-sm uppercase tracking-wider">{speaker.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
