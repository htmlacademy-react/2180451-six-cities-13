import { Icon, Marker, layerGroup } from 'leaflet';
import { useRef, useEffect } from 'react';
import { OfferType } from '../../types/offer-type';
import { MARKER_DEFAULT, MARKER_ACTIVE, MarkerSize } from '../../../constants';
import useMap from '../hooks/use-map';

const defaultCustomIcon = new Icon({
  iconUrl: MARKER_DEFAULT,
  iconSize: [MarkerSize.iconWidth, MarkerSize.iconHeight],
  iconAnchor: [MarkerSize.iconAnchor, MarkerSize.iconHeight],
});

const activeCustomIcon = new Icon({
  iconUrl: MARKER_ACTIVE,
  iconSize: [MarkerSize.iconWidth, MarkerSize.iconHeight],
  iconAnchor: [MarkerSize.iconAnchor, MarkerSize.iconHeight],
});

type MapProps = {
  offerList: OfferType[];
  selectedOffer?: string;
  width: string;
  height: string;
}

export default function Map({ offerList, selectedOffer, height, width }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, offerList);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offerList.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            offer.id === selectedOffer
              ? activeCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offerList, selectedOffer]);

  return (
    <div
      style={{ height: `${height}`, width: `${width}` }}
      ref={mapRef}
    >
    </div>
  );
}
