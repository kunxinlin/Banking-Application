import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { FormGroup, FormControl, FormLabel, FormCheck } from 'react-bootstrap'
import LoginCtrlr from "../../services/LoginCtrlr";
import UserCtrlr from "../../services/UserCtrlr";

class RegisterUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: ''
        }
        //bindings
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit() {
        let user = {
            id: -1,
            email: this.state.email,
            password: this.state.password,
            balance: -1
        }
        UserCtrlr.addUser(user)
            .then(this.props.history.push(`/login`))
    }

    render() {
        return(
            <div>
                <div className="jumbotron" style={{backgroundColor: "gray"}}>
                    <h3>Register</h3>
                </div>
                <div className="container containerForm">
                    <form onSubmit={this.handleSubmit}>
                        <FormGroup controlId ="firstName">
                            <FormLabel>First Name</FormLabel>
                            <FormControl
                                autoFocus
                                type="firstName"
                                value={this.state.firstName}
                                name="firstName"
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup controlId ="lastName">
                            <FormLabel>Last Name</FormLabel>
                            <FormControl
                                autoFocus
                                type="lastName"
                                value={this.state.lastName}
                                name="lastName"
                                onChange={this.handleChange}
                            />
                        </FormGroup>

                        <br/><br/>
                        <button className="btn btn-success" type="submit" disabled={this.state.isValid}>Submit</button>&ensp;
                        <button className="btn btn-warning" name="back" onClick={() =>this.props.history.push("/login")}>Back</button><br/><br/>
                    </form>
                </div>
            </div>
        )
    }


}

export default RegisterUser