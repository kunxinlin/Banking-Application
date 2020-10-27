import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import LoginCtrlr from "../../services/LoginCtrlr";
import UserCtrlr from "../../services/UserCtrlr";

class Login extends Component{
    constructor() {
        super()
        this.state={
            email: "",
            password: "",
            error: "",
            isValid: true,
            statusCheck:"status",
            passwordCheck: "password"
        }
        this.validateForm = this.validateForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    validateForm(){
        if(this.state.email.length === 0) this.setState({isValid: true});
        else if(this.state.password.length === 0) this.setState({isValid: true});
        else this.setState({isValid: false});
    }

    handleSubmit(event){
        event.preventDefault()
        LoginCtrlr.getPassword(this.state.email).then(
            response =>{this.setState({passwordCheck: response.data, statusCheck: response.status})},
            reason =>{this.setState({error:"The email and/or password you have entered is not correct, please try again."})}
        ).then(() =>
            {
                if(this.state.password !== this.state.passwordCheck) this.setState({error:"The email and/or password you have entered is not correct, please try again."})
                else {
                    LoginCtrlr.getUserLogin()
                }
            }
        )
    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value});
        this.validateForm();
    }

}