import React from 'react'
import Question from '../components/Question'
import NextButton from '../components/NextButton'
import PreviousButton from '../components/PreviousButton'

const QuestionTwo = () => (
  <div>
    <h1>Question 2</h1>
    <form>
      <input type="radio" id="A" />
      <label htmlFor="A">Choice A</label>
      <input type="radio" id="B" />
      <label htmlFor="B">Choice B</label>
      <input type="radio" id="C" />
      <label htmlFor="C">Choice C</label>
    </form>
    <PreviousButton previousLinkUrl="./" />
    <NextButton nextLinkUrl="./question-three" />
  </div>
)

export default QuestionTwo
