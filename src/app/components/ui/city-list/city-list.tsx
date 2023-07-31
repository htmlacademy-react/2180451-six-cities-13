import { useDispatch } from 'react-redux';
import { CityType } from '../../../types/city-type';
import { changeCity } from '../../../../store/action';

type CityListProps = {
  cityList: CityType[];
}

export default function CityList({ cityList }: CityListProps): JSX.Element {
  const dispatch = useDispatch();

  return (
    <ul className='locations__list tabs__list'>
      {
        cityList.map((city) => (
          <li className='locations__item' key={city.id}>
            <a
              onClick={() => dispatch(changeCity(city.name))}
              className='locations__item-link tabs__item'
              href='#'
            >
              <span>{city.name}</span>
            </a>
          </li>
        ))
      }
    </ul>
  );
}
