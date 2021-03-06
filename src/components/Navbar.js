import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <NavLink className="navbar-brand" to={'/'}>Haberler</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink activeClassName="active" className="nav-link" to={'/'}>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName="active" className="nav-link" to={'/haberekle'}>Haber Ekle</NavLink>
                </li>
            </ul>
            
            </div>
      </nav>
    )
}

export default Navbar