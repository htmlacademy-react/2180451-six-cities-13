import Logo from '../../ui/logo/logo';
import Nav from '../../ui/nav/nav';

type HeaderProps = {
  authStatus: string;
}

export default function Header({authStatus}: HeaderProps): JSX.Element {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__wrapper'>
          <div className='header__left'>
            <Logo width={81} height={41} />
          </div>
          <Nav authStatus={authStatus} />
        </div>
      </div>
    </header>
  );
}
