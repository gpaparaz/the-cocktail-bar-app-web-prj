import React from "react";
import { AiFillHome } from "react-icons/ai";
import {
  FaFacebookSquare,
  FaInstagramSquare
} from "react-icons/fa";
import { Link } from "react-router-dom";

const links = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/cocktails",
    text: "Cocktals",
  },
  
];

const LinkComponent = ({ classLink }) => {
  return (
    <ul className={classLink}>
      {links.map((link) => {
        return (
          <Link key={link.text} to={link.url} className="nav-item">
            <div className="nav-link">
              <h5 className="nav-text">{link.text}</h5>
            </div>
          </Link>
        );
      })}
    </ul>
  );
};

const socialLink = [
  {
    url: "https://www.facebook.com/",
    icon: <FaFacebookSquare className="nav-icon" />,
  },
  {
    url: "https://www.instagram.com/",
    icon: <FaInstagramSquare className="nav-icon" />,
  },
];

const SocialComponent = ({ classSocial }) => {
  return (
    <ul className={classSocial}>
      {socialLink.map((link) => {
        return (
          <li key={link.url} className="nav-item">
            <a href={link.url} alt={link.url} className="nav-link">
              {link.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export { LinkComponent, SocialComponent };