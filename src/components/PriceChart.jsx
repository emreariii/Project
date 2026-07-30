import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

function PriceChart({ data }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="mb-4 text-xl font-bold text-slate-900">
        Geçmiş Fiyat Grafiği
      </h2>

      {data.length === 0 ? (
        <p className="py-10 text-center text-slate-500">
          Grafik için gösterilecek veri bulunamadı.
        </p>
      ) : (
        <div className="h-95">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis
                dataKey="createdAt"
                tickFormatter={(value) =>
                  new Date(value).toLocaleDateString("tr-TR")
                }
              />

              <YAxis />

              <Tooltip
                labelFormatter={(value) =>
                  new Date(value).toLocaleString("tr-TR")
                }
                formatter={(value) =>
                  `${Number(value).toLocaleString("tr-TR")} TL`
                }
              />

              <Legend />

              <Line
                type="monotone"
                dataKey="buyPrice"
                name="Alış"
                strokeWidth={2}
                dot={false}
              />

              <Line
                type="monotone"
                dataKey="sellPrice"
                name="Satış"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}

export default PriceChart;