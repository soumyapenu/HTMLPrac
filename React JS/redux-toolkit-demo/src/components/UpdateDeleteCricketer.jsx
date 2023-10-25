import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCricketers, deleteCricketer, updateCricketer
} from "../slices/cricketers";

const UpdateDeleteCricketer = () => {
  
  const cricketers = useSelector(state => state.cricketers);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getCricketers());
  },[]);

  const updateContent = (index) => {
    const myCricketer = {
    id : document.getElementById("id" + index).value,
    name : document.getElementById("name" + index).value,
    runs : document.getElementById("runs" + index).value
    }

    dispatch(updateCricketer({id:myCricketer.id,data:myCricketer})).unwrap()
      .then(response => {
        console.log(response);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const removeCricketer = (id) => {

    dispatch(deleteCricketer(id))
      .then(() => {
        console.log("Deleted")
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="list row">
      <div className="col-md-6">
        <h4>Cricketer Records</h4>

        <form>

          <table border="2" align="center" width="100%">
          <thead>
            <tr>
              <th>Cricketer ID</th>
              <th>Name</th>
              <th>Runs</th>
              <th colSpan={2}>Actions</th>
            </tr>
            </thead>
            <tbody>
            {cricketers.map((cricketer, index) => (
              
                <tr
                  key={index}
                >
                  <td align="left"><input type="text" id={"id" + index} name="id" defaultValue={cricketer.id} readOnly/></td>
                  <td align="left"><input type="text" id={"name" + index} name="name" defaultValue={cricketer.name} /></td>
                  <td align="left"><input type="text" id={"runs" + index} name="runs" defaultValue={cricketer.runs} /></td>
                  <td><button className="btn btn-primary button" type="submit" onClick={() => updateContent(index)}><i className="fa fa-book"></i>Save</button></td>
                  <td>
                    <button className="btn btn-danger button" type="submit" onClick={() => { removeCricketer(cricketer.id) }}><i className="fa fa-trash"></i>Delete</button>
                  </td>
                </tr>
                
              ))
            }
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default UpdateDeleteCricketer;