import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import './App.css'
import Header from './components/Header/Header'
import Form from './components/form/Form'
import MyOrg from './components/Myorg/MyOrg'
import Equipo from './components/Equipo/Equipo'
import Footer from './components/Footer/Footer'


function App() {

  const [mostrarFormulario, setMostrarFormulario] = useState(false)
  const [colaboradores, setColaboradores] = useState([{
    id: uuid(),
    nombre:'seba',
    puesto:'junior python',
    foto:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Canis_lupus_265b.jpg/800px-Canis_lupus_265b.jpg',
    equipo:'Programacion'
  }])
  const [equipos, setEquipos] = useState([
    {
      id: uuid(),
      titulo: 'Programacion',
      colorPrimario: '#57c278',
      colorSecundario: '#d9f7e9'
    },
    {
      id: uuid(),
      titulo: 'Front End',
      colorPrimario: '#82cffa',
      colorSecundario: '#e8f8ff'
    },
    {
      id: uuid(),
      titulo: 'Data Science',
      colorPrimario: '#a6d157',
      colorSecundario: '#f0f8e2'
    },
    {
      id: uuid(),
      titulo: 'Devops',
      colorPrimario: '#e06b69',
      colorSecundario: '#fde7e8'
    },
    {
      id: uuid(),
      titulo: 'UX y Diseño',
      colorPrimario: '#d86ebf',
      colorSecundario: '#fae9f5'
    },
    {
      id: uuid(),
      titulo: 'Movil',
      colorPrimario: '#ffba05',
      colorSecundario: '#fff5d9'
    },
    {
      id: uuid(),
      titulo: 'Innovacion y Gestion',
      colorPrimario: '#ff8a29',
      colorSecundario: '#ffeedf'
    }
  ])

  // control del formulario
  const toggleFormulario = () => {
    setMostrarFormulario(!mostrarFormulario)
  }

  // actualizar color
  const actualizarColor = (color, id)=>{
    const equipoActualizado = equipos.map((equipo)=>{
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })
    setEquipos(equipoActualizado)
  }


  // registro de colaborador
  const registroColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }


  // eliminar colaborador
  const eliminarColaborador = (id) => {
    const updateColaboradores = colaboradores.filter((colaborador)=>colaborador.id !== id)
    setColaboradores(updateColaboradores)
  }


  // crear equipo
  const crearEquipo = (nuevoEquipo)=>{
    setEquipos([...equipos, nuevoEquipo])
  }

  return (
    <>
      <Header></Header>

      {mostrarFormulario && <Form equipos={equipos.map((equipo) => equipo.titulo)} registroColaborador={registroColaborador} crearEquipo={crearEquipo}></Form>}

      <MyOrg toggleFormulario={toggleFormulario}></MyOrg>
      {
        equipos.map((equipo, index) => <Equipo
          equipo={equipo}
          key={index}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador} 
          actualizarColor={actualizarColor}/>
        )
      }

      <Footer></Footer>
    </>
  )
}

export default App
