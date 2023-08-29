import React from "react";
import './proizvod.css';

const Proizvod = ({proizvod}) => {
    return (
      <div className="card" style={{ margin: 10, borderStyle: "dotted" }}>
        <img className="krema1" src={proizvod.url} alt="Neka slika" />
        <div className="card-body">
          <h3 className="card-title">{proizvod.title}</h3>
          <p className="card-text">
          {proizvod.description}
          </p>
          <a className="btn">+</a>
          <a className="btn">-</a>
        </div>
      </div>
    );
  };

  export default Proizvod;
  