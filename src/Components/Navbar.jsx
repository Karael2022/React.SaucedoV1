import CartWidget from "./CartWidget"
import {NavLink} from 'react-router-dom'
import React from "react"


function Navbar() {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-info">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to={'/'}> All SmartWatch</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to='/'>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/category/Amazfit'>Amazfit</NavLink>
        </li>
        <li className="nav-item">    
          <NavLink className="nav-link" to='/category/Garmin'>Garmin</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/category/Xiaomi'>Xiaomi</NavLink>
    </li> 
        
      </ul>
      
    </div>
    <NavLink className="nav-link" to='/cart'><CartWidget/></NavLink>
  </div>
    
  
</nav>
        {/*<h1> Catalogo</h1>*/}
        </>

    )
}

export default Navbar


