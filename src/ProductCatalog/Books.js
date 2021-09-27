import {Component, React , useEffect , useState}  from 'react';
import api from "../Service/bookservice"
class Books extends Component{
    constructor(props){
        super(props);
        this.state={
            books:[]
        }
    }
    componentDidMount=()=>{
        api.fetchAllBooks()
        .then(resp=>{
            console.log(resp.data)
            this.setState({books:resp.data})
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
      <th scope="col">Title</th>
      <th scope="col">Publication</th>
      <th scope="col">Isbn</th>
      <th scope="col">Price</th>
      <th scope="col">Descrtiption</th>
      <th scope="col">Discout</th>
      <th scope="col">ArrivalDate</th>
      <th scope="col">Language</th>
      <th scope="col">Pages</th>
     
    </tr>
  </thead>
  <tbody>
   {this.state.books.map(b=>(
       <tr>
           <td>{b.bookid}</td>
           <td>{b.title}</td>
           <td>{b.author}</td>
           <td>{b.publication}</td>
           <td>{b.isbn}</td>
           {/* <td>{b.imageurl}</td> */}
           <td>{b.discount}</td>
           <td>{b.language}</td>
           <td>{b.description}</td>
           <td>{b.pages}</td>
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

export default Books;