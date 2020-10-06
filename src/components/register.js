import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import loginImg from '../styles/open-doodles-plant.svg';
import "../styles/mine.scss";

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
      this.setState({ name: event.target.value });
    }
  
    handleSubmit = event => {
      event.preventDefault();
  
      const user = {
        name: this.state.name
      };
    
    axios.post("https://plant-finder-api.herokuapp.com/api/v1/users", { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    }
  
    render() {
      return (
        <div className="base-container" ref={this.props.containerRef}>
          <div className="header">Register</div>
          <div className="content">
            <div className="image">
              <img src={loginImg} alt=""/>
            </div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="username" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" placeholder="email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="text" name="password" placeholder="password" />
              </div>
            </div>
          </div>
          <div className="footer">
            <button type="button" className="btn">
              Register
            </button>
            <Link to="/login"> Login Here</Link >
          </div>
        </div>
      );
    }
  }
export default Register;