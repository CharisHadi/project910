import React from "react";
import LoginSignup from "../Buttons/LoginBtn/LoginSignup";
import Account from "../Buttons/AccountBtn/AccountBtn";

class LoginControl extends React.Component {
  

  render() {
        console.log("loginbutton: " , this.props);
    
    const isLoggedIn = this.props.loggedIn;
    let button;

    if (isLoggedIn) {
      button = <Account setLogOut={this.props.setLogOut}/>
    } else {
      button = <LoginSignup setLogIn={this.props.setLogIn} />;
    }

    return (
      <div>
        {button}
      </div>
    );
  }
}

export default LoginControl