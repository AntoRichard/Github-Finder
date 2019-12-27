import React, { Component } from 'react';
import IndianHome from './components/Indian/Home';
import Cart from './components/Cart/Cart';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from './components/Index/index';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Dosa: 0,
      Aapam: 0,
      Chapathi: 0,
      Idly: 0,
      Pongal: 0,
      Puri: 0
    };
  }

  addCardHandler = (title, value) => this.setState({ [title]: value });
  render() {
    const { state } = this;
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route
            exact
            path="/indian-food"
            component={() => (
              <IndianHome
                addCardHandler={this.addCardHandler}
                data={this.state}
              />
            )}
          />
          <Route exact path="/cart" component={() => <Cart data={state} />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
