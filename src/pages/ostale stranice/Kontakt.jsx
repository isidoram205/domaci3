import React from 'react';
import './Kontakt.css'; // Poveživanje sa CSS fajlom
import { useState } from 'react';

function Kontakt() {
    const [showMessage, setShowMessage] = useState(false);


    const poruka = (event) => {
      event.preventDefault();
      setShowMessage(true);
      alert("Uspesno ste poslali poruku!");
      event.target.reset();
    };

  return (
    <div className="contact-container">
      <h1>Pišite nam...</h1>
    <div class="contact-form">
      
      <form onSubmit={poruka}>
        <div className="form-group">
          <label htmlFor="name">Ime i prezime:</label>
          <input type="text" placeholder='Unesite ime i prezime...' id="name" name="name" required/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" placeholder='Unesite email adresu...' id="email" name="email" required/>
        </div>
        <div className="form-group">
          <label htmlFor="message">Poruka:</label>
          <textarea id="message" placeholder='Unesite poruku...' name="message" required></textarea>
        </div>
        <button type="submit">Pošalji</button>
        {showMessage}
      </form>
      </div>
    </div>
  );
}

export default Kontakt;