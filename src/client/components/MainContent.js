import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const MainContent = () => (
  <div>
    <NavLink to="/question-one">
      <button>Start</button>
    </NavLink>
  </div>
)

export default MainContent
