import './styles/App.scss'
import router from './components/Router.jsx'
import { RouterProvider } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'


function App() {
  return (
    <>
    <Header />
    <RouterProvider router={router}/>
    <Footer />
    </>
  )
}

export default App;
