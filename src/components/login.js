import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../styles/open-doodles-plant.svg';
import axios from "axios";
import "../styles/mine.scss";
import "../styles/App.scss";
class Login extends Component {
	constructor(props) {
	  super(props);
		this.state = {
			email: "",
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
		console.log("You are logged in");
		console.log(this.state);
		this.setState({
			email: "",
			password: ""
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
      password: this.state.password
    };
  
  axios.post("https://plant-finder-api.herokuapp.com/api/v1/login", user )
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
                <label htmlFor="email">Email</label>
                <input type="text" name="email" placeholder="email" onChange={this.handleChange} />
              </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" onChange={this.handleChange} />
        <div className="footer">
          <button type="button" className="btn" onClick={this.handleSubmit}>
            Login
          </button> 
          <Link to="/register" type="button" className="btn"> Register</Link >
        </div>
      </div>
      </div>
      </div>
      </div>

      
    );
  }
}
export default Login;