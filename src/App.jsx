import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { MainApp } from './pages/MainApp'

function App() {
  return (
    <main className="App">
      <Router>
        <Switch>
          <Route path="/" component={MainApp} />
        </Switch>
      </Router>
    </main>
  );
}

export default App;
