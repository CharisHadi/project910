import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import "./styles.css";

function LoginSignup() {
    return (
        <div className="nav-button">
        <button type="button" id="login" class="btn" data-toggle="modal" data-target="#exampleModal">
        login/signup
        </button>

        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title active-modal" id="exampleModalLabel">Sign in</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <LoginForm />
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Sign in</button>
            </div>
            </div>
        </div>
        </div>
    </div>
    )
}

export default LoginSignup;