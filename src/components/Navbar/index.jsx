import './styles.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png" alt="lego-icon" />
        <ul>
          <li>
            <a href="/">EXCLUSIVOS</a>
          </li>
          <li>
            <a href="/">NUEVOS</a>
          </li>
          <li>
            <a href="/">GIFT CARD</a>
          </li>
          <li>
            <a href="/">FIND A STORE</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Navbar };
