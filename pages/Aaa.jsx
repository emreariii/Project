import { href, Link } from "react-router-dom";
import Sayac from "./Sayac";
import Gorevler from "./Gorevler";
import GorevItem from "../components/GorevItem";




export default function Aaa() {
  return (
    <>
    <div className="font-extrabold text-3xl text-center text-mist-900">
        <h1>HOŞ GELDİNİZ</h1>
        <br />
        <p className="font-semibold text-mist-700">Devam Etmek İçin Tıklayınız</p>
    </div>

    <div className="shrink-0 flex items-center justify-center gap-6 gap-y-6 translate-y-7">
        <div className="bg-white rounded-2xl border border-gray-300 shadow p-7 w-64">
            <div className="text-sm font-semibold text-emerald-500 uppercase tracking-wide">Üyelik</div>
            
            <div className="flex items-end gap-1 mt-1">
                <span className="text-3xl font-bold text-gray-900">***</span>
                <span className="text-sm text-gray-500 mb-1">/ay</span>
            </div>

            <div className="flex flex-col gap-2 mt-4 text-sm text-gray-600">
                <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>Üyelik Paketlerini Görüntüle
                </span>
            </div>
            <button className="w-full mt-5 shadow-xl shadow-indigo-500/50 bg-indigo-500 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-lg font-semibold text-sm transition">
               <a href="http://localhost:5173/abc">Görüntüle</a> 
            </button>
        </div>

        <div className="bg-white">
            <div className="text-sm font-semibold"></div>
        </div>
    </div>
    </> 
   );
}
