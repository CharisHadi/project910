import React from 'react';
import FacebookLogin from 'react-facebook-login';
import axios from "axios";

class LoginComponent extends React.Component {
     responseFacebook = (response) => {
    // send post request to server with fb user name and id
      axios.post('/api/login', {
        name: response.name,
        email: response.email,
        fbid: response.id,
      })
      .then(function (res) {
        console.log(res)
      })
      .catch(function (error) {
        console.log(error);
      });
        console.log(response);
    }
    render() {

    return (                    
      <FacebookLogin
        appId="449917482282145" 
        fields="name,email,picture"
        callback={this.responseFacebook}
      />
        );
    }
}

export default LoginComponent;