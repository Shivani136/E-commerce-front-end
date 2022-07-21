import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Container/Home';
import Signin from './Container/Signin';
import Signup from './Container/Signup';
import PrivateRoute from './Component/HOC/PrivateRoute';
import { isUserLoggedIn } from '../src/actions';
import { useDispatch, useSelector } from 'react-redux';


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

      <Router>
        <Fragment>
          <Routes>
          <Route exact path='/' element={<PrivateRoute/>} />
            <Route exact path='/' element={<Home />} />
            {/* <PrivateRoute path="/" exact element={<Home />} /> */}
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Fragment>
      </Router>



      

    </div>
  );
}

export default App;
