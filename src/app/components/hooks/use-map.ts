import { Map, TileLayer } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef, useState, useEffect, MutableRefObject } from 'react';
import { useAppSelector } from './use-app-selector';

export default function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  currentCity: string
): Map | null {

  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);
  const activeCity = useAppSelector((state) => state.cityList.find((city) => city.name === currentCity));

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: activeCity.location.latitude,
          lng: activeCity.location.longitude,
        },
        zoom: activeCity.location.zoom,
      });

      const layer = new TileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        });

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, currentCity, activeCity]);

  return map;
}
