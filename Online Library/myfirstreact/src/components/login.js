import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
class login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            Password: ''
        };
    }
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    onSubmit = e => {
        e.preventDefault();
        const data = {
            username: this.state.username,
            password: this.state.password,
        };
        axios.post('http://localhost:8080/api/books', data).then(res => {
            this.setState({
                username: '',
                password: ''
            });
            this.props.history.push('/');
        }).catch(err => { console.log("Error in CreateBook!"); })
    };
    render() {
        return ( <
            div className = "CreateBook" >
            <
            div className = "container" >
            <
            div className = "row" >
            <
            div className = "col-md-8 m-auto" >
            <
            br / >
            <
            Link to = "/"
            className = "btn btn-outline-warning float-left" >
            Back <
            /Link> < /
            div > <
            div className = "col-md-8 m-auto" >
            <
            h1 className = "display-4 text-center" > Login <
            /h1> <
            p className = "lead text-center" >
            user login <
            /p>

            <
            form noValidate onSubmit = { this.onSubmit } >
            <
            br / >



            <
            div className = 'form-group' >
            <
            input type = 'text'
            placeholder = 'User name'
            name = 'Username'
            className = 'form-control'
            value = { this.state.author }
            onChange = { this.onChange }
            /> < /
            div >

            <
            div className = 'form-group' >
            <
            input type = 'text'
            placeholder = 'Password'
            name = 'Password'
            className = 'form-control'
            value = { this.state.description }
            onChange = { this.onChange }
            /> < /
            div >

            <
            input type = "submit"
            className = "btn btn-outline-warning btn-block mt-4" / >
            <
            /form> < /
            div > <
            /div> < /
            div > <
            /div>
        );
    }
}
export default login;