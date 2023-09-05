import React from "react";
import Proizvod from "./proizvod";
import './proizvodi.css';

const Proizvodi = props => {

    console.log(props.proizvodi);

    return (
      <div className="svi-proizvodi">
        {props.proizvodi.map((proizvod) => (
          <Proizvod proizvod = {proizvod} key = {proizvod.id}/>
        ))}
      </div>
    );
  };
  

export default Proizvodi;