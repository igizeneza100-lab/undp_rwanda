
import { Instagram, Youtube } from "lucide-react";
import { CONVENTION_CONTENT } from "../constants";
import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2">
          <div className="flex items-center gap-3 mb-8">
            <img src={logo} alt="ACSSTrC Logo" className="h-16 w-auto object-contain" />
            <h3 className="text-2xl font-bold">SSTC-Convention 2026</h3>
          </div>
          <p className="text-slate-400 text-lg max-w-md mb-8">
            Strengthening collaboration and institutional frameworks for effective implementation of South-South and Triangular Cooperation.
          </p>
          <div className="flex gap-4">
            <a href="https://x.com/Cooperation_RW" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-brand-teal transition-colors">
              <img src="https://img.icons8.com/ios/50/twitterx--v2.png" alt="X" className="w-5 h-5 invert" />
            </a>
            <a href="https://www.instagram.com/cooperation_rw/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-brand-teal transition-colors">
              <Instagram size={18} />
            </a>
            <a href="https://www.youtube.com/@Cooperation_RW" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-brand-teal transition-colors">
              <Youtube size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-4 text-slate-400 font-medium">
            <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
            <li><a href="#agenda" className="hover:text-white transition-colors">Program</a></li>
            <li><a href="https://evregister.com/event/reg/annual-convention-on-south-south-triangular-cooperation" className="hover:text-white transition-colors">Registration</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Contact</h4>
          <ul className="space-y-4 text-slate-400 font-medium">
            <li>21, KG 7 Avenue, Kigali-Rwanda</li>
            <li>kflora.kaitesi@undp.org</li>
            <li>+250 788 830 866</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm font-medium gap-4">
        <p>© {new Date().getFullYear()} Rwanda Cooperation. All rights reserved.</p>
      </div>
    </footer>
  );
}
