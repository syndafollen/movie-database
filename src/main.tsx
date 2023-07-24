import React from 'react'
import ReactDOM from 'react-dom/client'
import { FavoritesPage, MainPage, RegistrationPage, LoginPage, ProfilePage, SettingsPage } from './pages'
import './index.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/favorites",
    element: <FavoritesPage />,
  },
  {
    path: "/reg",
    element: <RegistrationPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/settings",
    element: <SettingsPage />,
  },
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </Provider>
  </React.StrictMode>,
)
