import "./App.css";

import { useState, useEffect, useRef } from "react";

import Message from "./components/message";

//import Car from './components/Car';
// import Parent from "./components/Parent";
// import TodoCount from "./components/TodoCount";
// import TodoList from "./components/TodoList";
// import AddTodo from "./components/AddTodo";
// import ParentComponent from "./components/ParentComponent";
function App() {

  // const [todos, setTodos] = useState(["Wake up", "Eat", "Work"]);
  // useEffect(()=>{

  //   console.log("render! ...from App!");

  //   return () => console.log("unmounting...from App!");

  // })

  // const [random, setRandom] = useState(Math.random());
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  const focusInput = () => {
    inputElement.current.focus();
  }

  // useEffect(()=>{
  //   console.log(count.current)
  //   count.current += 1;
  // }
  // )

  const inputElement = useRef();

  // const [mount, setMount] = useState(true);

  // const toggle = () => setMount(!mount);

  // const reRender = () => setRandom(Math.random());

  return (

    // <div className="App">
    //   <form class="was-validated">
    //     <div class="mb-3">
    //       <label htmlFor="num">Number:</label>
    //       <input
    //         type="number"
    //         class="form-control"
    //         id="num"
    //         placeholder="Enter a number"
    //         name="num"
    //         value={count}
    //         readOnly
    //         required
    //       />
    //       <div class="valid-feedback">Valid.</div>
    //       <div class="invalid-feedback">Empty value</div>
    //     </div>
    //     <button
    //       type="button"
    //       class="btn btn-primary"
    //       onClick={() =>
    //         setTimeout(() => {
    //           setCount(cnt=>cnt + 1);
    //         }, 3000)
    //       }
    //     >Increment</button>
    //   </form>
    // </div>
    // <Parent/>
// {/* <div className="App"> */}
//     {/* <TodoCount todos={todos}/>
//     <TodoList todos={todos}/>
//     <AddTodo setTodos={setTodos}/> */}

    {/* <ParentComponent/>

//     <button onClick={reRender}>Re-render</button>
//     <button onClick={toggle}>Show/ Hide Message</button>
//     {mount&&<Message/>} */}

// {/* </div> */}

 <inpt type = "text" ref = {inputElement}/>
 <button onClick={focusInput}>Focus Input</button>
  );

}

export default App;