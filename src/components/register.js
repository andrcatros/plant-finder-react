import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import loginImg from '../styles/open-doodles-plant.svg';
import "../styles/mine.scss";
import "../styles/App.scss";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            name: "",
            location: "",
            password: ""
        };
        this.update = this.update.bind(this);
        this.displayLogin = this.displayLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    update(e) {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        });
    }
    displayLogin(e) {
        e.preventDefault();
        console.log("You have successfully registered");
        console.log(this.state);
        this.setState({
          email: "",
          name: "",
          location: "",
          password: "",
        });
    }

    handleChange = event => {
      const fieldName = event.target.name;
      this.setState({ [fieldName]: event.target.value });
    }
  
    handleSubmit = event => {
      event.preventDefault();
  
      const user = {
        email: this.state.email,
        name: this.state.name,
        location: this.state.location,
        password: this.state.password
      };
    
    axios.post("https://plant-finder-api.herokuapp.com/api/v1/users", user )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    }
  
    render() {
      return (
        <div className="base-container" ref={this.props.containerRef}>
          <div className="content">
            <div className="image">
              <img src={loginImg} alt=""/>
            </div>
            <div className="form">
              <div className="form-group">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" placeholder="email" onChange={this.handleChange} />
              </div>
                <label htmlFor="username">Username</label>
                <input type="text" name="name" placeholder="username" onChange={this.handleChange} />
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Location</label>
                <input type="text" name="location" placeholder="location" onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="text" name="password" placeholder="password" onChange={this.handleChange} />
              </div>
            </div>
          </div>
          
          <div className="footer">
            <button type="button" className="btn" onClick={this.handleSubmit}>
              Register
            </button>
            <Link to="/login" type="button" className="btn"> Login </Link >
          </div>
       
       </div>
        
      );
    }
  }
export default Register;