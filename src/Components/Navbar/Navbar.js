import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

export default function Navbar() {
  const NavbarLinks = [
    { id: 0, name: "Home Page", path: "/" },
    { id: 1, name: "Recipe Page", path: "/recipes" },
    { id: 2, name: "Pages", path: "/pages" },
    { id: 3, name: "Elements", path: "/elements" }
  ];

  return (
    <div className="header">
      <div className="Navbar">
        <div className="Brand-logo">
          <img
            src="https://fabrx.co/fullpreview/tastebite/assets/images/brands/brand4.svg"
            alt="TasteBite Logo"
          />
        </div>

        <ul className="Nav-links">
          {NavbarLinks.map((link) => (
            <li className="Nav-link" key={link.id}>
              <Link to={link.path} className="nav-item">
                {link.name}
                {/* SVG only for Home Page, Recipe Page & Pages */}
                {link.name !== "Elements" && (
                  <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="9.333" 
                  height="5.333" 
                  viewBox="0 0 9.333 5.333" 
                  style={{ paddingLeft: "10px" }}
                >
                  <path d="M1.138.2A.667.667,0,0,0,.2,1.138l4,4a.667.667,0,0,0,.943,0l4-4A.667.667,0,1,0,8.2.2L4.667,3.724Z"></path>
                </svg>
                
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="Avatar">
          <svg xmlns="http://www.w3.org/2000/svg" width="26.667" height="26.667" viewBox="0 0 26.667 26.667" style={{ paddingRight: "20px" }}>
            <path d="M24.39,26.276l-4.9-4.9a12.012,12.012,0,1,1,1.885-1.885l4.9,4.9a1.334,1.334,0,0,1-1.886,1.886ZM2.666,12a9.329,9.329,0,0,0,15.827,6.7,1.338,1.338,0,0,1,.206-.206A9.332,9.332,0,1,0,2.666,12Z"></path>
          </svg>
          <img
            src="https://fabrx.co/fullpreview/tastebite/assets/images/avatars/avatar1.png"
            alt="Avatar"
          />
        </div>
      </div>
    </div>
  );
}
