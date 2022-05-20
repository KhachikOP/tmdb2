import React from "react";
import logo from "../media/logo.svg";


const Header = () => {
  return (
    <header>
      <div className="content">
        <div className="sub_media">
          <div className="nav_wrapper">
            <a className="logo" href="/">
              <img src={logo} width="154" height="20"></img>
            </a>
            <ul
              className="dropdown_menu navigation k-widget k-reset k-header k-menu k-menu-horizontal"
              data-role="menu"
              tabIndex="0"
              role="menubar"
            >
              <li className="k-item k-menu-item k-state-default k-first">
                <a className="no_click k-link k-menu-link" href="/">
                  Movies
                </a>
              </li>
              <li className="k-item k-menu-item k-state-default k-first">
                <a className="no_click k-link k-menu-link" href="/">
                  TV shows
                </a>
              </li>
              <li className="k-item k-menu-item k-state-default k-first">
                <a className="no_click k-link k-menu-link" href="/">
                  People
                </a>
              </li>
              <li className="k-item k-menu-item k-state-default k-first">
                <a className="no_click k-link k-menu-link" href="/">
                  More
                </a>
              </li>
            </ul>
          </div>
          <div className="flex">
            <ul className="primary">
              <li className="glyph new_buttons">
                <a className="new_icon no_click" href="#">
                  <span className="glyphicons_v2 plus white"></span>
                </a>
              </li>
              <li className="translate" data-role="tooltip">
                <div>en</div>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">Join TMDB</a>
              </li>
              <li className="glyph search_butonns">
                <a className="search" href="#">
                  <span className="glyphicons_v2 search blue"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
