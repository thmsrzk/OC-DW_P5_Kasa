import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Home</div> 
  },
  {
    path: '/fiche-logement',
    element: <div>Fiche Logement</div> 
  },  
  {
    path: '/404',
    element: <div>404</div> 
  },
  {
    path: '/a-propos',
    element: <div>A propos</div> 
  }
])

export default router;