import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './containers/HomePage/';
import Header from './containers/Header/';
import StartPage from './containers/StartPage/';
import ScoreCardPage from './containers/ScoreCardPage/';
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
              <Route exact path="/scoreCard" component={ScoreCardPage} />
              <Redirect to="/" />
            </Switch>
          </div>
        </div>
      </GlobalStateProvider>
    </BrowserRouter>
  );
}

export default App;
