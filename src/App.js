import React from 'react';
import './scss/main.scss';

// Imported ComponentsComponents
import Layout from './components/Layout';
import Header from './components/Header/Header';
import Home from './pages/Home';

const App = () => (
  <>
    <Header />
    <Layout>
      <Home />
    </Layout>
  </>
);

export default App;
