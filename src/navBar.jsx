import React from 'react';
import './navBar.css';


function NavBar() {
  return (
    <div className="navBar">
      <img src="./logo1.png" alt="bug" height={150} />
      <a href="/">Prodavnica</a>
      <a href="/onama">O nama</a>
      <a href="/kontakt">Kontakt</a>
      <a href="/korpa">Korpa</a>
    </div>
  );
}

export default NavBar;
