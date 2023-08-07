import { Map, TileLayer } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef, useState, useEffect, MutableRefObject } from 'react';
import { CityType } from '../types/city-type';
import { ATTRIBUTION, TILE_LAYER } from '../../constants';

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

      const layer = new TileLayer(TILE_LAYER,
        {
          attribution: ATTRIBUTION,
        });

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    } else {
      map?.setView(
        [activeCityLocation.location.latitude, activeCityLocation.location.longitude],
        activeCityLocation.location.zoom
      );
    }
  }, [mapRef, activeCityLocation]);

  return map;
}
