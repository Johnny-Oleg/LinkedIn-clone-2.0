import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LogIn from './components/LogIn/LogIn';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import './App.css';

const App = () => {
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

export default App;