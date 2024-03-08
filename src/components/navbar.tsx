import React from 'react';
import { pushRotate as Menu } from 'react-burger-menu';

const NavBar = () => {
  return (
    <Menu>
      <a id="chore-list" className="menu-item" href="/chore-list">
        Chore List
      </a>
      <a id="supply-list" className="menu-item" href="/supply-list">
        Supply List
      </a>
      <a id="shopping-list" className="menu-item" href="/shopping-list">
        Shopping List
      </a>
      <a id="calendar" className="menu-item" href="/calendar">
        Calendar
      </a>
      <a id="settings" className="menu-item" href="/settings">
        Settings
      </a>
    </Menu>
  );
};

export default NavBar;
