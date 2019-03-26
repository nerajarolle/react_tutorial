import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Series from '../../containers/Series';

const Main = props => (
  <Switch>

    <Route exact path="/" component={Series} />
  </Switch>
);

export default Main;
