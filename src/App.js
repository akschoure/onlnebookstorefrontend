import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Containers from './Containers/Containers';
import NavgationBar from './Components/NavigationBar';
import { Container,Row , Jumbotron , Col } from 'react-bootstrap';
import Footer from './Components/Footer';

function App() {
 const marginTop = {
  marginTop:"20px"
};
  return (
    <div className="App">
    
    <Container>
        <Row>
          <Col lg={12} style={marginTop}>
            <Jumbotron className="bg-dark text-white">
                 <p>
                 <h1>Online Book Store</h1>

                 <NavgationBar/> 
                 <Containers></Containers>
                 <Footer></Footer>
      
                </p>
            </Jumbotron>
          </Col>
        </Row> 


     </Container>

        

    </div>
  );
}

export default App;
