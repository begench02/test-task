import React from 'react';
import { Redirect, Route, Switch} from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { Routes } from './routes';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' render={() => <Redirect to={'/converter'} />} />
        {Routes.map(({ path, Component}) => <Route key={path} path={path} component={Component} exact/>)}
      </Switch>
    </div> 
  ); 
};