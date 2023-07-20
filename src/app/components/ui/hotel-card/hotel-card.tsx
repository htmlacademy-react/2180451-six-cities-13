import { OfferType } from '../../../types/offer-type';
import { useState } from 'react';
import { Link } from 'react-router-dom';

type HotelCardProps = {
  hotelCard: OfferType;
}

export default function HotelCard({ hotelCard }: HotelCardProps): JSX.Element {

  const [active, setActive] = useState(false);

  return (
    <article className='cities__card place-card'
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      {hotelCard.isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> :
        null}
      <div className='cities__image-wrapper place-card__image-wrapper'>
        <a href='#'>
          <img className='place-card__image' src={hotelCard.previewImage} width='260' height='200' alt='Place image' />
        </a>
      </div>
      <div className='place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{hotelCard.price}</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>
          {hotelCard.isFavorite ?
            <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">In bookmarks</span>
            </button> :
            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>}
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{ width: `${hotelCard.rating * 20}%` }}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <Link to={`/offer/${hotelCard.id}`}>{hotelCard.title}</Link>
        </h2>
        <p className='place-card__type'>{hotelCard.type}</p>
      </div>
    </article>
  );
}
