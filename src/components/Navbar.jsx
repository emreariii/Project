import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  // Menünün açık/kapalı durumunu tutacak state
  const [isOpen, setIsOpen] = useState(false);

  const getLinkClass = ({ isActive }) =>
    isActive
      ? "rounded-lg bg-slate-900 px-4 py-2 text-white"
      : "rounded-lg px-4 py-2 text-slate-700 hover:bg-slate-200";

  // Menüdeki bir linke tıklandığında mobilde menüyü kapatmak için fonksiyon
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="border-b bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-col px-4 py-4 md:flex-row md:items-center md:justify-between">
        
        {/* Başlık ve Mobil Menü Butonu */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Piyasa Takip Paneli
            </h1>
            <p className="text-sm text-slate-500">
              Altın, döviz ve borsa verileri canlı takip ekranı
            </p>
          </div>

          {/* Mobil Menü Aç/Kapat Butonu (Sadece mobilde görünür) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200 md:hidden"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Menüyü aç</span>
            {/* Açık/Kapalı durumuna göre ikon değişimi */}
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Navigasyon Linkleri */}
        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } mt-4 flex-col gap-2 md:mt-0 md:flex md:flex-row`}
        >
          <NavLink to="/dashboard" onClick={closeMenu} className={getLinkClass}>
            Dashboard
          </NavLink>

          <NavLink to="/markets" onClick={closeMenu} className={getLinkClass}>
            Piyasalar
          </NavLink>

          <NavLink to="/history" onClick={closeMenu} className={getLinkClass}>
            Geçmiş Grafik
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;