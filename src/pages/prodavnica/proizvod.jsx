import React from "react";
import './proizvod.css';
import { useContext } from "react";
import {ProizvodiContext} from "../../context/ProizvodiContext";

const Proizvod = (props) => {

  const {id,naziv,opis,url, cena}=props.proizvod;
  const {dodajUKorpu,korpaItems}=useContext(ProizvodiContext);
  const korpaItemAmount = korpaItems[id];

    return (
      <div className="card" style={{ margin: 100, borderStyle: "dotted" }}>
        <img className="krema1" src={url} alt="Neka slika" />
        <div className="card-body">
          <h3 className="card-title">{naziv}</h3>
          <p className="card-text">
          {opis}
          </p>
          <p className="cena">
                            {cena}din 
          </p>
          <a className="btn" onClick={()=> dodajUKorpu(id)}>Dodaj u korpu</a>
        </div>
      </div>
    );
  };

  export default Proizvod;
  