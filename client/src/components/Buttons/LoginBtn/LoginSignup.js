import React from "react";
import LoginForm from "../../Forms/LoginForm/LoginForm";
import "./styles.css";

class LoginSignup extends React.Component {

    render() {
    return (
        <div className="nav-button">
        <button type="button" id="login" className="btn" data-toggle="modal" data-target="#exampleModal">
        login/signup
        </button>

        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title active-modal" id="exampleModalLabel">Sign in</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <LoginForm setLogIn = {this.props.setLogIn}/>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Sign in</button>
            </div>
            </div>
        </div>
        </div>
    </div>
    )
    }
}

export default LoginSignup;