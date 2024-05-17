import "./App.css";
import { useCallback, useMemo, useState } from "react";
import Todos from "./Todos";

// function App() {
//   const [count, setCount] = useState(0);
//   const [todos, setTodos] = useState([]);

//   const increment = () => {
//     setCount((c) => c + 1);
//   };

//   //To fix this, we can use the useCallback hook to prevent
//   // the function from being recreated unless necessary.
//   const addTodo = useCallback(() => {
//     setTodos((prevState) => [...prevState, "New Todo"]);
//   }, [todos]);

//   return (
//     <>
//       <Todos todos={todos} addTodo={addTodo} />
//       <hr />
//       <div>
//         Count: {count}
//         <button onClick={increment}>+</button>
//       </div>
//     </>
//   );
// }

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = useMemo(() => {

    return expensiveCalculation(count);
  }, [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
};

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  console.log("done");
  return num;
};

export default App;
