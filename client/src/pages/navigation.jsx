
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import BOT_Logo from "../images/BOT_Logo.png";


export default function Navigation() {
  return (
<>
  <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" style={{borderBottom: '.1px solid #f0f0f0'}}>
   <div className="container-fluid">
    <NavLink to={'home'} className="navbar-brand">
      <img src={BOT_Logo} alt="Boys On Trial Logo" width="53" height="53" style={{borderRadius: '5%', border: '.7px solid silver'}}></img>
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
   
    <div className="collapse navbar-collapse" id="navbarNav" style={{fontFamily: 'New Rocker, system-ui', fontSize: '1.6rem'}}>
      <ul className="navbar-nav">

        <li className="nav-item">
          <NavLink to={'home'} className="nav-link active" aria-current="page">Home</NavLink>
        </li>

        <li className="nav-item">
          <NavLink to={'about'} className="nav-link active">About</NavLink>
        </li>

        <li className="nav-item">
          <NavLink to={'pics'} className="nav-link active">Pics</NavLink>
        </li>

        <li className="nav-item dropdown">
          <NavLink to={'/'} className="nav-link active dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            EPs
          </NavLink>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to={'/if'}>If it's the last thing we do</NavLink></li>
            <li><NavLink className="dropdown-item" to={'/guan'}>¡Guantanamo Boy!</NavLink></li>
            <li><NavLink className="dropdown-item" to={'/schubas'}>Live at Schuba's</NavLink></li>
            <li><NavLink className="dropdown-item" to={'/truth'}>Truth & Lies</NavLink></li>
          </ul>
        </li>

      </ul>
    </div>
  
  </div>
</nav>
  

  <div style={{ margin: '0', padding: '0', boxSizing: 'border-box' 
  // backgroundImage: `url(${Logo_Pink})`, backgroundSize: '100%'
  }} id="detail">
    <Outlet />
  </div>
</>
)};





