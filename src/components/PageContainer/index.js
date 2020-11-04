import React from 'react';

import logo from '../../assets/images/logo.png';
import currentUser from '../../assets/images/perfil.jpg';

import './styles.css';

function PageContainer({ children }) {
  return (
    <div id="content">
      <header>
        <img src={logo} className="logo" alt="Logo" />
        <div className="current-user">
          <span><em>(Admin)</em> Artur</span>
          <img src={currentUser} alt="Current User" />
        </div>
      </header>
      <main className="container">{children}</main>
      <footer>
        <img src={logo} className="logo" alt="Logo" />
        <span>Desenvolvido por&nbsp;
          <a href="https://www.linkedin.com/in/freirart" className="em"> 
           Artur Freire
          </a>.
        </span>
      </footer>
    </div>
  );
}

export default PageContainer;