import React, { useContext } from 'react';
import { ProizvodiContext } from '../../context/ProizvodiContext';

export const KorpaItem=(proizvod)=>{

    console.log(proizvod);
    const id = proizvod.data.id;
    const naziv = proizvod.data.naziv;
    const cena = proizvod.data.cena;
    const url = proizvod.data.url;
    const { korpaItems, dodajUKorpu, izbrisiIzKorpe } = useContext(ProizvodiContext);


    return <div className="korpaItem">
            <img src={url}/>
            <div className="opis">
                <p>
                    <b>{naziv}
                    </b>
                </p>
                <p> {cena}din</p>
            <div className="kolicinaHandler">
            <button className="kolicinaPlus" onClick={() => izbrisiIzKorpe(id)}> - </button>
                <input className = "kolicinaInput" value={korpaItems[id]} />
            <button className="kolicinaPlus" onClick={() => dodajUKorpu(id)}> + </button>
            </div>

            </div>
    </div>
};

export default KorpaItem