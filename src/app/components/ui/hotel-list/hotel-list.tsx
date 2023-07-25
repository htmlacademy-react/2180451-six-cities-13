import HotelCard from '../hotel-card/hotel-card';
import { OfferType } from '../../../types/offer-type';

type OfferListProps = {
  offerList: OfferType[];
  onMouseEnter: (id: string) => void;
  onMouseLeave: () => void;
}

export default function HotelList({ offerList, onMouseEnter, onMouseLeave }: OfferListProps): JSX.Element {

  return (
    <>
      {
        offerList.map((offer: OfferType) => (
          <HotelCard
            hotelCard={offer}
            key={offer.id}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          />
        ))
      }
    </>
  );
}
