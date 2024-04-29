import {React} from 'react'
import './InputTexto.css'

function InputTexto(props) {

  return (
    <div className='input-box'>
        <label htmlFor={props.labelName}>{props.labelName}</label>
        <input type="text" id={props.labelName} required={props.required} value={props.valor} onChange={(e)=>props.setNombre(e.target.value)}/>
    </div>
  )
}

export default InputTexto