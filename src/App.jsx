import './styles/App.scss'
import router from './layout/Router.jsx'
import { RouterProvider } from 'react-router-dom'
import Header from './layout/Header.jsx'
import Footer from './layout/Footer.jsx'

function App() {
  return (
    <>
    <Header />
    <main>
    <RouterProvider router={router}/>
    </main>
    <Footer />
    </>
  )
}

export default App;
