const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>  
      {/* props es un objeto por eso usa el .name */}
    </div>
  )
}

const App = () => {
  const name = 'Peter';
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='George' age={26+10}/>
      <Hello name={name} age={age}/>
      <Hello name='Tomas'/>
    </div>
  )
}

// Caso = Si no queremos agregar todo en un elemento div 

// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     <>
//       <h1>Greetings</h1>
//       <Hello name='Maya' age={26 + 10} />
//       <Hello name={name} age={age} />
//       <Footer />
//     </>
//   )
// }

// Con envolver los elementos con un div sin nombre

export default App