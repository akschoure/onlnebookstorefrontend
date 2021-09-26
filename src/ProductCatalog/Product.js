import React from 'react';
class Product extends React.Component{


    render(){
        return(
            
                 <div>
                <h3>Books Details</h3>
                <hr/>
                <p>Bookid:{this.props.bookid}</p>
                <p>Title:{this.props.title}</p>
                <p>Author:{this.props.author}</p>
                <p>Publication:{this.state.publication}</p>
                <p>ISBN:{this.props.isbn}</p>
                <p>Price:{this.props.price}</p>
                <img src={this.props.imageurl} width="100" height="100"/>
                <p>Discount Price:{this.props.discount}</p>
                <p>Language:{this.props.language}</p>
                <p>Discription:{this.props.description}</p>
                <p>Pages:{this.state.pages}</p>
                <p>Quantity:{this.props.quantity}</p>
                
                <Counter count={this.props.likes} handler={this.handler}></Counter>

            
                <br/>
                <button>Add to cart</button>
            </div>

                

        )
    }
}

export default Product;