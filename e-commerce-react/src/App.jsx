import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/pages/Home';
import Albums from './components/pages/Albums';
import Tour from './components/pages/Tour';
import SignUp from './components/pages/SignUp';


function App() {
  return (
    <>
      <Router>
        <Navbar/>
          <Switch>
            <Route path='/' exact component = {Home}></Route>
            <Route path='/albums' component={Albums}/> 
            <Route path='/tour' component={Tour}/> 
            <Route path='/sign-up' component={SignUp}/> 
          </Switch>
      </Router>
    </>
  );
}

export default App;
