import React from 'react'
import Question from '../components/Question'
import NextButton from '../components/NextButton'
import PreviousButton from '../components/PreviousButton'

const Submission = () => (
  <div>
    <h1>Submission</h1>
    <h3>You are about to submit your</h3>
    <form>
      <input type="radio" id="A" />
      <label htmlFor="A">Choice A</label>
      <input type="radio" id="B" />
      <label htmlFor="B">Choice B</label>
      <input type="radio" id="C" />
      <label htmlFor="C">Choice C</label>
    </form>
    <button>Submitt</button>
  </div>
)

export default Submission
