import React from 'react';
import './essential/css/default.min.css';
import Homepage from './components/HomePage'
import Footer from './components/Footer/footer';
import Account from './components/Account';
import SignIn from './components/signIn';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component = {Homepage} />
          <Route path="/signin" exact component ={SignIn}/>
          <Route path="/account" exact component ={Account}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
