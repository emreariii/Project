import { Link, Routes, Route } from "react-router-dom";
import Sayac from "./Sayac";
import Gorevler from "./Gorevler";
import GorevItem from "../components/GorevItem";

export default function App() {
  return (
    <div className="flex">
      <nav className="w-64 min-h-screen bg-gray-900 text-white p-4">
        <ul className="flex flex-col gap-5 fixed">
          <li>
            <Link to="/anasyf" 
              className="flex items-center justify-center gap-5 px-4 py-5 mt-4 rounded-lg text-2xl font-bold tracking-wider uppercase hover:text-gray-200"
            >
              pasifik depo
            </Link>
          </li>
          
          <li className="mt-10">
            <Link to="/anasyf" 
              className="flex items-center gap-5 px-4 py-5 hover:bg-gray-800 focus:bg-blue-800 rounded-lg text-xl border border-gray-800 font-medium"
            >
              Ana Sayfa
            </Link>
          </li>
          
          <li>
            <Link to="/profil" 
              className="flex items-center gap-5 px-4 py-5 hover:bg-gray-800 focus:bg-blue-800 rounded-lg text-xl border border-gray-800"
            >
              Profil
            </Link>
          </li>
          
          <li>
            <Link to="/urunekle" 
              className="flex items-center gap-5 px-4 py-5 hover:bg-gray-800 focus:bg-blue-800 rounded-lg text-xl border border-gray-800"
            >
              Ürün Ekle/Çıkart
            </Link>
          </li>
          
          <li>
            <Link to="/uruntakip" 
              className="flex items-center gap-5 px-4 py-5 hover:bg-gray-800 focus:bg-blue-800 rounded-lg text-xl border border-gray-800"
            >
              Stok Takip
            </Link>
          </li>
          
          <li>
            <Link to="/grafikler" 
              className="flex items-center gap-5 px-4 py-5 hover:bg-gray-800 focus:bg-blue-800 rounded-lg text-xl border border-gray-800"
            >
              Grafikler
            </Link>
          </li>
          
          <li className="border-gray-800 gap-5 border rounded-lg text-xl shadow-md bg-gray-900 hover:bg-gray-800">
            <input type="checkbox" id="menu" className="peer hidden" />
            
            <label htmlFor="menu" className="flex justify-between items-center px-4 py-5 text-white cursor-pointer">
              <span>Ürünler</span>
              <span className="text-sm">▼</span>
            </label>

            <ul className="max-h-0 overflow-hidden rounded-b-lg bg-gray-50 transition-all duration-300 ease-in-out peer-checked:max-h-80">
              <li><Link to="/kirtasiye" className="block px-6 py-2 text-sm text-gray-600 hover:text-blue-500">Kırtasiye</Link></li>
              <li><Link to="/teknoloji" className="block px-6 py-2 text-sm text-gray-600 hover:text-blue-500">Teknoloji</Link></li>
              <li><Link to="/mobilya" className="block px-6 py-2 text-sm text-gray-600 hover:text-blue-500">Mobilya</Link></li>
              <li><Link to="/icecek" className="block px-6 py-2 text-sm text-gray-600 hover:text-blue-500">İçecek</Link></li>
              <li><Link to="/gida" className="block px-6 py-2 text-sm text-gray-600 hover:text-blue-500">Gıda</Link></li>
              <li><Link to="/temizlik" className="block px-6 py-2 text-sm text-gray-600 hover:text-blue-500">Temizlik & Hijyen</Link></li>
            </ul>
          </li>
        </ul>
      </nav>

      <main className="flex-1 p-8 bg-gray-100 min-h-screen">
        <Routes>
          <Route path="/anasyf" element={<div>Ana Sayfa İçeriği</div>} />
          <Route path="/profil" element={<div>Profil İçeriği</div>} />
          <Route path="/urunekle" element={<div>Ürün Ekleme Formu</div>} />
        </Routes>

        <div className="flex flex-row">      
          <div className="h-full w-full flex flex-col p-4 gap-4">
        <div className="flex flex-row gap-x-4">
          <div className="h-10 w-10 bg-blue-950 rounded-lg border border-gray-200 shadow-sm"></div>
          <div className="text-black font-bold text-lg py-1">İÇECEK</div>
        </div>
        <div className="w-full border border-gray-200 bg-white shadow-sm rounded-2xl p-3">
          <div className="text-black font-bold text-lg uppercase tracking-wider">
            Genel bakış
          </div>
          <div className=" p-10 gap-x-20 flex flex-row justify-center items-center">
            <div className="h-20 w-50 bg-white border border-gray-200 rounded-2xl shadow-sm">
              <div className="flex flex-col h-full w-full p-3 gap-2">
                <div className="text-slate-400 font-semibold text-xs uppercase">
                  Stok Durumu
                </div>
                <div className="text-slate-900 font-bold text-2xl">%60.91</div>
              </div>
            </div>
            <div className="h-20 w-50 bg-white border border-gray-200 rounded-2xl shadow-sm">
              <div className="flex flex-col h-full w-full p-3 gap-2">
                <div className="text-slate-400 font-semibold text-xs uppercase">
                  ürün adet
                </div>
                <div className="text-slate-900 font-bold text-2xl">212/348</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end py-3">
          <div className="w-50 h-10">
            <div className="block text-sm font-medium text-gray-700">
              Filtrele
            </div>
            <select className="block w-full border border-gray-200 bg-white rounded-md shadow-sm p-2 text-sm">
              <option>Varsayılan</option>
              <option>Düşük stokdan yükseğe</option>
              <option>Yüksek stokdan düşüğe</option>
              <option>Tükenen stoklar</option>
              <option>A'dan Z'ye sırala</option>
            </select>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <ul className="w-full border border-gray-200 rounded-l-2xl">
            <li className="bg-gray-100 h-10 border border-gray-200 rounded-tl-2xl p-1">
              <div className="text-slate-500 text-lg font-bold uppercase tracking-wider">
                Ürünler
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black font-semibold text-lg">
                Filtre Kahve (250g Paket)
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black font-semibold text-lg">
                Siyah Poşet Çay(100'lü Kutu)
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black font-semibold text-lg">
                Pet Su (0.33L/24'lü koli)
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black font-semibold text-lg">
                Soda Maden Suyu (24'lü Kasa)
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black font-semibold text-lg">
                Bitki Çayı Çeşitleri (Kutu)
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black font-semibold text-lg">
                Türk Kahvesi (100g Paket)
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black font-semibold text-lg">
                Süt (1 Litre/Kutu)
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black font-semibold text-lg">
                Meyve Suyu (Kutu)
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black font-semibold text-lg">
                Karton Bardak (1000'li)
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black font-semibold text-lg">
                Bardak Karıştırıcı (Ahşap/1000'li)
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 rounded-bl-2xl p-1">
              <div className="text-black font-semibold text-lg">
                Toz Şeker (1 Kilo)
              </div>
            </li>
          </ul>
          <ul className="w-full border border-gray-300">
            <li className="bg-gray-100 h-10 border border-gray-200 p-1">
              <div className="text-slate-500 text-lg font-bold uppercase">
                adet
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-slate-900 font-bold text-2xl">
                14/40
                <span className="text-sm text-slate-400 font-semibold ml-2">
                  Adet
                </span>
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-slate-900 font-bold text-2xl">
                42/50
                <span className="text-sm text-slate-400 font-semibold ml-2">
                  Adet
                </span>
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-slate-900 font-bold text-2xl">
                55/60
                <span className="text-sm text-slate-400 font-semibold ml-2">
                  Adet
                </span>
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-slate-900 font-bold text-2xl">
                2/15
                <span className="text-sm text-slate-400 font-semibold ml-2">
                  Adet
                </span>
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-slate-900 font-bold text-2xl">
                18/20
                <span className="text-sm text-slate-400 font-semibold ml-2">
                  Adet
                </span>
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-slate-900 font-bold text-2xl">
                3/25
                <span className="text-sm text-slate-400 font-semibold ml-2">
                  Adet
                </span>
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-slate-900 font-bold text-2xl">
                3/10
                <span className="text-sm text-slate-400 font-semibold ml-2">
                  Adet
                </span>
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-slate-900 font-bold text-2xl">
                67/100
                <span className="text-sm text-slate-400 font-semibold ml-2">
                  Adet
                </span>
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-slate-900 font-bold text-2xl">
                8/10
                <span className="text-sm text-slate-400 font-semibold ml-2">
                  Adet
                </span>
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-slate-900 font-bold text-2xl">
                0/6
                <span className="text-sm text-slate-400 font-semibold ml-2">
                  Adet
                </span>
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-slate-900 font-bold text-2xl">
                0/12
                <span className="text-sm text-slate-400 font-semibold ml-2">
                  Adet
                </span>
              </div>
            </li>
          </ul>
          <ul className="w-full border border-gray-300 rounded-r-2xl">
            <li className="bg-gray-100 h-10 border border-gray-200 rounded-tr-2xl p-1">
              <div className="text-slate-500 text-lg font-bold uppercase">
                Stok durumu
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200">
              <div className="text-lg text-red-700 font-bold uppercase p-1">
                stok durumu kritik
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200">
              <div className="text-lg text-green-700 font-bold uppercase p-1">
                stok durumu yeterli
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200">
              <div className="text-lg text-green-700 font-bold uppercase p-1">
                stok durumu yeterli
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200">
              <div className="text-lg text-red-700 font-bold uppercase p-1">
                stok durumu kritik
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200">
              <div className="text-lg text-green-700 font-bold uppercase p-1">
                stok durumu yeterli
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200">
              <div className="text-lg text-red-700 font-bold uppercase p-1">
                stok durumu kritik
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200">
              <div className="text-lg text-red-700 font-bold uppercase p-1">
                stok durumu kritik
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200">
              <div className="text-lg text-green-700 font-bold uppercase p-1">
                stok durumu yeterli
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200">
              <div className="text-lg text-green-700 font-bold uppercase p-1">
                stok durumu yeterli
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200">
              <div className="text-lg text-red-700 font-bold uppercase p-1">
                stok yok
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 rounded-br-2xl">
              <div className="text-lg text-red-700 font-bold uppercase p-1">
                stok yok
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
      </main>
    </div>
  );
}