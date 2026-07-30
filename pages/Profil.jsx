import { Link, Routes, Route } from "react-router-dom";
// import Sayac from "./Sayac";
// import Gorevler from "./Gorevler";
// import GorevItem from "../components/GorevItem";

export default function App() {
  return (
    <div className="flex">
      <nav className="w-64 min-h-screen bg-gray-900 text-white p-4">
        <ul className="flex flex-col gap-5 fixed">
          <li>
            <Link
              to="/anasyf"
              className="flex items-center justify-center gap-5 px-4 py-5 mt-4 rounded-lg text-2xl font-bold tracking-wider uppercase hover:text-gray-200"
            >
              pasifik depo
            </Link>
          </li>

          <li className="mt-10">
            <Link
              to="/anasyf"
              className="flex items-center gap-5 px-4 py-5 hover:bg-gray-800 focus:bg-blue-800 rounded-lg text-xl border border-gray-800 font-medium"
            >
              Ana Sayfa
            </Link>
          </li>

          <li>
            <Link
              to="/profil"
              className="flex items-center gap-5 px-4 py-5 hover:bg-gray-800 focus:bg-blue-800 rounded-lg text-xl border border-gray-800"
            >
              Profil
            </Link>
          </li>

          <li>
            <Link
              to="/urunekle"
              className="flex items-center gap-5 px-4 py-5 hover:bg-gray-800 focus:bg-blue-800 rounded-lg text-xl border border-gray-800"
            >
              Ürün Ekle/Çıkart
            </Link>
          </li>

          <li>
            <Link
              to="/uruntakip"
              className="flex items-center gap-5 px-4 py-5 hover:bg-gray-800 focus:bg-blue-800 rounded-lg text-xl border border-gray-800"
            >
              Stok Takip
            </Link>
          </li>

          <li>
            <Link
              to="/grafikler"
              className="flex items-center gap-5 px-4 py-5 hover:bg-gray-800 focus:bg-blue-800 rounded-lg text-xl border border-gray-800"
            >
              Grafikler
            </Link>
          </li>

          <li className="border-gray-800 gap-5 border rounded-lg text-xl shadow-md bg-gray-900 hover:bg-gray-800">
            <input type="checkbox" id="menu" className="peer hidden" />

            <label
              htmlFor="menu"
              className="flex justify-between items-center px-4 py-5 text-white cursor-pointer"
            >
              <span>Ürünler</span>
              <span className="text-sm">▼</span>
            </label>

            <ul className="max-h-0 overflow-hidden rounded-b-lg bg-gray-50 transition-all duration-300 ease-in-out peer-checked:max-h-80">
              <li>
                <Link to="/kirtasiye" className="block px-6 py-2 text-sm text-gray-600 hover:text-blue-500">
                  Kırtasiye
                </Link>
              </li>
              <li>
                <Link to="/teknoloji" className="block px-6 py-2 text-sm text-gray-600 hover:text-blue-500">
                  Teknoloji
                </Link>
              </li>
              <li>
                <Link to="/mobilya" className="block px-6 py-2 text-sm text-gray-600 hover:text-blue-500">
                  Mobilya
                </Link>
              </li>
              <li>
                <Link to="/icecek" className="block px-6 py-2 text-sm text-gray-600 hover:text-blue-500">
                  İçecek
                </Link>
              </li>
              <li>
                <Link to="/gida" className="block px-6 py-2 text-sm text-gray-600 hover:text-blue-500">
                  Gıda
                </Link>
              </li>
              <li>
                <Link to="/temizlik" className="block px-6 py-2 text-sm text-gray-600 hover:text-blue-500">
                  Temizlik & Hijyen
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <main className="flex-1 p-8 bg-gray-100 min-h-screen flex flex-col">
        <Routes>
          <Route path="/anasyf" element={<div>Ana Sayfa İçeriği</div>} />
          <Route path="/profil" element={<div>Profil İçeriği</div>} />
          <Route path="/urunekle" element={<div>Ürün Ekleme Çıkarma</div>} />
        </Routes>

        <div className="flex flex-row flex-wrap justify-center gap-8 mt-10">
          
          <div className="flex flex-row bg-white p-6 w-full max-w-6xl rounded-xl border shadow-sm border-gray-300">
            <div className="mr-5 w-14 h-14 rounded-2xl bg-gray-900 text-white uppercase flex items-center justify-center shrink-0">
              me
            </div>
            <div className="flex flex-col gap-y-2 flex-1">
              <div className="uppercase text-emerald-400 tracking-wider text-sm font-semibold">kurumsal erişim</div>
              <div className="text-3xl font-bold">Mustafa Emre Arı</div>
              <div className="text-gray-400">Pozisyon bilgisi bekleniyor</div>

              <div className="flex flex-row justify-between gap-x-5 mt-6">
                <div className="flex flex-col flex-1 bg-gray-50 rounded-xl p-4 border shadow-sm border-gray-200">
                  <div className="uppercase font-semibold tracking-wider text-sm text-gray-500">e-posta</div>
                  <div className="text-sm">emre.ari@pasifikteknoloji.com</div>
                </div>
                <div className="flex flex-col flex-1 bg-gray-50 rounded-xl p-4 border shadow-sm border-gray-200">
                  <div className="uppercase font-semibold tracking-wider text-sm text-gray-500">şirket</div>
                  <div className="text-sm">Pasifik Teknoloji A.Ş.</div>
                </div>
                <div className="flex flex-col flex-1 bg-gray-50 rounded-xl p-4 border shadow-sm border-gray-200">
                  <div className="uppercase font-semibold tracking-wider text-sm text-gray-500">pozisyon</div>
                  <div className="text-sm">Pozisyon tanımlı değil</div>
                </div>
              </div>
            </div>

            <div className="w-32 h-8 bg-green-100 border border-green-200 shadow rounded-2xl text-green-800 font-semibold text-sm flex items-center justify-center shrink-0 ml-4">
              Oturum aktif
            </div>
          </div>

          <div className="flex flex-row bg-white p-6 w-full max-w-6xl rounded-xl border shadow-sm border-gray-300 mt-5">
            <div className="mr-5 w-14 h-14 rounded-2xl bg-gray-900 text-white uppercase flex items-center justify-center shrink-0">
              me
            </div>
            <div className="flex flex-col gap-y-2 flex-1">
              <div className="uppercase text-emerald-400 tracking-wider text-sm font-semibold">kurumsal erişim</div>
              <div className="text-3xl font-bold">Mukaddes Ebrar Erpulat</div>
              <div className="text-gray-400">Pozisyon bilgisi bekleniyor</div>

              <div className="flex flex-row justify-between gap-x-5 mt-6">
                <div className="flex flex-col flex-1 bg-gray-50 rounded-xl p-4 border shadow-sm border-gray-200">
                  <div className="uppercase font-semibold tracking-wider text-sm text-gray-500">e-posta</div>
                  <div className="text-sm">ebrar.erpulat@pasifikteknoloji.com</div>
                </div>
                <div className="flex flex-col flex-1 bg-gray-50 rounded-xl p-4 border shadow-sm border-gray-200">
                  <div className="uppercase font-semibold tracking-wider text-sm text-gray-500">şirket</div>
                  <div className="text-sm">Pasifik Teknoloji A.Ş.</div>
                </div>
                <div className="flex flex-col flex-1 bg-gray-50 rounded-xl p-4 border shadow-sm border-gray-200">
                  <div className="uppercase font-semibold tracking-wider text-sm text-gray-500">pozisyon</div>
                  <div className="text-sm">Pozisyon tanımlı değil</div>
                </div>
              </div>
            </div>

            <div className="w-32 h-8 bg-green-100 border border-green-200 shadow rounded-2xl text-green-800 font-semibold text-sm flex items-center justify-center shrink-0 ml-4">
              Oturum aktif
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-20">
            <button className="w-full max-w-xl shadow-lg shadow-blue-600/50 bg-blue-700 hover:bg-blue-900 text-white py-4 rounded-2xl font-bold text-lg uppercase">
              <span className="text-2xl mr-3">+</span> 
              profil ekle
            </button>
        </div>      
      </main>
    </div>
  );
}