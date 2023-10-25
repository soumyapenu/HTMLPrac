import "./App.css";
import { useState } from "react";
import ArrayDemo1 from "./components/ArrayDemo1";
import ObjectDemo from "./components/ObjectDemo";

function App() {
  const [count, setCount] = useState(0);  
  return (
    // <div className="App">
    //   <form class="was-validated">
    //     <div class="mb-3">
    //       <label htmlFor="num">Number:</label>
    //       <input
    //         type="number"
    //         class="form-control"
    //         id="num"
    //         placeholder="Enter a Number"
    //         name="num"
    //         value={count}
    //         readonly
    //         required
    //       />
    //     </div>
    //     <div class="valid-feedack">Valid.</div>
    //     <div class="invalid-feedback">Empty value (0 - 100 expected)</div>
    //     <button
    //       type="button"
    //       class="btn btn-primary"
    //       onClick={() => setTimeout(() => setCount((prev) => prev + 1), 3000)}
    //     >
    //       Increment
    //     </button>
    //   </form>
    // </div>
    <ObjectDemo/> 
  );
}
export default App;
