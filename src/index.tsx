import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { offerList } from './app/mocks/offer-list';

const Setting = {
  offersCount: 326,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offersCount={Setting.offersCount}
      offerList={offerList}
    />
  </React.StrictMode>
);
