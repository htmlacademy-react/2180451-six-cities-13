import classNames from 'classnames';
import { useState } from 'react';
import { sortOptions } from '../../../../constants';
import { useAppSelector } from '../../../hooks/use-app-selector';
import { getActiveSort } from '../../../selectors/selectors';
import { changeSortOption } from '../../../../store/action';
import { useAppDispatch } from '../../../hooks/use-app-dispatch';

export default function SortingForm(): JSX.Element {

  const [active, setActive] = useState(false);
  const activeSort = useAppSelector(getActiveSort);
  const dispatch = useAppDispatch();

  return (
    <form className='places__sorting' action='#' method='get'>
      <span className='places__sorting-caption'>Sort by </span>
      <span
        className='places__sorting-type'
        tabIndex={0}
        onClick={() => setActive(!active)}
      >
        {activeSort}
        <svg className='places__sorting-arrow' width='7' height='4'>
          <use xlinkHref='#icon-arrow-select'></use>
        </svg>
      </span>
      <ul
        className={
          classNames('places__options places__options--custom', { 'places__options--opened': active })
        }
      >
        {sortOptions.map((option) => (
          <li
            className={
              classNames('places__option', { 'places__option--active': option === activeSort })
            }
            tabIndex={0}
            key={option}
            onClick={() => {
              dispatch(changeSortOption(option));
              setActive(!active);
            }}
          >
            {option}
          </li>
        ))}
      </ul>
    </form>
  );
}
