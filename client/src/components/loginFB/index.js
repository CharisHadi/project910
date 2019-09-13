import React from 'react';
import MyButton from './../Button';
import FacebookLogin from 'react-facebook-login';


class LoginComponent extends React.Component {

    render() {
        const responseFacebook = (response) => {
    console.log(response);
  }
        return (                    
               <FacebookLogin
        appId="449917482282145" //APP ID NOT CREATED YET
        fields="name,email,picture"
        callback={responseFacebook}
      />
        );
    }
}

export default LoginComponent;