import React, { useRef} from "react";
import { useDispatch } from "react-redux";
import { insertCricketer } from "../slices/cricketers";

export default function AddCricketer() {
    const cricketerId = useRef();
    const cricketerName = useRef();
    const cricketerRuns = useRef();
  
   const dispatch = useDispatch();

    const saveCricketer = () => {
  
      dispatch(insertCricketer({id:cricketerId.current.value, name:cricketerName.current.value, runs:cricketerRuns.current.value}))
      .unwrap().then(data => {
        console.log(data);
      })
      .catch(e => {
        console.log(e);
      });
  
      window.location.reload(true);

      cricketerId.current.value = 0;
      cricketerName.current.value = "";
      cricketerRuns.current.value = 0;
    };
  
  return (
    <div className="App">
      <form className="was-validated">
        <div className="mb-3">
          <label htmlFor="cricketerId">CricketerID:</label>
          <input
            type="number"
            className="form-control"
            id="cricketerId"
            placeholder="Enter CricketerID"
            ref={cricketerId}
            required
          />
          <div className="valid-feedback">Valid.</div>
          <div className="invalid-feedback">Empty value</div>
        </div>

        <div className="mb-3">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name"
            ref={cricketerName}
            required
          />
          <div className="valid-feedback">Valid.</div>
          <div className="invalid-feedback">Empty value</div>
        </div>

        <div className="mb-3">
          <label htmlFor="runs">Runs:</label>
          <input
            type="number"
            className="form-control"
            id="runs"
            placeholder="Enter runs"
            ref={cricketerRuns}
            required
          />
          <div className="valid-feedback">Valid.</div>
          <div className="invalid-feedback">Empty value</div>
        </div>

        <button type="button" className="btn btn-primary" onClick={saveCricketer}>
          Add
        </button>
      </form>
      </div>
  )
}