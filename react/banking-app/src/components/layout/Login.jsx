import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import LoginCtrlr from "../../services/LoginCtrlr";

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
            passwordCheck: "password",
            login: []
        }
        //bindings
        this.validateForm = this.validateForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getLoginData = this.getLoginData.bind(this);

    }

    componentDidMount() {
        this.getLoginData()
    }

    getLoginData(){
        LoginCtrlr.getAllLogins()
            .then(
                value => {
                    this.setState({login: value.data})
                }
            )
    }

    validateForm(){
        if(this.state.email.length === 0) this.setState({isValid: true});
        else if(this.state.password.length === 0) this.setState({isValid: true});
        else this.setState({isValid: false});
        //console.log(this.state.id)

    }

    handleSubmit(event) {
        let number = this.state.login[0].id

        event.preventDefault()
        //console.log(this.state.login[0].id) //**
        console.log(number)
        LoginCtrlr.getPassword(this.state.email).then(
            response =>{this.setState({passwordCheck: response.data, statusCheck: response.status})},
            reason =>{this.setState({error:"The email and/or password you have entered is not correct, please try again."})}
        ).then(()=>
            {
                if(this.state.password !== this.state.passwordCheck) this.setState({error:"The email and/or password you have entered is not correct, please try again."})
                else{
                    //LoginCtrlr.getID(this.state.email).then(response =>{response.data === true ? this.props.history.push("/userHome/", {email: this.state.email}) : this.props.history.push("/mainpage/", {email: this.state.email})})
                    //this.props.history.push("/userHome/", {email: this.state.email})
                    this.props.history.push(`/userHome/${number}`)
                }
            }
        );
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
        this.validateForm();
        //console.log(this.state.id)

    }

    userHomeClicked(id){
        this.props.history.push(`/userHome/${id}`)
    }

    render() {
        return(
            <div>
                <header className = "header" >
                    JuugHome
                </header>
                <div className="jumbotron" style={{backgroundColor: "#1a1a1a" }}>
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
                        <Button block disabled={this.state.isValid} type="submit" className='btn btn-link'>
                            Login
                        </Button>
                    </form>
                </div>
            </div>
        )
    }
}
export default Login