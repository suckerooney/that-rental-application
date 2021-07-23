// My pages
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import ApplicationsPage from "./pages/ApplicationsPage/ApplicationsPage";

import "./App.less";
import Routes from "./common/Routes";
import { FC, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider, { AuthContext } from "./firebase/AuthProvider";

const App: FC = () => {
  const auth = useContext(AuthContext);
  console.log(auth.type);
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path={Routes.default} component={SignInPage} />
          <Route path={Routes.signIn} component={SignInPage} />
          <Route path={Routes.signUp} component={SignUpPage} />
          <Route path={Routes.applications} component={ApplicationsPage} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
