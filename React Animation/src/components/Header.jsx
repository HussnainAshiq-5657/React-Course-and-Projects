import { Link } from 'react-router';

function Navbar() {
  return (
    <nav style={{ padding: '20px', background: '#111' }}>
      <Link to="/" style={{ marginRight: '15px', color: '#fff' }}>
        Home
      </Link>
      <Link to="/about" style={{ color: '#fff', marginRight: '15px' }}>
        About
      </Link>
      <Link to="/scroll" style={{ color: '#fff', marginRight: '15px' }}>
        Scroll
      </Link>
      <Link to="/timer" style={{ color: '#fff', marginRight: '15px' }}>
        Timer
      </Link>
      <Link to="/hero" style={{ color: '#fff' }}>
        Hero
      </Link>
    </nav>
  );
}

export default Navbar;
