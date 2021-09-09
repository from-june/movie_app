import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Detail from './routes/Detail';
import Navigation from './components/Navigation';
import './App.css';

const App = function () {
  return (
    <div className="App">
      <HashRouter>
        <Navigation />
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/movie/:id" exact component={Detail} />
      </HashRouter>
    </div>
  );
};

export default App;
