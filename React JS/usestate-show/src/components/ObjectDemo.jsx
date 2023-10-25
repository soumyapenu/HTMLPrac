import React, { useState } from 'react'

export default function ObjectDemo(){
    const[employee, setEmployee] = useState({
        empId:"1",
        name:"abc",
        salary:100000
    });

    const updateSalary = () => {
        const sal = document.getElementById("salary").value;
        setEmployee(previousSate=>{
            return{...previousSate, salary:sal}
        }
            );
        console.log(employee)
    }
    return(
        <div className="App">
            <ul>
                <li>{employee.empId}</li>
                <li>{employee.name}</li>
                <li>{employee.salary}</li>
            </ul>
            <form className="was-validated">

<div className="mb-3">

<label htmlFor="salary">Salary:</label>

<input

type="number"

className="form-control"

id="salary"

placeholder="Enter salary"

name="salary"
required
/>




<div className="valid-feedback">Valid.</div>

<div className="invalid-feedback">Empty value</div>

</div>

 <button

type="button"

 className="btn btn-primary"

onClick={updateSalary}

 >

Update

</button>

</form>
           
