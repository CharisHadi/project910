import React from "react";
import LoginSignup from "../Buttons/LoginBtn/LoginSignup";
import Account from "../Buttons/AccountBtn/AccountBtn";
import CreateEventBtn from "./../Buttons/CreateEventBtn/CreateEventBtn";
import MyEventsBtn from "./../Buttons/MyEventsBtn/MyEventsBtn";

class LoginControl extends React.Component {
  

  render() {
        console.log("loginbutton: " , this.props);
    
    const isLoggedIn = this.props.loggedIn;
    let buttons;


    if (isLoggedIn) {
      buttons = <React.Fragment> 
                <Account setLogOut={this.props.setLogOut}/> 
                <CreateEventBtn 
                  userID = {this.props.userID}
                />
                <MyEventsBtn />
              </React.Fragment>
    } else {
      buttons = <LoginSignup setLogIn={this.props.setLogIn} />;
    }

    return (
      <div>
        {buttons}
      </div>
    );
  }
}

export default LoginControl