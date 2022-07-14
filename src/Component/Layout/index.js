import React from 'react'
import { Container } from 'react-bootstrap';
import Header from '../Header';

 function Layout(props) {
  return (
    <div>
    <Header />
  
    {props.children}
   
  
    </div>
  )
}

export default Layout;