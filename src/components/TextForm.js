import React, { useState } from "react";
const TextForm = (props) => {
  let handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className={"container"}
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1>{props.heading}</h1>
        <textarea
          onChange={handleOnChange}
          className={`form-control `}
          style={{
            color: props.mode === "light" ? "black" : "white",
            backgroundColor: props.mode === "light" ? "white" : "rgb(2 21 36 )",
          }}
          value={text}
          id="my-box"
          rows="8"
        ></textarea>
        <button
          className={`btn btn-primary mt-3 `}
          onClick={() => {
            setText(text.toUpperCase());
            props.showAlert("Converted to Upper Case!", "success");
          }}
        >
          Convert to upper case
        </button>
        <button
          className="btn btn-primary mt-3 mx-3"
          onClick={() => {
            setText(text.toLowerCase());
            props.showAlert("Converted to Lower Case!", "success");
          }}
        >
          Convert to Lower case
        </button>
        <button
          className="btn btn-primary mt-3 "
          onClick={() => {
            setText(() => {
              let splitText = text.split(" "); // Split the text into words
              let sortedText = splitText.sort(); // Sort the words alphabetically
              return sortedText.join(" "); // Join the sorted words back into a string
            });
            props.showAlert("Vocabulary Sorted", "success");
          }}
        >
          Sort Words
        </button>
        <button
          className="btn btn-primary mt-3 mx-3 "
          onClick={() => {
            setText(" ");
            props.showAlert("Text Has been cleared!", "success");
          }}
        >
          clear text
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h2>Text Summary</h2>
        <p>
          {text.split(" ").length} word and {text.length}
        </p>
        <p>Time to read : {0.0008 * text.split(" ").length}</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
};

export default TextForm;
