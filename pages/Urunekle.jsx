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
        <div className="flex flex-row gap-x-4 px-2">
          <div className="h-10 w-10 bg-blue-950 rounded-lg border border-gray-200 shadow-sm"></div>
          <div className="text-black font-bold text-lg py-1">ÜRÜN EKLE/ÇIKART</div>
        </div>
        <div className="h-96 w-full p-2 gap-2">
          <div className="flex flex-col gap-10">
            <div className="w-full h-10">
              <div className="text-md font-semibold text-center text-gray-700">
                KATEGORİ
              </div>
              <select className="w-full border border-gray-200 bg-white rounded-md shadow-sm p-2 text-sm">
                <option></option>
                <option>Teknoloji</option>
                <option>Kırtasiye</option>
                <option>Temizlik & Hijyen</option>
                <option>Mobilya</option>
                <option>Gıda</option>
                <option>İçecek</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-md font-semibold text-gray-700 text-center">
                ÜRÜN
              </label>

              <input
                type="text"
                placeholder="Ürün Giriniz"
                className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm shadow-sm"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-md font-semibold text-gray-700 text-center">
                ÜRÜN SAYISI
              </label>

              <input
                type="number"
                placeholder="Ürün Sayısını Giriniz"
                className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm shadow-sm"
              />
            </div>
            <div className="h-20 w-full flex flex-row justify-center items-center gap-x-10">
              <div className="bg-green-700 hover:bg-green-600 w-20 h-10 flex justify-center items-center rounded-lg shadow-sm">
                <Link to="/bildirim" className="text-white text-lg font-semibold">
                  EKLE
                </Link>
              </div>
              <div className="bg-red-700 hover:bg-red-600 w-20 h-10 flex justify-center items-center rounded-lg shadow-sm">
                <Link to="/bildirim" className="text-white text-lg font-semibold">
                  ÇIKART
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </main>
    </div>
  );
}