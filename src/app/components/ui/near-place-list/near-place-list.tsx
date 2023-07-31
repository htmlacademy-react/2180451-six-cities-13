import { OfferType } from '../../../types/offer-type';
import NearPlaceCard from '../near-place-card/near-place-card';

type NearPlaceListProps = {
  offerList: OfferType[];
}

export default function NearPlaceList({ offerList }: NearPlaceListProps): JSX.Element {
  return (
    <>
      {offerList.map((offer) =>
        <NearPlaceCard offer={offer} key={offer.id} />
      )}
    </>
  );
}
