import './App.css'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Goals from './components/Goals'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <div className="wrapper">
        <Home />
        <Goals />
        <Gallery />
        <Footer />
      </div>
    </>
  )
}

export default App
