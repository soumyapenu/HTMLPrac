import React from "react";

import { useState } from "react";

export default function Cricketer() {
  const [cricketer, setCricketer] = useState({
    cricketerId: 0,
    name: "",
    runs: 0,
  });

  const [cricketers, setCricketers] = useState([]);
  const [name, setName] = useState("");

  const cricketerId = useRef();
  const cricketerName = useRef();
  const cricketerRuns = useRef();

  const [update,setUpdate] = useState(false);


  const handleChange = (event) => {
    const { name, value } = event.target;

    setCricketer({ ...cricketer, [name]: value });
  };

  const addToArray = () => {
    const cricketer = {
        cricketerId: cricketerId.current.value,
        cricketerId: cricketerName.current.value,
        cricketerId: cricketerRuns.current.value
      }

      dispatch({type:"ADD", cricket:cricketer})

    // setCricketers(cricketers.concat(cricketer));
  };

  const changeName = (e) => {
    setName(e.target.value);
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
            name="cricketerId"
            onChange={handleChange}
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
            name="name"
            onChange={handleChange}
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
            name="runs"
            onChange={handleChange}
            required
          />
          <div className="valid-feedback">Valid.</div>
          <div className="invalid-feedback">Empty value</div>
        </div>
        <button type="button" className="btn btn-primary" onClick={addToArray}>
          Add
        </button>
      </form>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="filtered"
          placeholder="Search.."
          name="filtered"
          onChange={changeName}
          required
        />
        <div className="valid-feedback">Valid.</div>
        <div className="invalid-feedback">Empty value</div>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Cricketer ID</th>
            <th>Name</th>
            <th>Runs</th>
          </tr>
        </thead>
        <tbody>
          {cricketers
            .filter((cric) => {
              return cric.name.includes(name);
            })
            .map((cric, index) => {
              return (
                <tr key={index}>
                  <td>{cric.cricketerId}</td>
                  <td>{cric.name}</td>
                  <td>{cric.runs}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
