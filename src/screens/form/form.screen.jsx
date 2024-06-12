import React, { useRef } from "react";

import "./form.screen.scss";

export const Form = () => {
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call your API here with the form data
  };
  
  return (
    <section className="form-container" id="form">
      <h1>Kontaktformular</h1>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">Vorname</label>
         <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Vorname"/>
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Nachname</label>
          <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Nachname"/>
        </div>
        <div className="form-group">
          <label htmlFor="e-mail">E-Mail</label>
         <input type="text" className="form-control" id="formGroupExampleInput" placeholder="E-Mail"/>
        </div>
        <div className="form-group">
          <input className="form-check-input" type="checkbox" value="false" id="flexCheckDefault"/>
          <label className="form-check-label" htmlFor="checkbox-dataconsent">
           Ich stimme den <a href="http://localhost:3000/#">Datenschutzbestimmungen</a> zu.
          </label>
        </div>
        <button type="submit" className="btn btn-primary my-3">Absenden</button>
      </form>
    </section>
  );
};
