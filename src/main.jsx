import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Routes';
import { BrowserRouter } from 'react-router-dom';
import './Globals.scss';
import { UserStorage } from './useContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserStorage>
        <App />
      </UserStorage>
    </BrowserRouter>
  </React.StrictMode>
)