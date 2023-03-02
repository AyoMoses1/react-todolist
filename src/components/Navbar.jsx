import React, { useState, useRef} from "react";
import { NavLink } from "react-router-dom"
import { useAuthContext } from "../context/AuthContext";
import { useOnClickOutside } from "../useOnClickOutside";
import { useNavigate } from 'react-router-dom'


const links = [
  { path: '/', text: 'Home' },
  { path: 'about', text: 'About' },
  { path: 'profile', text: 'Profile' },
  { path: 'login', text: 'Login' },
];

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const { user, logout } = useAuthContext()

  const navigate = useNavigate()
  
  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const ref = useRef();

  useOnClickOutside(ref, dropdown, () => setDropdown(false));

  return (
    <>
      <nav>
        <ul>
        {links.map((link) => {
          return (
            <React.Fragment key={link.text}>
              {link.path === 'login' ? (
                !user && (
                  <li>
                    <NavLink to={link.path}>{link.text}</NavLink>
                  </li>
                )
              ) : link.path === 'profile' ? (
                user && (
                  <li>
                    <NavLink to={link.path}>
                      {link.text}
                    </NavLink>
                  </li>
                )
              ) : (
                <li>
                  <NavLink to={link.path}>{link.text}</NavLink>
                </li>
              )}
            </React.Fragment>
          );
        })}
        {/* <li ref={ref}>
          <button onClick={() => setDropdown((prev) => !prev)}>
            Services <span>&#8595;</span>
          </button>
          {dropdown && (
            <ul>
              <li>Design</li>
              <li>Developments</li>
            </ul>
          )}
        </li> */}
        </ul>
      </nav>
      {user && (
        <div className="logout">
          <p>{user}</p>
          {<button onClick={handleLogout}>Logout</button>}
        </div>
      )}
    </>
  );
};
export default Navbar;
