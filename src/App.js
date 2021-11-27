import React from "react"
import './App.css';

import Home from './Components/Home';
import {BrowserRouter, Route,Switch,useHistory} from "react-router-dom";
import Profile from './Components/UserProfile/Profile';
import SignUp from './Components/Signup/Singup';
import Header from './Components/Navbar';
import Blogpage from './Components/BlogPage/Blogpage';
import Errorpage from './Components/Errorpage/Errorpage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/signup" component={SignUp}/>
      <Route exact path="/profile/:id" component={Profile}/>
      <Route exact path="/BlogPage/:id" component={Blogpage}/>
      <Route component={Errorpage}/>
      <Route exact path="/earn" component={Earn}/>
    </Switch> 
      </BrowserRouter>
 
    </div>
  );
}

export default App;
