import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import './App.css';
import MainContainer from './containers/MainContainer'
import Layout from './layouts/Layout';
import Login from './screens/Login';
import Register from './screens/Register';
import Locations from './screens/Locations';
import Header from './components/Header'



function App() {
  return (
    <div className="App">
      <Layout
      currentUser={currentUser}
      handleLogout={handleLogout}
      >
      <Switch>

        <Route path='/login'>
          {/* login */}
          <Login handleLogin={handleLogin} />
        </Route>

        <Route path='/register'>
          {/* register */}
          <Register handleRegister={handleRegister} />
        </Route>

        <Route path='/'>
          {/* container */}
          <MainContainer currentUser={currentUser} />
        </Route>

      </Switch>
      </Layout>
    </div>
  );
}

export default App;
