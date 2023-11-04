import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const NavbarMain = () => {
    return (
        <div>
            <nav id="navBar" className="navbar navbar-dark navbar-expand-lg">
                <div className="container p-1">
                    <Link to="/" id="navBarBrand">
                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
                        </svg>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ border: "none" }}>
                        <span className="navbar-toggler-icon"></span>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M4 6h2v2H4zm0 5h2v2H4zm0 5h2v2H4zm16-8V6H8.023v2H18.8zM8 11h12v2H8zm0 5h12v2H8z"></path></svg> */}

                    </button>
                    <div className="collapse navbar-collapse me-4" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item  mx-1">
                                <Link className="nav-link" aria-current="page" href="/about">About</Link>
                            </li> */}
                            <li className="nav-item mx-1">
                                <Link className="nav-link mx-2" to="/about">About</Link>
                            </li>
                            <li className="nav-item dropdown navItems mx-1">
                                <a className="nav-link dropdown-toggle mx-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Groups
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/technovanza">Technovanza</Link></li>
                                    <li><Link className="dropdown-item" to="/pratibimb">Pratibimb</Link></li>
                                    <li><Link className="dropdown-item" to="/enthusia">Enthusia</Link></li>
                                    <li><Link className="dropdown-item" to="/rangwardhan">Rangwardhan</Link></li>
                                    <li><Link className="dropdown-item" to="/ecell">E-Cell VJTI</Link></li>
                                    <li><Link className="dropdown-item" to="/digitalvjti">Digital VJTI</Link></li>
                                    <li><Link className="dropdown-item" to="/dla">DLA</Link></li>
                                </ul>
                            </li>
                            {/* <li className="nav-item dropdown navItems mx-1">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Student Activities
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/coc">COC</Link></li>
                                    <li><Link className="dropdown-item" to="/gdsc">GDSC</Link></li>
                                    <li><Link className="dropdown-item" to="/aero">Aero</Link></li>
                                    <li><Link className="dropdown-item" to="/asme">ASME</Link></li>
                                    <li><Link className="dropdown-item" to="/racing">Racing</Link></li>
                                    <li><Link className="dropdown-item" to="/ieee">IEEE</Link></li>
                                    <li><Link className="dropdown-item" to="/sra">SRA</Link></li>
                                    <li><Link className="dropdown-item" to="/vishwa">Vishwa</Link></li>
                                </ul>
                            </li> */}
                            <li className="nav-item mx-1">
                                <a className="nav-link mx-2" href="/contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div >
    )
}

export default NavbarMain