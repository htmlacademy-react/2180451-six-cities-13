import MainPage from '../components/pages/main-page/MainPage';
import Header from '../components/layouts/header/Header';

type AppCountProps = {
  offersCount: number;
}

export default function App({offersCount}: AppCountProps) {
  return (
    <div>
      <Header />
      <MainPage offersCount={offersCount} />
    </div>
  );
}
