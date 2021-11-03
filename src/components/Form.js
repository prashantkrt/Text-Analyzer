import React, { useState } from "react";
import "../styles/Analyzer.css";

export default function Form(props) {
  const [text, setText] = useState("Type Here");

  let convertUpper = () => {
    if (!text) {
      alert("no text available to analyze");
    } else {
      console.log("Upper case " + text);
      let uppar = text.toUpperCase();
      setText(uppar);
    }
  };
  let convertLower = () => {
    if (!text) {
      alert("no text available to analyze");
    } else {
      console.log("Upper case " + text);
      let uppar = text.toLowerCase();
      setText(uppar);
    }
  };
  let convert = (event) => {
    setText("");
  };

  let onHandle = (event) => {
    setText(event.target.value);
  };

  let clearText = (event) => {
    setText("");
  };

  let copy = (event) => {
    // let copyclip = event.textarea;
    var copyclip = document.getElementById("textarea");
    copyclip.select();
    navigator.clipboard.writeText(copyclip.value);
    alert("Text Copied successfully");
  };
  let capitalize = () => {
    for (let i = 0; i < text.split(" ").length; i++) {
      let cap = text.split[i].charAt(0);
      let resttext = cap.toUpperCase();
      setText(resttext + text.split(i).slice(1));
    }
  };

  return (
    <>
      <div
        className="container mb-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <label htmlFor="textarea" className="form-label">
          Enter your text in textarea for analyzing
        </label>
        <textarea
          className="form-control"
          id="textarea"
          rows="10"
          value={text}
          onChange={onHandle}
          placeholder={text}
          onClick={clearText}
        ></textarea>
      </div>
      <button className="btn btn-success mx-2 mybtn" onClick={convertUpper}>
        Convert to Uppercase
      </button>
      <button className="btn btn-success mx-2 mybtn" onClick={convertLower}>
        Convert to Lowercase
      </button>
      <button className="btn btn-success mx-2 mybtn" onClick={copy}>
        Copy to clipborad
      </button>
      <button className="btn btn-success mx-2 mybtn" onClick={capitalize}>
        Capitalize
      </button>
      <button className="btn btn-success mx-2 mybtn" onClick={convert}>
        Clear
      </button>

      <hr style={{ color: props.mode === "dark" ? "white" : "black" }} />
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words & {text.length} characters
        </p>
        <p>{text.split(" ").length * 0.004} minutes time taken</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter your text to preview"}</p>
      </div>
    </>
  );
}
