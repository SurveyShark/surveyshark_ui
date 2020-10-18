import React, { useState } from 'react'
//WIP - Still sees Header.css
import '../../style/components/Footer.css'

const Links = () => {
  return (
    <>
      <li>
        <a href="#" className="show-links">
          Link1
        </a>
      </li>
      <li>
        <a href="#" className="show-links">
          Link2
        </a>
      </li>
      <li>
        <a href="#" className="show-links">
          Link3
        </a>
      </li>
    </>
  )
}

const Footer = () => {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <Links />
        </ul>
      </nav>
    </div>
  )
}

export default Footer
