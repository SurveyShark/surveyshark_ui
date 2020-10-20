import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const NextButton = (props) => (
  <div>
    <NavLink to={props.nextLinkUrl}>
      <button>Next</button>
    </NavLink>
  </div>
)

export default NextButton
