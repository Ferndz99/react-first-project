import {React, useState} from 'react'
import { v4 as uuid } from 'uuid'
import './Form.css'
import InputTexto from '../Input/InputTexto'
import SelectOptions from '../SelectOptions/SelectOptions'
import Boton from '../Boton/Boton'

function Form(props) {

  const [nombre, setNombre] = useState('')
  const [puesto, setPuesto] = useState('')
  const [foto, setFoto] = useState('')
  const [equipo, setEquipo] = useState('')

  const [titulo, setTitulo] = useState('')
  const [color, setColor] = useState('')

  const handleSubmit = (e)=>{
    e.preventDefault()
    let datos = {
      id:uuid(),
      nombre,
      puesto,
      foto,
      equipo
    }
    props.registroColaborador(datos)
    setNombre('')
    setPuesto('')
    setFoto('')
    setEquipo('')
  }

  const handleEquipoForm =(e)=>{
    e.preventDefault()
    props.crearEquipo({id:uuid(), titulo, colorPrimario:color})
  }


  return (
    <section className='formulario'>
        <form onSubmit={handleSubmit}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <InputTexto labelName='Nombre' required valor={nombre} setNombre={setNombre}/>
            <InputTexto labelName='Puesto' required valor={puesto} setNombre={setPuesto}/>
            <InputTexto labelName='Foto' required valor={foto} setNombre={setFoto}/>
            <SelectOptions valor={equipo} setEquipo={setEquipo} equipos={props.equipos} />
            <Boton>Crear</Boton>
        </form>

        <form onSubmit={handleEquipoForm}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <InputTexto labelName='Titulo' required valor={titulo} setNombre={setTitulo}/>
            <InputTexto labelName='Color' required valor={color} setNombre={setColor}/>
            <Boton>Crear equipo</Boton>
          </form>
    </section>
  )
}

export default Form