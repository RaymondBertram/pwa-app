import React, { useRef } from "react";

import "./form.screen.scss";

export const Form = () => {
  return (
    <section className="form-container" id="form">
      <h1>Kontaktformular</h1>
      <form>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Example label</label>
         <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input"/>
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Another label</label>
          <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Example label</label>
         <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input"/>
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Another label</label>
          <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
        </div>
      </form>
    </section>
  );
};
