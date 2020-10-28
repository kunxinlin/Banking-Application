import react, {Component} from 'react'
import {Link} from "react-router-dom";
import React from "react";
//git test

class UserHome extends Component {
    constructor(props) {
        super(props)
        this.state ={
            //blase
            id: props.match.params.id
        }
        //bindings
        this.transactionHistoryClicked = this.transactionHistoryClicked.bind(this)
    }

    transactionHistoryClicked(id){
        this.props.history.push(`/showTransactions/${id}`)
        console.log(this.state.id)
    }

    render() {
        return(
            <div>

                < br></br>
                < br></br>
                < br></br>
                <h1 className="home-header">Welcome,</h1>
                < br></br>
                < br></br>
                < br></br>
                < br></br>
                <button className="btn btn-link button" style={{color:"black"}} onClick={()=> this.transactionHistoryClicked(this.state.id)}>Transaction History</button>
                <button className="btn btn-link button2" style={{color:"black"}} onClick={()=> this.deleteAll()}>Transfer or Pay</button>
                < br></br>
                <button className="btn btn-link button3" style={{color:"black"}} onClick={()=> this.deleteAll()}>Account Details</button>
                <button className="btn btn-link button4" style={{color:"black"}} onClick={()=> this.deleteAll()}>Deposit Checks</button>

            </div>
        )
    }
}
export default UserHome