import { useState } from "react";
import GorevItem from "../components/GorevItem.jsx";

// id üretmek için basit bir sayaç (gerçek projede backend/veritabanı verir).
let sonId = 3;

const ILK_GOREVLER = [
  { id: 1, baslik: "React'in temellerini öğren", tamam: true },
  { id: 2, baslik: "Bu örneği çalıştır", tamam: false },
  { id: 3, baslik: "Kendi görevini ekle", tamam: false },
];

const FILTRELER = [
  { anahtar: "hepsi", etiket: "Hepsi" },
  { anahtar: "aktif", etiket: "Aktif" },
  { anahtar: "tamam", etiket: "Tamamlanan" },
];

export default function Gorevler() {
  // 3 ayrı state: liste, input metni, aktif filtre.
  const [gorevler, setGorevler] = useState(ILK_GOREVLER);
  const [metin, setMetin] = useState("");
  const [filtre, setFiltre] = useState("hepsi");

  function ekle(e) {
    e.preventDefault(); // formun sayfayı yenilemesini engelle
    const t = metin.trim();
    if (!t) return;
    // State'i ASLA doğrudan değiştirme (push). Yeni dizi oluştur:
    setGorevler([...gorevler, { id: ++sonId, baslik: t, tamam: false }]);
    setMetin("");
  }

  function degistir(id) {
    setGorevler(
      gorevler.map((g) => (g.id === id ? { ...g, tamam: !g.tamam } : g)),
    );
  }

  function sil(id) {
    setGorevler(gorevler.filter((g) => g.id !== id));
  }

  // Filtreye göre gösterilecek alt küme (türetilmiş değer — state değil!).
  const gosterilen = gorevler.filter((g) =>
    filtre === "hepsi" ? true : filtre === "aktif" ? !g.tamam : g.tamam,
  );
  const kalan = gorevler.filter((g) => !g.tamam).length;

  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold">Görevler</h1>

      <form onSubmit={ekle} className="flex gap-2">
        <input
          value={metin}
          onChange={(e) => setMetin(e.target.value)}
          placeholder="Yeni görev yaz ve Ekle'ye bas..."
          className="flex-1 px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700">
          Ekle
        </button>
      </form>

      <div className="flex items-center gap-2">
        {FILTRELER.map((f) => (
          <button
            key={f.anahtar}
            onClick={() => setFiltre(f.anahtar)}
            className={
              "px-3 py-1.5 rounded-full text-sm " +
              (filtre === f.anahtar
                ? "bg-slate-800 text-white"
                : "bg-slate-200 text-slate-600 hover:bg-slate-300")
            }
          >
            {f.etiket}
          </button>
        ))}
        <span className="ml-auto text-sm text-slate-500">{kalan} görev kaldı</span>
      </div>

      <ul className="space-y-2">
        {gosterilen.length === 0 ? (
          <li className="text-center text-slate-400 py-8">Burada hiç görev yok.</li>
        ) : (
          gosterilen.map((g) => (
            <GorevItem key={g.id} gorev={g} onDegistir={degistir} onSil={sil} />
          ))
        )}
      </ul>
    </div>
  );
}
