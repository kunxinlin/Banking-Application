import {Component} from 'react'
import UserCtrlr from "../../services/UserCtrlr";

class AddUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            //id: this.state.match.params.id,
            firstName: "",
            lastName:"",
            //balance: this.state.match.params.balance
        }
        //bindings
        this.handleChange = this.handleChange.bind(this)
        this.addUser = this.addUser.bind(this)
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addUser(){
        let User = {
            //id: this.state.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            //balance: this.state.balance,
        }
        UserCtrlr.addUser()
            .then(this.props.history.push('/login'))
    }

    render() {
        return(
            <div>
                <h2>Registration Portal</h2>
                <div>
                    <form onSubmit={this.addUser}>
                        <div className="form-group" >
                            <label>ID:</label>
                            <input className="form-control jumbo" type="text" value={this.state.id} disabled></input>
                        </div>
                        <div>
                            <label>First Name:</label>
                            <input className="form-control jumbo" type="text" name="First name" onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <label>Last Name:</label>
                            <input className="form-control jumbo" type="text" name="Last name" onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <label>Balance:</label>
                            <input className="form-control jumbo" type="text" value={this.state.balance} disabled></input>
                        </div>
                        <br/><br/>
                        <button className="btn btn-link button2" style={{color:"black"}} type="Submit">Submit</button><br/><br/>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddUser