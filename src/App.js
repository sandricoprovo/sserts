import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';

// App Styles
import './scss/main.scss';

// Imported ComponentsComponents
import Layout from './components/Layout';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Catering from './pages/Catering';
import Footer from './components/Footer/Footer';

const App = () => (
  <>
    <Router>
      <Header />
      <Layout>
        <Switch>
          <Route exact path="/" component={withRouter(Home)} />
          <Route path="/catering" component={withRouter(Catering)} />
        </Switch>
      </Layout>
    </Router>
    <Footer />
  </>
);

export default App;
