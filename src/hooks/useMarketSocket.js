import { useEffect, useRef, useState } from "react";
import { normalizePriceRecord } from "../services/api";

const SOCKET_URL = "ws://localhost:8080/ws";

function useMarketSocket() {
  const socketRef = useRef(null);
  const reconnectTimerRef = useRef(null);

  const [liveData, setLiveData] = useState([]);
  const [socketStatus, setSocketStatus] = useState("Bağlanıyor...");

  useEffect(() => {
    function connect() {
      const socket = new WebSocket(SOCKET_URL);
      socketRef.current = socket;

      socket.onopen = () => {
        setSocketStatus("Bağlandı");
      };

      socket.onmessage = (event) => {
        try {
          const message = JSON.parse(event.data);

          if (message.type === "update") {
            const currencyData = Array.isArray(message.data?.currency)
              ? message.data.currency
              : [];

            const goldData = Array.isArray(message.data?.gold)
              ? message.data.gold
              : [];

            const mergedData = [...currencyData, ...goldData].map(
              normalizePriceRecord
            );

            setLiveData(mergedData);
          }
        } catch (error) {
          console.error("WebSocket mesajı okunamadı:", error);
        }
      };

      socket.onerror = () => {
        setSocketStatus("Bağlantı hatası");
      };

      socket.onclose = () => {
        setSocketStatus("Bağlantı kapandı, tekrar deneniyor...");

        reconnectTimerRef.current = setTimeout(() => {
          connect();
        }, 3000);
      };
    }

    connect();

    return () => {
      if (reconnectTimerRef.current) {
        clearTimeout(reconnectTimerRef.current);
      }

      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, []);

  return { liveData, socketStatus };
}

export default useMarketSocket;