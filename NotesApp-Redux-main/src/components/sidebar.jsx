import React from 'react'
import notessymbol from "../assets/description-white.svg"
import { Link } from 'react-router-dom'

function Sidebar() {
  return <>

    <ul className="navbar-nav sidebar" id="accordionSidebar">


      <Link to="./home" className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div className="sidebar-brand-text mx-3">Notes App</div>
      </Link>


      <li className="active mx-2 px-2">
        <Link to="./home" className="nav-link" href="index.html">
          <img src={notessymbol} />
          <span className='mx-2'>Notes</span>
        </Link>
      </li>

    </ul>


  </>
}

export default Sidebar