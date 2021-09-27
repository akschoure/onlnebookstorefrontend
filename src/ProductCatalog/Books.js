import React, { Component } from 'react'
import api from "../Service/bookservice";
import {Link} from "react-router-dom"
class Books extends Component {

    constructor(props) {
        super(props)
        this.state = {
            books: [],
            message: null
        }
        //this.deleteUser = this.deleteUser.bind(this);
        this.myCart = this.myCart.bind(this);
      //  this.addUser = this.addUser.bind(this);
      this.reloadBooks = this.reloadBooks.bind(this);
    }

    componentDidMount() {
        this.reloadBooks();
    }

    reloadBooks() {
        api.fetchAllBooks()
            .then((resp) => {
                this.setState({books: resp.data})
                console.log(this.state.books);
            });
            // UserService.getUsers().then(resp => {
            //     this.setState({ users: resp.data });
            //     console.log(this.state.users);
            // })
    }

    // deleteUser(userId) {
    //     ApiService.deleteUser(userId)
    //        .then(res => {
    //            this.setState({message : 'User deleted successfully.'});
    //            this.setState({users: this.state.users.filter(user => user.id !== userId)});
    //        })

    // }

    myCart(bookid) {
        window.localStorage.setItem("userId", bookid);
        this.props.history.push('/mycart');
    }
    addToCart=(bid)=>{
        var uid = window.localStorage.gettItem("userId");
        api.fetchAllBooks(uid, bid)
        .then((resp) => {
            // this.setState({books: resp.data})
            alert("Successfully Added!")
            console.log(this.state.books);
        });
    }
    // addUser() {
    //     window.localStorage.removeItem("userId");
    //     this.props.history.push('/add-user');
    // }

    render() {
        return (
            <div>
                <h2 className="text-center">Books List</h2>
               <Link className="btn btn-primary" to="/cart">Cart</Link>
                <table className="table table-light">
                <thead>
                        <tr>
                           
                           <th >Title</th>
                           <th >Author</th>
                           <th >Publication</th>
                           <th >Isbn</th>
                           <th >Language</th>
                           <th >Descrtiption</th>
                           <th >ArrivalDate</th>
                           <th >Pages</th>
                           <th >Price</th>
<th>Action</th>
                         </tr>
                </thead>
                    <tbody>
                    {this.state.books.map(b=>(
                          <tr>
                             
                             <td>{b.title}</td>
                             <td>{b.authorid}</td>
                             <td>{b.publication}</td>
                             <td>{b.isbn}</td>
                             {/* <td>{b.imageurl}</td> */}
                             <td>{b.language}</td>
                            <td>{b.description}</td>
                            <td>{b.arrivaldate}</td>
                            <td>{b.pages}</td>
                            <td>{b.price}</td>
                           
                       <td>
                       {/* <button className="btn btn-success m-1" onClick={() => this.buyBook(b.bookid)}> Buy Book </button> */}
            
                      <button className="btn btn-success m-1" onClick={()=>this.addToCart(b.bookid)}>AddtoCart</button>
                </td>
       </tr>
   ))

   }
                    </tbody>
                </table>

            </div>
        );
    }

}

export default Books;