import React, { Component } from 'react';
import './App.css';
import Hello from './components/Hello';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Movies = function () {
    return <h1>'Hello movies!'</h1>
};

class App extends Component {

  render() {
    return (
        <BrowserRouter>
            <div>
                <Hello name='Hello' number={25}/>
                <Route path={'/movies'} component={Movies}/>
                <Route path={'/'} render={ ()=>{<div>'Hello world'</div>} }/>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
