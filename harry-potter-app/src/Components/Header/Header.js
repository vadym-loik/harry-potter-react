import './header.scss';
import logo from '../../assets/hogwarts.png';

const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="header-nav">
          <ul className="header-nav__list">
            <li className="header-nav__item">
              <a
                href="#"
                className="header-nav__link"
              >
                Home
              </a>
            </li>
            <li className="header-nav__item">
              <a
                href="#"
                className="header-nav__link"
              >
                Gryffindor
              </a>
            </li>
            <li className="header-nav__item">
              <a
                href="#"
                className="header-nav__link"
              >
                Slytherin
              </a>
            </li>
            <li className="header-nav__item">
              <a
                href="#"
                className="header-nav__link"
              >
                Hufflepuff
              </a>
            </li>
            <li className="header-nav__item">
              <a
                href="#"
                className="header-nav__link"
              >
                Ravenclaw
              </a>
            </li>
          </ul>

          <img
            src={logo}
            className="header-logo"
            alt="hogwarts logo"
          ></img>
        </nav>
        <hr />
      </header>
    </>
  );
};

export default Header;
