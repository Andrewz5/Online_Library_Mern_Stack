import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreateBook from './components/CreateBook';
import ShowBookList from './components/ShowBookList';
import ShowBookDetails from './components/ShowBookDetails';
import UpdateBookInfo from './components/UpdateBookInfo';
import login from './components/login';

class App extends Component {
    render() {
        return ( <
            Router >
            <
            div >
            <
            Route exact path = '/'
            component = { ShowBookList }
            /> <
            Route exact path = '/a'
            component = { login }
            />  <
            Route path = '/create-book'
            component = { CreateBook }
            /> <
            Route path = '/edit-book/:id'
            component = { UpdateBookInfo }
            /> <
            Route path = '/show-book/:id'
            component = { ShowBookDetails }
            /> < /
            div > <
            /Router>
        );
    }
}

export default App;