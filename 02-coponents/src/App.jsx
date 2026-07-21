import React from 'react'
import './App.css';
import Card2 from './components/card'
import Navbar from './components/navbar'

const App = () => {
  return (
    <div>
      <div className="card">
        <h1>Durgesh Hyalij</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis temporibus, error ab iusto rem reiciendis non voluptates odit nostrum, cumque ipsum corrupti culpa quas quasi sed provident, molestias quaerat laborum?
        Obcaecati sed aperiam aliquid perspiciatis, ab ipsum amet, aut quis, quaerat temporibus provident! Asperiores distinctio nostrum pariatur similique repudiandae voluptas, rem temporibus tempora debitis ad sit provident velit ea maxime!
        Esse, facilis reiciendis. Officiis accusamus error explicabo, optio est fuga. Excepturi amet odit necessitatibus perspiciatis, alias temporibus. Sed, fugit amet beatae eum enim repellat magnam labore eveniet, tenetur sequi fuga.
        Ipsa exercitationem eum facere modi, voluptas ad ex dolor! Nam praesentium rem, magnam atque facere vero quisquam dignissimos voluptas a similique doloremque perspiciatis exercitationem ex magni. Et eaque incidunt nulla.
        Quae earum expedita dignissimos odit reprehenderit accusantium officia molestiae numquam dicta eos nesciunt est voluptas nobis veniam, doloribus at labore. Quidem, quia iste nisi laboriosam suscipit non reiciendis asperiores aut.</p>
      </div>

      <div className="card2">
            <Card2/>
            <Card2/>
            <card2/>
            <card2/>
            
      </div>

      <div className="Navbar">
        <Navbar /> 
      </div>

    </div>
  )
}

export default App
