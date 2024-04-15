import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
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


function App() {

  return <RouterProvider router={router}/>
}

export default App;
