import './styles/App.scss'
import router from './components/Router.jsx'
import { RouterProvider } from 'react-router-dom'


function App() {

  return <RouterProvider router={router}/>
}

export default App;
