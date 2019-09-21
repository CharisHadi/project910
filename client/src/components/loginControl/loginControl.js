import React from "react";
import LoginSignup from "../Buttons/LoginBtn/LoginSignup";
import Account from "../Buttons/AccountBtn/AccountBtn";
import CreateEventBtn from "./../Buttons/CreateEventBtn/CreateEventBtn";
import MyEventsBtn from "./../Buttons/MyEventsBtn/MyEventsBtn";
import NavMessage from "../NavMessage/NavMessage";

class LoginControl extends React.Component {
  

  render() {
        console.log("loginbutton: " , this.props);
    
    const isLoggedIn = this.props.loggedIn;
    let buttons, message;


    if (isLoggedIn) {
      message = 'Hello, ' + this.props.name;
      buttons = <React.Fragment> 
                <Account setLogOut={this.props.setLogOut}/> 
                <CreateEventBtn 
                  userID = {this.props.userID}
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
      <div>
        {buttons}
        <NavMessage 
          theMessage = {message}
        />
      </div>
    );
  }
}

export default LoginControl