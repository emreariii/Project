function Loading({ text = "Veriler yükleniyor..." }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 text-center text-slate-600 shadow-sm">
      {text}
    </div>
  );
}

export default Loading;