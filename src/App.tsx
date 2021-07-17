// My pages
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

import "./App.less";
import Routes from "./common/Routes";
import { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App: FC = () => (
  <Router>
    <Switch>
      <Route exact path={Routes.default} component={SignInPage} />
      <Route path={Routes.signIn} component={SignInPage} />
      <Route path={Routes.signUp} component={SignUpPage} />
    </Switch>
  </Router>
);

export default App;
