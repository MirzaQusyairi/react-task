import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/img/logo-ALTA.png'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/#"><img src={logo} alt="" height={50} /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-3">
                <Link to="/" className="nav-link text-blue active">HOME</Link>
              </li>
              <li className="nav-item mx-3">
                <Link to="/" className="nav-link text-blue">ABOUT</Link>
              </li>
              <li className="nav-item mx-3">
                <Link to="/" className="nav-link text-blue">EXPERIENCE</Link>
              </li>
              <li className="nav-item mx-3">
                <Link to="/contactUs" className="nav-link text-blue">CONTACT</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
