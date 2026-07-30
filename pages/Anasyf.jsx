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
          <Route path="/urunekle" element={<div>Ürün Ekleme Çıkarma</div>} />
        </Routes>
        <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Gösterge Paneli</h1>
          <p className="text-gray-500 mt-1">Hoşgeldiniz anlık stok ve hareketleri görüntüleyebilirsiniz.</p>
        </div>
        <Link to="/urunekle" className="mt-4 sm:mt-0 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-md"
        >
          + Hızlı Ürün Ekle
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Toplam Ürün</p>
              <p className="text-3xl font-bold text-gray-800 mt-2">826</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="w-full bg-gray-100 rounded-full h-1.5">
              <div className="bg-blue-500 h-1.5 rounded-full w-4/7"></div>
            </div>
            <p className="text-xs text-gray-400 mt-2">Depo kapasitesi: %57,16 dolu</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Kritik Stok</p>
              <p className="text-3xl font-bold text-gray-800 mt-2">23</p>
            </div>
          </div>
          <p className="text-sm text-red-600 mt-4 font-medium flex items-center gap-1">
            <span>↑</span> Acil sipariş gerekenler
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Bugün Giren</p>
              <p className="text-3xl font-bold text-gray-800 mt-2">10</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-4 font-medium flex items-center gap-1">
            Normal seviye
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Bugün Çıkan</p>
              <p className="text-3xl font-bold text-gray-800 mt-2">2</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-4 font-medium flex items-center gap-1">
            Normal seviye
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">Son Stok Hareketleri</h2>
          <Link to="/uruntakip" className="text-sm font-medium text-gray-900 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors">
            Tümünü Gör
          </Link>
        </div>
        
        <div className="overflow-x-auto p-2">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="text-xs text-gray-400 uppercase border-b border-gray-100">
              <tr>
                <th className="px-4 py-3 font-medium">Ürün</th>
                <th className="px-4 py-3 font-medium">Kategori</th>
                <th className="px-4 py-3 font-medium">İşlem Türü</th>
                <th className="px-4 py-3 font-medium">Miktar</th>
                <th className="px-4 py-3 font-medium text-right">Durum</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="px-4 py-4 font-medium text-gray-800">Laptop</td>
                <td className="px-4 py-4">Teknoloji</td>
                <td className="px-4 py-4">
                  <span className="flex items-center gap-1.5 text-green-600 font-medium">
                    Giriş
                  </span>
                </td>
                <td className="px-4 py-4 font-medium">+5</td>
                <td className="px-4 py-4 text-right">
                  <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-md">Tamamlandı</span>
                </td>
              </tr>
              <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="px-4 py-4 font-medium text-gray-800">A-4 Fotokopi Kağıdı (100'lü)</td>
                <td className="px-4 py-4">Kırtasiye</td>
                <td className="px-4 py-4">
                  <span className="flex items-center gap-1.5 text-green-600 font-medium">
                   Giriş
                  </span>
                </td>
                <td className="px-4 py-4 font-medium">+5</td>
                <td className="px-4 py-4 text-right">
                  <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-md">Tamamlandı</span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-4 font-medium text-gray-800">Mavi Tükenmez Kalem</td>
                <td className="px-4 py-4">Kırtasiye</td>
                <td className="px-4 py-4">
                  <span className="flex items-center gap-1.5 text-red-500 font-medium">
                    Çıkış
                  </span>
                </td>
                <td className="px-4 py-4 font-medium">-2</td>
                <td className="px-4 py-4 text-right">
                  <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-md">Tamamlandı</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
      </main>
    </div>
  );
}