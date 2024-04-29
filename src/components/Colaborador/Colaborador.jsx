import React from 'react'
import { MdDelete } from "react-icons/md";
import './Colaborador.css'

function Colaborador({colaborador, colorPrimario, eliminarColaborador}) {
  return (
    <div className='colaborador'>
      <MdDelete className='deletebtn' onClick={()=> eliminarColaborador(colaborador.id)}/>
        <div className="encabezado" style={{backgroundColor:colorPrimario}}>
            <img src={colaborador.foto} alt="..." />
        </div>
        <div className="info">
            <h4>{colaborador.nombre}</h4>
            <h5>{colaborador.puesto}</h5>
        </div>
    </div>
  )
}

export default Colaborador