import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Order from './pages/Order'
import Reservations from './pages/Reservations'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-brand-cream text-brand-dark flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/order" element={<Order />} />
            <Route path="/reservations" element={<Reservations />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App