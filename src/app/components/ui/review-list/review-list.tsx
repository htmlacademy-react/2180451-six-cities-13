import Review from '../review/review';
import { ReviewType } from '../../../types/review-type';

type ReviewListProps = {
  reviewList: ReviewType[];
}

export default function ReviewList({ reviewList }: ReviewListProps): JSX.Element {
  return (
    <ul className='reviews__list'>
      {reviewList.map((review) =>
        <Review review={review} key={review.id} />
      )}
    </ul>

  );
}
