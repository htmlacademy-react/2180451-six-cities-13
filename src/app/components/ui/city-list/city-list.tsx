import { useDispatch } from 'react-redux';
import { CityType } from '../../../types/city-type';
import { getActiveCity } from '../../../selectors/selectors';
import { changeCity } from '../../../../store/action';
import { useAppSelector } from '../../../hooks/use-app-selector';
import classNames from 'classnames';

type CityListProps = {
  cityList: CityType[];
}

export default function CityList({ cityList }: CityListProps): JSX.Element {
  const dispatch = useDispatch();
  const activeCity = useAppSelector(getActiveCity);

  return (
    <ul className='locations__list tabs__list'>
      {
        cityList.map((city) => (
          <li className='locations__item' key={city.id}>
            <a
              onClick={() => dispatch(changeCity(city.name))}
              className={classNames('locations__item-link tabs__item', { 'tabs__item--active': city.name === activeCity })}
              href='#'
            >
              <span>{city.name}</span>
            </a>
          </li>
        ))
      }
    </ul >
  );
}
