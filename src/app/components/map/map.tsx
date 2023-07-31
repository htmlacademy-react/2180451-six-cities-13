import { Icon, Marker, layerGroup } from 'leaflet';
import { useRef, useEffect } from 'react';
import { OfferType } from '../../types/offer-type';
import { MARKER_DEFAULT, MARKER_ACTIVE } from '../../../constants';
import useMap from '../hooks/use-map';

type MapProps = {
  offerList: OfferType[];
  selectedOffer: string;
}

export default function Map({ offerList, selectedOffer }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, offerList);

  const defaultCustomIcon = new Icon({
    iconUrl: MARKER_DEFAULT,
    iconSize: [27, 39],
    iconAnchor: [13, 39],
  });

  const activeCustomIcon = new Icon({
    iconUrl: MARKER_ACTIVE,
    iconSize: [27, 39],
    iconAnchor: [13, 39],
  });

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
      style={{ height: '794px' }}
      ref={mapRef}
    >
    </div>
  );
}
