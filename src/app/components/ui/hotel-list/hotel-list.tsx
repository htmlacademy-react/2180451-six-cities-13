import HotelCard from '../hotel-card/hotel-card';
import { OfferType } from '../../../types/offer-type';

type OfferListProps = {
  offerList: OfferType[];
}

export default function HotelList({ offerList }: OfferListProps): JSX.Element {

  return (
    <>
      {
        offerList.map((offer: OfferType) =>
          <HotelCard hotelCard={offer} key={offer.id} />
        )
      }
    </>
  );
}
