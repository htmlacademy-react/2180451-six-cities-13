import { Outlet } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import { AuthorizationStatus } from '../../../../constants';

export default function Layout(): JSX.Element {
  return (
    <>
      <Header authStatus={AuthorizationStatus.NoAuth} />
      <Outlet />
      <Footer />
    </>
  );
}
