import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { HomePage } from 'components';
import './App.scss';

const Reader = () => (<div>Reader</div>);

const App = () => (
  <Switch>
    <Route exact path='/book' component={HomePage} />
    <Route exact path='/:bookId' component={Reader} />
    <Redirect path='*' to='/book' />
  </Switch>
)

export default App;
