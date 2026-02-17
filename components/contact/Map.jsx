"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

const Map = () => {
  const mapRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  // ✅ يمنع Hydration Error
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    if (!mapRef.current) return;

    const initMap = async () => {
      try {
        const L = (await import("leaflet")).default;
        await import("leaflet/dist/leaflet.css");

        const position = [35.021889, 35.981276];

        // 🧹 إذا كانت الخريطة موجودة مسبقاً (عند reload)
        mapRef.current.innerHTML = "";

        const map = L.map(mapRef.current, {
          center: position,
          zoom: 17,
          zoomControl: false,
          attributionControl: false,
            maxZoom: 18,
          scrollWheelZoom: true,
          inertia: true,
        });

        // ✅ Satellite HD
       L.tileLayer(
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
  {
    maxZoom: 18,
    minZoom: 2,
  }
).addTo(map);
// ✅ صور قمر صناعي من Google (HD)
L.tileLayer("https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}", {
  maxZoom: 20,
  subdomains: ["mt0", "mt1", "mt2", "mt3"],
}).addTo(map);

// ✅ تسميات + طرق (Labels)
L.tileLayer("https://{s}.google.com/vt/lyrs=h&x={x}&y={y}&z={z}", {
  maxZoom: 20,
  subdomains: ["mt0", "mt1", "mt2", "mt3"],
  opacity: 1,
}).addTo(map);


        // ✅ Roads + Labels
        L.tileLayer(
          "https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}",
          {
            maxZoom: 20,
            opacity: 0.9,
          }
        ).addTo(map);

        // ✅ دائرة حول الموقع
        L.circle(position, {
          radius: 180,
          color: "#3b82f6",
          fillColor: "#3b82f6",
          fillOpacity: 0.18,
          weight: 2,
        }).addTo(map);

        // ✅ Marker احترافي
        const customIcon = L.divIcon({
          html: `
            <div style="
              width: 52px;
              height: 52px;
              border-radius: 50%;
              background: radial-gradient(circle at top, #60a5fa, #2563eb);
              display: flex;
              align-items: center;
              justify-content: center;
              border: 4px solid rgba(255,255,255,0.9);
              box-shadow: 0 0 25px rgba(59,130,246,0.7),
                          0 15px 35px rgba(0,0,0,0.25);
              animation: pulse 1.8s infinite;
            ">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
              </svg>
            </div>
          `,
          className: "custom-marker",
          iconSize: [52, 52],
          iconAnchor: [26, 52],
          popupAnchor: [0, -45],
        });

        const marker = L.marker(position, { icon: customIcon }).addTo(map);

        marker.bindPopup(`
          <div style="text-align:center;padding:16px;min-width:260px;font-family:Inter,sans-serif;">
            <h3 style="margin:0;color:#0f172a;font-size:18px;font-weight:800;">
              الموقع الدقيق
            </h3>
            <p style="margin:6px 0 14px;color:#64748b;font-size:13px;font-weight:500;">
              البطحانية - طرطوس
            </p>
            <a href="https://maps.app.goo.gl/jJEfVNmpwdEhYZhG8" target="_blank"
              style="
                display:block;
                background: linear-gradient(135deg,#0ea5e9,#2563eb);
                color:white;
                padding:12px;
                border-radius:30px;
                text-decoration:none;
                font-weight:700;
                font-size:14px;
              "
            >
              فتح على Google Maps ↗
            </a>
          </div>
        `);

        // Zoom controls
        L.control
          .zoom({
            position: "bottomright",
            zoomInText: "+",
            zoomOutText: "−",
          })
          .addTo(map);

        // Scale
        L.control
          .scale({
            imperial: false,
            metric: true,
            position: "bottomleft",
          })
          .addTo(map);
      } catch (error) {
        console.error("Error loading map:", error);
      }
    };

    initMap();
  }, [isMounted]);

  // ✅ يمنع SSR من عرض div الخريطة قبل client
  if (!isMounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="bg-light-card-bg dark:bg-dark-card-bg rounded-3xl p-6 border border-light-border-primary dark:border-dark-border-primary shadow-xl hover:shadow-2xl transition-all duration-500"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center text-white shadow-lg">
            <FaMapMarkerAlt className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-light-text-primary dark:text-dark-text-primary">
              موقعي
            </h3>
            <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
              البطحانية - طرطوس | 35.021889, 35.981276
            </p>
          </div>
        </div>

        <a
          href="https://wa.me/963983796029"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
        >
          <FaWhatsapp />
          واتساب
        </a>
      </div>

      {/* Map */}
      <div
        ref={mapRef}
        className="w-full h-[420px] sm:h-[520px] md:h-[680px] rounded-2xl overflow-hidden border border-light-border-primary dark:border-dark-border-primary shadow-inner"
        style={{
          background: "#000",
          filter: "contrast(1.15) saturate(1.25) brightness(1.05)",
        }}
      />

      {/* Footer */}
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-light-border-primary dark:border-dark-border-primary">
        <span className="text-xs text-light-text-secondary dark:text-dark-text-secondary">
          🛰️ خريطة عالية الدقة (HD Satellite)
        </span>

        <a
          href="https://maps.app.goo.gl/jJEfVNmpwdEhYZhG8"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs text-light-accent-primary dark:text-dark-accent-primary hover:underline"
        >
          <span>عرض على خرائط جوجل</span>
          <span>↗</span>
        </a>
      </div>

      <style jsx global>{`
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            box-shadow: 0 0 25px rgba(59, 130, 246, 0.6),
              0 18px 35px rgba(0, 0, 0, 0.25);
          }
          50% {
            transform: scale(1.08);
            box-shadow: 0 0 35px rgba(59, 130, 246, 0.85),
              0 22px 45px rgba(0, 0, 0, 0.3);
          }
        }

        .leaflet-control-attribution {
          display: none !important;
        }
      `}</style>
    </motion.div>
  );
};

export default Map;
