import './scss/App.scss';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Account from './components/pages/Account';
import Header from './components/Template/Header';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/account" component={Account} />
      </Switch>
    </Router>
  );
}

export default App;
