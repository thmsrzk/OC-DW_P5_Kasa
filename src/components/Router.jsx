import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home';
import Error from './Error';
import About from './About';
import Housing from './Housing';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/fiche-logement',
    element: <Housing /> 
  },  
  {
    path: '/404',
    element: <Error /> 
  },
  {
    path: '/a-propos',
    element: <About /> 
  }
])

export default router;