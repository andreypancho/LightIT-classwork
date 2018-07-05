import React, { Component } from 'react';
import './App.css';
import Hello from './components/Hello';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import {Provider} from 'react-redux';

import rootReducer from './reducers/index'


import { applyMiddleware, compose, createStore } from 'redux'
import reduxThunk from 'redux-thunk'

const store = createStore(rootReducer, compose(
    applyMiddleware(reduxThunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
));



const Movies = function () {
    return <h1>'Hello movies!'</h1>
};

class App extends Component {

  render() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Hello name='Hello' number={25}/>
                    <Route path={'/movies'} component={Movies}/>
                    <Route path={'/'} render={ ()=>{<div>'Hello world'</div>} }/>
                </div>
            </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
