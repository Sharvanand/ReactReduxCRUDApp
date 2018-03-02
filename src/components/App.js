import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import Post from './post';
import Home from './Home';

class App extends Component {
  render() {
    return (
       <BrowserRouter>
        <div>
            <ul>
              <li><Link to="/" className="active" >Home</Link></li>
              <li><Link to="/post" className="active" >Post</Link></li>
              </ul>
            <Route exact path="/" component={Home}/>
            <Route path="/post" component={Post}/>
        </div>
       </BrowserRouter>
        
      );
  }
}

export default App;
