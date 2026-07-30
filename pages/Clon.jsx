import { href, Link } from "react-router-dom";
import Sayac from "./Sayac";
import Gorevler from "./Gorevler";
import GorevItem from "../components/GorevItem";
import { div } from "framer-motion/client";

export default function App() {
  return (
    <>
    <div className="flex flex-col w-screen min-h-screen text-black bg-gray-100 p-2">

      <div className="flex flex-row gap-x-3 items-center m-5">
        <div className="w-10 h-10 rounded-xl bg-white shrink-0"></div>

        <div className="flex flex-col gap-y-1">
          <div className="font-bold tracking-wider text-2xl">Genel bakış</div>
          <div className="text-gray-400">Profil, zimmet ve destek kayıtlarımızın güncel özeti.</div>
        </div> 
      </div>

      <div className="flex flex-row bg-white m-5 h-70 rounded-xl border shadow-xl border-gray-300">
        <div className="m-5 w-14 h-14 rounded-2xl bg-slate-900 text-white uppercase flex items-center justify-center translate-y-5 shrink-0">me</div>        
        <div className="flex flex-col gap-y-2 flex-1 pt-5">
          <div className="uppercase text-emerald-400 tracking-wider text-sm font-semibold">kurumsal erişim</div>
          <div className="text-3xl font-bold">Mustafa Emre Arı</div>
          <div className="text-gray-400">Pozisyon bilgisi bekleniyor</div>
          
          <div className="flex flex-row justify-between gap-x-5 translate-y-10">
            <div className="flex flex-col w-70 bg-gray-100 rounded-xl p-4 border shadow border-gray-200">
              <div className="uppercase font-semibold tracking-wider text-sm text-gray-500">e-posta</div>
              <div className="text-sm">emre.ari@pasifikteknoloji.com</div>
            </div>
            <div className="flex flex-col w-70 bg-gray-100 rounded-xl p-4 border shadow border-gray-200">
              <div className="uppercase font-semibold tracking-wider text-sm text-gray-500">şirket</div>
              <div className="text-sm">Pasifik Teknoloji A.Ş.</div>
            </div>
            <div className="flex flex-col w-70 bg-gray-100 rounded-xl p-4 border shadow border-gray-200">
              <div className="uppercase font-semibold tracking-wider text-sm text-gray-500">pozisyon</div>
              <div className="text-sm">Pozisyon tanımlı değil</div>
            </div>
          </div>
        </div>

        <div className="w-35 h-7 bg-green-100 border-2 mt-9 mr-5 border-green-200 shadow rounded-2xl text-green-800 font-semibold text-sm flex items-center justify-center shrink-0">
          Oturum aktif
        </div>

        <div className="flex flex-col bg-gray-100 w-193 rounded-r-xl py-3 px-2 gap-y-2">
          <div className="flex flex-col ml-2">
            <div className="tracking-wider text-xs font-semibold uppercase text-gray-500">öncelikli durum</div>
            <div className="font-semibold mb-2">Kayıtlarınıza ait güncel özet</div>
          </div>
          
          <div className="bg-white rounded-xl flex flex-row items-center p-2 mx-1 gap-x-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-200 border border-emerald-300 shrink-0"></div>
            <div className="flex flex-col">
              <div className="font-semibold text-sm">Açık destek talebiniz yok</div>
              <div className="text-sm">Açık destek talebi bulunmuyor.</div>
            </div>
          </div>

          <div className="bg-white rounded-xl flex flex-row items-center p-2 mx-1 gap-x-3">
            <div className="w-8 h-8 rounded-xl bg-gray-100 border border-gray-200 shrink-0"></div>
            <div className="flex flex-col">
              <div className="font-semibold text-sm">Aktif zimmet kaydı yok</div>
              <div className="text-sm">Size atanmış aktif araç veya ekipman görünmüyor.</div>
            </div>
          </div>

          <div className="bg-white rounded-xl flex flex-row items-center p-2 mx-1 gap-x-3">
            <div className="w-8 h-8 rounded-xl bg-sky-200 border border-sky-300 shrink-0"></div>
            <div className="flex flex-col">
              <div className="font-semibold text-sm">Profil bilgileri</div>
              <div className="text-sm">İletişim ve bağlı şirket kayıtlarınız güncel özette yer alır.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between gap-x-3 translate-y-3">
        <div className="flex flex-col bg-white rounded-xl p-4 border shadow border-gray-300 ml-5">
          <div className="flex flex-row justify-between gap-x-65">
            <div className="uppercase font-bold tracking-wider text-xs text-gray-500">aktif zimmet</div>
            <div className="w-8 h-8 rounded-xl bg-sky-100 border border-sky-200 shrink-0"></div>
          </div>
          <div className="text-3xl font-bold">0</div>
          <div className="text-xs text-gray-500">Kullanımızda</div>
        </div>
        
        <div className="flex flex-col bg-white rounded-xl p-4 border shadow border-gray-300">
          <div className="flex flex-row justify-between gap-x-65">
            <div className="uppercase font-bold tracking-wider text-xs text-gray-500">açık destek</div>
            <div className="w-8 h-8 rounded-xl bg-amber-100 border border-amber-200 shrink-0"></div>
          </div>
          <div className="text-3xl font-bold">0</div>
          <div className="text-xs text-gray-500">Takipte</div>
        </div>

        <div className="flex flex-col bg-white rounded-xl p-4 border shadow border-gray-300">
          <div className="flex flex-row justify-between gap-x-65">
            <div className="uppercase font-bold tracking-wider text-xs text-gray-500">toplam kayıt</div>
            <div className="w-8 h-8 rounded-xl bg-gray-100 border border-gray-200 shrink-0"></div>
          </div>
          <div className="text-3xl font-bold">0</div>
          <div className="text-xs text-gray-500">Zimmet geçmişi</div>
        </div>

        <div className="flex flex-col bg-white rounded-xl p-4 border shadow border-gray-300 mr-5">
          <div className="flex flex-row justify-between gap-x-65">
            <div className="uppercase font-bold tracking-wider text-xs text-gray-500">şirket</div>
            <div className="w-8 h-8 rounded-xl bg-blue-100 border border-blue-200 shrink-0"></div>
          </div>
          <div className="text-3xl font-bold">1</div>
          <div className="text-xs text-gray-500">Bağlı kayıt</div>
        </div>
      </div>

      <div className="flex flex-row justify-between gap-x-5 translate-y-10">
        <div className=" bg-white rounded-xl p-6 border shadow border-gray-300 ml-5">
          <div className="flex flex-col justify-between gap-y-5">
            <div className="uppercase font-bold text-xs text-gray-400">zimmetlerim</div>
            <div className="flex flex-row justify-between gap-x-166 -mt-5">
              <div className="font-bold text-lg">Araç ve ekipman görünümü</div>
              <div className="w-8 h-8 rounded-xl bg-green-100 border border-green-200 shrink-0"></div>
            </div>
            <div className="flex flex-col text-center">
              <div className="bg-gray-100 border   border-dotted border-gray-400 rounded-xl p-7">
                <div className="w-8 h-8 rounded-xl bg-sky-100 border border-sky-200 shrink-0 m-auto"></div>
                <div className="text-lg font-bold">Aktif zimmet bulunmuyor</div>
                <div className="text-sm font-semibold text-gray-500">Size atanmış aktif araç veya ekipman olduğunda burada görünecek.</div>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-white rounded-xl p-6 border shadow border-gray-300 mr-5">
          <div className="flex flex-col justify-between gap-y-5">
            <div className="uppercase font-bold text-xs text-gray-400">destek akışı</div>
            <div className="flex flex-row justify-between gap-x-117 -mt-5">
              <div className="font-bold text-lg">Son talepler</div>
              <div className="w-8 h-8 rounded-xl bg-amber-100 border border-amber-200 shrink-0"></div>
            </div>
            <div className="flex flex-col text-center">
              <div className="bg-gray-100 border border-dotted border-gray-400 rounded-xl p-7">
                <div className="w-8 h-8 rounded-xl bg-green-100 border border-green-200 shrink-0 m-auto"></div>
                <div className="text-lg font-bold">Destek talebi bulunmuyor</div>
                <div className="text-sm font-semibold text-gray-500">Son destek talebiniz bulunmuyor.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between gap-x-5 translate-y-17">
        <div className=" bg-white rounded-xl border shadow border-gray-300 ml-5">
          <div className="flex flex-col justify-between gap-y-5">
            <div className="uppercase font-bold text-sm text-gray-400 pl-6 pt-6">hızlı erişim</div>
            <div className="flex flex-row justify-between gap-x-220 -mt-5">
              <div className="font-bold text-lg pl-6 translate-y-2">Sık kullanılan işlemler</div>
              <div className="w-12 h-12 rounded-xl bg-green-100 border border-green-200 shrink-0 -translate-3 pl-6"></div>
            </div>

            <div className="flex flex-col -translate-y-6 pl-6 text-gray-500">En sık ihtiyaç duyulan kişisel akışlar tek alanda toplandı.</div>

            <div className="flex flex-row tracking-wider">
              <div className="flex flex-row justify-between bg-white border border-gray-200 hover:bg-gray-100 rounded-bl-xl p-12 w-1/3">
                <div className="flex flex-col gap-y-1">
                  <div className="w-8 h-8 rounded-xl bg-green-100 border border-green-200 shrink-0"></div>
                  <div className="text-lg font-bold">Profilim</div>
                  <div className="text-sm font-semibold text-gray-500">Profil bilgileri ve iletişim kayıtları</div>
                </div>
              </div>

              <div className="flex flex-row justify-between bg-white border border-gray-200 hover:bg-gray-100 p-12 w-1/3">
                <div className="flex flex-col gap-y-1">
                  <div className="w-8 h-8 rounded-xl bg-sky-100 border border-sky-200 shrink-0"></div>
                  <div className="text-lg font-bold">Zimmetlerim</div>
                  <div className="text-sm font-semibold text-gray-500">Aktif zimmet kaydı</div>
                </div>
              </div>

              <div className="flex flex-row justify-between bg-white border border-gray-200 hover:bg-gray-100 rounded-br-xl p-12 w-1/3">
                <div className="flex flex-col gap-y-1">
                  <div className="w-8 h-8 rounded-xl bg-amber-100 border border-amber-200 shrink-0"></div>
                  <div className="text-lg font-bold">Destek</div>
                  <div className="text-sm font-semibold text-gray-500">Açık destek talebi yok</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br /><br /><br />
    </div>
  </>
  );
}