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
      <div className="h-full w-full flex flex-col p-6 gap-4">
        <div className="flex flex-row gap-x-4">
          <div className="h-10 w-10 bg-blue-950 rounded-lg border border-gray-200 shadow-sm"></div>
          <div className="text-black font-bold text-lg py-1">STOK TAKİP</div>
        </div>
        <div className="flex justify-end py-3">
          <div className="w-50 h-10">
            <div className="block text-sm font-medium text-gray-700">
              Filtrele
            </div>
            <select className="block w-full border border-gray-200 bg-white rounded-md shadow-sm p-2 text-sm">
              <option>Yeniden Eskiye Sırala</option>
              <option>Giren Ürünler</option>
              <option>Çıkan Ürünler</option>
              <option>Eskiden Yeniye Sırala</option>
              <option>A'dan Z'ye sırala</option>
              <option>Teknoloji</option>
              <option>Kırtasiye</option>
              <option>Temizlik & Hijyen</option>
              <option>Mobilya</option>
              <option>Gıda</option>
              <option>İçecek</option>
            </select>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <ul className="w-full border border-gray-200 rounded-l-2xl">
            <li className="bg-white h-10 border border-gray-200 rounded-tl-2xl p-1">
              <div className="text-slate-500 text-lg font-bold uppercase tracking-wider">
                Ürün Adı
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold">Laptop</div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold">
                A-4 Fotokopi Kağıdı (100'lü)
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold">
                Mavi Tükenmez Kalem
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold">Monitör</div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold">Zımba Teli</div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold">
                Ergonomik Ofis Sandalyesi
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold">
                Filtre Kahve
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold">
                Sıvı El Sabunu (5 Litre)
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold">
                Süt (1 Litre/Kutu)
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold">
                Çalışma Masası (Ahşap)
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold">
                Probis (Paket)
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold">
                Yulaflı Bisküvi (Paket)
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold">Mouse</div>
            </li>
            <li className="bg-white h-10 border border-gray-200 rounded-bl-2xl p-1">
              <div className="text-black text-md font-semibold">Klavye</div>
            </li>
          </ul>
          <ul className="w-full">
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-slate-500 text-lg font-bold uppercase tracking-wider">
                Kategori
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold uppercase">
                Teknoloji
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold uppercase">
                kırtasiye
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold uppercase">
                kırtasiye
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold uppercase">
                Teknoloji
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold uppercase">
                kırtasiye
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold uppercase">
                mobilya
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold uppercase">
                içecek
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold uppercase">
                Temizlik & Hijyen
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold uppercase">
                içecek
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold uppercase">
                mobilya
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold uppercase">
                gıda
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold uppercase">
                gıda
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold uppercase">
                Teknoloji
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold uppercase">
                Teknoloji
              </div>
            </li>
          </ul>
          <ul className="w-full">
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-slate-500 text-lg font-bold uppercase tracking-wider">
                İşlem Türü
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-green-700 text-md font-semibold uppercase">
                Giriş
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-green-700 text-md font-semibold uppercase">
                Giriş
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-red-700 text-md font-semibold uppercase">
                çıkış
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-red-700 text-md font-semibold uppercase">
                çıkış
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-green-700 text-md font-semibold uppercase">
                Giriş
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-green-700 text-md font-semibold uppercase">
                Giriş
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-red-700 text-md font-semibold uppercase">
                çıkış
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-green-700 text-md font-semibold uppercase">
                Giriş
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-red-700 text-md font-semibold uppercase">
                çıkış
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-green-700 text-md font-semibold uppercase">
                Giriş
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-red-700 text-md font-semibold uppercase">
                çıkış
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-red-700 text-md font-semibold uppercase">
                çıkış
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-green-700 text-md font-semibold uppercase">
                Giriş
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-red-700 text-md font-semibold uppercase">
                çıkış
              </div>
            </li>
          </ul>
          <ul className="w-full">
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-slate-500 text-lg font-bold uppercase tracking-wider">
                Miktar
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold uppercase">
                +5
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold uppercase">
                +5
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold uppercase">
                -2
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold uppercase">
                -1
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold uppercase">
                +20
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold uppercase">
                +10
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold uppercase">
                -3
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold uppercase">
                +1
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold uppercase">
                -2
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold uppercase">
                +4
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold uppercase">
                -10
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold uppercase">
                -4
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold uppercase">
                +8
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold uppercase">
                -6
              </div>
            </li>
          </ul>
          <ul className="w-full">
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-slate-500 text-lg font-bold uppercase tracking-wider">
                işlem tarihi
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold uppercase">
                16.07.2026 12:16
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold uppercase">
                16.07.2026 11:45
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold uppercase">
                16.07.2026 09:58
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold uppercase">
                14.07.2026 17:26
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold uppercase">
                14.07.2026 16:38
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold uppercase">
                14.07.2026 14:22
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold uppercase">
                14.07.2026 13:41
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold uppercase">
                14.07.2026 09:15
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold uppercase">
                13.07.2026 17:26
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold uppercase">
                13.07.2026 16:21
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold uppercase">
                13.07.2026 15:47
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold uppercase">
                13.07.2026 14:13
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold uppercase">
                12.07.2026 17:12
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold uppercase">
                12.07.2026 15:02
              </div>
            </li>
          </ul>
          <ul className="w-full border border-gray-200 rounded-r-2xl">
            <li className="bg-white h-10 border border-gray-200 rounded-tr-2xl p-1">
              <div className="text-slate-500 text-lg font-bold uppercase tracking-wider">
                İşlemi Yapan
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold uppercase">
                M*** E*** E***
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold uppercase">
                M*** E*** E***
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold uppercase">
                M*** E*** A***
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold uppercase">
                M*** E*** E***
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold uppercase">
                M*** E*** A***
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold uppercase">
                M*** E*** A***
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold uppercase">
                M*** E*** A***
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold uppercase">
                M*** E*** E***
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold uppercase">
                M*** E*** E***
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold uppercase">
                M*** E*** A***
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold uppercase">
                M*** E*** E***
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold uppercase">
                M*** E*** E***
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 p-1">
              <div className="text-black text-md font-semibold uppercase">
                M*** E*** A***
              </div>
            </li>
            <li className="bg-white h-10 border border-gray-200 rounded-br-2xl p-1">
              <div className="text-black text-md font-semibold uppercase">
                M*** E*** E***
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