import React from "react";
import LoginSignup from "../Buttons/LoginBtn/LoginSignup";
import Account from "../Buttons/AccountBtn/AccountBtn";
import MyEventsBtn from "./../Buttons/MyEventsBtn/MyEventsBtn";
import NavMessage from "../NavMessage/NavMessage";

class LoginControl extends React.Component {
  

  render() {    
    const isLoggedIn = this.props.loggedIn;
    let buttons, message;


    if (isLoggedIn) {
      message = 'Hello, ' + this.props.name;
      buttons = <React.Fragment> 
                <Account 
                  userID = {this.props.userID}
                  setLogOut={this.props.setLogOut}
                /> 
                <MyEventsBtn 
                  userID = {this.props.userID}
                />
              </React.Fragment>
    } else {
      message = 'Join the movement!';
      buttons = <LoginSignup setLogIn={this.props.setLogIn} />;
    }

    return (
      <div id="nav-message">
        {buttons}
        <NavMessage 
          theMessage = {message}
        />
      </div>
    );
  }
}

export default LoginControl