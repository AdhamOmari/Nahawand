import React, { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet'
import Spinner from '../../Component/Spinner/spinner'
import StoreLocation from '../StoreLocation/StoreLocation'

// Lazy-loaded components
const SliderCard = lazy(() => import('../SliderCard/SliderCard'))
const CardMenues = lazy(() => import('../MenuesCard/CardMenues'))
const Opinion = lazy(() => import('../opinion/Opinion'))
const SubscriptionForm = lazy(() => import('../Form/SubscriptionForm'))
const CardLogo = lazy(() => import('../CardLogo'))
const Footer = lazy(() => import('../../Component/Footer/Footer'))
const NavigationBar = lazy(() =>
  import('../../Component/Navegation/NavigationBar')
)

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Your Website Title</title>
        <meta name='description' content='Description of your website' />
        {/* Add more meta tags as needed */}
      </Helmet>

      <main className='main_wrap'>
        <Suspense
          fallback={
            <div>
              <Spinner />
            </div>
          }
        >
          <CardLogo />
          <SliderCard />
          <CardMenues />
          <Opinion />
          <StoreLocation />

          <SubscriptionForm />
        </Suspense>
      </main>
    </>
  )
}

export default HomePage
