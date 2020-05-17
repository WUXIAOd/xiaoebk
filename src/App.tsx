import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Bill from './views/Bill';
import Add from './views/Add';
import Chart from './views/Chart';
import NoMatch from './views/NoMatch';
import styled from 'styled-components';

const AppWrapper = styled.div`
color: #333;
`

function App() {
  return (
    <AppWrapper>
      <Router>
        <Switch>
          <Route path="/bill">
            <Bill/>
          </Route>
          <Route path="/add">
            <Add/>
          </Route>
          <Route path="/chart">
            <Chart/>
          </Route>
          <Redirect exact from="/" to="/bill"/>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
    </AppWrapper>
  );
}

export default App;
