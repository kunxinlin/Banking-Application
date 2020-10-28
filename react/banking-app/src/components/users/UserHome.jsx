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
                <h1>{this.state.id}</h1>
                <button className="btn btn-link text-input" style={{color:"black"}} onClick={()=> this.transactionHistoryClicked(this.state.id)}>Transaction History</button>
            </div>
        )
    }
}
export default UserHome