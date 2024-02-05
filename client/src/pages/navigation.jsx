import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import BOT_Logo from "../images/BOT_Logo.png";

export default function Navigation() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const closeNavMenu = () => {
    setIsNavCollapsed(true);
  };

  return (
    <>
      <nav className="navbar  fixed-top navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" style={{borderBottom: '.1px solid #f0f0f0'}}>
        <div className="container-fluid">
          <NavLink to={'/home'} className="navbar-brand" onClick={closeNavMenu}>
            <img src={BOT_Logo} alt="Boys On Trial Logo" width="53" height="53" style={{borderRadius: '5%', border: '.7px solid silver'}}></img>
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
            <span className="navbar-toggler-icon"></span>
          </button>
        
          <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav" style={{fontFamily: 'New Rocker, system-ui', fontSize: '1.6rem'}}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to={'home'} className="nav-link active" onClick={closeNavMenu}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'about'} className="nav-link active" onClick={closeNavMenu}>About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'pics'} className="nav-link active" onClick={closeNavMenu}>Pics</NavLink>
              </li>
              <li className="nav-item dropdown navbarScroll">
                <NavLink to={'/'} className="nav-link active dropdown-toggle active" role="button" data-bs-toggle="dropdown" aria-expanded="false" 
                // onClick={closeNavMenu}
                >
                  EPs
                </NavLink>
                <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item" to={'/if'}onClick={closeNavMenu}>If it's the last thing we do</NavLink></li>
                  <li><NavLink className="dropdown-item" to={'/guan'}onClick={closeNavMenu}>¡Guantanamo Boy!</NavLink></li>
                  <li><NavLink className="dropdown-item" to={'/schubas'}onClick={closeNavMenu}>Live at Schuba's</NavLink></li>
                  <li><NavLink className="dropdown-item" to={'/truth'}onClick={closeNavMenu}>Truth & Lies</NavLink></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div style={{ margin: '0', padding: '0', boxSizing: 'border-box' }} id="detail">
        <Outlet />
      </div>
    </>
  );
}
