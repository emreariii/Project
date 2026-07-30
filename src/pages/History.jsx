import { useEffect, useState } from "react";
import { getHistory, getSymbols } from "../services/api";

import PriceChart from "../components/PriceChart";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

function History() {
  const [symbols, setSymbols] = useState([]);
  const [selectedSymbol, setSelectedSymbol] = useState("");
  const [selectedRange, setSelectedRange] = useState("30d");
  const [historyData, setHistoryData] = useState([]);
  const [symbolsLoading, setSymbolsLoading] = useState(true);
  const [historyLoading, setHistoryLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchSymbols = async () => {
      try {
        const data = await getSymbols();
        const symbolList = Array.isArray(data) ? data : [];

        setSymbols(symbolList);

        if (symbolList.length > 0) {
          setSelectedSymbol(symbolList[0].symbol);
        }
      } catch (error) {
        console.error(error);
        setErrorMessage(
          "Sembol listesi alınamadı. Backend çalışıyor mu kontrol edin."
        );
      } finally {
        setSymbolsLoading(false);
      }
    };

    fetchSymbols();
  }, []);

  useEffect(() => {
    if (!selectedSymbol) {
      return;
    }

    const fetchHistory = async () => {
      try {
        setHistoryLoading(true);
        setErrorMessage("");

        const data = await getHistory(selectedSymbol, selectedRange);
        setHistoryData(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error(error);
        setErrorMessage("Geçmiş veriler alınamadı.");
      } finally {
        setHistoryLoading(false);
      }
    };

    fetchHistory();
  }, [selectedSymbol, selectedRange]);

  if (symbolsLoading) {
    return <Loading text="Sembol listesi yükleniyor..." />;
  }

  if (errorMessage && symbols.length === 0) {
    return <ErrorMessage message={errorMessage} />;
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900">
          Geçmiş Grafik
        </h1>

        <p className="mt-2 text-slate-600">
          Son 30 güne ait piyasa verilerini grafik olarak görüntüle.
        </p>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-2">
        <div>
          <label className="mb-2 block font-medium text-slate-700">
            Ürün Seç
          </label>

          <select
            value={selectedSymbol}
            onChange={(event) => setSelectedSymbol(event.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-slate-500"
          >
            {symbols.map((symbol) => (
              <option key={symbol.symbol} value={symbol.symbol}>
                {symbol.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium text-slate-700">
            Zaman Aralığı
          </label>

          <select
            value={selectedRange}
            onChange={(event) => setSelectedRange(event.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-slate-500"
          >
            <option value="1d">Son 1 Gün</option>
            <option value="7d">Son 7 Gün</option>
            <option value="30d">Son 30 Gün</option>
          </select>
        </div>
      </div>

      {errorMessage && <ErrorMessage message={errorMessage} />}

      <div className="mt-6">
        {historyLoading ? (
          <Loading text="Grafik verisi yükleniyor..." />
        ) : (
          <PriceChart data={historyData} />
        )}
      </div>
    </div>
  );
}

export default History;