import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import Headers from '../components/Header'
import MainContent from '../components/MainContent'
import QuestionPage from '../components/QuestionPage'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Headers />
      <Switch>
        <Route path="/" component={MainContent} exact={true} />
        <Route path="/question-one" component={QuestionPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter
