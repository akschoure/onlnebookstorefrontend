
import React from 'react';
class  Register extends React.Component{
    constructor(props){  

        //Initialize state for component
        super(props);
        this.state={
                    firstname:"",
                    lastname:"",
                    email:" ",
                    password:"",
                    contactnumber:""
        };

    }

    render(){
        return (
            <div>
                <h3>New Customer Registration</h3>

                <div className="form-group">
                        <label htmlFor="firstname">First Name:</label>
                        <input type="text"
                               value={this.state.firstname} 
                               onChange={ (event)=>{
                                this.setState({firstname: event.target.value})
                               }} 
                               className="form-control" id="firstname"/>
                </div>

                <div className="form-group">
                        <label htmlFor="lastname">Last Name:</label>
                        <input type="text" 
                               value={this.state.lastname}
                               onChange={ (event)=>{
                                this.setState({lastname: event.target.value})
                               }} 
                               className="form-control" id="lastname"/>
                </div>

                <div className="form-group">
                        <label htmlFor="contactnumber">Contact Number:</label>
                        <input type="text" 
                               value={this.state.contactnumber}
                               onChange={ (event)=>{
                                this.setState({contactnumber: event.target.value})
                               }} 
                               className="form-control" id="contactnumber"/>
                </div>
                <div className="form-group">
                        <label htmlFor="email">Email address:</label>
                        <input type="email" 
                                onChange={ (event)=>{
                                    this.setState({email: event.target.value})
                                }} 
                               value={this.state.email}
                               className="form-control" id="email"/>
                </div>
                <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" 
                               value={this.state.password}
                               onChange={ (event)=>{
                                this.setState({password: event.target.value})
                                }} 
                               className="form-control" id="password"/>
                </div>
                <div className="checkbox">
                        <label><input type="checkbox" />Remember me</label>
                </div>
                <button 
                        onClick={()=>{
                            console.log(this.state);
                            //Store registered data into localstorage
                            localStorage.setItem("customer",JSON.stringify(this.state));
                        }}
                        className="btn btn-success">Submit</button>
            </div>
        );
    }
}
export default Register;