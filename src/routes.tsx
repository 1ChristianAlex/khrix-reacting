import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Header } from './components/header';
import { About } from './pages/About';
import { Footer } from './components/Footer';

interface ReactRouter {}

export const Routes: React.SFC<ReactRouter> = props => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};
