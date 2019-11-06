import React, { Component } from "react";
import axios from "axios";
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import "./styles.css"; 

class AccountForm extends Component {

    state = {
        userID: this.props.userID,
        nickname: "",
        location: ""
    }

    handleNicknameChange = event => {
        this.setState({
            nickname: event.target.value
        })
    }

    handleLocationChange = event => {
        this.setState({
            location: event.target.value
        })
    }

    
    handleSubmit = event => {
        
        console.log(this.state);

        geocodeByAddress(this.state.location)
        .then(results => {
            console.log("results:" ,results)
            return(getLatLng(results[0]))
        })
        .then((res) =>
            //console.log('Successfully got latitude and longitude', res)
            axios.post('/api/editAccount', {
                nickname: this.state.nickname,
                location: this.state.location,
                latitude: res.lat,
                longitude: res.lng,
                userId: this.props.userID
            })
            .then(function (res) {
            console.log(res)
             })
            .catch(function (error) {
                console.log(error);
            } 
            ).catch(err => {
                console.log(err)
            }) 
        )
    }

    render() {
        return (
            <form>
                <div className="form-group">
                <label>Enter a nickname: </label>
                    <input 
                    type="text" 
                    className="form-control input" 
                    placeholder="Example: Recyclops"
                    onChange={this.handleNicknameChange} />
                </div>
                <div className="form-group">
                <label>Save your location:</label>
                    <input 
                    type="text" 
                    className="form-control input"
                    placeholder="Enter Address"
                    onChange={this.handleLocationChange}
                    />
                </div>
                
                <button type="button" onClick = {this.handleSubmit} className="btn btn-primary" data-dismiss="modal">Submit Changes</button>
            </form>
        )
    }
}

export default AccountForm;