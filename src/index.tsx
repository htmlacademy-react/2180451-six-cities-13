import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { offerList } from './app/mocks/offer-list';
import { reviewList } from './app/mocks/review-list';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offerList={offerList}
      reviewList={reviewList}
    />
  </React.StrictMode>
);
