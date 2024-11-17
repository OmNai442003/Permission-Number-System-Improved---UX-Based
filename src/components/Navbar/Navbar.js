import React from 'react'
import logo from '../../assets/images/logo.jpg'
import './Navbar.css'

function Navbar({name, stid}) {
  return (
    <nav className="navbar customNavBarStyle navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <img src={logo} alt="csu fresno logo" className='logo' />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
          </ul>
          {/* Details */}
          <div className='studentDetails'>
            <div className='greetings'> {name ? `Hello ${name} !` : ''} </div>
            <div className='stid'>{stid}</div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar