import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { FormGroup, FormControl, FormLabel, FormCheck } from 'react-bootstrap'
import LoginCtrlr from "../../services/LoginCtrlr";

class RegisterLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            isValid: true
        }
        //bindings

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
        this.validateForm()
    }

    handleSubmit() {
        let login = {
            id: -1,
            email: this.state.email,
            password: this.state.password,
        }
        LoginCtrlr.addUserLogin(login)
            .then(this.props.history.push(`/addUser`))
    }

    validateForm() {
        if(this.state.email.length === 0) this.setState({isValid: true})
        else if(this.state.password.length === 0) this.setState({isValid: true})
        else this.setState({isValid: false})
    }

    render() {
        return(
            <div>
                <div className="jumbotron" style={{backgroundColor: "gray"}}>
                    <h3>Register</h3>
                </div>
                <div className="container containerForm">
                    <form onSubmit={this.handleSubmit}>
                        <FormGroup controlId ="email">
                            <FormLabel>Email</FormLabel>
                            <FormControl
                                autoFocus
                                type="email"
                                value={this.state.email}
                                name="email"
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup controlId ="password">
                            <FormLabel>Password</FormLabel>
                            <FormControl
                                autoFocus
                                type="password"
                                value={this.state.password}
                                name="password"
                                onChange={this.handleChange}
                            />
                        </FormGroup>

                        <br/><br/>
                        <button className="btn btn-success" type="submit" disabled={this.state.isValid}>Submit</button>&ensp;
                        <button className="btn btn-warning" name="back" onClick={() =>this.props.history.push("/addUser")}>Back</button><br/><br/>
                    </form>
                </div>
            </div>
        )
    }

}
export default RegisterLogin