import { NavLink } from 'react-router-dom'
import './Navbar.css';
import palmtrees from './palmtrees.jpg';
import React from 'react'




function Navbar() {
  return (
    <div className="Navbar1">
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand text-light" href="#">Soleil</a>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <NavLink className="nav-link text-light" activeClassName="nav-link-active"exact to="/">Home
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link text-light" activeClassName="nav-link-active"exact to="/Features">Features
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link text-light" activeClassName="nav-link-active"exact to="/CookingVideos">Cooking Videos
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      </div>
    )
  }

  export default Navbar
