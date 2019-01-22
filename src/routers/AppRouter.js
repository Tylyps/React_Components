import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from '../components/Header';
import MainPage from '../components/MainPage';
import firstPage from '../components/firstPage';
import secondPage from '../components/secondPage';
import thirdPage from '../components/thirdPage';
import fourthPage from '../components/fourthPage';
import fifthPage from '../components/fifthPage';
import sixthPage from '../components/sixthPage';
import seventhPage from '../components/seventhPage';

const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <React.Fragment>
      <Header />
      <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/firstPage" component={firstPage} />
          <Route exact path="/secondPage" component={secondPage} />
          <Route exact path="/thirdPage" component={thirdPage} />
          <Route exact path="/fourthPage" component={fourthPage} />
          <Route exact path="/fifthPage" component={fifthPage} />
          <Route exact path="/sixthPage" component={sixthPage} />
          <Route exact path="/seventhPage" component={seventhPage} />
          <Route render={() => (<h1> 404 ERROR </h1>)} />
      </Switch>
    </React.Fragment>
  </Router>
);

export default AppRouter;
