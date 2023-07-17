import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './components/pages/main-page/main-page';
import ScrollToTop from './components/utils/scroll-to-top/scroll-to-top';
import Layout from './components/layouts/layout/layout';
import Favorites from './components/pages/favorites/favorites';
import Login from './components/pages/login/login';
import PageNotFound from './components/pages/page-not-found/page-not-found';
import Offer from './components/pages/offer/offer';
import PrivateRoute from './components/utils/private-route/private-route';
import { AuthorizationStatus, AppRoute } from '../constants';

type AppProps = {
  offersCount: number;
}

export default function App({ offersCount }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={AppRoute.Root} element={<Layout />} >
          <Route index element={<MainPage offersCount={offersCount} />} />
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute authStatus={AuthorizationStatus.NoAuth}>
              <Favorites />
            </PrivateRoute>
          }
          />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route path={AppRoute.Offer} element={<Offer />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
