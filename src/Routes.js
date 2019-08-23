import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withCookies } from 'react-cookie';
import App from './App';
import LoginPage from './containers/login' ;

class AppRouter extends Component {

    render() {
        return (
                    <Router>
                            <Switch>
                                <Route path="/" render= {() => <LoginPage cookies={this.props.cookies}/>} />
                        
                            </Switch>
                    </Router>
        )
    }
}
 export default withCookies(AppRouter);
                    
