import React, { Component } from "react";
import axios from "axios";
import { extend } from "jquery";
import { response } from "express";
export default class Registration extends Component{
  constructor(props){
    super(props);
    this.state={
      email:"",
      password:"",
      password_confirmation:"",
      registrationErrors:""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    this.setState({
      [event.target.name] : event.target.value
    });
  }
  handleSubmit(event){
    const {email,password,password_confirmation}=this.state;
    axios
    .post(
      "http://localhost:3000.registration",
      {
        user:{
          email:email,
          password:password,
          password_confirmation: password_confirmation
        }
      },
     { withCredentials:true}
    )
    .then(response=>{
      if(response.data.status==="created"){
        this.props.handleSuccessfulAuth(response.data);
      }
    })
    .catch(error=>{
      console.log("registration error", error)
    });
    event.preventDefault();
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input className="reg1" type="email" placeholder="Email" value = {this.state.email} onChange={this.handleChange}required/>
          <input className="reg2" type="password" placeholder="Passowrd" value = {this.state.password} onChange={this.handleChange}required/>
          <input className="reg3" type="password" placeholder="Password confirmation" value = {this.state.password_confirmation} onChange={this.handleChange}required/>
          <button className="bt" type="submit">Register</button>
        </form>
      </div>
    );
  }
}


    

   