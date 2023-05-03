import './App.css'
import Footer from './Component/Footer/Footer'
import NavigationBar from './Component/Navegation/NavigationBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import CardLogo from './Page/CardLogo'
import SliderCard from './Page/SliderCard/SliderCard'

function App () {
  return (
    <div>
      <header>
        <NavigationBar />
      </header>

      <main>
        <CardLogo />
        <SliderCard />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
