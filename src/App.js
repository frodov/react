import React, { useState, useEffect } from 'react';
import GetTableList from './Componets/GetTableList';
import './App.css';
import GetChampionDetails from './Componets/GetChampionDetails';
import { Route, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

const App = (props) => {

  const Main = (props) => {
    return (
      <div className="row">
        <div className="col">
          <GetTableList />
        </div>
      </div>
    )
  }

  return (
    <Container>
      <div className="body">
        <div className="container-react">
          <span className="react-logo">
            <span className="nucleo"></span>
          </span>
        </div>
        <Switch>
          <Route path="/" component={Main} exact={true} />
          <Route path="/champion/:version/:name" component={GetChampionDetails} exact={true} />
        </Switch>
      </div>
    </Container>
  );
}

export default App;
