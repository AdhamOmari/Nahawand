import './App.css'
import Footer from './Component/Footer/Footer'
import NavigationBar from './Component/Navegation/NavigationBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import CardLogo from './Page/CardLogo'
import SliderCard from './Page/SliderCard/SliderCard'
import Menus from './Page/Menus/Menus'
import CardCarousel from './Page/Menus/CardCarousel'
import Opinion from './Page/opinion/Opinion'
import CardMenues from './Page/MenuesCard/CardMenues'
import SubscriptionForm from './Page/Form/SubscriptionForm'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App () {
  return (
    <BrowserRouter>
      <header>
        <NavigationBar />
      </header>

      <main className='main_wrap'>
        <Routes>
          <Route path='/' element={<CardLogo />} />
          <Route path='/slider-card' element={<SliderCard />} />
          <Route path='/menus' element={<Menus />} />
          <Route path='/card-carousel' element={<CardCarousel />} />
          <Route path='/opinion' element={<Opinion />} />
          <Route path='/card-menues' element={<CardMenues />} />
          <Route path='/subscription-form' element={<SubscriptionForm />} />
        </Routes>

        <SliderCard />
        <CardMenues />
        <Opinion />
        <SubscriptionForm />
      </main>

      <Footer />
    </BrowserRouter>
  )
}

export default App
