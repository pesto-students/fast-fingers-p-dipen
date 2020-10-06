import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './containers/HomePage/';
import Header from './containers/Header/';
import StartPage from './containers/StartPage/';
import './App.css';
import GlobalStateProvider from './store/GlobalStateProvider';

function App() {
  return (
    <BrowserRouter>
      <GlobalStateProvider>
        <div className="App">
          <div className="App-container">
            <Header />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/gamer" component={StartPage} />
              <Redirect to="/" />
            </Switch>
          </div>
        </div>
      </GlobalStateProvider>
    </BrowserRouter>
  );
}

export default App;
