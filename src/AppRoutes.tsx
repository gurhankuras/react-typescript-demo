import { Provider } from "react-redux"
import { Route, Routes } from "react-router-dom"
import App from "./App"
import { EmailConfirmation } from "./EmailConfirmation/EmailConfirmation"
import store from "./EmailConfirmation/state/store"
import { Otp } from "./Otp/Otp"
import { RouteNames } from "./RouteNames"

export const AppRoutes: React.FC<{}> = () => {
    return (
    <Routes>
      <Route path={RouteNames.home} element={<App />} />
      <Route path={RouteNames.emailConfirmation} element={
            <Provider store={store}>
              <EmailConfirmation />
            </Provider>
        }/>
      <Route path={RouteNames.twoFactorAuth} element={<Otp />}></Route>
    </Routes>)
  }