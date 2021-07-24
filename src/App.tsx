import { FC, useContext } from "react";
import Routes from "common/Routes";
import "./App.less";

// App Components
import AuthProvider, { AuthContext } from "components/AuthProvider";
import SignInPage from "pages/SignInPage/SignInPage";
import SignUpPage from "pages/SignUpPage/SignUpPage";
import ApplicationsPage from "pages/ApplicationsPage/ApplicationsPage";

// Packages
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
