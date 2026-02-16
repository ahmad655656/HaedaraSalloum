// components/contact/Map.jsx
"use client";

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Map = () => {
  const mapRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const initMap = async () => {
      try {
        const L = await import('leaflet');
        await import('leaflet/dist/leaflet.css');

        // إحداثيات قرية البطحانية
        const position = [35.0233, 35.9747];

        // إنشاء الخريطة بحجم مناسب وعدم تجاوز العناصر
        const map = L.map(mapRef.current, {
          center: position,
          zoom: 15,
          zoomControl: false, // إخفاء أزرار التحكم الكبيرة
          fadeAnimation: true,
          zoomAnimation: true,
          markerZoomAnimation: true,
          attributionControl: false // إخفاء الإسناد الثقيل
        });

// خريطة هجينة: شوارع + صور جوية
L.tileLayer('https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
  maxZoom: 20,
  subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
  attribution: '© Google'
}).addTo(map);
        // طبقة إضافية للظلال (لتحسين المظهر)
        L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
          attribution: '© Esri',
          opacity: 0.2,
          maxZoom: 17
        }).addTo(map);

        // أيقونة مخصصة أنيقة
        const customIcon = L.divIcon({
          html: `
            <div style="
              background: linear-gradient(135deg, #3b82f6, #8b5cf6);
              width: 40px;
              height: 40px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              font-size: 20px;
              border: 3px solid white;
              box-shadow: 0 8px 20px rgba(0,0,0,0.25);
              animation: pulse 2s infinite;
              position: relative;
              z-index: 1000;
            ">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
          `,
          className: 'custom-marker',
          iconSize: [40, 40],
          iconAnchor: [20, 40],
          popupAnchor: [0, -35]
        });

        const marker = L.marker(position, { icon: customIcon }).addTo(map);
        
        // نافذة منبثقة بتصميم أنيق
        marker.bindPopup(`
          <div style="
            text-align: center;
            padding: 16px;
            min-width: 240px;
            font-family: 'Inter', system-ui, -apple-system, sans-serif;
            background: rgba(255,255,255,0.98);
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.15);
            border: 1px solid rgba(0,0,0,0.05);
          ">
            <div style="
              width: 50px;
              height: 50px;
              background: linear-gradient(135deg, #3b82f6, #8b5cf6);
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto 12px;
              color: white;
              font-size: 24px;
              box-shadow: 0 8px 16px rgba(59,130,246,0.3);
            ">🏠</div>
            
            <h3 style="margin: 0 0 4px; color: #0f172a; font-weight: 700; font-size: 18px;">
              قرية البطحانية
            </h3>
            
            <p style="margin: 0 0 16px; color: #64748b; font-size: 13px; font-weight: 500;">
              ناحية الشيخ بدر - طرطوس
            </p>
            
            <div style="
              background: #f8fafc;
              padding: 12px;
              border-radius: 16px;
              margin-bottom: 16px;
              border: 1px solid #e2e8f0;
            ">
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                <div style="text-align: center;">
                  <div style="color: #64748b; font-size: 11px;">الارتفاع</div>
                  <div style="color: #0f172a; font-weight: 600; font-size: 14px;">350 م</div>
                </div>
                <div style="text-align: center;">
                  <div style="color: #64748b; font-size: 11px;">التضاريس</div>
                  <div style="color: #0f172a; font-weight: 600; font-size: 14px;">جبلية</div>
                </div>
              </div>
            </div>
            
            <div style="display: flex; flex-direction: column; gap: 10px;">
              <a href="https://wa.me/963983796029" target="_blank" style="
                background: linear-gradient(135deg, #25D366, #128C7E);
                color: white;
                padding: 12px;
                border-radius: 30px;
                text-decoration: none;
                font-size: 14px;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                font-weight: 600;
                border: none;
                transition: all 0.2s;
                box-shadow: 0 4px 12px rgba(37,211,102,0.3);
              ">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.45 3.47 1.3 4.99L2 21l4.14-1.24c1.5.81 3.2 1.24 4.93 1.24 5.46 0 9.93-4.45 9.93-9.91 0-5.46-4.47-9.93-9.93-9.93zm-.03 15.02c-1.35 0-2.68-.36-3.84-1.05l-2.74.89.91-2.64c-.75-1.19-1.15-2.58-1.15-4.01 0-4.18 3.41-7.59 7.59-7.59 4.18 0 7.59 3.41 7.59 7.59 0 4.17-3.41 7.58-7.59 7.58z"/>
                </svg>
                واتساب
              </a>
              
              <a href="tel:+963983796029" style="
                background: linear-gradient(135deg, #3b82f6, #2563eb);
                color: white;
                padding: 12px;
                border-radius: 30px;
                text-decoration: none;
                font-size: 14px;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                font-weight: 600;
                box-shadow: 0 4px 12px rgba(59,130,246,0.3);
              ">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                اتصال
              </a>
            </div>
          </div>
        `);

        // تحكمات خريطة مخصصة وصغيرة
        const zoomControl = L.control.zoom({
          position: 'bottomright',
          zoomInText: '+',
          zoomOutText: '−'
        }).addTo(map);

        // مقياس الرسم
        L.control.scale({
          imperial: false,
          metric: true,
          position: 'bottomleft'
        }).addTo(map);

        setMapLoaded(true);
      } catch (error) {
        console.error('Error loading map:', error);
      }
    };

    initMap();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="bg-light-card-bg dark:bg-dark-card-bg rounded-3xl p-6 border border-light-border-primary dark:border-dark-border-primary shadow-xl hover:shadow-2xl transition-all duration-500"
    >
      {/* رأس القسم */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center text-white shadow-lg">
            <FaMapMarkerAlt className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-light-text-primary dark:text-dark-text-primary">
              موقعي
            </h3>
            <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
              قرية البطحانية - طرطوس
            </p>
          </div>
        </div>
        
        {/* حالة التضاريس */}
        <div className="px-3 py-1.5 bg-light-bg-tertiary dark:bg-dark-bg-tertiary rounded-full text-xs font-medium text-light-text-secondary dark:text-dark-text-secondary border border-light-border-primary dark:border-dark-border-primary">
          🗺️ تضاريس
        </div>
      </div>

      {/* بطاقات الموقع بشكل منظم */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
        {/* بطاقة الموقع */}
        <div className="col-span-2 p-4 bg-light-bg-tertiary dark:bg-dark-bg-tertiary rounded-2xl border border-light-border-primary dark:border-dark-border-primary">
          <div className="flex items-start gap-3">
            <span className="text-2xl">📍</span>
            <div>
              <p className="font-semibold text-light-text-primary dark:text-dark-text-primary">
                قرية البطحانية
              </p>
              <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary mt-1">
                ناحية الشيخ بدر - محافظة طرطوس
              </p>
              <div className="flex gap-2 mt-2">
                <span className="px-2 py-1 bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-lg text-xs">
                  ارتفاع: 350 م
                </span>
                <span className="px-2 py-1 bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-lg text-xs">
                  تضاريس جبلية
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* بطاقة واتساب */}
        <a 
          href="https://wa.me/963983796029" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-4 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl hover:shadow-xl transition-all duration-300 group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
              <FaWhatsapp className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-semibold text-white">واتساب</p>
              <p className="text-xs text-white/80">+963 983 796 029</p>
            </div>
          </div>
        </a>
      </div>

      {/* القرى المجاورة - شبكة صغيرة */}
      <div className="grid grid-cols-4 gap-2 mb-6">
        <div className="text-center">
          <div className="text-xs font-semibold text-light-text-primary dark:text-dark-text-primary">الشمال</div>
          <div className="text-xs text-light-text-secondary dark:text-dark-text-secondary bg-light-bg-tertiary dark:bg-dark-bg-tertiary px-2 py-1 rounded-lg mt-1">
            الطبوشية
          </div>
        </div>
        <div className="text-center">
          <div className="text-xs font-semibold text-light-text-primary dark:text-dark-text-primary">الجنوب</div>
          <div className="text-xs text-light-text-secondary dark:text-dark-text-secondary bg-light-bg-tertiary dark:bg-dark-bg-tertiary px-2 py-1 rounded-lg mt-1">
            الحرف
          </div>
        </div>
        <div className="text-center">
          <div className="text-xs font-semibold text-light-text-primary dark:text-dark-text-primary">الشرق</div>
          <div className="text-xs text-light-text-secondary dark:text-dark-text-secondary bg-light-bg-tertiary dark:bg-dark-bg-tertiary px-2 py-1 rounded-lg mt-1">
            قلة الدواس
          </div>
        </div>
        <div className="text-center">
          <div className="text-xs font-semibold text-light-text-primary dark:text-dark-text-primary">الغرب</div>
          <div className="text-xs text-light-text-secondary dark:text-dark-text-secondary bg-light-bg-tertiary dark:bg-dark-bg-tertiary px-2 py-1 rounded-lg mt-1">
            السودا
          </div>
        </div>
      </div>

      {/* الخريطة بحجم مناسب */}
      <div 
        ref={mapRef} 
        className="w-full max-h-[780px] rounded-2xl overflow-hidden border-2 border-light-border-primary dark:border-dark-border-primary shadow-inner"
        style={{ 
          zIndex: 1,
          position: 'relative',
          background: '#e8f0fe'
        }}
      />

      {/* رابط خرائط جوجل - صغير في الأسفل */}
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-light-border-primary dark:border-dark-border-primary">
        <span className="text-xs text-light-text-secondary dark:text-dark-text-secondary">
          🏔️ تضاريس جبلية - إطلالة على البحر
        </span>
        <a 
          href="https://www.google.com/maps/search/البطحانية+طرطوس+سوريا" 
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
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 8px 20px rgba(59,130,246,0.3);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 12px 28px rgba(59,130,246,0.4);
          }
        }
        
        .leaflet-container {
          font-family: inherit;
          border-radius: 16px;
        }
        
        .leaflet-control-zoom {
          border: none !important;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15) !important;
          border-radius: 30px !important;
          overflow: hidden;
        }
        
        .leaflet-control-zoom a {
          background: white !important;
          color: #1e293b !important;
          width: 36px !important;
          height: 36px !important;
          line-height: 36px !important;
          font-size: 18px !important;
          font-weight: bold !important;
          border: none !important;
        }
        
        .leaflet-control-zoom a:hover {
          background: #f1f5f9 !important;
        }
        
        .leaflet-control-scale {
          background: rgba(255,255,255,0.9);
          border-radius: 30px;
          padding: 4px 10px;
          font-size: 11px;
          font-weight: 500;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          margin-left: 12px;
          margin-bottom: 12px;
        }
        
        .leaflet-popup-content-wrapper {
          border-radius: 24px !important;
          padding: 0 !important;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.2) !important;
          border: none !important;
        }
        
        .leaflet-popup-tip {
          display: none;
        }
        
        .leaflet-control-attribution {
          display: none;
        }
      `}</style>
    </motion.div>
  );
};

export default Map;