/* eslint-disable no-unused-vars */
import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import Navbar from './components/shared/Navbar'
import Login from './components/auth/login'
import Signup from './components/auth/Signup'
import Home from './components/Home'
const appRouter = createBrowserRouter(
[{
path:'/',
element:<Home/>,
},
{
    path:'/login',
    element:<Login/>
},
{
    path:'/signup',
    element:<Signup/>
}
])
function App() {
 return(
  <>
  <RouterProvider router={appRouter}/>
  </>
 )
}

export default App
