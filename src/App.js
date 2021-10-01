import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Friends from './components/Friends/Friends';
import NotFound from "./components/Not Found/NotFound";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import Culture from './components/Culture/Culture';
import FriendDetails from './components/FriendDetails/FriendDetails';


function App() {
  const activeStyle = {
    fontWeight: "bold",
    color: "red"
  }
  return (
    <div className="App">
      <Router>
        <NavLink className="navigation m-5" to="/Home" activeStyle={activeStyle}>Home</NavLink>
        <NavLink className="navigation m-5" to="/Friends" activeStyle={activeStyle}>Friends</NavLink>
        <NavLink className="navigation m-5" to="/About" activeStyle={activeStyle}>About</NavLink>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/Home">
            <Home></Home>
          </Route>
          <Route exact path="/About">
            <About></About>
          </Route>
          <Route exact path="/About/Culture">
            <Culture></Culture>
          </Route>
          <Route exact path="/Friends">
            <Friends></Friends>
          </Route>
          <Route exact path="/Friend/:FriendId">
            <FriendDetails></FriendDetails>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
