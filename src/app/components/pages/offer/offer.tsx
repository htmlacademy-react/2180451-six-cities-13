import { Helmet } from 'react-helmet-async';
import { AuthorizationStatus, OFFER_MAP_SIZE } from '../../../../constants';
import Header from '../../layouts/header/header';
import ReviewForm from '../../ui/review-form/review-form';
import { useParams } from 'react-router-dom';
import { OfferType } from '../../../types/offer-type';
import PageNotFound from '../page-not-found/page-not-found';
import ReviewList from '../../ui/review-list/review-list';
import { ReviewType } from '../../../types/review-type';
import Map from '../../map/map';
import NearPlaceList from '../../ui/near-place-list/near-place-list';

type OfferProps = {
  authStatus: string;
  offerList: OfferType[];
  reviewList: ReviewType[];
}

export default function Offer({ authStatus, offerList, reviewList }: OfferProps): JSX.Element {

  const { id } = useParams();
  const filteredOffer = (offerList.find((offer: OfferType) => offer.id === id));
  const nearOfferList = offerList.slice(0, 3);

  return (
    <div>
      {!filteredOffer ?
        <PageNotFound />
        :
        <div className="page">
          <Helmet>
            <title>Страница отеля</title>
          </Helmet>
          <Header authStatus={authStatus} />

          <main className="page__main page__main--offer">
            <section className="offer">
              <div className="offer__gallery-container container">
                <div className="offer__gallery">
                  <div className="offer__image-wrapper">
                    <img className="offer__image" src="img/room.jpg" alt="Photo studio" />
                  </div>
                  <div className="offer__image-wrapper">
                    <img className="offer__image" src="img/apartment-01.jpg" alt="Photo studio" />
                  </div>
                  <div className="offer__image-wrapper">
                    <img className="offer__image" src="img/apartment-02.jpg" alt="Photo studio" />
                  </div>
                  <div className="offer__image-wrapper">
                    <img className="offer__image" src="img/apartment-03.jpg" alt="Photo studio" />
                  </div>
                  <div className="offer__image-wrapper">
                    <img className="offer__image" src="img/studio-01.jpg" alt="Photo studio" />
                  </div>
                  <div className="offer__image-wrapper">
                    <img className="offer__image" src="img/apartment-01.jpg" alt="Photo studio" />
                  </div>
                </div>
              </div>
              <div className="offer__container container">
                <div className="offer__wrapper">
                  {filteredOffer.isPremium &&
                    <div className="offer__mark">
                      <span>Premium</span>
                    </div>}
                  <div className="offer__name-wrapper">
                    <h1 className="offer__name">
                      {filteredOffer.title}
                    </h1>
                    <button className={filteredOffer.isFavorite ? 'offer__bookmark-button offer__bookmark-button--active button' : 'offer__bookmark-button button'} type="button">
                      <svg className="offer__bookmark-icon" width="31" height="33">
                        <use xlinkHref="#icon-bookmark"></use>
                      </svg>
                      <span className="visually-hidden">To bookmarks</span>
                    </button>
                  </div>
                  <div className="offer__rating rating">
                    <div className="offer__stars rating__stars">
                      <span style={{ width: `${filteredOffer.rating * 20}%` }}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                    <span className="offer__rating-value rating__value">{filteredOffer.rating}</span>
                  </div>
                  <ul className="offer__features">
                    <li className="offer__feature offer__feature--entire">
                      {filteredOffer.type}
                    </li>
                    <li className="offer__feature offer__feature--bedrooms">
                      3 Bedrooms
                    </li>
                    <li className="offer__feature offer__feature--adults">
                      Max 4 adults
                    </li>
                  </ul>
                  <div className="offer__price">
                    <b className="offer__price-value">&euro;{filteredOffer.price}</b>
                    <span className="offer__price-text">&nbsp;night</span>
                  </div>
                  <div className="offer__inside">
                    <h2 className="offer__inside-title">What&apos;s inside</h2>
                    <ul className="offer__inside-list">
                      <li className="offer__inside-item">
                        Wi-Fi
                      </li>
                      <li className="offer__inside-item">
                        Washing machine
                      </li>
                      <li className="offer__inside-item">
                        Towels
                      </li>
                      <li className="offer__inside-item">
                        Heating
                      </li>
                      <li className="offer__inside-item">
                        Coffee machine
                      </li>
                      <li className="offer__inside-item">
                        Baby seat
                      </li>
                      <li className="offer__inside-item">
                        Kitchen
                      </li>
                      <li className="offer__inside-item">
                        Dishwasher
                      </li>
                      <li className="offer__inside-item">
                        Cabel TV
                      </li>
                      <li className="offer__inside-item">
                        Fridge
                      </li>
                    </ul>
                  </div>
                  <div className="offer__host">
                    <h2 className="offer__host-title">Meet the host</h2>
                    <div className="offer__host-user user">
                      <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                        <img className="offer__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
                      </div>
                      <span className="offer__user-name">
                        Angelina
                      </span>
                      <span className="offer__user-status">
                        Pro
                      </span>
                    </div>
                    <div className="offer__description">
                      <p className="offer__text">
                        A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                      </p>
                      <p className="offer__text">
                        An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                      </p>
                    </div>
                  </div>
                  <section className="offer__reviews reviews">
                    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewList.length}</span></h2>
                    <ReviewList reviewList={reviewList} />
                    {authStatus === AuthorizationStatus.Auth && <ReviewForm />}
                  </section>
                </div>
              </div>
              <section className="offer__map map" style={{ display: 'flex', justifyContent: 'center' }}>
                <Map offerList={nearOfferList}
                  width={OFFER_MAP_SIZE.width}
                  height={OFFER_MAP_SIZE.height}
                />
              </section>
            </section>
            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">Other places in the neighbourhood</h2>
                <div className="near-places__list places__list">
                  <NearPlaceList offerList={nearOfferList} />
                </div>
              </section>
            </div>
          </main>
        </div>}
    </div>
  );
}
