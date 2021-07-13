import './scss/App.scss';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Account from './components/pages/Account';
import PrivacyPolicies from './components/pages/PrivacyPolicies';
import Terms from './components/pages/Terms';
import Ofert from './components/pages/Ofert';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/account/" component={Account} />
        <Route exact path="/account/:id" component={Account} />
        <Route exact path="/privacy_policies" component={PrivacyPolicies} />
        <Route exact path="/terms" component={Terms} />
        <Route exact path="/offer" component={Ofert} />
      </Switch>
    </Router>
  );
}

export default App;
