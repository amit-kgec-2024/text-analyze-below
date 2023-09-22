import { useState } from "react";

export default function TextArea(props) {
    const [text, setText] = useState('')

    const handelUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handelLoClick = () => {
      let newText = text.toLowerCase();
      setText(newText);
    };
    const handelCapitalizedClick = () => {
      let newText = text[0].toUpperCase() + text.slice(1);
      setText(newText);
    };
    const textClear = () => {
      let newText = (" ");
      setText(newText);
    };
    const handelOnChange = (event) => {
        setText(event.target.value)
    }
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div class="mb-3">
          <textarea
            class="form-control"
            id="myBox"
            value={text}
            onChange={handelOnChange}
            rows="8"
          ></textarea>
          <button className="btn btn-primary my-3 mx-1" onClick={handelUpClick}>
            Convert to Uppercase
          </button>
          <button
            className="btn btn-secondary my-3 mx-1"
            onClick={handelLoClick}
          >
            Convert to Lowercase
          </button>
          <button
            className="btn btn-secondary my-3 mx-1"
            onClick={handelCapitalizedClick}
          >
            Capitalized Case
          </button>
          <button className="btn btn-danger my-3 mx-1" onClick={textClear}>
            Clear
          </button>
        </div>
      </div>
      <div className="container my-3">
        <h1>Your text Summery</h1>
        <p>
          {text.split(" ").length} words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length}Minutes Reads</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
