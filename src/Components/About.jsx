import React,{useState} from 'react'

const About = (props) => {
  // const [mystyle,setMystyle] = useState({
  //   color:'black',
  //   backgroundColor:'white'
  // })
  // const [btn,setBtn] = useState("Enable Dark mode")
  // const Toggalstyle  = ()=>{
  //   if (mystyle.color == 'white'){
  //     setMystyle({
  //       color:'black',
  //   backgroundColor:'white'
  //     })
  //     setBtn("Enable Dark mode")
  //   }
  //   else {
  //     setMystyle({
  //       color:'white',
  //   backgroundColor:'black',
  //   border:'1px solid white' 
  //     })
  //     setBtn("Enable Light mode")
  //   }
  // }

  return (
    <div>
        <div className="accordion" id="accordionExample" style={{backgroundColor : props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} >
  <div className="accordion-item" >
    <h2 className="accordion-header">
      <button  className="accordion-button"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor : props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}}>
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor : props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button style={{backgroundColor : props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor : props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button style={{backgroundColor : props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor : props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} >
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
<button className="btn btn-success my-2 mx-2"></button>
<button className="btn btn-success my-2 mx-2"></button>
    </div>
  )
}

export default About