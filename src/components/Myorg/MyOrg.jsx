import {React, useState} from 'react'
import './MyOrg.css'

function MyOrg({toggleFormulario}) {
    return (
        <section className='orgSection'>
            <h3 className='title'>Mi Organizacion</h3>
            <img src="/img/botonformulario.png" alt="..." onClick={toggleFormulario}/>
        </section>
    )
}

export default MyOrg