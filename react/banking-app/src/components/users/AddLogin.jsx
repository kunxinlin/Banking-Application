import {Component} from  'react'
import UserCtrlr from "../../services/UserCtrlr";
import LoginCtrlr from "../../services/LoginCtrlr";

class AddLogin extends  Component {
    constructor(props) {
        super(props)
        this.state = {
            //id: this.state.match.params.id,
            email: "",
            password: ""
        }

        //bindings
        this.handleChange = this.handleChange.bind(this)
        this.addLogin = this.addLogin.bind(this)
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addLogin(){
        let UserLogin = {
            //id: this.state.id,
            email: this.state.email,
            password: this.state.password,
        }
        LoginCtrlr.addUserLogin()
            .then(this.props.history.push('/addUser'))
    }

    render() {
        return(
            <div>
                <h2>Registration Portal</h2>
                <div>
                    <form onSubmit={this.addLogin}>
                        <div className="form-group" >
                            <label>ID:</label>
                            <input className="form-control jumbo" type="text" value={this.state.id} disabled></input>
                        </div>
                        <div>
                            <label>Email:</label>
                            <input className="form-control jumbo" type="text" name="Email" onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <label>Password:</label>
                            <input className="form-control jumbo" type="text" name="Password" onChange={this.handleChange}></input>
                        </div>
                        <br/><br/>
                        <button className="btn btn-link button2" style={{color:"black"}} type="Submit">Submit</button><br/><br/>
                    </form>
                </div>
            </div>
        )
    }

}

export default AddLogin