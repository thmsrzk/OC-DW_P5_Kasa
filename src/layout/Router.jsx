import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home';
import Error from '../pages/Error';
import About from '../pages/About';
import Housing from '../pages/Housing';

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