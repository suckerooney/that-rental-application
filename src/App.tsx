// My pages
import SignInPage from './pages/SignInPage/SignInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';

import './App.less';
import RouteNames from './common/RouteNames';
import { FC } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App: FC = () => (
  <Router>
    <Switch>
      <Route exact path={RouteNames.default} component={SignInPage} />
      <Route path={RouteNames.signIn} component={SignInPage} />
      <Route path={RouteNames.signUp} component={SignUpPage} />
    </Switch>
  </Router>
)

export default App;
