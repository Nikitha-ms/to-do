import "./App.css";

const App = () => {
  return (
    <div className="container">
      <h1 className="heading">To Do List</h1>
      <div className="flex-row">
        <input type="text" className="input" placeholder="add item..." />
        <button className="btn btn-add">add</button>
      </div>
      <ul className="list">
        <li className="list-item">
          <span className="task">task1</span>
          <div className="flex-row">
            <button className="btn btn-list">edit</button>
            <button className="btn btn-list">delete</button>
          </div>
        </li>
        <li className="list-item">
          <span className="task">task2</span>
          <div className="buttons">
            <button className="btn btn-list">edit</button>
            <button className="btn btn-list">delete</button>
          </div>
        </li>
        <li className="list-item">
          <span className="task">task3</span>
          <div className="buttons">
            <button className="btn btn-list">edit</button>
            <button className="btn btn-list">delete</button>
          </div>
        </li>
        <li className="list-item">
          <span className="task">task4</span>
          <div className="buttons">
            <button className="btn btn-list">edit</button>
            <button className="btn btn-list">delete</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default App;
