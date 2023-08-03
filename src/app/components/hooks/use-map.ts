import { Map, TileLayer } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef, useState, useEffect, MutableRefObject } from 'react';
import { CityType } from '../../types/city-type';

export default function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  cityList: CityType[],
  currentCity: string
): Map | null {

  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);
  const activeCityLocation = cityList.find((city) => city.name === currentCity);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: activeCityLocation.location.latitude,
          lng: activeCityLocation.location.longitude,
        },
        zoom: activeCityLocation.location.zoom,
      });

      const layer = new TileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        });

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, currentCity, activeCityLocation]);

  return map;
}
