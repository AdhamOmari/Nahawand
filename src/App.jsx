import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Spinner from './Component/Spinner/spinner'
import NotFound from './Component/Notfound'

// Lazy-loaded components
const NavigationBar = lazy(() => import('./Component/Navegation/NavigationBar'))
const Footer = lazy(() => import('./Component/Footer/Footer'))
const HomePage = lazy(() => import('./Page/Home/HomePage'))

// Other lazy-loaded components
const CardCarousel = lazy(() => import('./Page/Menus/CardCarousel'))

function App () {
  return (
    <BrowserRouter>
      <header>
        <Suspense fallback={<Spinner />}>
          <NavigationBar />
        </Suspense>
      </header>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Menu' element={<CardCarousel />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <Footer />
      </Suspense>
    </BrowserRouter>
  )
}

export default App
