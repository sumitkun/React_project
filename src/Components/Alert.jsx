import React, {useState} from 'react'

const Alert = (props) => {
  

    return (
     <div className="alert alert-success alert-dismissible fade show" role='alert'>
     <strong>{props.Alert}</strong>
      <button className="btn btn-close" data-bs-dismiss="alert"  aria-label='Close'></button>
     </div>
      
    );
}

export default Alert
