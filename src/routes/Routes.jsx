import { Route, Routes as ReactDOMRoutes} from 'react-router-dom'
import React from 'react'
import Home from '../pages/Home/Home'
import Login from '../pages/UserAccount/Login'
import Register from '../pages/UserAccount/Register'

const Routes = () => {
  return (
        <ReactDOMRoutes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </ReactDOMRoutes>
  )
}

export default Routes