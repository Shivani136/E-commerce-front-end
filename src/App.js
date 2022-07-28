import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Container/Home';
import Signin from './Container/Signin';
import Signup from './Container/Signup';
import PrivateRoutes from './Component/HOC/PrivateRoutes';
import { isUserLoggedIn } from '../src/actions';
import { useDispatch, useSelector } from 'react-redux';
import Products from './Container/Products';
import Orders from './Container/Orders.js';

// function PrivateOutlet() {
//   const token = window.localStorage.getItem('token');
//   return token ? <Outlet /> : <Navigate to="/signin" />;
// }

function App() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }

  }, []);

  return (
    <div className="App">

      <Routes>
        <Route element={<PrivateRoutes />}>

          <Route exact path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/orders' element={< Orders />} />
          <Route path='/products' element={<Products />} />
          </Route>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div >
  );
}


export default App;












