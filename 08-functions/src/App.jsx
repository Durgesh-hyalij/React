// import React from 'react'

// const App = () => {

//   function btnclick(){
//     console.log("hello world");
//   }

//   return (
//     <div>
//         <button onClick={function btnclick(){
//           console.log("hello world");
//   }}>Click Me</button>
//     </div>
//   )
// }

// export default App



// const App = () => {
//   return (
//     <div>
//       <div onMouseDown={function btnclick(){
//         console.log("Hello World");
        
//       }} className='box'>
          
//       </div>
//     </div>
//   )
// }

// export default App


// function a(elem){
//   console.log(elem.target.value)
// }

// const App = () => {
//   return (
//     <div>
//       <input
//         onChange={function (elem) {
//           a(elem)
// }}
//         placeholder="Enter your name here"
//         type="text"
//       />
//     </div>
//   );
// };

// export default App;



const App = () => {
  return (
    <div onMouseMove={function a(elem){
      console.log(elem.screenX);
      
    }} className='box'>
      
    </div>
  )
}

export default App
