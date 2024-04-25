import React from 'react'
import './InputTexto.css'

function InputTexto(props) {
  return (
    <div className='input-box'>
        <label htmlFor="">{props.labelName}</label>
        <input type="text" id='' required={props.required}/>
    </div>
  )
}

export default InputTexto