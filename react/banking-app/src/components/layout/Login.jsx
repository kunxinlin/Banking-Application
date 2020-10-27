import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import LoginCtrlr from "../../services/LoginCtrlr";
import UserCtrlr from "../../services/UserCtrlr";

class Login extends Component {
    constructor() {
        super()
        this.state = {
            //id: this.state.match.params.id,
            //id: -1,
            id: 1,
            email: "",
            password: "",
            error: "",
            isValid: true,
            statusCheck:"status",
            passwordCheck: "password"
        }
        //bindings
        this.validateForm = this.validateForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    validateForm(){
        if(this.state.email.length === 0) this.setState({isValid: true});
        else if(this.state.password.length === 0) this.setState({isValid: true});
        else this.setState({isValid: false});
        //console.log(this.state.id)

    }

    handleSubmit(event) {
        event.preventDefault()
        LoginCtrlr.getPassword(this.state.email).then(
            response =>{this.setState({passwordCheck: response.data, statusCheck: response.status})},
            reason =>{this.setState({error:"The email and/or password you have entered is not correct, please try again."})}
        ).then(()=>
            {
                if(this.state.password !== this.state.passwordCheck) this.setState({error:"The email and/or password you have entered is not correct, please try again."})
                else{
                    //LoginCtrlr.getID(this.state.email).then(response =>{response.data === true ? this.props.history.push("/userHome/", {email: this.state.email}) : this.props.history.push("/mainpage/", {email: this.state.email})})
                    this.props.history.push("/userHome/", {email: this.state.email})
                }
            }
        );

        console.log(this.state.id)
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
        this.validateForm();
        //console.log(this.state.id)

    }

    render() {
        return(
            <div>
                <div className="jumbotron" style={{backgroundColor: "gray"}}>
                    <h3 style={{textAlign: "center"}}>Login</h3>
                </div>
                <div className="Login">
                    <form onSubmit={this.handleSubmit}>
                        <FormGroup controlId="email">
                            <FormLabel>Email</FormLabel>
                            <FormControl
                                autoFocus
                                type="email"
                                value={this.state.email}
                                name="email"
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup controlId="password">
                            <FormLabel>Password</FormLabel>
                            <FormControl
                                type="password"
                                value={this.state.password}
                                name="password"
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <b className="error" style={{color: "red"}}>{this.state.error}</b>
                        <Button block disabled={this.state.isValid} type="submit">
                            Login
                        </Button>
                        <Button block name="registration" onClick={() =>this.props.history.push("/addLogin/")} >
                            Register
                        </Button>
                    </form>
                </div>
            </div>
        )
    }
}
export default Login