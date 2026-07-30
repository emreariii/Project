import { href, Link } from "react-router-dom";
import Sayac from "./Sayac";
import Gorevler from "./Gorevler";
import GorevItem from "../components/GorevItem";



export default function Abc() {
  return (
    <>
    <div className=" bg-white text-black dark:bg-black dark:text-white h-100 flex justify-center items-center rounded-2xl">
          <a href="/gorevler" className="shadow-xl shadow-red-600/50 bg-red-600 text-white hover:bg-red-700 border-black px-8 py-4 rounded-lg transition-colors duration-500 border hover:translate-y-1" title="görevlere gider">
              <span>
                  Tıkla
              </span>
          </a>
      </div>
      
      <div className="font-extrabold text-3xl translate-3">
        <h1>Paketler</h1>
      </div>
      
      <div className="flex shrink-0 gap-7 gap-y-5 translate-y-7">
      <div className="bg-white rounded-2xl border border-gray-200 shadow p-6 w-64">
              <div className="text-sm font-semibold text-emerald-500 uppercase tracking-wide">Free</div>

              <div className="flex items-end gap-1 mt-2">
                  <span className="text-3xl font-bold text-gray-900">₺0</span>
                  <span className="text-sm text-gray-500 mb-1">/ay</span>
              </div>

              <div className="flex flex-col gap-2 mt-4 text-sm text-gray-600">
                  <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>Proje Görüntüleme
                  </span>
              </div>

              <button className="w-full mt-5 shadow-xl shadow-indigo-500/50 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-lg font-semibold text-sm transition">
                  Seç
              </button>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow p-6 w-64">
              <div className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">Basic</div>

              <div className="flex items-end gap-1 mt-2">
                  <span className="text-3xl font-bold text-gray-900">₺99</span>
                  <span className="text-sm text-gray-500 mb-1">/ay</span>
              </div>

              <div className="flex flex-col gap-2 mt-4 text-sm text-gray-600">
                  <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>Sınırlı proje
                  </span>
              </div>

              <button className="w-full mt-5 shadow-xl shadow-indigo-500/50 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-lg font-semibold text-sm transition">
                  Seç
              </button>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow p-6 w-64">
              <div className="text-sm font-semibold text-red-600 uppercase tracking-wide">Pro</div>

              <div className="flex items-end gap-1 mt-2">
                  <span className="text-3xl font-bold text-gray-900">₺199</span>
                  <span className="text-sm text-gray-500 mb-1">/ay</span>
              </div>

              <div className="flex flex-col gap-2 mt-4 text-sm text-gray-600">
                  <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>Sınırsız proje
                  </span>
              </div>

              <button className="w-full mt-5 shadow-xl shadow-indigo-500/50 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-lg font-semibold text-sm transition">
                  Seç
              </button>
          </div>
        </div>

        <div className="flex align-center justify-center translate-y-15">
            <video src="https://pasifik.com/Content/assets/media/water.mp4" type="video/mp4" alt="bu bir tanıtım videosu" autoPlay muted controls width={1080} height={540}></video>
        </div>
        </>
  );
}
