import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom';
import Home from '../Layout/Home';
import About from '../Layout/About';
import Contact from '../Layout/Contact';
import Category from '../Categories/Category';
import Author from '../Authors/Author';
import Books from '../ProductCatalog/Books'

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
            <Router>
                <Link to="/">Home</Link> |  <Link to="/books">Books</Link> |  <Link to="category">Category</Link> | <Link to="author">Author</Link> | <Link to="/about">About us</Link> | <Link to="/contact">Contact us</Link> 
             <hr/>

              < Switch>
                <Route exact path="/"><Home/></Route>
                <Route exact path="/about"><About/></Route>
                <Route exact path="/contact"><Contact/></Route>
                <Route exact path="/category"><Category/></Route>
                <Route exact path="/author"><Author/></Route>
                <Route exact path= "/books"><Books/></Route>
              </Switch>
            </Router>
        </div>
    );
}

export default Containers;