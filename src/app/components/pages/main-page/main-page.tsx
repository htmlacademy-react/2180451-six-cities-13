import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthorizationStatus, MapSize } from '../../../../constants';
import Header from '../../layouts/header/header';
import HotelList from '../../ui/hotel-list/hotel-list';
import Map from '../../map/map';
import CityList from '../../ui/city-list/city-list';
import { CityType } from '../../../types/city-type';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getActiveCity, getActiveSort, getOfferList } from '../../../../store/action';
import SortingForm from '../../ui/sorting-form/sorting-form';
import { useSort } from '../../hooks/use-sort';

type MainPageProps = {
  cityList: CityType[];
}

export default function MainPage({ cityList }: MainPageProps): JSX.Element {

  const [selectedOffer, setSelectedOffer] = useState('');
  const currentCity = useAppSelector(getActiveCity);
  const offers = useAppSelector(getOfferList);

  const filteredOffers = offers.filter((offer) => offer.city.name === currentCity);

  const currentSort = useAppSelector(getActiveSort);
  const sortedOffers = useSort(filteredOffers, currentSort);

  const HandleMouseEnter = ((id: string) => {
    setSelectedOffer(id);
  });

  const HandleMouseLeave = (() => {
    setSelectedOffer('');
  });

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Шесть городов</title>
      </Helmet>
      <Header authStatus={AuthorizationStatus.NoAuth} />

      <main className="page__main page__main--index">
        <h1 className='visually-hidden'>Cities</h1>
        <div className='tabs'>
          <section className='locations container'>
            <CityList
              cityList={cityList}
            />
          </section>
        </div>
        <div className='cities'>
          <div className='cities__places-container container'>
            <section className='cities__places places'>
              <h2 className='visually-hidden'>Places</h2>
              <b className='places__found'>{filteredOffers.length} places to stay in Amsterdam</b>
              <SortingForm />
              <HotelList
                offerList={sortedOffers}
                onMouseEnter={HandleMouseEnter}
                onMouseLeave={HandleMouseLeave}
              />
            </section>
            <div className='cities__right-section'>
              <section className='cities__map map'>
                <Map
                  offerList={filteredOffers}
                  selectedOffer={selectedOffer}
                  cityList={cityList}
                  currentCity={currentCity}
                  height={MapSize.main.height}
                  width={MapSize.main.width}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
