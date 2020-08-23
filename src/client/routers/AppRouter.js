import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import Headers from '../components/Header'
import MainContent from '../components/MainContent'
import QuestionOne from '../views/QuestionOne'
import QuestionTwo from '../views/QuestionTwo'
import QuestionThree from '../views/QuestionThree'
import QuestionFour from '../views/QuestionFour'
import QuestionFive from '../views/QuestionFive'
import QuestionSix from '../views/QuestionSix'
import QuestionSeven from '../views/QuestionSeven'
import QuestionEight from '../views/QuestionEight'
import QuestionNine from '../views/QuestionNine'
import QuestionTen from '../views/QuestionTen'
import Submission from '../views/Submission'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Headers />
      <Switch>
        <Route path="/" component={MainContent} exact={true} />
        <Route path="/question-one" component={QuestionOne} />
        <Route path="/question-two" component={QuestionTwo} />
        <Route path="/question-three" component={QuestionThree} />
        <Route path="/question-four" component={QuestionFour} />
        <Route path="/question-five" component={QuestionFive} />
        <Route path="/question-six" component={QuestionSix} />
        <Route path="/question-seven" component={QuestionSeven} />
        <Route path="/question-eight" component={QuestionEight} />
        <Route path="/question-nine" component={QuestionNine} />
        <Route path="/question-ten" component={QuestionTen} />
        <Route path="/submission" component={Submission} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter
