import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Routes';

import { BrowserRouter } from 'react-router-dom';
import './Globals.scss';
import { UserStorage } from './useContext';

import { Footer } from './components/Footer/Index';
import { Header } from './components/Header/Index';


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter>
      <UserStorage>
        
        <Header/>
        <App />
        <Footer/>

      </UserStorage>
    </BrowserRouter>
  </React.StrictMode>

)