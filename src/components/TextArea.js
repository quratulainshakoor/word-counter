import React, { useState } from "react";

export default function TextArea(props) {
  const [text, setText] = useState("");

  const upperCase = ()=>{
    setText(text.toUpperCase())
  }
  const lowerCase = ()=>{
    setText(text.toLowerCase())
  }

  const undo = ()=>{
    setText(text.slice(0,text.length-1))
  }

  const clear =()=>{
    setText('')
  }

  const copy = ()=>{
    navigator.clipboard.writeText(text)
    alert("Copy Successfully")
  }

  const paste = async ()=>{
    const s = await 
    navigator.clipboard.readText();
    setText(s)
 
  }

  const change = (event)=>{
    setText(event.target.value)
  }



  return (
    <>
      <div className="container" my-4  >
        <h1>{props.heading}</h1>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{props.heading5}</h5>
            <div class="mb-3">
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
                value={text}
                onChange={change}
              ></textarea>
            </div>
            <button class="btn btn-success mx-2" onClick={upperCase} >
              UpperCase
            </button>

            <button class="btn btn-success mx-2" onClick={lowerCase}>
              LowerCase
            </button>
            <button class="btn btn-success mx-2" onClick={undo}>
              Undo
            </button>
            <button class="btn btn-success mx-2" onClick={clear}>
              Clear
            </button>
            
            <button class="btn btn-success mx-2" onClick={copy}>
              Copy
            </button> 

            <button class="btn btn-success mx-2" onClick={paste} >
              Paste
            </button>

          </div>
        </div>

        <hr />
        <h4>Details Words or Characters </h4>

        <p>{text.split(" ").length-1} words {text.length} Characters</p>
        {/*  <p>0 words {text.length} Characters</p>  */}
        <h4>Preview !!</h4>
      {/* //<p>Nothing to Show !!</p>  */}
        <p>{text}</p>
      </div>
    </>
  );
}
