import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './components/pages/main-page/main-page';
import ScrollToTop from './components/utils/scroll-to-top/scroll-to-top';
import Favorites from './components/pages/favorites/favorites';
import Login from './components/pages/login/login';
import PageNotFound from './components/pages/page-not-found/page-not-found';
import Offer from './components/pages/offer/offer';
import PrivateRoute from './components/utils/private-route/private-route';
import { AuthorizationStatus, AppRoute } from '../constants';
import { HelmetProvider } from 'react-helmet-async';

type AppProps = {
  offersCount: number;
}

export default function App({ offersCount }: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoute.Root} index element={<MainPage offersCount={offersCount} />} />
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute authStatus={AuthorizationStatus.NoAuth}>
              <Favorites />
            </PrivateRoute>
          }
          />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route path={AppRoute.Offer} element={<Offer authStatus={AuthorizationStatus.NoAuth} />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
