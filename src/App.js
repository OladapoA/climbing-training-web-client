import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav'
import Home from './views/Home'
import About from './views/About'
import Overview from './views/Overview';
import Exercices from './views/Exercises'
import TrainingSeasons from './views/TrainingSeasons'
import SingleSeason from './views/SingleSeason'
import Session from './views/Session';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About} />
          <Route path="/overview" component={Overview} />
          <Route path="/exercises" component={Exercices} />
          <Route path="/training-seasons" exact component={TrainingSeasons} />
          <Route path="/training-seasons/:id" component={SingleSeason} />
          <Route path="/sessions/:id" component={Session} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
