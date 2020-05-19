import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Add from './views/Add';
import Chart from './views/Chart';
import NoMatch from './views/NoMatch';
import styled from 'styled-components';
import Tags from './views/Tags';


const AppWrapper = styled.div`
color: #333;
`

function App() {
  return (
    <AppWrapper>
      <Router>
        <Switch>
          <Route path="/tags">
            <Tags />
          </Route>
          <Route path="/add">
            <Add/>
          </Route>
          <Route path="/chart">
            <Chart/>
          </Route>
          <Redirect exact from="/" to="/tags"/>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
    </AppWrapper>
  );
}

export default App;
