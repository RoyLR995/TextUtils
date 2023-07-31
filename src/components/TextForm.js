import React,{useState} from 'react'

export default function TextForm(props) {
    const handleOnChange = (event) => {
        console.log("On Change was clicked");
        setText(event.target.value);
        
    }
    const handleUpClick = () => {
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase","success");
    }
    const handleLowClick = () => {
        console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase","success")
    }
    const handleClear = () => {
        console.log("Clear was clicked");
        let newText = "";
        setText(newText);
        props.showAlert("Converted to Empty string","success")
    }
    const handleCopy = () => {
        console.log("I am copy");
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied","success")
    }
    const handleExtraspaces = () => {
        
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces are removed","success")
    }
    const [text, setText] = useState('Enter text here');
    //text = "new text";//wrong way to change the text
    //setText("new text");//correct way to change the text
    return (
      <>
      <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
          <h1>{props.heading}</h1>
        <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{
                        backgroundColor: props.mode === 'light' ? 'white' : 'gray',
                        color: props.mode === 'dark' ? 'white' : 'black'
                    }} id="mybox" rows="3"></textarea>
          </div>
                <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to UpperCase</button>

                <button className='btn btn-primary mx-1' onClick={handleLowClick}>Convert to LowerCase</button>
                <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy Text</button>
                <button className='btn btn-primary mx-1' onClick={handleExtraspaces}>Extra Space handler</button>
                <button className='btn btn-primary' onClick={handleClear}>Clear Text</button>
      </div>
      <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words, {text.length} characters</p>
                <p>{0.008 * text.split(" ").length}Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
            </div>
      </>
  )
}

