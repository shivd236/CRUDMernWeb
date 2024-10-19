import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isLogin, setLogin] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false); // State to manage the toggle menu
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setLogin(true);
    }
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem('token');
    setLogin(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };


  const onClicklogin = () => {
    navigate('/login');
    toggleMenu()
  };

  const onClickCreatePage = () => {
    navigate('/create');
    toggleMenu()

  };

  const onCLickReadPage = () => {
    navigate('/read');
    toggleMenu()

  };

  const onclickHomePage = () => {
    navigate('/');
    toggleMenu()

  };



  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="company-name">Crud Mern</span>
      </div>
      <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        ☰ {/* Hamburger icon */}
      </div>
      <div className={`nav-items ${isMenuOpen ? 'open' : ''}`}>
        <span className={`nav-item ${location.pathname === '/' ? 'active' : ''}`} onClick={onclickHomePage}>Home</span>
        <span className={`nav-item ${location.pathname === '/create' ? 'active' : ''}`} onClick={onClickCreatePage}>Create</span>
        <span className={`nav-item ${location.pathname === '/read' ? 'active' : ''}`} onClick={onCLickReadPage}>UserList</span>
        {isLogin ? (
          <button className="logout-button" onClick={handleLogOut}>LogOut</button>
        ) : (
          <button className="login-button" onClick={onClicklogin}>Login</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
