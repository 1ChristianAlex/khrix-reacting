import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Header } from './components/Header';
import { About } from './pages/About';
import { Footer } from './components/Footer';
import { Founders } from './pages/Founders';
import { Podcast } from './pages/Podcast';
import { Blog } from './pages/Blog';
import { SinglePostBlog } from './pages/SinglePostBlog';

interface ReactRouter {}

export const Routes: React.SFC<ReactRouter> = props => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Podcast" component={Podcast} />
        <Route path="/Blog" component={Blog} />
        <Route path="/SinglePostBlog" component={SinglePostBlog} />
        <Route
          exact
          path="/Christian"
          render={() => <Founders name="Christian" />}
        />
        <Route exact path="/Pedro" render={() => <Founders name="Pedro" />} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};
