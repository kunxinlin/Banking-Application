import react, {Component} from 'react'
import TransactionCtrlr from "../../services/TransactionCtrlr";
import LoginCtrlr from "../../services/LoginCtrlr";
import {Link} from "react-router-dom";
import React from "react";

class ShowTransactions extends Component{
    constructor(props){
        super(props)
        this.state={
            id: props.match.params.id,
            //id: 1,  //still trying to pass ID state around properly [from Login to ShowTransactions]
            email: this.props.match.params.email,
            transactionHistory: []
        }
        this.showTransactions = this.showTransactions.bind(this)
        this.goHomeClicked = this.goHomeClicked.bind(this)
    }

    componentDidMount(){
        this.showTransactions()

    }

    showTransactions(id){
        console.log('Showing transaction history')
        TransactionCtrlr.getAllTrans(this.state.id)
            .then(
                response => {
                    this.setState({transactionHistory: response.data})
                    console.log(this.state.id)
                    console.log({transactionHistory: response.data})
                }
            )
    }

    goHomeClicked(id){
        this.props.history.push(`/userHome/${id}`)
        console.log(this.state.id)
    }

    getCurrentUserID(email){
        LoginCtrlr.getID(this.state.email)
            .then( response => {
                this.setState({id : response.data})
                }
            )
        //console.log()
        //console.log()
    }

    render() {
        return(
            <div>
                <button className="btn btn-link home-btn" onClick={()=> this.goHomeClicked(this.state.id)}>Home</button>
                <div className="jumbotron" style={{backgroundColor:"#1a1a1a"}}  >
                    <div className=" table table-bordered" style={{borderColor:"#1a1a1a"}}>
                        <thead>
                        <tr style={{textAlign: "center"}}>
                            <th>Type</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Account No.</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.transactionHistory.map(
                                transactionHistory =>
                                    <tr style={{textAlign: "center"}} key={transactionHistory.id}>
                                        <td>{transactionHistory.type}</td>
                                        <td>{transactionHistory.date}</td>
                                        <td>{transactionHistory.amount}</td>
                                        <td>{transactionHistory.id}</td>
                                        <br></br>
                                        <br></br>
                                        <br></br>
                                    </tr>
                            )
                        }
                        </tbody>
                    </div>
                    <br></br>
                </div>
            </div>

        )
    }

}

export default ShowTransactions