
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import './App.css'

import MasterLayout from './components/MasterLayout/MasterLayout'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'
import Work from './components/Work/Work'
import Home from './components/Home/Home'

function App() {
  let routes = createHashRouter([{
    path:'/',
    element:<MasterLayout/>,
    children : [
      {
        index: true,
        element:<Home/>
      },
      {
        path:'home',
        element:<Home/>
      },
      {
        path:'about',
        element:<About/>
      },
      {
        path:'skills',
        element:<Skills/>
      },
      {
        path:'experience',
        element:<Experience/>
      },
      {
        path:'work',
        element:<Work/>
      },
    ]
  }])

  return (
    <>
     <RouterProvider router={routes}/>
    </>
  )
}

export default App
