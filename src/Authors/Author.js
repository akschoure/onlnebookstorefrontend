import {Component, React , useEffect , useState}  from 'react';
import api from "../Service/authorservice"
class Author extends Component{
    constructor(props){
        super(props);
        this.state={
            author:[]
        }
    }
    componentDidMount=()=>{
        api.fetchAllAuthor()
        .then(resp=>{
            console.log(resp.data)
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
      <th scope="col">Number</th>
      <th scope="col">Author Name</th>
      <th scope="col">Discription</th>
      
    </tr>
  </thead>
  <tbody>
   {this.state.author.map(b=>(
       <tr>
           <td>{b.authorid}</td>
           <td>{b.authorname}</td>
           <td>{b.discription}</td>
          
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