//import React, { useReducer } from 'react';
import {Component, React , useEffect , useState}  from 'react';
import api from "../Service/authorservice"

class Author extends Component{
    constructor(props){
        super(props);
        this.state={
            author:[],
           
        }
    }
    componentDidMount=()=>{
        api.fetchAllAuthor()
        .then(resp=>{
            console.log(resp.data)
            this.setState({red:true});
            this.setState({author:resp.data})
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
      <th >Author Name</th>
      <th >Discription</th>
      <th >Action</th>
      
    </tr>
  </thead>
  <tbody>
   {this.state.author.map(b=>(
       <tr>
           {/* <td>{b.authorid}</td> */}
           <td>{b.authorname}</td>
           <td>{b.description}</td>
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

export default Author;