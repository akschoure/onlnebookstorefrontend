import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom';
import Home from '../Layout/Home';
import About from '../Layout/About';
import Contact from '../Layout/Contact';

function Container(){
    return(
        <div className="App">
          <BasicRouting></BasicRouting>
        </div>
    );
}

function BasicRouting(){
    return(
        <div>
            <h1>Online Book Store</h1>
            <hr/>
            <Router>
                <Link to="/">Home</Link> | <Link to="/about">About us</Link> | <Link to="/contact">Contact us</Link>
           

             <hr/>

              < Switch>
                <Route exact path="/"><Home/></Route>
                <Route exact path="/about"><About/></Route>
                <Route exact path="/contact"><Contact/></Route>
                
              </Switch>
            </Router>
        </div>
    );
}

export default Container;