// import React, { useState } from 'react'

// const App = () => {

//   const [num, setnum] = useState(0);
//   const [action, setAction] = useState("None");
//   const [name, setname] = useState("Durgesh");


//   function changeName(){
//     setname("React Learner");
//   }

//   function increase(){
//     setnum(prevNum => prevNum + 1);
//     console.log(num);
//     setAction("increase by one")
//   }

//   function decrease(){
//    if(num <= 0){
//     setnum(0);
//     setAction("Zero")
//     }else{
//       setnum(prevNum => prevNum - 1);
//     setAction("Decrease by one")
//     }
//   }

//   function plus_five(){
//     setnum(prevNum => prevNum + 5);
//     setAction("increase by five")
//   }

//   function plus_ten(){
//     setnum(prevNum => prevNum + 10);
//     setAction("increase by Ten")
//   }

//   function clear(){
//     setnum(0);
//     setAction("Clear")
//   }

//   return (
//     <div>
//             <h1>{num}</h1>
//             <h1>{action}</h1>
//             <h1>{name}</h1>
//             <button onClick={increase}>Increase</button>    
//             <button onClick={decrease}>Decrease</button>    
//             <button onClick={plus_five}>plus_five</button>    
//             <button onClick={plus_ten}>plus_ten</button>   
//             <button onClick={changeName}>Name Change</button>   
//             <button onClick={clear}>Clear</button>    
//     </div>
//   )
// }

// export default App




// ###  Adding into the Objects in usestate
// import React, { useState } from 'react'


// const App = () => {

//   const [user, setuser] = useState({
//     name : "Durgesh",
//     roll : 22,
//     college : "SNJB",
//     city : "Nashik",
//     country : "India"
//   });


//   function cityChange(){
//     setuser({
//     ...user,
//     city : "Pune"
//   })
//   }

//   function countryChange(){
//     setuser({
//       ...user,
//       country : "USA"
//     })
//   }

//   function nameChange(){
//     setuser({
//       ...user,
//       name : "Gaurav"
//     })
//   }

//   return (
//     <div>
//       <h1>{user.name}</h1>
//       <h1 >{user.city}</h1>
//       <h1 >{user.country}</h1>
//       <button onClick={nameChange} >Change Name</button>
//       <button><p onClick={cityChange} >Change city</p></button>
//       <button onClick={countryChange} >Change country</button>
      
//     </div>
//   )
// }

// export default App



// ###  Arrays in useState 

import React, { useState } from 'react'


const App = () => {
  const [todos, settodos] = useState([
    "playing",
    "Studying",
    "Dancing"
  ]);

  function addtodo(){
    settodos([
      ...todos,
      "study"
    ])
  }

  function cleartodos(){
    settodos([ "No Todos"
    ])
  }

  return (
    <div>
      <h1>My Todos </h1>

      {todos.map((todo) => ( <p index="todo" >{todo} </p>))}

      <button onClick={addtodo}>Add Todo</button>
      <button onClick={cleartodos}>clear</button>
    </div>
  )
}

export default App


