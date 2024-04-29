import React from 'react'
import Colaborador from '../Colaborador/Colaborador'
import hexToRgba from 'hex-to-rgba';
import './Equipo.css'

function Equipo({ equipo, colaboradores, eliminarColaborador, actualizarColor }) {

  const obj = {
    backgroundColor:hexToRgba(equipo.colorPrimario, 0.75)
  }

  return (
    <>
      {colaboradores.length > 0 &&
        <section className='equipo' style={obj}>
          <input type="color" className='input-color' value={equipo.colorPrimario} onChange={(e)=>{
            actualizarColor(e.target.value, equipo.id)
          }}/>
          <h3 style={{ borderColor: equipo.colorPrimario }}>{equipo.titulo}</h3>
          <div className="colaboradores">
            {
              colaboradores.map((colaborador, index) => <Colaborador colaborador={colaborador} key={index} colorPrimario={equipo.colorPrimario}
                eliminarColaborador={eliminarColaborador} />)
            }
          </div>
        </section>}
    </>
  )





}

export default Equipo