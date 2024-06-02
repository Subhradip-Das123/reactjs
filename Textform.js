import React, { useState } from 'react'
export default function TextForm(props) {
  const handelUpClick = () => {
    console.log("Uppercase was clicked")
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handelLoClick = () => {
    console.log("Lowercase was clicked")
    let newText = text.toLowerCase();
    setText(newText)
  }

  const handleOnChange = (event) => {
    console.log("On the change")
    setText(event.target.value)
  }
  const [text, setText] = useState('Enter text here2')
  //   text = "new text" //wrong way to change the state
  //   setText("new text") //correct way to change the state
  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          {/* <label for="myBox" className="form-label">Example textarea</label> */}
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handelUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handelLoClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handelLoClick}>Copy Text</button>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>preview</h2>
        <p>{text.length > 0}</p>
      </div>
    </>

  )
}
