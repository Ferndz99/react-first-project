import React from 'react'
import './SelectOptions.css'

function SelectOptions(props) {

    return (
        <div className='option-list'>
            <label htmlFor="">Equipos</label>
            <select value={props.valor} onChange={(e)=> props.setEquipo(e.target.value)}>
                <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
                {
                    props.equipos.map((equipo, index)=>{
                        return <option key={index} value={equipo}>{equipo}</option>
                    })
                }
            </select>
        </div>
    )
}

export default SelectOptions