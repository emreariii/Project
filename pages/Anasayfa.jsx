import { Link } from "react-router-dom";

// Basit bir tanıtım sayfası. Kartlar diğer sayfalara link verir.
function Kart({ to, baslik, aciklama, emoji }) {
  return (
    <Link
      to={to}
      className="block p-5 bg-white rounded-xl border border-slate-200 hover:border-indigo-400 hover:shadow-md transition"
    >
      <div className="text-2xl">{emoji}</div>
      <h2 className="mt-2 font-bold text-lg">{baslik}</h2>
      <p className="mt-1 text-sm text-slate-600">{aciklama}</p>
    </Link>
  );
}

export default function Anasayfa() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-extrabold">Merhaba 👋</h1>
        <p className="mt-2 text-slate-600">
          Bu, <strong>Vite + React + Tailwind</strong> ile yapılmış küçük, çok
          sayfalı bir uygulama. Yukarıdaki menüden gez. Aşağıdaki kartlar React'in
          temel fikirlerini (state, liste, efekt) gösterir.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <Kart
          to="/gorevler"
          emoji="✅"
          baslik="Görevler"
          aciklama="useState ile liste yönetimi: ekle, tamamla, sil, filtrele."
        />
        <Kart
          to="/sayac"
          emoji="🔢"
          baslik="Sayaç"
          aciklama="useState + useEffect: sayacı değiştir, sekme başlığı güncellensin."
        />
      </div>
    </div>
  );
}
