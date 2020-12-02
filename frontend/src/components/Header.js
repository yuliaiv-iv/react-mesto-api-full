import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../images/logo.svg';

function Header({ email, link, path, onClick }) {

  const [isOpen, setIsOpen] = React.useState(true);
  const [isClicked, setIsClicked] = React.useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    setIsClicked(!isClicked);
  };
  
  return (
    <header className="header">
      <img className={`header__logo ${isOpen ? '' : 'header__logo_visible'}`}
        src={logo}
        alt="Логотип"
      />
      <button className={`button opacity header__button ${isClicked ? 'header__button_close' : 'header__button_open'}`}
        onClick={handleClick}
      >
      </button>
      <div className={`header__nav ${isOpen ? '' : 'header__nav_visible'}`}>
        <p className="header__email">{email}</p>
        {
          <Link
            className="header__link opacity"
            to={path}
            onClick={onClick}
          >
            {link}
          </Link>
        }
      </div>
    </header>
  );
}

export default Header;