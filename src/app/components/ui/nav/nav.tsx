import { Link } from 'react-router-dom';
import { AuthorizationStatus } from '../../../../constants';

type NavProps = {
  authStatus: string;
}

export default function Nav({ authStatus }: NavProps): JSX.Element {
  return (
    <nav className="header__nav">
      {authStatus === AuthorizationStatus.Auth ?
        <ul className='header__nav-list'>
          <li className='header__nav-item user'>
            <a className='header__nav-link header__nav-link--profile' href='#'>
              <div className='header__avatar-wrapper user__avatar-wrapper'>
              </div>
              <span className='header__user-name user__name'>Oliver.conner@gmail.com</span>
              <span className='header__favorite-count'>3</span>
            </a>
          </li>
          <li className='header__nav-item'>
            <a className='header__nav-link' href='#'>
              <span className='header__signout'>Sign out</span>
            </a>
          </li>
        </ul> :
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <Link className="header__nav-link header__nav-link--profile" to="#">
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <span className="header__login">Sign in</span>
            </Link>
          </li>
        </ul>}
    </nav>
  );
}
