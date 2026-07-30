import { href, Link } from "react-router-dom";
import Sayac from "./Sayac";
import Gorevler from "./Gorevler";
import GorevItem from "../components/GorevItem";





export default function App() {
  return (
    <>
      <div className="flex flex-row gap-x-3 w-full -ml-60">
        <div className="w-10 h-10 rounded-xl bg-blue-900 shrink-0"></div>
        <div className="font-bold tracking-wider text-2xl">Stok Durumu</div> 
      </div>

      <div className="flex flex-row justify-center items-center gap-x-10 mt-10">
        <div className="flex flex-col bg-white rounded-xl p-4 border shadow border-gray-300">
          <div className="flex flex-row justify-between gap-x-65">
            <div className="uppercase font-bold tracking-wider text-xs text-gray-500">Toplam</div>
            <div className="w-8 h-8 rounded-xl bg-white hover:bg-blue-900 shrink-0"></div>
          </div>
          <div className="text-3xl font-bold">200</div>
          <div className="text-xs text-gray-500">adet</div>
        </div>

        <div className="flex flex-col bg-white rounded-xl p-4 border shadow border-gray-300">
          <div className="flex flex-row justify-between gap-x-65">
            <div className="uppercase font-bold tracking-wider text-xs text-gray-500">Depo Sayısı</div>
            <div className="w-8 h-8 rounded-xl bg-white hover:bg-blue-900 shrink-0"></div>
          </div>
          <div className="text-3xl font-bold">1</div>
          <div className="text-xs text-gray-500">adet</div>
        </div>

        <div className="flex flex-col bg-white rounded-xl p-4 border shadow border-gray-300 mr-5">
          <div className="flex flex-row justify-between gap-x-65">
            <div className="uppercase font-bold tracking-wider text-xs text-gray-500">Doluluk Oranı</div>
            <div className="w-8 h-8 rounded-xl bg-white  hover:bg-blue-900 shrink-0"></div>
          </div>
          <div className="text-3xl font-bold">%85</div>
          <div className="text-xs text-gray-500">yüzdelik oran</div>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center gap-x-10 mt-25">
        <div className="flex flex-col bg-white rounded-xl p-4 border shadow border-gray-300">
          <div className="flex flex-row pr-85">
            <div className="uppercase font-bold tracking-wider text-lg text-gray-500">Kırtasiye</div>
          </div>
          <button className="w-full mt-5 shadow-xl shadow-indigo-500/50 bg-indigo-500 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-lg font-semibold text-sm transition">
            <a href="http://localhost:5173/kirtasiye">Stok Durumunu Görüntüle</a> 
          </button>
        </div>

        <div className="flex flex-col bg-white rounded-xl p-4 border shadow border-gray-300">
          <div className="flex flex-row pr-85">
            <div className="uppercase font-bold tracking-wider text-lg text-gray-500">asd</div>
          </div>
          <button className="w-full mt-5 shadow-xl shadow-indigo-500/50 bg-indigo-500 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-lg font-semibold text-sm transition">
            <a href="http://localhost:5173/abc">Stok Durumunu Görüntüle</a> 
          </button>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center gap-x-10 mt-10">
        <div className="flex flex-col bg-white rounded-xl p-4 border shadow border-gray-300">
          <div className="flex flex-row pr-85">
            <div className="uppercase font-bold tracking-wider text-lg text-gray-500">Kırtasiye</div>
          </div>
          <button className="w-full mt-5 shadow-xl shadow-indigo-500/50 bg-indigo-500 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-lg font-semibold text-sm transition">
            <a href="http://localhost:5173/abc">Stok Durumunu Görüntüle</a> 
          </button>
        </div>

        <div className="flex flex-col bg-white rounded-xl p-4 border shadow border-gray-300">
          <div className="flex flex-row pr-85">
            <div className="uppercase font-bold tracking-wider text-lg text-gray-500">asd</div>
          </div>
          <button className="w-full mt-5 shadow-xl shadow-indigo-500/50 bg-indigo-500 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-lg font-semibold text-sm transition">
            <a href="http://localhost:5173/abc">Stok Durumunu Görüntüle</a> 
          </button>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center gap-x-10 mt-10">
        <div className="flex flex-col bg-white rounded-xl p-4 border shadow border-gray-300">
          <div className="flex flex-row pr-85">
            <div className="uppercase font-bold tracking-wider text-lg text-gray-500">Kırtasiye</div>
          </div>
          <button className="w-full mt-5 shadow-xl shadow-indigo-500/50 bg-indigo-500 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-lg font-semibold text-sm transition">
            <a href="http://localhost:5173/abc">Stok Durumunu Görüntüle</a> 
          </button>
        </div>

        <div className="flex flex-col bg-white rounded-xl p-4 border shadow border-gray-300">
          <div className="flex flex-row pr-85">
            <div className="uppercase font-bold tracking-wider text-lg text-gray-500">asd</div>
          </div>
          <button className="w-full mt-5 shadow-xl shadow-indigo-500/50 bg-indigo-500 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-lg font-semibold text-sm transition">
            <a href="http://localhost:5173/abc">Stok Durumunu Görüntüle</a> 
          </button>
        </div>
      </div>
    </>
  );
}
