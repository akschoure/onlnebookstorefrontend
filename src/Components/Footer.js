import React from 'react';

import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom';
import { Container,Row , Jumbotron , Col, Navbar } from 'react-bootstrap';
class Footer extends React.Component{
render(){
    //const marginTop = {
     //   marginTop:"20px"
     // };
    return(
       

        <Navbar fixed="bottom" bg="dark" varient="dark">
            <Container>
                <Col lg={12} className="text-center text-muted">
              
                    <Link to="/contact"><h5>Contact us</h5></Link>   |    <Link to="/about"><h5>About us</h5></Link> 
                  
                     <h2>All rights reserved</h2>
                </Col>
            </Container>
        </Navbar>
    );
}
}
export default Footer;