import './styles/App.scss'
import router from './components/Router.jsx'
import { RouterProvider } from 'react-router-dom'
import Header from './components/Header.jsx'


function App() {
  return (
    <>
    <Header />
    <RouterProvider router={router}/>
    </>
  )
}

export default App;
