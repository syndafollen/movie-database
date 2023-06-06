import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { FavoritesPage } from './pages'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/favorites',
    element: <FavoritesPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
