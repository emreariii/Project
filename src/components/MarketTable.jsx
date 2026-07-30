function MarketTable({ markets }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <h2 className="text-xl font-bold text-slate-900">
          Canlı Piyasa Verileri
        </h2>

        <span className="text-sm text-slate-500">
          Toplam {markets.length} kayıt
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-212.5 text-left">
          <thead>
            <tr className="border-b bg-slate-100 text-slate-700">
              <th className="px-4 py-3">Sembol</th>
              <th className="px-4 py-3">Ad</th>
              <th className="px-4 py-3">Tür</th>
              <th className="px-4 py-3">Alış</th>
              <th className="px-4 py-3">Satış</th>
              <th className="px-4 py-3">Değişim</th>
              <th className="px-4 py-3">Son Güncelleme</th>
            </tr>
          </thead>

          <tbody>
            {markets.length > 0 ? (
              markets.map((market) => {
                const isPositive = Number(market.changePercent) >= 0;

                return (
                  <tr
                    key={market.symbol}
                    className="border-b last:border-b-0 hover:bg-slate-50"
                  >
                    <td className="px-4 py-3 font-bold text-slate-800">
                      {market.symbol}
                    </td>

                    <td className="px-4 py-3 text-slate-700">
                      {market.name}
                    </td>

                    <td className="px-4 py-3">
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
                        {market.type}
                      </span>
                    </td>

                    <td className="px-4 py-3 font-medium text-slate-800">
                      {Number(market.buyPrice).toLocaleString("tr-TR")} TL
                    </td>

                    <td className="px-4 py-3 font-medium text-slate-800">
                      {Number(market.sellPrice).toLocaleString("tr-TR")} TL
                    </td>

                    <td
                      className={
                        isPositive
                          ? "px-4 py-3 font-semibold text-green-600"
                          : "px-4 py-3 font-semibold text-red-600"
                      }
                    >
                      {isPositive ? "+" : ""}
                      {market.changePercent}%
                    </td>

                    <td className="px-4 py-3 text-slate-500">
                      {market.updatedAt
                        ? new Date(market.updatedAt).toLocaleString("tr-TR")
                        : "-"}
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="7" className="py-6 text-center text-slate-500">
                  Gösterilecek piyasa verisi bulunamadı.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MarketTable;