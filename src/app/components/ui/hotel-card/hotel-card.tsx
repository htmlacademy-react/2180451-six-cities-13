import { OfferType } from '../../../types/offer-type';
import { Link, generatePath } from 'react-router-dom';
import { AppRoute, RATE_FACTOR } from '../../../../constants';
import classNames from 'classnames';

type HotelCardProps = {
  hotelCard: OfferType;
  onMouseEnter: (id: string) => void;
  onMouseLeave: () => void;
}

export default function HotelCard({ hotelCard, onMouseEnter, onMouseLeave }: HotelCardProps): JSX.Element {

  const HandleMouseEnter = () => {
    onMouseEnter?.(hotelCard.id);
  };

  return (
    <article
      className='cities__card place-card'
      onMouseEnter={HandleMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {hotelCard.isPremium &&
        <div className='place-card__mark'>
          <span>Premium</span>
        </div>}
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
          <button
            className={
              classNames('place-card__bookmark-button button', { 'place-card__bookmark-button--active': hotelCard.isFavorite })
            } type='button'
          >
            <svg className='place-card__bookmark-icon' width='18' height='19'>
              <use xlinkHref='#icon-bookmark'></use>
            </svg>
            <span className='visually-hidden'>In bookmarks</span>
          </button>
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{ width: `${hotelCard.rating * RATE_FACTOR}%` }}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <Link to={generatePath(AppRoute.Offer, { id: hotelCard.id })}>{hotelCard.title}</Link>
        </h2>
        <p className='place-card__type'>{hotelCard.type}</p>
      </div>
    </article>
  );
}
