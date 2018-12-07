import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import PokeDetail from '../components/PokeDetail';
import NotFound from '../components/NotFound';
import withSuspense from '../components/withSuspense';

const PokeList = withSuspense(import('../components/PokeList'));
// const PokeDetail = withSuspense(import('../components/PokeDetail'));

const PokeRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={()=>(<Redirect to="/pokemons" />)}/>
      <Route exact path="/pokemons" component={PokeList}/>
      <Route path="/pokemons/:id" component={PokeDetail}/>
      <Route component={NotFound} status={404} />
    </Switch>
  </Router>
);

export default PokeRouter;