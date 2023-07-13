import MainPage from './components/pages/main-page/main-page';
import Header from './components/layouts/header/Header';

type AppProps = {
  offersCount: number;
}

export default function App({offersCount}: AppProps): JSX.Element {
  return (
    <>
      <Header />
      <MainPage offersCount={offersCount} />
    </>
  );
}
