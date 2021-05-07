import React from 'react';
import { Link } from "react-router-dom";

function Navbar(props) {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className="container-fluid">
                <div className='collapse navbar-collapse'>
                    <h1 className="navbar-brand">TOSALA FILMS</h1>
                </div>
                <div>
                    <div>
                        <form action='' onSubmit className="d-flex">
                            <input type='text' placeholder='Recherche' className="form-control me-2" />
                        </form>
                    </div>
                </div>
                <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                    <li className="nav-item">
                        <Link to='/' className="nav-link">Accueil</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/TV' className="nav-link">Série</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Movie' className="nav-link">Cinéma</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;