import { href, Link } from "react-router-dom";
import Sayac from "./Sayac";
import Gorevler from "./Gorevler";
import GorevItem from "../components/GorevItem";





export default function App() {
  return (
    <>

    {/* üyelik görüntüleme kartı */}

    <div className="shrink-0 flex items-center justify-center gap-6 gap-y-6 translate-y-1">
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
            <button className="w-full mt-5 shadow-xl shadow-indigo-500/50 bg-indigo-500 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-lg font-semibold text-sm">
               Görüntüle
            </button>
        </div>
    </div>


    {/* kredi kartı ön yüz */}

    <div className="shrink-0 flex items-center justify-center gap-6 gap-y-6 translate-y-7">
        <div className="bg-gray-500 rounded-2xl border border-gray-800 shadow m-5 p-7 h-64 w-120">
            <div className="text-xl font-bold px-77 uppercase">
                emrecard
            </div>

            <div className="mt-20 ml-5 font-semibold text-5xl">
                **** **** **** ****
            </div>

            <div className="text-lg ml-6 font-semibold uppercase -translate-y-1">
                emre arı
                <div className="text-sm">valid: 02/27</div>
            </div>
        </div>
    </div>


    {/* kredi kartı arka yüz */}

    <div className="shrink-0 flex items-center justify-center gap-6 gap-y-6 translate-y-7">
        <div className="bg-gray-500 rounded-2xl border border-gray-800 shadow m-5 p-7 h-64 w-120">
            <div className="text-xl font-bold px-3 uppercase">
                emrecard
            </div>

            <div className="mt-10 ml-3 font-semibold text-5xl bg-amber-50">
                <span className="uppercase ml-77 text-lg">cvv:222</span>
            </div>

            <div className="flex mt-4 text-sm text-gray-800 font-semibold">
                <span className="flex items-center">
                    <span className="mx-3 w-20 h-10 rounded-full bg-gray-200"></span>EMRECARD
                </span>
            </div>
        </div>
    </div>


    {/* sayfa giriş bölümü */}

    <div className="shrink-0 flex items-center justify-center gap-6 gap-y-6 translate-y-15">
        <div className="bg-white rounded-2xl border border-gray-300 shadow p-7 w-150 h-80">
            <div className="text-lg font-semibold text-emerald-500 uppercase tracking-wide">giriş yap</div>
            
            <div className="mt-3 mb-3">
                <label className="block text-gray-700 font-medium mb-2">E-posta</label>
                <input type="email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none focus:ring-blue-500" placeholder="ornek@email.com"/>
            </div>

            <div className="mb-9">
                <label className="block text-gray-700 font-medium mb-2">Şifre</label>
                <input type="password" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none focus:ring-blue-500" placeholder="********"/>
            </div>
            <button className="w-full shadow-lg shadow-indigo-500/50 bg-indigo-500 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-lg font-semibold text-sm uppercase">
               giriş yap
            </button>
        </div>       
    </div>
    </>
  );
}