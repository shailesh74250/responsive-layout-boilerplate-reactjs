import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Layout from '../layout';
import Home from '../views/landingPage';
import ContactUs from '../views/contactUs';
import AboutUs from '../views/aboutUs';

export default () => {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about-us">
            <AboutUs />
          </Route>
          <Route exact path="/contact-us">
            <ContactUs />
          </Route>
        </Layout>
      </Switch>
    </Router>
  );
};
