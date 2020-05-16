import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

import Layout from 'components/Layout';

function App() {
  return (
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
  );
}

function NoMatch() {
  return (
    <div>
      页面不存在，请检查地址是否有误！
    </div>
  );
}

function Chart() {
  return (
    <Layout>
      <h1>统计页面</h1>
    </Layout>
  );
}

function Bill() {
  return (
    <Layout>
      <h1>账单页面</h1>
    </Layout>
  );
}

function Add() {
  return (
    <Layout>
      <h1>添加页面</h1>
    </Layout>
  );
}

export default App;
