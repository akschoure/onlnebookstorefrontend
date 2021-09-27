// import React from 'react';
// import Product from './Product';
// //here we have to invoke rest api of books which is in database
// //so here we use cross domain communication -cors for communication between two domain
// //so we have set middleware in the server ie cors with command npm install cors --save
// //in here localhost:3000 or development server we need to give fetch req.
// //with async call bcz of cross domain



// class RestList extends React.Component{
//     constructor(props){
//     super(props)
//     this.state={products:[]}
//          }
//          //componantDidMount component lifecycle function fetching data-RestApi before render
//          componentDidMount(){
//              //from server side 
//             fetch('http://localhost:7070/books')
//             //after fetch we hv to do something
//             .then(
               
//                 //once get async responce then do something
//                 async response =>{
//                     //json data comes from the server side
//                     const data =await response.json();
                    
//                     //if responce is not ok then showing error 
//                     if(!response.ok){
//                         const error=(data && data.message) || response.statusText;
//                         return Promise.reject(error);
//                     }

//                     //if responce is ok then showing data
//                     this.setState({products:data})
//                     console.log(data);

//                 }) // then block ended

//                 //sometime getting runtimeexception or service is not available then .catch block execute
//                 .catch(error=>{
//                     this.setState({errorMessage:error.toString()});
//                     //showing msg on console
//                     console.log("There was an error while fetching data" + error);
                
//                 });
             

//          }; //componentDidMount function ended

//     render(){

//       //  console.log(this.state.products);
//         return(

//             <div>
//                    {  
//                      this.state.products.map(item=>(
//                         <Product id={item.bookid}
//                         title={item.title}
//                         author={item.author}
//                         publication={item.publication}
//                         isbn={item.isbn}
//                         price={item.price}
//                         imageurl={item.imageurl}
//                         discount={item.discount}
//                         language={item.language}
//                         description={item.description}
//                         pages={item.pages}
//                         quantity={item.quantity} /> 


                                             
//                      ))
//                     } 
                     
//             </div>

            
//         );
//     }




// };

// export default RestList;