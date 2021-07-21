import './scss/App.scss';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Account from './components/pages/Account';
import SimplePage from './components/pages/SimplePage';
import { useEffect, useState } from 'react';
import client from './feathersClient';
import SetToken from './components/other/SetToken';

function App() {
  const [login, setLogin] = useState(null);
  useEffect(() => {
    client.authenticate().catch(() => {
      setLogin(null);
    });

    // On successfull login
    client.on('authenticated', loginResult => {
      // Get all users and messages
      
    });
  })
  

  return (
    <Router >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/set_token" component={SetToken} />
        <Route exact path="/account/" component={Account} />
        <Route exact path="/account/:id" component={Account} />
        <Route exact path="/:url" component={SimplePage} />
        {/* <Route exact path="/privacy_policies" component={PrivacyPolicies} />
        <Route exact path="/terms" component={Terms} />
        <Route exact path="/offer" component={Ofert} /> */}
      </Switch>
    </Router>
  );
}

export default App;
