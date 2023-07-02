import { Route, Routes as ReactDOMRoutes} from 'react-router-dom'
import React from 'react'
import Home from '../pages/Home/Home'
import Login from '../pages/UserAccount/Login'
import Register from '../pages/UserAccount/Register'
import Error from '../pages/Error/Error'
import Checkout from '../components/Checkout/Checkout'

const Routes = () => {
  return (
        <ReactDOMRoutes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='*' element={<Error />}/>
        </ReactDOMRoutes>
  )
}

export default Routes