import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  return (
    <nav>
      <Link to={'/'}>HomePage</Link>
      <Link to={'/characters'}>Chars</Link>
      <Link to={'/planets'}>Planets</Link>
      <Link to={'/starships'}>StarShips</Link>
    </nav>
  );
};

export default Navbar;
