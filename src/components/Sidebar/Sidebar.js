import React from "react";
import { LinkComponent, SocialComponent } from "../../utils/links";
import { useGlobalContext } from "../../context";
import './sidebar.css';


const Sidebar = () => {
  const { isSidebarOpen } = useGlobalContext();
  return (
    <aside className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
      <div className="sidebar-content">
        <header className="nav-header container">
        </header>
        <div className="container">
          <LinkComponent classLink="sidebar-links" />
        </div>
        <SocialComponent classSocial="sidebar-social" />
      </div>
    </aside>
  );
};

export default Sidebar;