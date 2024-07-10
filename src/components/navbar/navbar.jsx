import React, { useContext } from 'react'
import styles from './navbar.module.scss';
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {

    return (
        <>
            <nav className={`navbar navbar-expand-lg ${styles.app_navbar_container}`}>
                <div className="container">
                    <button className="navbar-toggler" onClick={() => sidebarOpen()} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-none" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-3">
                                <NavLink to='/' className={`${styles.nav_link_item} nav-link active`} >Home</NavLink>
                            </li>


                            <li className="nav-item mx-3">
                                <NavLink to='/about' className={`${styles.nav_link_item} nav-link active`} >About</NavLink>
                            </li>
                            
                            <li className="nav-item mx-3">
                                <NavLink to='/contact' className={`${styles.nav_link_item} nav-link active`} >Contact</NavLink>
                            </li>

                            <li className="nav-item mx-3">
                                <NavLink to='/auth/sign-up' className={`${styles.nav_link_item} nav-link active`}  >Sign Up</NavLink>
                            </li>

                        </ul>
                        <form className="d-flex align-items-center gap-4" role="search">
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
