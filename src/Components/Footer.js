import React from 'react';
import { Container,Row , Jumbotron , Col, Navbar } from 'react-bootstrap';
class Footer extends React.Component{
render(){
    //const marginTop = {
     //   marginTop:"20px"
     // };
    return(
       

        <Navbar fixed="bottom" bg="dark" varient="dark">
            <Container>
                <Col lg={12} ClassName="text-center text-muted">
                    <div> Footer </div>
                </Col>
            </Container>
        </Navbar>
    );
}
}
export default Footer;