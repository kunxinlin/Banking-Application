import React, {Component} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import HomePg from './HomePg'
import UserHome from "../users/UserHome";
import ShowTransactions from "../users/ShowTransactions";
import Login from "./Login";
import AddUser from "../users/AddUser";
import AddLogin from "../users/AddLogin";
import RegisterLogin from "../users/RegisterLogin";
import RegisterUser from "../users/RegisterUser";

//<Route path="/" component={} />

class RouterComponent extends Component{
    render() {
        return(
            <div>
                <Router>
                    <Header/>
                    <Switch>
                        <Route exact path="/"><HomePg/></Route>
                        <Route path ="/login" component={Login} />
                        <Route path= "/addLogin" component={AddLogin} />
                        <Route path = "/addUser" component={AddUser} />
                        <Route path={"/userHome/:id"} component={UserHome} />
                        <Route path ="/showTransactions/:id" component={ShowTransactions} />
                    </Switch>
                    <Footer/>
                </Router>
            </div>
        )
    }
}
export default RouterComponent