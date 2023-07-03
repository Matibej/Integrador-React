import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, redirectTo }) => {
  const  logged  = useSelector((state) => state.user.logUser);

  return logged ? children : <Navigate to={redirectTo}/>;
};

export default ProtectedRoute;