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
        <div className="flex flex-row gap-x-4 px-9">
          <div className="h-10 w-10 bg-blue-950 rounded-lg border border-gray-200 shadow-sm"></div>
          <div className="text-black font-bold text-lg py-1">GRAFİKLER</div>
        </div>
      </div>
    </div>

<div className="max-w-5xl mx-auto p-6 bg-white rounded-xl shadow-lg font-sans mt-5">
  <h2 className="text-xl font-bold text-gray-700 mb-8 text-center">Kırtasiye</h2>
  
  <div className="flex">
    
    <div className="flex flex-col justify-between items-end pr-4 border-r-2 border-gray-400 text-sm font-medium text-gray-500 h-72 pb-6">
      <span>%100</span>
      <span>%90</span>
      <span>%80</span>
      <span>%70</span>
      <span>%60</span>
      <span>%50</span>
      <span>%40</span>
      <span>%30</span>
      <span>%20</span>
      <span>%10</span>
      <span>%0</span>
    </div>

    <div className="flex flex-col w-full">
      <div className="flex items-end justify-around w-full h-72 border-b-2 border-gray-400 relative">
        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-sm" 
          style={{ height: '35%' }}
        ></div>
        
        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-sm" 
          style={{ height: '76%' }}
        ></div>
        
        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-sm" 
          style={{ height: '20%' }}
        ></div>
        
        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-sm" 
          style={{ height: '88%' }}
        ></div>
        
        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-md" 
          style={{ height: '100%' }}
        ></div>

        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-md" 
          style={{ height: '20%' }}
        ></div>

        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-md" 
          style={{ height: '0%' }}
        ></div>
      </div>

      <div className="flex justify-around w-full pt-3 text-sm font-medium text-gray-500">
        <span className="w-15 text-center">A-4 Fotokopi Kağıdı</span>
        <span className="w-15 text-center">Mavi Tükenmez Kalem</span>
        <span className="w-15 text-center">Zımba Teli</span>
        <span className="w-15 text-center">Şefaf Dosya</span>
        <span className="w-15 text-center">Geniş Klasör</span>
        <span className="w-15 text-center">A-5 Spiralli Defter</span>
        <span className="w-15 text-center">Post-it</span>
      </div>

    </div>
  </div>
</div>

<div className="max-w-5xl mx-auto p-6 bg-white rounded-xl shadow-lg font-sans mt-15">
  <h2 className="text-xl font-bold text-gray-700 mb-8 text-center">Teknoloji</h2>
  
  <div className="flex">
    
    <div className="flex flex-col justify-between items-end pr-4 border-r-2 border-gray-400 text-sm font-medium text-gray-500 h-72 pb-6">
      <span>%100</span>
      <span>%90</span>
      <span>%80</span>
      <span>%70</span>
      <span>%60</span>
      <span>%50</span>
      <span>%40</span>
      <span>%30</span>
      <span>%20</span>
      <span>%10</span>
      <span>%0</span>
    </div>

    <div className="flex flex-col w-full">
      <div className="flex items-end justify-around w-full h-72 border-b-2 border-gray-400 relative">
        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-sm" 
          style={{ height: '83%' }}
        ></div>
        
        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-sm" 
          style={{ height: '88%' }}
        ></div>
        
        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-sm" 
          style={{ height: '87%' }}
        ></div>
        
        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-sm" 
          style={{ height: '90%' }}
        ></div>
        
        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-md" 
          style={{ height: '100%' }}
        ></div>

        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-md" 
          style={{ height: '80%' }}
        ></div>

        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-md" 
          style={{ height: '80%' }}
        ></div>

        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-md" 
          style={{ height: '100%' }}
        ></div>

      </div>

      <div className="flex justify-around w-full pt-3 text-sm font-medium text-gray-500">
        <span className="w-15 text-center">Monitör</span>
        <span className="w-15 text-center">Laptop</span>
        <span className="w-15 text-center">Mouse</span>
        <span className="w-15 text-center">Klavye</span>
        <span className="w-15 text-center">Yazıcı</span>
        <span className="w-15 text-center">Çoklu Priz</span>
        <span className="w-15 text-center">Televizyon</span>
        <span className="w-15 text-center">Soğutucu</span>
      </div>

    </div>
  </div>
</div>

<div className="max-w-5xl mx-auto p-6 bg-white rounded-xl shadow-lg font-sans mt-15">
  <h2 className="text-xl font-bold text-gray-700 mb-8 text-center">Mobilya</h2>
  
  <div className="flex">
    
    <div className="flex flex-col justify-between items-end pr-4 border-r-2 border-gray-400 text-sm font-medium text-gray-500 h-72 pb-6">
      <span>%100</span>
      <span>%90</span>
      <span>%80</span>
      <span>%70</span>
      <span>%60</span>
      <span>%50</span>
      <span>%40</span>
      <span>%30</span>
      <span>%20</span>
      <span>%10</span>
      <span>%0</span>
    </div>

    <div className="flex flex-col w-full">
      <div className="flex items-end justify-around w-full h-72 border-b-2 border-gray-400 relative">
        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-sm" 
          style={{ height: '90%' }}
        ></div>
        
        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-sm" 
          style={{ height: '95%' }}
        ></div>
        
        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-sm" 
          style={{ height: '34%' }}
        ></div>
        
        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-sm" 
          style={{ height: '33%' }}
        ></div>
        
        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-md" 
          style={{ height: '50%' }}
        ></div>

        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-md" 
          style={{ height: '50%' }}
        ></div>

        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-md" 
          style={{ height: '70%' }}
        ></div>
        
        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-md" 
          style={{ height: '0%' }}
        ></div>

        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-md" 
          style={{ height: '80%' }}
        ></div>
      </div>

      <div className="flex justify-around w-full pt-3 text-sm font-medium text-gray-500">
        <span className="w-15 text-center">Ergonomik Ofis Sandalyesi</span>
        <span className="w-15 text-center">Çalışma Masası</span>
        <span className="w-15 text-center">3 Çekmeceli Keson</span>
        <span className="w-15 text-center">Metal Evrak Dolabı</span>
        <span className="w-15 text-center">Toplantı Masası</span>
        <span className="w-15 text-center">Ofis Bekleme Koltuğu</span>
        <span className="w-15 text-center">Stor Perde</span>
        <span className="w-15 text-center">Ayaklı Elbise Askılığı</span>
        <span className="w-15 text-center">Metal Kitaplık</span>
      </div>

    </div>
  </div>
</div>

<div className="max-w-5xl mx-auto p-6 bg-white rounded-xl shadow-lg font-sans mt-15">
  <h2 className="text-xl font-bold text-gray-700 mb-8 text-center">İçecek</h2>
  
  <div className="flex">
    
    <div className="flex flex-col justify-between items-end pr-4 border-r-2 border-gray-400 text-sm font-medium text-gray-500 h-72 pb-6">
      <span>%100</span>
      <span>%90</span>
      <span>%80</span>
      <span>%70</span>
      <span>%60</span>
      <span>%50</span>
      <span>%40</span>
      <span>%30</span>
      <span>%20</span>
      <span>%10</span>
      <span>%0</span>
    </div>

    <div className="flex flex-col w-full">
      <div className="flex items-end justify-around w-full h-72 border-b-2 border-gray-400 relative">
        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-sm" 
          style={{ height: '35%' }}
        ></div>
        
        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-sm" 
          style={{ height: '84%' }}
        ></div>
        
        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-sm" 
          style={{ height: '92%' }}
        ></div>
        
        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-sm" 
          style={{ height: '13%' }}
        ></div>
        
        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-md" 
          style={{ height: '90%' }}
        ></div>

        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-md" 
          style={{ height: '12%' }}
        ></div>

        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-md" 
          style={{ height: '30%' }}
        ></div>
        
        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-md" 
          style={{ height: '67%' }}
        ></div>

        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-md" 
          style={{ height: '80%' }}
        ></div>

        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-md" 
          style={{ height: '0%' }}
        ></div>

        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-md" 
          style={{ height: '0%' }}
        ></div>
      </div>

      <div className="flex justify-around w-full pt-3 text-sm font-medium text-gray-500">
        <span className="w-15 text-center">Filtre Kahve</span>
        <span className="w-15 text-center">Siyah Poşet Çay</span>
        <span className="w-15 text-center">Pet Su</span>
        <span className="w-15 text-center">Soda Maden Suyu</span>
        <span className="w-15 text-center">Bitki Çayı Çeşitleri</span>
        <span className="w-15 text-center">Türk Kahvesi</span>
        <span className="w-15 text-center">Süt</span>
        <span className="w-15 text-center">Meyve Suyu</span>
        <span className="w-15 text-center">Karton Bardak</span>
        <span className="w-15 text-center">Bardak karıştırıcı</span>
        <span className="w-15 text-center">Toz Şeker</span>
      </div>

    </div>
  </div>
</div>

<div className="max-w-5xl mx-auto p-6 bg-white rounded-xl shadow-lg font-sans mt-15">
  <h2 className="text-xl font-bold text-gray-700 mb-8 text-center">Gıda</h2>
  
  <div className="flex">
    
    <div className="flex flex-col justify-between items-end pr-4 border-r-2 border-gray-400 text-sm font-medium text-gray-500 h-72 pb-6">
      <span>%100</span>
      <span>%90</span>
      <span>%80</span>
      <span>%70</span>
      <span>%60</span>
      <span>%50</span>
      <span>%40</span>
      <span>%30</span>
      <span>%20</span>
      <span>%10</span>
      <span>%0</span>
    </div>

    <div className="flex flex-col w-full">
      <div className="flex items-end justify-around w-full h-72 border-b-2 border-gray-400 relative">
        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-sm" 
          style={{ height: '38%' }}
        ></div>
        
        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-sm" 
          style={{ height: '90%' }}
        ></div>
        
        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-sm" 
          style={{ height: '20%' }}
        ></div>
        
        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-sm" 
          style={{ height: '73%' }}
        ></div>
        
        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-md" 
          style={{ height: '0%' }}
        ></div>

        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-md" 
          style={{ height: '58%' }}
        ></div>

        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-md" 
          style={{ height: '20%' }}
        ></div>
        
        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-md" 
          style={{ height: '0%' }}
        ></div>

        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-md" 
          style={{ height: '90%' }}
        ></div>

        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-md" 
          style={{ height: '27%' }}
        ></div>

        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-md" 
          style={{ height: '63%' }}
        ></div>
      </div>

      <div className="flex justify-around w-full pt-3 text-sm font-medium text-gray-500">
        <span className="w-15 text-center">Tuzlu Kraker</span>
        <span className="w-15 text-center">Çikolatalı Gofret</span>
        <span className="w-15 text-center">Karışık Kuruyemiş</span>
        <span className="w-15 text-center">Yulaflı Bisküvi</span>
        <span className="w-15 text-center">Probis</span>
        <span className="w-15 text-center">Hazır Çorba</span>
        <span className="w-15 text-center">Elma</span>
        <span className="w-15 text-center">Muz</span>
        <span className="w-15 text-center">Form Pirinç Patlağı</span>
        <span className="w-15 text-center">Halley</span>
        <span className="w-15 text-center">Meyve Bar</span>
      </div>

    </div>
  </div>
</div>

<div className="max-w-5xl mx-auto p-6 bg-white rounded-xl shadow-lg font-sans mt-15">
  <h2 className="text-xl font-bold text-gray-700 mb-8 text-center">Mobilya</h2>
  
  <div className="flex">
    
    <div className="flex flex-col justify-between items-end pr-4 border-r-2 border-gray-400 text-sm font-medium text-gray-500 h-72 pb-6">
      <span>%100</span>
      <span>%90</span>
      <span>%80</span>
      <span>%70</span>
      <span>%60</span>
      <span>%50</span>
      <span>%40</span>
      <span>%30</span>
      <span>%20</span>
      <span>%10</span>
      <span>%0</span>
    </div>

    <div className="flex flex-col w-full">
      <div className="flex items-end justify-around w-full h-72 border-b-2 border-gray-400 relative">
        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-sm" 
          style={{ height: '50%' }}
        ></div>
        
        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-sm" 
          style={{ height: '93%' }}
        ></div>
        
        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-sm" 
          style={{ height: '25%' }}
        ></div>
        
        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-sm" 
          style={{ height: '100%' }}
        ></div>
        
        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-md" 
          style={{ height: '80%' }}
        ></div>

        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-md" 
          style={{ height: '15%' }}
        ></div>

        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-md" 
          style={{ height: '0%' }}
        ></div>
        
        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-md" 
          style={{ height: '30%' }}
        ></div>

        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-md" 
          style={{ height: '73%' }}
        ></div>

        <div 
          className="w-15 bg-blue-900 hover:bg-blue-700 transition-all duration-300 rounded-t-sm z-10 cursor-pointer shadow-md" 
          style={{ height: '50%' }}
        ></div>
      </div>

      <div className="flex justify-around w-full pt-3 text-sm font-medium text-gray-500">
        <span className="w-15 text-center">Sıvı El Sabunu</span>
        <span className="w-15 text-center">Kağıt Havlu</span>
        <span className="w-15 text-center">Yüzey Temizleyici</span>
        <span className="w-15 text-center">Mikrofiber Temizlik Bezi</span>
        <span className="w-15 text-center">Bulaşık Sıvısı</span>
        <span className="w-15 text-center">Bulaşık Makinesi Tableti</span>
        <span className="w-15 text-center">Büyük Boy Çöp Torbası</span>
        <span className="w-15 text-center">Çamaşır Suyu</span>
        <span className="w-15 text-center">El Dezenfektanı</span>
        <span className="w-15 text-center">Kolonya</span>
      </div>

    </div>
  </div>
</div>
      </main>
    </div>
  );
}