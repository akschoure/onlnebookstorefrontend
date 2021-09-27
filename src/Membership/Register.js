import React,{Component} from 'react';
//import React, { useReducer } from 'react';
import UserService from '../Service/UserService';
import "../style/regi.css"
class Register extends Component{
    constructor(props){  

        //Initialize state for component
        super(props);
        this.state={
                    firstname:"",
                    lastname:"",
                    emailid:" ",
                    password:"",
                    mobilenumber:"",
                    gender:"",
                    message: null
        };
        this.saveUser = this.saveUser.bind(this);
    } 
     
    saveUser = (e) => {
      e.preventDefault();
      let user = {firstname: this.state.firstname,lastname:this.state.lastname,emailid: this.state.emailid,password: this.state.password,mobilenumber: this.state.mobilenumber,gender: this.state.gender}
      UserService.addUser(user)
       .then(resp => {
         console.log(resp.data);
         this.setState({message : 'User Registration Sucessfull'});
         this.props.history.push('/user');
       } ).catch( err =>{
         console.error("in err",err.response.data);
        // this.props.history.push('/user');
       })
    }
     
    onChange = (e) =>
    this.setState({[e.target.name]: e.target.value});
    render(){
        return (
         

<div class="container register-form">
            <div class="form">
                <div class="note">
                    <p>New User Registration</p>
                </div>

                <div class="form-content">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="First Name*" name="firstname" value={this.state.firstname} onChange={this.onChange}/>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Last Name*" name="lastname" value={this.state.lastname} onChange={this.onChange}/>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Email Id*" name="emailid" value={this.state.emailid} onChange={this.onChange}/>
                            </div>
                            
                        </div>
                        <div class="col-md-6">
                        <div class="form-group">
                                <input type="text" class="form-control" placeholder="Phone Number *" name="password" value={this.state.password} onChange={this.onChange}/>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Password *"  name="mobilenumber" value={this.state.mobilenumber} onChange={this.onChange}/>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="gender *"  name="gender" value={this.state.gender} onChange={this.onChange}/>
                            </div>
                        </div>
                    </div>
                    <button type="button" class="btnSubmit" value="registration" onClick={this.saveUser}>Submit</button>
                </div>
            </div>
        </div>
            
        );
    }
}
export default Register;