import React from 'react';
import FacebookLogin from 'react-facebook-login';

class LoginComponent extends React.Component {

    render() {
        const responseFacebook = (response) => {
    console.log(response);
  }
    return (                    
      <FacebookLogin
        appId="449917482282145" 
        fields="name,email,picture"
        callback={responseFacebook}
      />
        );
    }
}

export default LoginComponent;