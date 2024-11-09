import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './Pages/404.jsx'
import Dashboard from './Pages/dashboard.jsx'
import Anggota from './Pages/anggota.jsx'
import Barang from './Pages/barang.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement : <ErrorPage />
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/anggota',
    element: <Anggota />,
  },
  {
    path: '/barang',
    element: <Barang />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
