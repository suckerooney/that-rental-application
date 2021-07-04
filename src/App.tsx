import './App.css';
import { FC } from 'react';
import { SignIn } from './pages/SignIn/SignIn';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App: FC = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={SignIn} />
    </Switch>
  </Router>
)

export default App;
