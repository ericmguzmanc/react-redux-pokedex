import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import PokeDetails from '../components/PokeDetails';
import NotFound from '../components/NotFound';
import withSuspense from '../components/withSuspense';

const PokeList = withSuspense(import('../components/PokeList'));

const PokeRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={()=>(<Redirect to="/pokemons" />)}/>
      <Route exact path="/pokemons" component={PokeList}/>
      <Route path="/pokemons/:id" component={PokeDetails}/>
      <Route component={NotFound} status={404} />
    </Switch>
  </Router>
);

export default PokeRouter;