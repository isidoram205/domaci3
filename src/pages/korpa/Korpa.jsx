import React, { useContext } from "react";
import proizvodi from "../../podaciProizvodi.js";
import { ProizvodiContext } from "../../context/ProizvodiContext";
import {KorpaItem} from './korpa-item';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import "./korpa.css"

export const Korpa = () => {

    const [showMessage, setShowMessage] = useState(false);

    const poruka = (event) => {
        event.preventDefault();
        setShowMessage(true);
        alert("Uspesno ste porucili proizvode.");
        window.location.reload();
        return false;
      };

    const{korpaItems,ukupnoZaPlacanje}=useContext(ProizvodiContext);

    const ukupno = ukupnoZaPlacanje();

    const navigate = useNavigate();


    return (
    <div className="korpa" >
        <div><h1 className="naslov"> Proizvodi u Vašoj korpi: </h1></div>

        <div className="korpaItems">
        {proizvodi.map((product, index)=> {
            if(korpaItems[product.id]!=0){
                return <KorpaItem key={index} data={product}/>
            }

        })}
        </div>
        {ukupno > 0 
                ?
                <div className="korpaCheckout" >
                <p className="ukupno">Ukupno: {ukupno}din</p>
                <button className = "nastavi" onClick={() => navigate("/")}>Nastavi sa kupovinom</button>
                <button className="placanje"  onClick={(event) => poruka(event)}>Plaćanje</button>
                {showMessage}
                </div>
                : 
                <h1 className="prazna">Vaša korpa je prazna.</h1>}
    </div>

    )
}

export default Korpa