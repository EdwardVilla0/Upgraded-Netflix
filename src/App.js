import React from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen/HomeScreen.component';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginScreen from './components/LoginScreen/LoginScreen.component';

function App() {
  const user = null;

  return (
    <div className="App">
      <Router>
        {!user ? (<LoginScreen />) : (
          <Switch>
            <Route path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}

      </Router>

    </div>
  );
}

export default App;
