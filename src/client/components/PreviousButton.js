import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const PreviousButton = (props) => (
  <div>
    <NavLink to={props.previousLinkUrl}>
      <button>Previous</button>
    </NavLink>
  </div>
)

export default PreviousButton
