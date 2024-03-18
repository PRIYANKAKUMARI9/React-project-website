import React from 'react'


function Navvv() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarTogglerDemo01"
      aria-controls="navbarTogglerDemo01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <h1 className='hero-rework'>re<span>work</span></h1>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
          Talent Finder
          </a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="#">
          For Recruiters
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
          For Employers
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
          About Us
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
          Company
          </a>
        </li>

        
      </ul>
      <form className="d-flex" role="search ">
      <button type="button" className="btn-login ">Login</button>
      <button type="button" className="btn-get-started ">Get started</button>
      </form>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navvv
