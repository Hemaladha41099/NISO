import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="Home" className="nav-link text-white">Home</Link>
                </li>
                
                <li className="nav-item">
                  <Link to="course" className="nav-link text-white">Course</Link>
                </li>
                <li className="nav-item">
                  <Link to="Participation" className="nav-link active text-white" aria-current="page">Participation</Link> </li>
                <li className="nav-item">
                  <Link to="About" className="nav-link text-white">About</Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul className="dropdown-menu ">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex me-3" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-light" type="submit">Search</button>
                <Link to ="" className='btn btn-outline- light ms-3'>cart</Link>
              </form>
            </div>
          </div>
        </nav>
      </header>
    </> 

  )
}
export default Header