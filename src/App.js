import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import './styles/App.scss';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/docs/:product/:api" component={Layout} />
          <Route exact path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>);
  }
}

export default App;
