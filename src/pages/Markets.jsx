import { useEffect, useState } from "react";
import { getMarkets } from "../services/api";
import useMarketSocket from "../hooks/useMarketSocket";

import MarketTable from "../components/MarketTable";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

function Markets() {
  const [markets, setMarkets] = useState([]);
  const [selectedType, setSelectedType] = useState("all");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const { liveData, socketStatus } = useMarketSocket();

  useEffect(() => {
    const fetchMarkets = async () => {
      try {
        const data = await getMarkets();
        setMarkets(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error(error);
        setErrorMessage(
          "Piyasa verileri alınamadı. Backend çalışıyor mu kontrol edin."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchMarkets();
  }, []);

  useEffect(() => {
    if (liveData.length > 0) {
      setMarkets(liveData);
    }
  }, [liveData]);

  const filteredMarkets =
    selectedType === "all"
      ? markets
      : markets.filter((market) => market.type === selectedType);

  if (loading) {
    return <Loading text="Piyasa verileri yükleniyor..." />;
  }

  if (errorMessage) {
    return <ErrorMessage message={errorMessage} />;
  }

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Piyasalar</h1>

          <p className="mt-2 text-slate-600">
            Tüm altın ve döviz verilerini canlı olarak görüntüle.
          </p>

          <p className="mt-1 text-sm text-slate-500">
            WebSocket durumu: {socketStatus}
          </p>
        </div>

        <select
          value={selectedType}
          onChange={(event) => setSelectedType(event.target.value)}
          className="rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:border-slate-500"
        >
          <option value="all">Tümü</option>
          <option value="gold">Altın</option>
          <option value="currency">Döviz</option>
        </select>
      </div>

      <MarketTable markets={filteredMarkets} />
    </div>
  );
}

export default Markets;