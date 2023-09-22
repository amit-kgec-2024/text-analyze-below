import { useState } from "react";

export default function TextArea(props) {
    const [text, setText] = useState('Enter your Text')

    const handelUpClick = () => {
        // console.log("Upper case was Clicked" + text)
        
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handelOnChange = (event) => {
        // console.log("On Change")
        setText(event.target.value)
    }
  return (
    <div>
      <h1>{props.heading}</h1>
      <div class="mb-3">
        <textarea
          class="form-control"
          id="myBox"
          value={text}
          onChange={handelOnChange}
          rows="8"
        ></textarea>
        <button className="btn btn-primary" onClick={handelUpClick}>Convert to Uppercase</button>
      </div>
    </div>
  );
}
