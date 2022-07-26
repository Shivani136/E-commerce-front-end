import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   return <Route  {...rest} component={(props) => {
//     const token = window.localStorage.getItem('token');
//     if (token) {
//       return <Component {...props} />
//     } else {
//      return  <Navigate to={`/signin`}  />;
//    //     }
//   }} />
// }


// new method (way)

const PrivateRoutes = () => {
  // const token = window.localStorage.getItem('token');
  let auth = { 'token': true }
  return (
    auth.token ? <Outlet /> : <Navigate to='/signin' />
  )
}




export default PrivateRoutes;
