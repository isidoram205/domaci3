import React from 'react';
import './navBar.css';
import { Link } from "react-router-dom";


function NavBar() {
  return (
    <div className="navBar">
      <img src="./logo1.png" alt="bug" height={150} style={{ float: "left", marginRight: "150px" }}/>
      <Link to="/">Prodavnica</Link>
      <Link to="/onama">O nama</Link>
      <Link to="/kontakt">Kontakt</Link>
      <Link to="/korpa">Korpa</Link>
    </div>
  );
}

export default NavBar;
