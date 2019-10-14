import React, { Fragment, Component } from 'react';
import Navbar from './Components/Layouts/Navbar';
import Users from './Components/Users/Users';
import Search from './Components/Users/Search';
import Clear from './Components/Users/Clear';
import Alert from './Components/Layouts/Alert';
import About from './Components/Pages/About';
import User from './Components/Users/User';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null
  };
  componentDidMount = async () => {
    this.setState({ loading: true });
    const response = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: response.data, loading: false });
  };
  searchUser = async user => {
    this.setState({ loading: true });
    const response = await axios.get(
      `https://api.github.com/search/users?q=${user}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    const userDetails = response.data.items;
    this.setState({ users: userDetails, loading: false });
  };

  clearHandler = () => this.setState({ users: [] });

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 2000);
  };

  getUser = async username => {
    this.setState({ loading: true });
    const response = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ user: response.data, loading: false });
    console.log(this.state);
  };

  render() {
    const { users, user, loading, alert } = this.state;
    console.log(users.length);
    let show = null;
    if (users.length) {
      show = <Clear clearHandler={this.clearHandler} />;
    } else {
      show = null;
    }
    return (
      <Router>
        <div className="App">
          <Navbar title="GitHub Finder" icon="fab fa-shop" />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <Search
                      searchUser={this.searchUser}
                      setAlert={this.setAlert}
                    />
                    {show}
                    <Users users={users} loading={loading} />
                  </Fragment>
                )}
              />
              <Route path="/about" component={About} />
              <Route
                path="/user/:login"
                render={props => (
                  <User
                    {...props}
                    getUser={this.getUser}
                    user={user}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
