import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen/HomeScreen.component';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginScreen from './components/LoginScreen/LoginScreen.component';
import { auth } from './firebase';

function App() {
  const user = null;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        console.log(userAuth);
      } else {

      }
    });

    return unsubscribe;
  }, []);

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
