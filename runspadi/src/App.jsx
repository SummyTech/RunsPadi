import './App.css'
import About from './Pages/About'
import Home from './Pages/Home'
import Footer from './Pages/Footer'
import HowItWorks from './Pages/HowItWorks'
import Service from './Pages/Service'
import Testimonial from './Pages/Testimonial'
import ScrollUpButton from './ScrollUpButton'
import Navbar from './Navbar'

function App() {

  return (
    <div className='nunito'>
      <Navbar/>
      <Home/>
      <Service/>
      <About/>
      <HowItWorks/>
      <Testimonial/>
      <Footer/>
      <ScrollUpButton/>
    </div>
  )
}

export default App
