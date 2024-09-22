import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/index.css'
import './assets/css/Layout.css'
import './assets/css/Home.css'
import { RouterProvider } from 'react-router-dom'
import { createRoute } from './routes'
import Loader from './components/loader'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <React.Suspense fallback={<Loader />}>
      <RouterProvider router={createRoute} />
    </React.Suspense>
  </React.StrictMode>,
)
