import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class Header extends React.Component {
  constructor(props: any) {
    super(props);
  }
  render() {
    const headerReact = (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="logo-content">
            <NavLink
              className="navbar-brand logo"
              to="/"
              activeClassName="selected-link"
            >
              BHOLDER
            </NavLink>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/Podcast"
                  activeClassName="selected-link"
                >
                  Podcast
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/Blog"
                  activeClassName="selected-link"
                >
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/About"
                  activeClassName="selected-link"
                >
                  Sobre
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Fundadores
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <NavLink
                    className="dropdown-item"
                    to="/Christian"
                    activeClassName="selected-link"
                  >
                    Christian Alexsander
                  </NavLink>
                  <NavLink
                    className="dropdown-item"
                    to="/Pedro"
                    activeClassName="selected-link"
                  >
                    Pedro Anjos
                  </NavLink>
                </div>
              </li>
            </ul>
            <ul className="navbar-nav social-media-header">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fab fa-linkedin" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fab fa-facebook-square" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fab fa-instagram" />
                </a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0 form-search">
              <input
                className="form-control input-search-header mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-bholder-search" type="submit">
                <i className="fas fa-search" />
              </button>
            </form>
            <ul className="navbar-nav rigth-acess-header">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Registrar
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );

    return headerReact;
  }
}
