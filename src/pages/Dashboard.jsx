import { useEffect, useState } from "react";
import { getMarkets } from "../services/api";
import useMarketSocket from "../hooks/useMarketSocket";

import MarketCard from "../components/MarketCard";
import MarketTable from "../components/MarketTable";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

function Dashboard() {
  const [markets, setMarkets] = useState([]);
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

  const featuredMarkets = markets.slice(0, 4);

  if (loading) {
    return <Loading text="Dashboard verileri yükleniyor..." />;
  }

  if (errorMessage) {
    return <ErrorMessage message={errorMessage} />;
  }

  return (
    <div>
      <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>

          <p className="mt-2 text-slate-600">
            Canlı altın, döviz ve borsa verilerini buradan takip edebilirsin.
          </p>
        </div>

        <div className="rounded-lg bg-white px-4 py-2 text-sm shadow-sm">
          WebSocket:{" "}
          <span className="font-semibold text-slate-900">{socketStatus}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {featuredMarkets.map((market) => (
          <MarketCard
            key={market.symbol}
            title={market.name}
            symbol={market.symbol}
            buyPrice={market.buyPrice}
            sellPrice={market.sellPrice}
            changePercent={market.changePercent}
          />
        ))}
      </div>

      <div className="mt-6">
        <MarketTable markets={markets} />
      </div>
    </div>
  );
}

export default Dashboard;