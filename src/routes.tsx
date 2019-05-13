import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './pages/--Home';
import { Header } from './components/Header';
import { About } from './pages/About';
import { Footer } from './components/Footer';
import { Christian } from './pages/Christian';
import { Pedro } from './pages/Pedro';

interface ReactRouter {}

export const Routes: React.SFC<ReactRouter> = props => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route exact path="/Christian" component={Christian} />
        <Route exact path="/Pedro" component={Pedro} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};
