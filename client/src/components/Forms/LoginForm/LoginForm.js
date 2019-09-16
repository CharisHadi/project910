import React, { Component } from "react";
import FBLogin from "./../../loginFB";
import "./styles.css";

class LoginForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: ""
        }
    }

    handleUsernameChange = event => {
        this.setState({
            username: event.target.value
        })
    }

    handlePasswordChange = event => {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.password}`)
        event.preventDefault()
    }

    render() {
        return (
            <form>
                <div className="form-group">
                <label htmlFor="uname">Username:</label>
                    <input 
                    type="text" 
                    className="form-control input" 
                    placeholder="Enter Username" 
                    name="uname" 
                    value={this.state.username} 
                    onChange={this.handleUsernameChange}
                    required />
                </div>
                <div className="form-group">
                <label htmlFor="psw">Password:</label>
                    <input 
                    type="password" 
                    className="form-control input"
                    placeholder="Enter Password"
                    value={this.state.password} 
                    onChange={this.handlePasswordChange}
                    required
                    />
                </div>
                <FBLogin setLogIn = {this.props.setLogIn}/>
            </form>
        )
    }
}

export default LoginForm;