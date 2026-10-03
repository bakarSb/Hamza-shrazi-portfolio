import Navbar from '../src/Components/Navbar'
import About from './Components/About'
import Contact from './Components/Contact'
import Hero from './Components/Hero'
import Services from './Components/Services'
import Teaching from './Components/Teaching'
import Testimonials from './Components/Testimonials'
import Work from './Components/Work'

function App() {
  return (
    <div className="app">

      <Navbar />
      <Hero />
      <About />
      <Services />
      <Teaching />
      <Work />
      <Testimonials />
      <Contact />

    </div>
  )
}
export default App