import { Link } from 'react-router-dom';
import { OfferType } from '../../../types/offer-type';

type FavoritesCardProps = {
  favoriteCard: OfferType;
}

export default function FavoritesCard({ favoriteCard }: FavoritesCardProps): JSX.Element {
  return (
    <article className="favorites__card place-card">
      {favoriteCard.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to="#">
          <img className="place-card__image" src={favoriteCard.previewImage} width="150" height="110" alt="Place image" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{favoriteCard.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${favoriteCard.rating * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to="#">{favoriteCard.title}</Link>
        </h2>
        <p className="place-card__type">{favoriteCard.type}</p>
      </div>
    </article>
  );
}
