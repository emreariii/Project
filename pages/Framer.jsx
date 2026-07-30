import { href, Link } from "react-router-dom";
import Sayac from "./Sayac";
import Gorevler from "./Gorevler";
import GorevItem from "../components/GorevItem";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const veriler = [
  { soru: "Kargom ne zaman gelir?", cevap: "Genelde 2-3 iş günü içinde." },
  { soru: "İade yapabilir miyim?", cevap: "14 gün içinde, koşulsuz." },
  { soru: "Kapıda ödeme var mı?", cevap: "Evet, küçük bir ek ücretle." },
];

export default function App() {
  const [acikIndex, setAcikIndex] = useState(null);

  return (
    <div className="min-h-screen bg-slate-100 p-8 flex justify-center">
      <div className="w-full max-w-md space-y-2">
        {veriler.map((item, i) => {
          const acik = acikIndex === i;
          return (
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm">
              <button
                onClick={() => setAcikIndex(acik ? null : i)}
                className="w-full flex justify-between items-center px-5 py-4 text-left"
              >
                <span className="font-medium text-slate-800">{item.soru}</span>
                <motion.span
                  animate={{ rotate: acik ? 180 : 0 }}
                  className="text-slate-400"
                >
                  ▼
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {acik && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-4 text-slate-500">{item.cevap}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
