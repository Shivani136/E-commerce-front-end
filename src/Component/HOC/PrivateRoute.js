import React from 'react';
import { Route,Navigate,Outlet} from 'react-router-dom';


const PrivateRoute = ({ component: Component, ...rest }) => {
  // const auth = null; 
  return <Route  {...rest} component={(props) => {

    const token = window.localStorage.getItem('token');
    if (token) {
      return <Component {...props} />
    } else {
      // return  <Navigate to='/signin' />;
       return token ? <Outlet />: <Navigate to='/signin'   />
    }

  }} />

}




export default PrivateRoute;
