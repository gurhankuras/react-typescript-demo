import { Route, Routes } from "react-router-dom"
import App from "./App"
import { EmailConfirmation } from "./EmailConfirmation/EmailConfirmation"
import Home from "./Home/Home"
import { Otp } from "./Otp/Otp"
import { RouteNames } from "./RouteNames"
import { Provider } from 'react-redux'

import { store as navbarStore } from "./Shared/components/NavBar/components/Search/combinedReducers"
import store from "./EmailConfirmation/state/store"
export const AppRoutes: React.FC<{}> = () => {
    return (
    <Routes>
      <Route path={RouteNames.home} element={
          <Home />              
      } />
      <Route path={RouteNames.emailConfirmation} element={
            <Provider store={store}>
              <EmailConfirmation />
            </Provider>
        }/>
      <Route path={RouteNames.twoFactorAuth} element={<Otp />}></Route>
    </Routes>)
  }