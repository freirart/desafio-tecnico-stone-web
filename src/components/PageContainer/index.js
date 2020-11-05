import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import currentUser from '../../assets/images/perfil.jpg';

import './styles.css';

function PageContainer({ children }) {
  return (
    <div id="content">
      <header>
        <Link to="/"> 
          <img src={logo} className="logo" alt="Logo" />
        </Link>
        <div className="current-user">
          <span>Admin</span>
          <img src={currentUser} alt="Current User" />
        </div>
      </header>
      <main className="container">{children}</main>
      <footer>
        <span>Desenvolvido por&nbsp;</span>
        <a href="https://www.linkedin.com/in/freirart"> 
          <img src={logo} className="logo" alt="Logo" />
        </a>
      </footer>
    </div>
  );
}

export default PageContainer;