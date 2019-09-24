import React from "react";
import AccountForm from "../../Forms/AccountForm/AccountForm";
import "./styles.css";

class Account extends React.Component {

    render() {

    return (
        <div className="nav-button">
        <button type="button" id="accountInfo" className="btn" data-toggle="modal" data-target="#exampleModal4">
        <i class="fas fa-user"></i> my account
        </button>

        <div className="modal fade" id="exampleModal4" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title active-modal" id="exampleModalLabel">Account</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <div className="modal-body">
            <AccountForm 
                userID = {this.props.userID}
            />
            </div>

            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Back</button>
                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick ={this.props.setLogOut}>Sign out</button>
            </div>
            </div>
        </div>
        </div>
    </div>
    )
    }
}

export default Account;