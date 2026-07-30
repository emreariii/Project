import { NavLink } from "react-router-dom";

// NavLink, normal Link gibidir ama o an aktif olan sayfayı bilir (isActive).
// Böylece bulunduğun sekmeyi vurgulayabiliriz.
const linkClass = ({ isActive }) =>
  "px-3 py-2 rounded-lg text-sm font-medium transition " +
  (isActive
    ? "bg-indigo-600 text-white"
    : "text-slate-600 hover:bg-slate-200");

export default function Navbar() {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
      <nav className="mx-auto max-w-3xl px-4 h-14 flex items-center gap-2">
        <span className="font-extrabold text-indigo-600 mr-3">⚡ Mini App</span>
        <NavLink to="/" className={linkClass} end>
          Anasayfa
        </NavLink>
        <NavLink to="/gorevler" className={linkClass}>
          Görevler
        </NavLink>
        <NavLink to="/sayac" className={linkClass}>
          Sayaç
        </NavLink>
      </nav>
    </header>
  );
}
