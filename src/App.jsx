import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Form from './components/form/Form'
import MyOrg from './components/Myorg/MyOrg'


function App() {

  const [mostrarFormulario, setMostrarFormulario] = useState(true)

  const toggleFormulario = ()=>{
    setMostrarFormulario(!mostrarFormulario)
  }

  return (
    <>
      <Header></Header>
      {mostrarFormulario && <Form></Form>}
      <MyOrg toggleFormulario={toggleFormulario}></MyOrg>
    </>
  )
}

export default App
