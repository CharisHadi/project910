import React from "react";
import LoginSignup from "../LoginBtn/LoginSignup";

class LoginControl extends React.Component {


  render() {
    const isLoggedIn = this.props.loggedIn;
    let button;

    if (isLoggedIn) {
      button = <a id="accountInfo" className="nav-item nav-link" href="#">account</a>
    } else {
      button = <LoginSignup setLogIn = {this.props.setLogIn} />;
    }

    return (
      <div>
        {button}
      </div>
    );
  }
}

export default LoginControl