import './scss/App.scss';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Account from './components/pages/Account';
import Header from './components/Template/Header';
import Footer from "./components/Template/Footer";
import Test from './components/pages/Test';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/test" component={Test} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
