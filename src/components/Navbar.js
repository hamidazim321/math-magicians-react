import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/calculator"> Calculator </NavLink>
        <NavLink to="/quotes"> Quotes </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
