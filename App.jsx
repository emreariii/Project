import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Anasayfa from "./pages/Anasayfa.jsx";
import Gorevler from "./pages/Gorevler.jsx";
import Sayac from "./pages/Sayac.jsx";
import Abc from "./pages/Abc.jsx";
import Aaa from "./pages/Aaa.jsx";
import Ornek from "./pages/Ornek.jsx";
import Card from "./pages/Card.jsx";
import Framer from "./pages/Framer.jsx";
import Clon from "./pages/Clon.jsx";
import Stoktakip from "./pages/Stoktakip.jsx";
import Anasyf from "./pages/Anasyf.jsx";
import Profil from "./pages/Profil.jsx";
import Urunekle from "./pages/Urunekle.jsx";
import Uruntakip from "./pages/Uruntakip.jsx";
import Grafikler from "./pages/Grafikler.jsx";
import Kirtasiye from "./pages/Kirtasiye.jsx";
import Teknoloji from "./pages/Teknoloji.jsx";
import Mobilya from "./pages/Mobilya.jsx";
import Icecek from "./pages/Icecek.jsx";
import Gida from "./pages/Gida.jsx";
import Temizlik from "./pages/Temizlik.jsx";
import Bildirim from "./pages/Bildirim.jsx";
import Framer2 from "./pages/Framer2.jsx";





// App, uygulamanın iskeleti: üstte sabit Navbar, altında değişen sayfa (route).
// Hangi URL'de hangi bileşenin görüneceğini Routes/Route belirler.
export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Navbar />
      <main className="">
        <Routes>
          <Route path="/" element={<Anasayfa />} />
          <Route path="/gorevler" element={<Gorevler />} />
          <Route path="/abc" element={<Abc />} />
          <Route path="/aaa" element={<Aaa />} />
          <Route path="/card" element={<Card />} />
          <Route path="/framer" element={<Framer />} />
          <Route path="/clon" element={<Clon />} />
          <Route path="/stoktakip" element={<Stoktakip />} /> 
          <Route path="/profil" element={<Profil />} />        
          <Route path="/anasyf" element={<Anasyf />} />
          <Route path="/ornek" element={<Ornek />} />
          <Route path="/sayac" element={<Sayac />} />
          <Route path="/urunekle" element={<Urunekle />} />
          <Route path="/uruntakip" element={<Uruntakip />} />
          <Route path="/grafikler" element={<Grafikler />} />
          <Route path="/kirtasiye" element={<Kirtasiye />} />
          <Route path="/mobilya" element={<Mobilya />} />
          <Route path="/teknoloji" element={<Teknoloji />} />
          <Route path="/gida" element={<Gida />} />
          <Route path="/icecek" element={<Icecek />} />
          <Route path="/temizlik" element={<Temizlik />} />
          <Route path="/bildirim" element={<Bildirim />} />
          <Route path="/framer2" element={<Framer2 />} />


          <Route path="*" element={<p className="text-slate-500">Sayfa bulunamadı.</p>} />
        </Routes>
      </main>
    </div>
  );
}
