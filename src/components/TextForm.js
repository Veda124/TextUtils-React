import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercar Clicked"+ text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success ")

        
    }
    const handleLoClick = ()=>{
      let newText1 = text.toLowerCase();
      setText(newText1);
      props.showAlert("Converted to Lowercase", "success ")
  }
  const handleClearClick = ()=>{
    setText("");
    props.showAlert("Cleared", "success ")

}

const handleSpaceClick = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Extra spaces removed", "success ")

}
    const [text, setText] = useState('Enter Text Here');
    const handleOnChange= (event)=>{
        console.log("change click hua")
        setText(event.target.value);
    }
    return (
   <>
      <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
  <h1 >{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#032a42':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" value={text} onChange={handleOnChange} rows={8} />
 
  </div>
 <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
 <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
 <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
 <button className="btn btn-primary mx-2" onClick={handleSpaceClick}>Remove Extra Space</button>
</div>
<div className="conatainer my-3" style={{color: props.mode==='dark'?'white':'black'}}>
  <h2>Your Text Summary</h2>
 
  <p>{text.split(" ").length} words and {text.length} characters</p>
<p>😁 You just need {0.008 * text.split(" ").length} Minutes to read</p>
</div>
</>
   
  )
}
