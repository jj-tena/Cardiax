import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import Logout from './views/Logout';
import AddAnalytic from './views/AddAnalytic';
import Analytics from './views/Analytics';
import Evolution from './views/Evolution';
import { AuthProvider } from './context/AuthContext';

function App() {
  
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/logout" component={Logout} />
          <Route path="/add-analytic" component={AddAnalytic} />
          <Route path="/analytics" component={Analytics} />
          <Route path="/evolution" component={Evolution} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
