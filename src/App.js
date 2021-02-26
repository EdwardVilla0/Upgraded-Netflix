import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen/HomeScreen.component';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginScreen from './components/LoginScreen/LoginScreen.component';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }));
      } else {
        // always write dispatch(logout()) // bcz without logout() it didnt logout directly
        dispatch(logout());
      }
    })
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
            <Switch>
              <Route exact path="/">
                <HomeScreen />
              </Route>

            </Switch>
          )}
      </Router>
    </div>
  );
}

export default App;
