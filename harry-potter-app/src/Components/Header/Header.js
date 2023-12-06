import './header.scss';
import logo from '../../assets/hogwarts.png';
import { NavLink } from 'react-router-dom';
import { SideBar } from '../BurgerMenu/SideBar';

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="sidebar-container">
          <SideBar className="sidebar" />
        </div>

        <div className="header-logo">
          <img
            src={logo}
            className="header-logo__img"
            alt="hogwarts logo"
          ></img>
        </div>

        <nav className="header-nav">
          <ul className="header-nav__list">
            <li className="header-nav__item">
              <NavLink
                to="/"
                className="header-nav__link"
              >
                Home
              </NavLink>
            </li>
            <li className="header-nav__item">
              <NavLink
                to="/gryffindor"
                className="header-nav__link"
              >
                Gryffindor
              </NavLink>
            </li>
            <li className="header-nav__item">
              <NavLink
                to="/slytherin"
                className="header-nav__link"
              >
                Slytherin
              </NavLink>
            </li>
            <li className="header-nav__item">
              <NavLink
                to="/hufflepuff"
                className="header-nav__link"
              >
                Hufflepuff
              </NavLink>
            </li>
            <li className="header-nav__item">
              <NavLink
                to="/ravenclaw"
                className="header-nav__link"
              >
                Ravenclaw
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
