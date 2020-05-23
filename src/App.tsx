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
import {Tag} from './views/Tag';


const AppWrapper = styled.div`
color: #333;
max-width: 520px;
margin: 0 auto;
`

function App() {
  return (
    <AppWrapper>
      <Router>
        <Switch>
          <Route exact path="/tags">
            <Tags />
          </Route>
          <Route exact path="/tags/:id">
            <Tag />
          </Route>
          <Route exact path="/add">
            <Add/>
          </Route>
          <Route exact path="/chart">
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
