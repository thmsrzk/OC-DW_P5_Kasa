import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home';
import Error from '../pages/Error';
import About from '../pages/About';
import Housing from '../pages/Housing';

const router = createBrowserRouter([
  {
    path: '/OC-DW_P5_Kasa/',
    element: <Home />
  },
  {
    path: '/OC-DW_P5_Kasa/fiche-logement/',
    element: <Housing /> 
  },  
  {
    path: '/OC-DW_P5_Kasa/404/',
    element: <Error /> 
  },
  {
    path: '/OC-DW_P5_Kasa/a-propos/',
    element: <About /> 
  }
])

export default router;