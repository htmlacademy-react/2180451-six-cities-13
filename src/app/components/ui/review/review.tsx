import { DateFormat, RATE_FACTOR } from '../../../../constants';
import { ReviewType } from '../../../types/review-type';
import dayjs from 'dayjs';

type ReviewProps = {
  review: ReviewType;
}

export default function Review({ review }: ReviewProps): JSX.Element {
  const reviewDate = dayjs(review.date).format(DateFormat.fullFormat);
  const year = dayjs(review.date).year();
  const month = dayjs(review.date).format(DateFormat.monthFormat);

  return (
    <li className='reviews__item'>
      <div className='reviews__user user'>
        <div className='reviews__avatar-wrapper user__avatar-wrapper'>
          <img className='reviews__avatar user__avatar' src={review.user.avatarUrl} width='54' height='54' alt='Reviews avatar' />
        </div>
        <span className='reviews__user-name'>{review.user.name}</span>
      </div>
      <div className='reviews__info'>
        <div className='reviews__rating rating'>
          <div className='reviews__stars rating__stars'>
            <span style={{ width: `${review.rating * RATE_FACTOR}%` }}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <p className='reviews__text'>{review.comment}</p>
        <time className='reviews__time' dateTime={reviewDate}>
          {month} {year}
        </time>
      </div>
    </li>
  );
}
