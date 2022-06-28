import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { EmailConfirmation } from './EmailConfirmation/EmailConfirmation';
import { Provider } from 'react-redux';
import { NavBar } from './Shared/components/NavBar/NavBar';
import { AppRoutes } from './AppRoutes';
import { store } from './Shared/components/NavBar/components/Search/combinedReducers';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  //<React.StrictMode>
  <BrowserRouter>
        <Provider store={store}>
          <NavBar>
            <AppRoutes />
          </NavBar>
        </ Provider>

  </BrowserRouter>  
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
