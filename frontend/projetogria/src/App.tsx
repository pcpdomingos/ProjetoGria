import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './paginas/home/Home';
import './App.css';
import ListaCargos from './components/cargos/listacargos/ListaCargos';



function App() {
  return (
    <Router>
      <Switch>
        <div style={{ minHeight: '100vh' }}>

          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/cargos'>
            <ListaCargos />
          </Route>
        </div>
      </Switch>
    </Router>

  );
}

export default App;