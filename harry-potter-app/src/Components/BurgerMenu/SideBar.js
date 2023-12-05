import './sideBar.scss';
import { slide as Menu } from 'react-burger-menu';

export const SideBar = (props) => {
  return (
    <Menu>
      <a
        className="menu-item"
        href="/"
      >
        Home
      </a>
      <a
        className="menu-item"
        href="/gryffindor"
      >
        Gryffindor
      </a>
      <a
        className="menu-item"
        href="/slytherin"
      >
        Slytherin
      </a>
      <a
        className="menu-item"
        href="/hufflepuff"
      >
        Hufflepuff
      </a>
      <a
        className="menu-item"
        href="/ravenclaw"
      >
        Ravenclaw
      </a>
    </Menu>
  );
};
