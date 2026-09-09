// import React, { useState } from "react";

// const App = () => {
//   const [todos, setTodos] = useState([
//     {
//       id: 1,
//       text: "Learn React",
//       completed: false
//     },
//     {
//       id: 2,
//       text: "Practice useState",
//       completed: false
//     }
//   ]);

//   // 1. Accept the id of the specific todo being completed
//   function complete(id) {
//     setTodos(
//       todos.map((todo) => {
//         // 2. Compare the current todo's id to the passed-in id
//         if (todo.id === id) {
//           return {
//             ...todo,
//             completed: true
//           };
//         }

//         return todo;
//       })
//     );
//   }

//   return (
//     <div>
//       <h1>My Todos</h1>

//       {todos.map((todo) => (
//         <div key={todo.id}>
//           <p>{todo.text}</p>
//           <p>Completed: {todo.completed ? "Yes" : "No"}</p>
          
//           {/* 3. Move the button inside the loop and pass the todo.id */}
//           <button onClick={() => complete(todo.id)}>
//             Done
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default App;




// ============================================================
// useState — ALL CONCEPTS IN ONE FILE
// Every important useState idea, explained with comments.
// Read top to bottom, in order.
// ============================================================

import { useState } from "react";

function App() {
  // ----------------------------------------------------------
  // 1. BASIC useState — NUMBER
  // Syntax: const [value, setValue] = useState(initialValue)
  // "count" = current value, "setCount" = function to update it
  // ----------------------------------------------------------
  const [count, setCount] = useState(0);

  // ----------------------------------------------------------
  // 2. MULTIPLE STATE VARIABLES
  // Each state is completely independent of the others.
  // ----------------------------------------------------------
  const [name, setName] = useState("Durgesh");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ----------------------------------------------------------
  // 3. STATE HOLDING AN OBJECT
  // ----------------------------------------------------------
  const [user, setUser] = useState({
    name: "Durgesh",
    city: "Nashik",
  });

  // ----------------------------------------------------------
  // 4. STATE HOLDING AN ARRAY OF OBJECTS
  // This is the most common real-world pattern (like a Todo list)
  // ----------------------------------------------------------
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Practice useState", completed: false },
  ]);

  // ----------------------------------------------------------
  // 5. STATE FOR A CONTROLLED INPUT
  // The <input> box's value is fully controlled by this state
  // ----------------------------------------------------------
  const [input, setInput] = useState("");

  // ============================================================
  // FUNCTIONS — every core useState pattern lives here
  // ============================================================

  // --- 6. SIMPLE UPDATE ---
  // WRONG way (never do this): count = count + 1
  // RIGHT way: always call the setter function
  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  // --- 7. FUNCTIONAL UPDATE ---
  // Use this style when the new value depends on the OLD value,
  // especially if you're updating it multiple times in a row.
  // "prevCount" is just a name we chose — not a special keyword.
  function increaseByThree() {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    // Result: count goes up by exactly 3, reliably.
  }

  // --- 8. RESET STATE BACK TO INITIAL VALUE ---
  function resetCount() {
    setCount(0);
  }

  // --- 9. TOGGLING A BOOLEAN ---
  function toggleLogin() {
    setIsLoggedIn((prev) => !prev);
    // !prev flips true -> false, or false -> true
  }

  // --- 10. UPDATING AN OBJECT IN STATE ---
  // WRONG: user.city = "Pune"   (never mutate state directly)
  // RIGHT: copy old object with ...user, then overwrite one field
  function changeCity() {
    setUser({
      ...user, // copy everything that was already in "user"
      city: "Pune", // overwrite just this one field
    });
  }

  // --- 11. ADDING AN ITEM TO AN ARRAY ---
  // WRONG: todos.push(newTodo)   (never mutate arrays directly)
  // RIGHT: spread the old array into a new array, add the new item
  function addTodo() {
    if (input.trim() === "") {
      return; // guard clause: don't add empty todos
    }

    const newTodo = {
      id: Date.now(), // simple unique id based on current time
      text: input,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInput(""); // clear the input box after adding
  }

  // --- 12. UPDATING ONE ITEM INSIDE AN ARRAY OF OBJECTS ---
  // Use map() to go through every item.
  // If it's the one we want, return a NEW copied object with changes.
  // Otherwise, return the item unchanged.
  function completeTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: true };
        }
        return todo;
      })
    );
  }

  // --- 13. DELETING AN ITEM FROM AN ARRAY ---
  // Use filter() to keep only the items that pass the test.
  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  // --- 14. CLEARING AN ARRAY ---
  function clearTodos() {
    setTodos([]); // empty array, NOT [""] or ["No Todos"]
  }

  // --- 15. HANDLING INPUT CHANGE (Controlled Input) ---
  function handleInputChange(e) {
    setInput(e.target.value);
    // e.target.value = whatever is currently typed in the box
  }

  // ============================================================
  // JSX — what actually shows on screen
  // ============================================================
  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h1>useState — All Concepts Demo</h1>

      {/* ---------- NUMBER STATE ---------- */}
      <section>
        <h2>1. Number State</h2>
        <p>Count: {count}</p>
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-1</button>
        <button onClick={increaseByThree}>+3 (functional update)</button>
        <button onClick={resetCount}>Reset</button>
      </section>

      {/* ---------- STRING + BOOLEAN STATE ---------- */}
      <section>
        <h2>2. String + Boolean State</h2>
        <p>Name: {name}</p>
        <p>Status: {isLoggedIn ? "Logged In" : "Logged Out"}</p>
        <button onClick={toggleLogin}>Toggle Login</button>
      </section>

      {/* ---------- OBJECT STATE ---------- */}
      <section>
        <h2>3. Object State</h2>
        <p>
          {user.name} lives in {user.city}
        </p>
        <button onClick={changeCity}>Move to Pune</button>
      </section>

      {/* ---------- CONTROLLED INPUT ---------- */}
      <section>
        <h2>4. Controlled Input</h2>
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Type a todo..."
        />
        <button onClick={addTodo}>Add Todo</button>
      </section>

      {/* ---------- ARRAY OF OBJECTS STATE ---------- */}
      <section>
        <h2>5. Array of Objects (Todo List)</h2>
        <button onClick={clearTodos}>Clear All</button>

        {/* map() renders one element per array item.
            "key" must be unique for each item — we use todo.id */}
        {todos.map((todo) => (
          <p key={todo.id}>
            {todo.text} — {todo.completed ? "Done ✅" : "Pending ❌"}
            <button onClick={() => completeTodo(todo.id)}>Complete</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </p>
        ))}
      </section>
    </div>
  );
}

export default App;

// ============================================================
// QUICK REFERENCE — the 6 golden rules
// ============================================================
// 1. Never change state directly. Always use the setter function.
// 2. Objects: setUser({ ...user, field: newValue })
// 3. Add to array: setTodos([...todos, newItem])
// 4. Update one array item: setTodos(todos.map(...))
// 5. Remove an array item: setTodos(todos.filter(...))
// 6. If new state depends on old state: setState(prev => ...)
// ============================================================
