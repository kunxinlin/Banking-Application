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
    }

    transactionHistoryClicked(id){
        this.props.history.push(`/showTransactions/${id}`)
    }

    render() {
        return(
            <div>
                <h1>{this.state.id}</h1>
            </div>
        )
    }
}
export default UserHome