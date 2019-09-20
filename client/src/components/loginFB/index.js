import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import axios from "axios";

class LoginComponent extends React.Component {
    responseFacebook = (response) => {
      console.log(response);
    // send post request to server with fb user name and id
    axios.post('/api/login', {
        name: response.name,
        email: response.email,
        fbid: response.id,
      })
      .then(function (res) {
        console.log(this.props)
        
      })
      .catch(function (error) {
        console.log(error);
      });
        console.log(this.props);
        this.props.setLogIn(response)
    }
    render() {
      
        console.log("bflofing: " , this.props);

    return (                    
      <FacebookLogin
        appId="449917482282145" 
        autoLoad = {false}
        fields="name,email,picture"
        callback={this.responseFacebook}
        render={renderProps => (
          <button onClick={renderProps.onClick} data-dismiss="modal"> FB LOGIN </button>
        )}
      />
        );
    }
}

export default LoginComponent;