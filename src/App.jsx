import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/App.scss'
import Header from './layout/Header.jsx'
import Footer from './layout/Footer.jsx'
import Error from './pages/Error';
import Home from './pages/Home';
import About from './pages/About';
import Housing from './pages/Housing';


function App() {
  return (
      <>
        <Router>
          <Header />
          <main>
                <Routes>
                    <Route path="/OC-DW_P5_Kasa/" element={<Home />} />
                    <Route path="*" element={<Error />} />
                    <Route path="/OC-DW_P5_Kasa/a-propos/" element={<About />} />
                    <Route path="/OC-DW_P5_Kasa/fiche-logement/" element={<Housing />} />
                </Routes>
          </main>
          <Footer />
        </Router>
    </>
  )
}

export default App;
