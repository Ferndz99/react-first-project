import React from 'react'
import './SelectOptions.css'

function SelectOptions() {

    const options = [
        'Programacion',
        'Front End',
        'Data Science',
        'Devops',
        'UX y Diseño',
        'Movil',
        'Innovacion y Gestion'
    ]

    return (
        <div className='option-list'>
            <label htmlFor="">Equipos</label>
            <select>
                {
                    options.map((onlyOption, index)=>{
                        return <option key={index}>{onlyOption}</option>
                    })
                }
            </select>
        </div>
    )
}

export default SelectOptions