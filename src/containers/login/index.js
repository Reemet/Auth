import React, { Component } from 'react';
import { Button, FormGroup, FormControl, FormLabel  } from 'react-bootstrap';
import { connect } from 'react-redux';

import { login, getGroups } from '../../actions/index';

import "./form.css";

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email : '',
            password: ''
        }
    }

    componentDidMount(){ 

    }
    componentWillReceiveProps(nextProps) {
        if(this.props.cookies.get('fob')) {
            const cookie = this.props.cookies.get('fob');
            this.props.getGroups(cookie);
        }

       if (nextProps.state.login.payload) {
           this.saveCookie(nextProps.state.login.payload);
       }
    }
    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
      }
    changeState(e) {
        e.preventDefault();

        this.setState({
            email : e.target.value
        })
    }
    handleChange(e) {
        e.preventDefault();
        this.setState({
            password: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        const { cookies } = this.props;

       this.props.login(this.state.email, this.state.password);
      //  cookies.set('name', this.props.state.loginReducer.payload.data.data.id, { path: '/'});

    }
    saveCookie(cookie) {
        this.props.cookies.set('fob', cookie.id, { path: '/'});
    }
    render() {
        return( <div className="login-form">
                <form onSubmit={this.onSubmit.bind(this)}>
                    <FormGroup controlId="email" bsSize="large">
                        <FormLabel >EMAIL</FormLabel >
                        <FormControl
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={this.changeState.bind(this)}
                        ></FormControl>
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <FormLabel >Password</FormLabel >
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange.bind(this)}
                            type="password"
                    />
                    </FormGroup>
                    <Button
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit">
                        Login
                    </Button>
                </form>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) =>  {
    return ({
        state: state,
        cookies: ownProps.cookies
    })
}

export default connect(mapStateToProps, { login, getGroups }) (LoginPage);
