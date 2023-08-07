import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthorizationStatus, MapSize, CITY_LIST } from '../../../../constants';
import Header from '../../layouts/header/header';
import HotelList from '../../ui/hotel-list/hotel-list';
import Map from '../../map/map';
import CityList from '../../ui/city-list/city-list';
import { useAppSelector } from '../../../hooks/use-app-selector';
import SortingForm from '../../ui/sorting-form/sorting-form';
import { useSort } from '../../../hooks/use-sort';
import { getActiveCity } from '../../../selectors/selectors';
import { UseFilteredOffers } from '../../../hooks/use-filtered-offers';

export default function MainPage(): JSX.Element {

  const [selectedOffer, setSelectedOffer] = useState('');
  const currentCity = useAppSelector(getActiveCity);
  const filteredOffers = UseFilteredOffers();
  const sortedOffers = useSort(filteredOffers);

  const HandleMouseEnter = ((id: string) => {
    setSelectedOffer(id);
  });

  const HandleMouseLeave = (() => {
    setSelectedOffer('');
  });

  return (
    <div className='page page--gray page--main'>
      <Helmet>
        <title>Шесть городов</title>
      </Helmet>
      <Header authStatus={AuthorizationStatus.NoAuth} />

      <main className='page__main page__main--index'>
        <h1 className='visually-hidden'>Cities</h1>
        <div className='tabs'>
          <section className='locations container'>
            <CityList
              cityList={CITY_LIST}
            />
          </section>
        </div>
        {filteredOffers && filteredOffers.length ?
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
                    cityList={CITY_LIST}
                    currentCity={currentCity}
                    height={MapSize.main.height}
                    width={MapSize.main.width}
                  />
                </section>
              </div>
            </div>
          </div>
          :
          <div className='cities'>
            <div className='cities__places-container cities__places-container--empty container'>
              <section className='cities__no-places'>
                <div className='cities__status-wrapper tabs__content'>
                  <b className='cities__status'>No places to stay available</b>
                  <p className='cities__status-description'>We could not find any property available at the moment in Dusseldorf</p>
                </div>
              </section>
              <div className='cities__right-section'></div>
            </div>
          </div>}
      </main>
    </div>
  );
}
