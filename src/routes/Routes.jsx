import { Route, Routes as ReactDOMRoutes} from 'react-router-dom'
import React from 'react'
import Home from '../pages/Home/Home'
import Login from '../pages/UserAccount/Login'
import Register from '../pages/UserAccount/Register'
import Error from '../pages/Error/Error'
import Checkout from '../pages/Checkout/Checkout'
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute'
import Felicitaciones from '../pages/Felicitaciones/Felicitaciones'

const Routes = () => {
  return (
        <ReactDOMRoutes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/felicitaciones' element={<Felicitaciones />} />

          <Route
            path='/checkout'
            element={
            <ProtectedRoute redirectTo='/register'>
              <Checkout />
            </ProtectedRoute>
            }
          />

          <Route path='*' element={<Error />}/>
        </ReactDOMRoutes>
  )
}

export default Routes