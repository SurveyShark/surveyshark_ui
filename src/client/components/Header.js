import React, { useState } from 'react'
import '../../style/components/Headers.css'

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

const Headers = () => {
  const [showDropDown, setShowDropDown] = useState(false)
  const handleDropDown = (event) => setShowDropDown(!showDropDown)

  return (
    <div>
      <nav className="navbar">
        <a href="/" className="logo">
          SurveyShark
        </a>
        <ul className="small-nav">
          <button onClick={handleDropDown}> 🞬 </button>
          {showDropDown
            ? ['Link1'].map((link) => (
                <li>
                  <a href="#" className="nav-links">
                    {link}
                  </a>
                </li>
              ))
            : []}
        </ul>
        <ul className="main-nav">
          <Links />
        </ul>
      </nav>
    </div>
  )
}

export default Headers
