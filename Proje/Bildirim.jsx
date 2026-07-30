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

    <div className="h-full flex flex-row">
      <div className="h-full w-full flex justify-center items-center">
        <div className="h-70 w-150 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col items-center justify-center gap-5">
          <div className="text-green-700 text-5xl font-bold">✓</div>
          <div className="text-green-700 text-2xl font-bold tracking-wider uppercase">
            işleminiz başarıyla gerçekleşmiştir
          </div>

          <div className="text-black font-semibold">
            Devam Etmek İçin Ana Sayfaya Dönünüz
          </div>
          <div className="bg-green-700 hover:bg-green-600 w-30 h-10 flex justify-center items-center rounded-2xl shadow-sm">
            <Link to="/anasyf" className="text-white text-lg font-semibold">
              Ana Sayfa
            </Link>
          </div>
        </div>
      </div>
    </div>
      </main>
    </div>
  );
}