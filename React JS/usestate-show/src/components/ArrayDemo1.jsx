import React, { useState } from "react";
export default function ArrayDemo1() {
  const [babyNames, setBabyNames] = useState(["Akshay", "Aarav", "Manisha"]);
  return (
    <div className="App">
      {" "}
      <form className="was-validated">
        {" "}
        <div className="mb-3">
          {" "}
          <label htmlFor="name">Name:</label>{" "}
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Enter a name"
            name="name"
            required
          />{" "}
          <div className="valid-feedback">Valid.</div>{" "}
          <div className="invalid-feedback">Empty value</div>{" "}
        </div>{" "}
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            setBabyNames(
              babyNames.concat(document.getElementById("name").value)
            );
          }}
       >
       
          Add
        </button>
      </form>
      <table className="table table-striped">
       
        <thead>
         
          <tr>
            {" "}
            <th>Baby Names</th>{" "}
          </tr>{" "}
        </thead>{" "}
        <tbody>
          {" "}
          {babyNames.map((babyName, index) => {
            return (
              <tr key={index}>
                {" "}
                <td>{babyName}</td>{" "}
              </tr>
            );
          })}{" "}
        </tbody>{" "}
      </table>{" "}
    </div>
  );
}
