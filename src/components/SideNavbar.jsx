import React from 'react';

import { ReactComponent as Add } from '../assets/icons/add.svg';
import { ReactComponent as Home } from '../assets/icons/home.svg';
import { ReactComponent as Logo } from '../assets/icons/logo.svg';

import { ReactComponent as Arrow } from '../assets/icons/arrow.svg';
import { SideNavContainer } from './styles/Containers.styles';
import { SideBarIcon, SideBarLi } from './styles/Elements.styles';

export default function SideNavbar() {
  // const [toggle, setToggle] = useState();

  const handleToggle = () => {
    const sideBar = document.querySelector('.sidebar');
    sideBar.classList.toggle('close');
  };
  return (
    <SideNavContainer className="sidebar close">

      <header>
        <div className="logo-cont">
          <div className="logo">
            <Logo />
          </div>

          <div className="logo-text sidebar-text">
            <span className="name">Bookmarks</span>
          </div>
        </div>

        <span className="toggle">

          <Arrow onClick={handleToggle} />
        </span>
      </header>

      <div className="menu-bar">
        <div className="menu">
          <ul>

            <SideBarLi>
              <a href="#">
                <SideBarIcon>
                  <Home />
                </SideBarIcon>
                <span className="text nav-text">Dashboard</span>

              </a>

            </SideBarLi>
            <SideBarLi>
              <a href="#">
                <SideBarIcon>
                  <Add />
                </SideBarIcon>
                <span className="text nav-text">Add</span>

              </a>

            </SideBarLi>

          </ul>
        </div>
      </div>
    </SideNavContainer>
  );
}
