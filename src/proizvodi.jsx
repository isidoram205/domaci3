import React from "react";
import Proizvod from "./proizvod";
import './proizvodi.css';

const Proizvodi = ({proizvodi}) => {
    return (
      <div className="svi-proizvodi">
        <Proizvod proizvod = {proizvodi[0]}/>
        <Proizvod proizvod = {proizvodi[1]}/>
        <Proizvod proizvod = {proizvodi[2]}/>
        <Proizvod proizvod = {proizvodi[3]}/>
        <Proizvod proizvod = {proizvodi[4]}/>

      </div>
    );
  };
  

export default Proizvodi;