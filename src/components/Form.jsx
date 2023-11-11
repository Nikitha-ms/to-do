import { useState } from "react";

const Form = ({ taskList, setTaskList }) => {
  const [textVal, setTextVal] = useState("");

  const handleChange = (e) => {
    setTextVal(e.target.value);
  };

  const handleAdd = (e) => {
    if(textVal.trim() === ""){
      alert("no txt")
      return
    }
    setTaskList([...taskList, textVal.trim()]);
    setTextVal("");
  };

  return (
    <div className="flex-row">
      <input
        name="taskName"
        type="text"
        className="input"
        placeholder="add item..."
        value={textVal}
        onChange={handleChange}
      />
      <button className="btn btn-add" onClick={handleAdd}>
        add
      </button>
    </div>
  );
};

export default Form;
