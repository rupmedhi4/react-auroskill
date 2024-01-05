import React from 'react'
import Navbars from './Navbar'


function App(props){
  return(
   <>
      <Navbars/>
      <h1>This is Functional component</h1>
      <h2>{props.name}</h2>
      <h3>{props.email} </h3>
   </>
  )
}

export default App