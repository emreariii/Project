import { useState, useEffect } from "react";

// useState + useEffect'i birlikte gösteren küçük bir demo.
export default function Sayac() {
  const [sayi, setSayi] = useState(0);

  // useEffect: "sayi" her değiştiğinde tarayıcı sekmesinin başlığını güncelle.
  // return ile temizleme (cleanup): bileşen ekrandan kalkınca başlığı eski haline al.
  useEffect(() => {
    document.title = `Sayaç: ${sayi}`;
    return () => {
      document.title = "Mini App";
    };
  }, [sayi]); // bağımlılık dizisi: sadece "sayi" değişince çalışır

  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold">Sayaç</h1>
      <p className="text-slate-600">
        Butonlara bas; aşağıdaki sayı ve <strong>tarayıcı sekmesinin başlığı</strong>{" "}
        birlikte güncellenir. Bu, <code>useEffect</code>'in iş başında hâli.
      </p>

      <div className="flex items-center gap-4">
        <button
          onClick={() => setSayi((s) => s - 1)}
          className="w-12 h-12 rounded-xl bg-slate-200 text-2xl font-bold hover:bg-slate-300"
        >
          −
        </button>
        <span className="text-5xl font-extrabold tabular-nums w-20 text-center">
          {sayi}
        </span>
        <button
          onClick={() => setSayi((s) => s + 1)}
          className="w-12 h-12 rounded-xl bg-indigo-600 text-white text-2xl font-bold hover:bg-indigo-700"
        >
          +
        </button>
        <button
          onClick={() => setSayi(0)}
          className="ml-2 px-4 py-2 rounded-lg border border-slate-300 text-slate-600 hover:bg-slate-100"
        >
          Sıfırla
        </button>
      </div>

      <p className="text-sm text-slate-500">
        İpucu: <code>setSayi((s) =&gt; s + 1)</code> — önceki değere göre güncellemek
        her zaman en güvenli yoldur.
      </p>
    </div>
  );
}
