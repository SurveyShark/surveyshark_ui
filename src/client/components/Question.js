import React from 'react'
import NextButton from './NextButton'
import PreviousButton from './PreviousButton'

const Question = () => (
  <div>
    <h1>Question 1</h1>
    <form>
      <input type="radio" id="A" />
      <label htmlFor="A">Choice A</label>
      <input type="radio" id="B" />
      <label htmlFor="B">Choice B</label>
      <input type="radio" id="C" />
      <label htmlFor="C">Choice C</label>
    </form>
    <PreviousButton previousLinkUrl="./" />
    <NextButton nextLinkUrl="./question-two" />
  </div>
)

export default Question
