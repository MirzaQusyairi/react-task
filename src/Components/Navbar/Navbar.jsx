import React from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../../Assets/Images/logo-ALTA@2x.png'

function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg fixed-top navbar-light bg-white shadow-sm">
			<div className="container">
				<NavLink to='/' className="navbar-brand d-flex">
					<img src={logo} alt="logo" className="w-50" />
				</NavLink>
				<button className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav ms-auto text-center">
						<NavLink to="/" className="nav-link mx-3" replace>
							HOME
						</NavLink>
						<NavLink to="/about" className="nav-link mx-3" replace>
							ABOUT
						</NavLink>
						<NavLink to="/news" className="nav-link mx-3" replace>
							NEWS
						</NavLink>
						<NavLink to="/contact_us" className="nav-link mx-3" replace>
							CONTACT
						</NavLink>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
