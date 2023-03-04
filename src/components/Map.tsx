import { useState, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Preahvihear } from "@next/font/google";
const preahvihear = Preahvihear({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});
export function Map() {
  const mapContainer = useRef<any>(null);
  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoib3RobWFuZWRldiIsImEiOiJjbGVvZmdqdnkwMXR6M3ZvMWg1OWtxaWQxIn0.WPQkv5XBaid7PtjzfZqHDg";
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/othmanedev/cleojrlut002e01ocfjybh7bg/draft",
      center: [5.3698, 43.2965], // center map on Chad
      zoom: 1.3,
    });
    new mapboxgl.Marker({ color: "#1A0B2E" })
      .setLngLat([5.3698, 43.2965])
      .addTo(map);

    return () => map.remove();
  }, [mapContainer.current]);

  return (
    <div className="flex justify-center pb-5">
      <div className="w-8/12 md:w-10/12">
        <div>
          <h2 className={`text-white text-2xl pb-2 ${preahvihear.className}`}>
            Où me trouver ?
          </h2>
        </div>
        <div className="rounded-xl">
          <div ref={mapContainer} className="w-full h-72 md:h-56" />
        </div>
      </div>
    </div>
  );
}
