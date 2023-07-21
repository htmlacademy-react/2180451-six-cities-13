import { Helmet } from 'react-helmet-async';
import Header from '../../layouts/header/header';
import { AuthorizationStatus } from '../../../../constants';
import Footer from '../../layouts/footer/footer';
import { OfferType } from '../../../types/offer-type';
import FavoritesCard from '../../ui/favorite-card/favorites-card';

type FavoritesProps = {
  offerList: OfferType[];
}

export default function Favorites({ offerList }: FavoritesProps): JSX.Element {

  const favoritesList = offerList.filter((offer) => offer.isFavorite);

  return (
    <div className="page">
      <Helmet>
        <title>Избранное</title>
      </Helmet>
      <Header authStatus={AuthorizationStatus.NoAuth} />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {favoritesList?.map((offer: OfferType) =>
                    <FavoritesCard favoriteCard={offer} key={offer.id} />
                  )}
                </div>
              </li>
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
