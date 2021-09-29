//import React, { useReducer } from 'react';
import {Component, React , useEffect , useState}  from 'react';
import capi from "../Service/MyCartService"

class MyCart extends Component{
    constructor(props){
        super(props);
        this.state={
            mycart:[],
           
        }
    }
    componentDidMount=()=>{
        capi.fetchAllCart()
        .then(resp=>{
            console.log(resp.data)
            //this.setState({red:true});
            this.setState({mycart:resp.data})
        })
        .catch(err=>{
        console.log(err)
        })
    }
    render(){

    
        return(
            <div>
                <table class="table table-dark">
  <thead>
    <tr>
      {/* <th >Number</th> */}
      <th >Book Name</th>
      <th >Author Name</th>
      <th >Price</th>
      <th >Quantity</th>
      
      
      
      
    </tr>
  </thead>
  <tbody>
   {this.state.mycart.map(c=>(
       <tr>
           {/* <td>{b.authorid}</td> */}
           <td>{c.books.title}</td>
           <td>{c.author.authorname}</td>
           <td>{c.books.price}</td>
           <td>{c.quantity}</td>
        
           <td> <button className="btn btn-success" onClick={() => this.saveBook(user.id)}> GoToBooks </button></td>
       </tr>
       
   ))

   }
  </tbody>
  
</table>
                {}
            </div>
        )
    }
}

export default MyCart;