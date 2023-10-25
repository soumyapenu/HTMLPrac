import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddCricketer from "./components/AddCricketer";
import UpdateDeleteCricketer from "./components/UpdateDeleteCricketer";

function App() {
  return (
    <>
    <AddCricketer/>
    <UpdateDeleteCricketer/>
    </>
  );
}

export default App;
