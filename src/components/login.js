import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../styles/open-doodles-plant.svg';
import "../styles/mine.scss";

class Login extends Component {
	constructor(props) {
	  super(props);
		this.state = {
			email: "",
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
		console.log("You are logged in");
		console.log(this.state);
		this.setState({
			email: "",
			password: ""
		});
  }
  
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
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
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Login
          </button>
          <Link to="/register"> Login Here</Link >
        </div>
      </div>
    );
  }
}
export default Login;