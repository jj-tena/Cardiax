import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import AddAnalytic from './views/AddAnalytic';
import Analytics from './views/Analytics';
import Evolution from './views/Evolution';


function App() {
  
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/add-analytic" component={AddAnalytic} />
        <Route path="/analytics" component={Analytics} />
        <Route path="/evolution" component={Evolution} />
      </Switch>
    </Router>
  );
}

export default App;
