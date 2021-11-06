import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Home from './views/Home'
import About from './views/About'
import Overview from './views/Overview';
import Exercices from './views/Exercises'
import TrainingSeasons from './views/TrainingSeasons'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
          <Route path="/training-seasons" component={TrainingSeasons} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
