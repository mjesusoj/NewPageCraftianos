import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import { DarkScreen } from '../DarkScreen/DarkScreen';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="menu">
                <ul className="navbar-nav">
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/"
                    >
                        Inicio 🏠
                    </NavLink>
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/sobre-mi"
                    >
                        Redes Sociales 🧡
                    </NavLink>
                    <li className="nav-item dropdown">
                        <Link
                            className="nav-link dropdown-toggle"
                            id="navbarDarkDropdownMenuLink"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            title="Gana dinero con estos métodos"
                            to="#"
                        >
                            Gana dinero con estos métodos 💸
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                            <li>
                                <Link
                                    className="dropdown-item"
                                    title="Encuestas renumeradas"
                                    to="/encuestas-renumeradas/"
                                >
                                    Encuestas renumeradas 📙
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="dropdown-item"
                                    title="Recibe cashback por realizar compras"
                                    to="/compras-cashback/"
                                >
                                    Recibe cashback por realizar compras 👛
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="dropdown-item"
                                    title="Gana dinero jugando"
                                    to="/gana-dinero-jugando/"
                                >
                                    Gana dinero jugando 🎮
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="dropdown-item"
                                    title="Gana cryptos gratis"
                                    to="/gana-cryptos-gratis/"
                                >
                                    Gana cryptos gratis 💸
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="dropdown-item"
                                    title="Bancos móviles y Pagos"
                                    to="/banco-movil-pagos/"
                                >
                                    Bancos móviles y Pagos 🏦
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            to="/blog"
                        >
                            Blog 📚
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            to="/enlaces"
                        >
                            Enlaces 💡
                        </NavLink>
                    </li>
                </ul>
            </div>
            
            <DarkScreen />
        </nav>
    )
}
