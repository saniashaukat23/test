import React from "react";

const ColorPalltete = () => {
  const changeRed = () => {
    console.log("red clicked");
  };
  return (
    <div className="container my-3 position-relative translate-end">
      <h4>Collor Palette</h4>
      <div className="form-check ">
        <input
          className="form-check-input"
          onChange={changeRed()}
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Red
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          onChange={console.log("yello clicked")}
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
        />
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          Yellow
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault3"
        />
        <label className="form-check-label" htmlFor="flexRadioDefault3">
          Green
        </label>
      </div>
    </div>
  );
};

export default ColorPalltete;
