"use client";
import { useEffect, useState } from "react";
import { Cloud, CloudRain, Sun, CloudLightning } from "lucide-react";

export default function WeatherWidget() {
  const [weather, setWeather] = useState<{ temp: number; code: number } | null>(null);

  useEffect(() => {
    // Open-Meteo API for Jakarta
    fetch("https://api.open-meteo.com/v1/forecast?latitude=-6.2146&longitude=106.8451&current_weather=true")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.current_weather) {
          setWeather({
            temp: Math.round(data.current_weather.temperature),
            code: data.current_weather.weathercode,
          });
        }
      })
      .catch((err) => console.error("Failed to fetch weather:", err));
  }, []);

  // Return a completely invisible element during SSR or before load to prevent hydration mismatch
  if (!weather) return <div className="absolute top-10 left-6 md:left-20 h-[30px] w-[100px] bg-transparent" />;

  // WMO Weather interpretation codes
  const getWeatherIcon = (code: number) => {
    if (code === 0 || code === 1) return <Sun size={14} className="text-yellow-400" />;
    if (code >= 51 && code <= 67) return <CloudRain size={14} className="text-blue-400" />;
    if (code >= 95 && code <= 99) return <CloudLightning size={14} className="text-[#b259ff]" />;
    return <Cloud size={14} className="text-neutral-400" />;
  };

  return (
    <div className="absolute top-24 left-6 md:top-32 md:left-20 z-20 flex items-center gap-2 px-3 py-1.5 bg-neutral-900/50 backdrop-blur-md border border-neutral-800 rounded-full animate-fade-in opacity-80 hover:opacity-100 transition">
      {getWeatherIcon(weather.code)}
      <span className="text-[10px] md:text-xs font-syne font-bold text-neutral-300 uppercase tracking-wider">
        Jakarta, {weather.temp}°C
      </span>
    </div>
  );
}
