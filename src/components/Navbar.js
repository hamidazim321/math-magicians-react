import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => (
  <nav>
    <p className="brandName">Math Magicians</p>
    <ul>
      <li>
        <NavLink className="links" to="/"> Home </NavLink>
      </li>
      <li>
        <NavLink className="links" to="/calculator"> Calculator </NavLink>
      </li>
      <li>
        <NavLink className="links" to="/quotes"> Quotes </NavLink>
      </li>
    </ul>
  </nav>
);
export default Navbar;
