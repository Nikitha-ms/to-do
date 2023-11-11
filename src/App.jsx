import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

const App = () => {
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="container">
      <h1 className="heading">To Do List</h1>
      <Form taskList={taskList} setTaskList={setTaskList} />
      <List taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
};

export default App;
