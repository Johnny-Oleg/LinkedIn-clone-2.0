import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { getUserAuth } from './actions';
import LogIn from './components/LogIn/LogIn';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import './App.css';

const App = props => {
  useEffect(() => {
    props.getUserAuth();
  }, [])

    return (
        <div className="app">
            <Router>
              <Switch>
                <Route exact path="/">
                    <LogIn />
                </Route>
                <Route path="/home">
                  <Header />
                  <Home />
                </Route>
              </Switch>
            </Router>
        </div>
    );
};

const mapStateToProps = state => {
  return {};
}

const mapDispatchToProps = dispatch => ({
  getUserAuth: () => dispatch(getUserAuth()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);