import React,{useState} from 'react'

const Text = (props) => {
    const handleup = ()=>{
        setText(text.toUpperCase())
    }
    const handlelo = ()=>{
        setText(text.toLowerCase())
    }
    const handleoncg = (event) =>{
      setText(event.target.value)
    }
    const [text,setText] = useState("")
  return (
    <>
   <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.texts}</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8 " value={text} onChange={handleoncg} style={{backgroundColor : props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}}></textarea>
  </div>
  <button className="my-2 btn btn-success" onClick={handleup}>Upper Case</button>
  <button  className="mx-2 btn btn-success" onClick={handlelo}>Lower Case</button>
  <h4 >Number of  characters used are {text.length}</h4>
  <h4 className='my-2'>Number of words used are {text.split(" ").length-1}</h4>
  <h4 className='my-2'>Time to read wil be  {0.008 * text.split(" ").length} <strong>Minutes</strong></h4>
  <h2>Preview</h2>
  <p>{text.length > 0 ? text:"Enter something in the above text box to get a preview here"}</p>
  </> 
  )
}

export default Text