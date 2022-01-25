import React,{useState} from 'react'


export default function Textform(props) {
    const[text,setText] = useState("");
    
    const handleChange = (event)=>{
        setText(event.target.value);
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","success");
    }
    const handleCopy = ()=>{
        let copyText = document.getElementById("textBox")
        copyText.select();
        // console.log(copyText.value)
      navigator.clipboard.writeText(copyText.value)
      props.showAlert("Copied to clipboard","success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(""))
        props.showAlert("Extra spaces removed","success");
        }
    const handleClearText = ()=>{
       setText("");
       props.showAlert("Text had cleard","success");
    }
    
    return (
        <div>
            <h1 style={{color:props.mode==='dark'?'white':'#042743'}}>{props.heading}</h1>
                <div className="mb-3" >
                <textarea className="form-control" value={text} id="textBox"
                rows="8" onChange={handleChange} 
                style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}> 
                </textarea>
                </div>
                <button className= "btn btn-primary my-2 mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className= "btn btn-primary my-2 mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className= "btn btn-primary my-2 mx-2" onClick={handleCopy}>Copy</button>
                <button className= "btn btn-primary my-2 mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
                <button className= "btn btn-primary my-2 mx-2" onClick={handleClearText}>Clear</button>



                <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
                    <h1>Your text summary</h1>
                    <p>{text.split(" ").length} words and {text.length} characters</p>
                    <p>{0.008 *text.split(" ").length} minutes read</p>
                    <h1>Preview</h1>
                    <p>{text.length>0?text:"Enter something in the above textboxt to preview it here"}</p>
                </div>
         
        </div>

    )
}
