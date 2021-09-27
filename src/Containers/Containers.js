import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom';
import Home from '../Layout/Home';
import About from '../Layout/About';
import Contact from '../Layout/Contact';
import Category from '../Categories/Category';
import Author from '../Authors/Author';
import Books from '../ProductCatalog/Books'
import Login from '../Membership/Login';
import Register from '../Membership/Register';
import Bookss from '../ProductCatalog/Bookss';

function Containers(){
    return(
        <div className="Containers">
          <BasicRouting></BasicRouting>
        </div>
    );
}

function BasicRouting(){
    return(
        <div>
           
            <hr/>
            
            <Link to="/bookss">Bookss</Link> | <Link to="/login">Log</Link> | <Link to="/register">Register</Link> | <Link to="/contact">Contact us</Link>  
             <hr/>

              < Switch>
                <Route exact path="/"><Home/></Route>
                <Route exact path="/about"><About/></Route>
                <Route exact path="/contact"><Contact/></Route>
                <Route exact path="/category"><Category/></Route>
                <Route exact path="/author"><Author/></Route>
                <Route exact path= "/books"><Books/></Route>
                <Route exact path= "/login"><Login/></Route>
                <Route exact path= "/register"><Register/></Route>
                <Route exact path= "/bookss"><Bookss/></Route>
              </Switch>
            
        </div>
    );
}

export default Containers;