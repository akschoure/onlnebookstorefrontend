import {Component, React , useEffect , useState}  from 'react';
import api from "../Service/CategoryService"
class Category extends Component{
    constructor(props){
        super(props);
        this.state={
            category:[]
        }
    }
    componentDidMount=()=>{
        api.fetchAllCategory()
        .then(resp=>{
            console.log(resp.data)
            this.setState({category:resp.data})
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
      <th >Category</th>
      <th >Discription</th>
      <th >Action</th>
      
    </tr>
  </thead>
  <tbody>
   {this.state.category.map(b=>(
       <tr>
           {/* <td>{b.categoryid}</td> */}
           <td>{b.categoryname}</td>
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

export default Category;