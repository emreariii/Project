// Tek bir görev satırı. "Sunumcu" bileşen: kendi state'i yok,
// her şeyi props ile alır, olayları yukarı (parent'a) bildirir.
export default function GorevItem({ gorev, onDegistir, onSil }) {
  return (
    <li className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-200">
      <input
        type="checkbox"
        checked={gorev.tamam}
        onChange={() => onDegistir(gorev.id)}
        className="h-5 w-5 accent-indigo-600 cursor-pointer"
      />
      <span className={gorev.tamam ? "line-through text-slate-400" : "text-slate-800"}>
        {gorev.baslik}
      </span>
      <button
        onClick={() => onSil(gorev.id)}
        className="ml-auto text-sm text-rose-600 hover:text-rose-700 hover:underline"
      >
        Sil
      </button>
    </li>
  );
}
