function MarketCard({ title, symbol, buyPrice, sellPrice, changePercent }) {
  const isPositive = Number(changePercent) >= 0;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-sm text-slate-500">{title}</h3>

          <p className="mt-1 text-xs font-semibold uppercase text-slate-400">
            {symbol}
          </p>
        </div>

        <span
          className={
            isPositive
              ? "rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700"
              : "rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700"
          }
        >
          {isPositive ? "+" : ""}
          {changePercent}%
        </span>
      </div>

      <div className="mt-5 space-y-2">
        <p className="text-lg font-bold text-slate-900">
          Alış: {Number(buyPrice).toLocaleString("tr-TR")} TL
        </p>

        <p className="text-lg font-semibold text-slate-700">
          Satış: {Number(sellPrice).toLocaleString("tr-TR")} TL
        </p>
      </div>
    </div>
  );
}

export default MarketCard;