import logo from './logo.svg';
import './App.scss';
import React, {lazy} from "react";

const ToDoList = lazy(() => import("./pages/ToDoList"));

function App() {
  return (
    <div className="App">
      <ToDoList/>
    </div>
  );
}

export default App;
