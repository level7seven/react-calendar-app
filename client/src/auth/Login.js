import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleEmailChange = (e) => {
    this.setState({email: e.target.value});
  }

  handlePasswordChange = (e) => {
    this.setState({password: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/auth/login', {
      email: this.state.email,
      password: this.state.password
    }).then((result) => {
      localStorage.setItem('mernToken', result.data.token);
      localStorage.setItem('calendar', result.data.calendar);
      localStorage.setItem('user', result.data.user);
      this.setState({ success: true });
      this.props.updateUser();
    }).catch((error) => {
      this.props.setFlash('error', error.response.status + ': ' + (error.response.data && error.response.data.error ? error.response.data.message : error.response.statusText));
    });
  }

  render() {
    let form = '';
    if(this.props.user){
      return (<Redirect to="/" />);
    }
    else {
      form = (<form onSubmit={this.handleSubmit} className="nice-form">
                <div>
					 	<h4>Email:</h4>
                  <input name="Email"
                       placeholder="Enter your email"
                       value={this.state.email}
                       onChange={this.handleEmailChange}
                  />
                </div>
                <div>
					 	<h4>Password:</h4>
                  <input name="Password"
                       placeholder="Enter your password"
                       type="password"
                       value={this.state.password}
                       onChange={this.handlePasswordChange}
                  />
                </div>
                <input type="submit" value="Login" className="btn-primary margin-30" />
              </form>);
    }
    return (
      <div>
        {form}
		  <div>
		  		<Link to="/login/guest"><button className="btn blue margin-30">Guest Login</button></Link>
		  </div>
      </div>
    );
  }
}

export default Login;
