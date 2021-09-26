
import React from "react";
import Product from "./Product";



class Books extends React.Component{
    render(){
        const books=data;
        return(
            <div>
                {
                     books.map(item=>(
                                        <Product id={item.bookid}
                                                 title={item.title}
                                                 author={item.author}
                                                 publication={item.publication}
                                                 isbn={item.isbn}
                                                 price={item.price}
                                                 imageurl={item.imageurl}
                                                 discount={item.discount}
                                                 language={item.language}
                                                 description={item.description}
                                                 pages={item.pages}
                                                 quantity={item.quantity} /> 


                                             
                                ))
                } 
            </div>
        );
    }
}

export default Books;