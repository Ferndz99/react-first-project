import React from 'react'
import './Form.css'
import InputTexto from '../Input/InputTexto'
import SelectOptions from '../SelectOptions/SelectOptions'
import Boton from '../Boton/Boton'

function Form() {

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log('enviocsdf')
  }


  return (
    <section className='formulario'>
        <form onSubmit={handleSubmit}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <InputTexto labelName='Nombre' required/>
            <InputTexto labelName='Puesto' required/>
            <InputTexto labelName='Foto' required/>
            <SelectOptions />
            <Boton>Crear</Boton>
        </form>
    </section>
  )
}

export default Form